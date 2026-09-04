/**
 * Orbital culinary dial — The Guest House
 *
 * Ten featured dishes ride a circle; the one at the apex is named in the
 * teaser card. Discs are real buttons, the teaser is only rewritten when the
 * apex dish changes, and the loop stops whenever it is off-screen, hidden, or
 * the guest has asked for reduced motion.
 */

import { MENU_ITEMS } from '../data/menu.js';
import { openConciergeDrawer } from './reservations.js';

const AMBIENT_SPEED = 0.35; // degrees per frame
const APEX_ANGLE = 180;

// The dial is a semi-circle: only the half facing the copy is drawn. Dishes
// ride onto the arc at one end and off at the other.
const ARC_START = 90;
const ARC_END = 270;
const FADE = 18; // degrees of fade at each end of the arc

export function initOrbitalMenu() {
  const stage = document.getElementById('orbitalStage');
  const teaser = document.getElementById('orbitalTeaser');
  if (!stage || stage.dataset.initialized === 'true') return;
  stage.dataset.initialized = 'true';

  const items = MENU_ITEMS.filter((item) => item?.image && item.featured).slice(0, 10);
  if (!items.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let angle = 90;
  let speed = AMBIENT_SPEED;
  let dragVelocity = 0;
  let isHovered = false;
  let isDragging = false;
  let lastPointerY = 0;
  let running = false;
  let frame = null;

  let apexId = null;
  let geometry = readGeometry();

  function readGeometry() {
    const rect = stage.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;
    return {
      // 44% larger than the original dial (two 20% steps).
      radius: isMobile ? 187 : isTablet ? 230 : 274,
      discSize: isMobile ? 92 : isTablet ? 109 : 127,
      originX: rect.width * (isMobile ? 0.5 : 0.68),
      originY: rect.height / 2
    };
  }

  // ---- build -------------------------------------------------------------

  const discs = [];

  function build() {
    stage.innerHTML =
      '<div class="orbital-ring orbital-ring-outer"></div>' +
      '<div class="orbital-ring orbital-ring-inner"></div>';

    items.forEach((item, index) => {
      const disc = document.createElement('button');
      disc.type = 'button';
      disc.className = 'dish-disc';
      disc.dataset.id = item.id;
      disc.setAttribute('aria-label', `${item.name} — reserve a table`);
      disc.innerHTML = `<img src="${item.image}" alt="" aria-hidden="true" class="dish-disc-img" loading="lazy" />`;

      disc.addEventListener('click', () => {
        angle = APEX_ANGLE - index * (360 / items.length);
        place();
        openConciergeDrawer();
      });
      disc.addEventListener('focus', () => {
        angle = APEX_ANGLE - index * (360 / items.length);
        place();
      });

      stage.appendChild(disc);
      discs.push(disc);
    });

    renderTeaser(items[0]);
    place();
  }

  // ---- render ------------------------------------------------------------

  function renderTeaser(item) {
    if (!teaser || !item || item.id === apexId) return;
    apexId = item.id;
    teaser.innerHTML = `
      <div class="teaser-info">
        <span class="teaser-name">${item.name}</span>
      </div>
      <button type="button" class="btn-haute btn-primary-gold" data-reserve-trigger>Reserve ✦</button>
    `;
  }

  function place() {
    const { radius, discSize, originX, originY } = geometry;
    const step = 360 / items.length;
    let closest = null;
    let closestDistance = Infinity;

    discs.forEach((disc, index) => {
      let theta = (angle + index * step) % 360;
      if (theta < 0) theta += 360;

      // Off the semi-circle: park it and skip the paint.
      if (theta < ARC_START || theta > ARC_END) {
        disc.style.opacity = '0';
        disc.style.pointerEvents = 'none';
        disc.classList.remove('apex');
        return;
      }

      const rad = (theta * Math.PI) / 180;
      const x = originX + radius * Math.cos(rad) - discSize / 2;
      const y = originY + radius * Math.sin(rad) - discSize / 2;

      let fromApex = Math.abs(theta - APEX_ANGLE);
      if (fromApex > 180) fromApex = 360 - fromApex;

      const scale = fromApex < 30 ? 1.2 - (fromApex / 30) * 0.2 : 1;
      const fromEdge = Math.min(theta - ARC_START, ARC_END - theta);
      const opacity = Math.min(1, fromEdge / FADE);

      disc.style.opacity = String(opacity);
      disc.style.pointerEvents = opacity > 0.6 ? 'auto' : 'none';
      disc.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      disc.classList.toggle('apex', fromApex < 15);

      if (fromApex < closestDistance) {
        closestDistance = fromApex;
        closest = items[index];
      }
    });

    renderTeaser(closest);
  }

  // ---- loop --------------------------------------------------------------

  function tick() {
    if (isDragging) {
      speed = dragVelocity * 0.4;
    } else if (!isHovered) {
      speed += (AMBIENT_SPEED - speed) * 0.05;
    } else {
      speed = 0;
    }

    angle += speed;
    place();
    frame = requestAnimationFrame(tick);
  }

  function start() {
    if (running || reduceMotion.matches) return;
    running = true;
    frame = requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    if (frame) cancelAnimationFrame(frame);
    frame = null;
  }

  // ---- input -------------------------------------------------------------

  stage.addEventListener('mouseenter', () => { isHovered = true; });
  stage.addEventListener('mouseleave', () => { isHovered = false; isDragging = false; });

  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isDragging = true;
    lastPointerY = e.clientY;
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    dragVelocity = e.clientY - lastPointerY;
    lastPointerY = e.clientY;
    if (reduceMotion.matches) {
      angle += dragVelocity * 0.4;
      place();
    }
  }, { passive: true });

  window.addEventListener('pointerup', () => { isDragging = false; });

  let resizeFrame = null;
  window.addEventListener('resize', () => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      geometry = readGeometry();
      place();
    });
  });

  // Only animate while the dial is actually on screen and the tab is visible.
  const observer = new IntersectionObserver(
    ([entry]) => (entry.isIntersecting && !document.hidden ? start() : stop()),
    { threshold: 0.05 }
  );
  observer.observe(stage);

  document.addEventListener('visibilitychange', () => {
    document.hidden ? stop() : observer.observe(stage);
  });

  reduceMotion.addEventListener('change', () => {
    reduceMotion.matches ? stop() : start();
  });

  build();
  start();
}
