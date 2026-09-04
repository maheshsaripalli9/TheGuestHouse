/**
 * Location menu page — The Guest House
 *
 * One shared menu dataset, rendered per restaurant. Services are tabs, courses
 * are a sticky rail that jumps and tracks the scroll, and the list is set as a
 * printed menu rather than a column of photo cards — which is what made the
 * old single page six thousand pixels long.
 *
 * Prices live in the data and feed nothing on this page; the printed menus
 * don't show them either.
 */

import { MENU_ITEMS, MENU_CATEGORIES, MENU_SERVICES, DIETARY_TAGS } from '../data/menu.js';
import { LOCATIONS } from '../data/locations.js';
import { refreshReveal } from './reveal.js';

const courseLabel = (id) => MENU_CATEGORIES.find((c) => c.id === id)?.label || id;

export function initMenuPage() {
  const root = document.getElementById('menuRoot');
  if (!root) return;

  const location = LOCATIONS.find((l) => l.id === root.dataset.location);
  if (!location) return;

  const services = MENU_SERVICES.filter((s) => location.services.includes(s.id));
  let activeService = services[0].id;
  let activeDiet = 'all';
  let query = '';
  let showPrices = false;

  // ---- shell -------------------------------------------------------------

  root.innerHTML = `
    <div class="menu-switcher" role="navigation" aria-label="Menus at our other restaurants">
      <span class="menu-switcher-label">Viewing</span>
      ${LOCATIONS.map(
        (l) =>
          `<a href="${l.menuPath}" class="menu-switcher-link ${l.id === location.id ? 'active' : ''}"
              ${l.id === location.id ? 'aria-current="page"' : ''}>${l.city}</a>`
      ).join('')}
    </div>

    <div class="menu-tabs" role="tablist" aria-label="Menu service">
      ${services
        .map(
          (s) => `
        <button type="button" role="tab" id="tab-${s.id}" class="menu-tab ${s.id === activeService ? 'active' : ''}"
                aria-selected="${s.id === activeService}" aria-controls="panel-${s.id}" data-service="${s.id}">
          ${s.label}
        </button>`
        )
        .join('')}
    </div>

    <div class="menu-toolbar">
      <div class="menu-search">
        <label class="visually-hidden" for="menuSearch">Search this menu</label>
        <input type="search" id="menuSearch" class="menu-search-input" placeholder="Search dishes, ingredients…"
               autocomplete="off" />
      </div>
      <div class="dietary-strip" id="dietaryStrip" role="group" aria-label="Filter by diet">
        ${DIETARY_TAGS.map(
          (d) => `<button type="button" class="dietary-pill ${d.id === activeDiet ? 'active' : ''}"
                    data-diet="${d.id}" aria-pressed="${d.id === activeDiet}">${d.label}</button>`
        ).join('')}
      </div>
    </div>

    <nav class="course-rail" id="courseRail" aria-label="Jump to a course"></nav>

    <div class="menu-panel" id="menuPanel" role="tabpanel"></div>
  `;

  const panel = root.querySelector('#menuPanel');
  const rail = root.querySelector('#courseRail');
  const searchInput = root.querySelector('#menuSearch');

  // ---- render ------------------------------------------------------------

  function itemsFor(courseId) {
    const q = query.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (item.category !== courseId) return false;
      // Items without a `locations` list are served everywhere.
      if (item.locations && !item.locations.includes(location.id)) return false;
      if (activeDiet !== 'all' && !item.dietary.includes(activeDiet)) return false;
      if (q && !`${item.name} ${item.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  function render() {
    const service = services.find((s) => s.id === activeService);
    showPrices = Boolean(service.showPrices);
    const courses = service.courses
      .map((id) => ({ id, label: courseLabel(id), items: itemsFor(id) }))
      .filter((c) => c.items.length);

    panel.id = `panel-${service.id}`;
    panel.setAttribute('aria-labelledby', `tab-${service.id}`);

    if (!courses.length) {
      rail.innerHTML = '';
      rail.hidden = true;
      panel.innerHTML = `
        <p class="menu-empty">
          Nothing on the ${service.label.toLowerCase()} menu matches that.
          <button type="button" class="link-button" id="menuReset">Clear the filters</button>
        </p>`;
      panel.querySelector('#menuReset').addEventListener('click', reset);
      return;
    }

    rail.hidden = false;
    rail.innerHTML = courses
      .map(
        (c, i) =>
          `<a href="#course-${c.id}" class="course-rail-link ${i === 0 ? 'active' : ''}" data-course="${c.id}">
             ${c.label}<span class="course-rail-count">${c.items.length}</span>
           </a>`
      )
      .join('');

    panel.innerHTML = courses
      .map(
        (course) => `
      <section class="course" id="course-${course.id}" aria-labelledby="course-${course.id}-title">
        <h2 class="course-title" id="course-${course.id}-title">${course.label}</h2>
        <ul class="course-items">
          ${course.items.map(renderItem).join('')}
        </ul>
      </section>`
      )
      .join('');

    trackCourses();
    refreshReveal();
  }

  function renderItem(item) {
    const tags = item.dietary.length
      ? `<span class="dish-tags">${item.dietary.map((d) => `<span class="dish-tag">${d}</span>`).join('')}</span>`
      : '';
    const price = showPrices && item.price ? `<span class="dish-price">${item.price}</span>` : '';
    const desc = item.description ? `<p class="dish-desc">${item.description}</p>` : '';

    return `
      <li class="dish">
        <h3 class="dish-name">${item.name}${tags}${price}</h3>
        ${desc}
      </li>`;
  }

  // ---- course rail tracking ---------------------------------------------

  let trackingScroll = false;
  let rafId = null;

  /**
   * Scroll the rail horizontally to reveal the active course.
   *
   * This sets rail.scrollLeft rather than calling scrollIntoView(), which
   * walks up to every scrollable ancestor including the document: scrolling
   * the page moved the rail, which moved the page, which re-ran this, and the
   * page pinned itself at one course and could not be scrolled past it.
   */
  function keepInRail(link) {
    const railBox = rail.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    const pad = 16;
    if (linkBox.left < railBox.left + pad) {
      rail.scrollLeft += linkBox.left - railBox.left - pad;
    } else if (linkBox.right > railBox.right - pad) {
      rail.scrollLeft += linkBox.right - railBox.right + pad;
    }
  }

  /** The active course is the last one whose top has passed under the rail. */
  function updateActiveCourse() {
    const sections = [...panel.querySelectorAll('.course')];
    if (!sections.length) return;

    // Measure from the chrome's heights, not the rail's live position, so this
    // stays correct even if the sticky rail is ever unstuck.
    const headerHeight = document.querySelector('.header-haute')?.offsetHeight || 84;
    const line = headerHeight + rail.offsetHeight + 24;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) active = section;
    }

    const id = active.id.replace('course-', '');
    rail.querySelectorAll('.course-rail-link').forEach((link) => {
      const on = link.dataset.course === id;
      if (on !== link.classList.contains('active')) link.classList.toggle('active', on);
      if (on) keepInRail(link);
    });
  }

  function onScroll() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      updateActiveCourse();
    });
  }

  function trackCourses() {
    if (!trackingScroll) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      trackingScroll = true;
    }
    updateActiveCourse();
  }

  // ---- events ------------------------------------------------------------

  function reset() {
    query = '';
    activeDiet = 'all';
    searchInput.value = '';
    root.querySelectorAll('.dietary-pill').forEach((p) => {
      const on = p.dataset.diet === 'all';
      p.classList.toggle('active', on);
      p.setAttribute('aria-pressed', String(on));
    });
    render();
  }

  root.querySelector('.menu-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.menu-tab');
    if (!tab || tab.dataset.service === activeService) return;
    activeService = tab.dataset.service;
    root.querySelectorAll('.menu-tab').forEach((t) => {
      const on = t === tab;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
    });
    render();
    rail.scrollIntoView({ block: 'nearest' });
  });

  root.querySelector('#dietaryStrip').addEventListener('click', (e) => {
    const pill = e.target.closest('.dietary-pill');
    if (!pill) return;
    activeDiet = pill.dataset.diet;
    root.querySelectorAll('.dietary-pill').forEach((p) => {
      const on = p === pill;
      p.classList.toggle('active', on);
      p.setAttribute('aria-pressed', String(on));
    });
    render();
  });

  let searchTimer = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      query = e.target.value;
      render();
    }, 140);
  });

  rail.addEventListener('click', (e) => {
    const link = e.target.closest('.course-rail-link');
    if (!link) return;
    e.preventDefault();
    document.getElementById(`course-${link.dataset.course}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  render();
}
