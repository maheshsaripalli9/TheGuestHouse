/**
 * Reservation drawer — The Guest House
 *
 * Collects location, party size, date and preferred time, then hands off to
 * OpenTable with those choices pre-filled. The times shown are the restaurant's
 * seating windows, not live availability — the copy says so, and OpenTable
 * confirms what is actually free.
 */

import { LOCATIONS } from '../data/locations.js';

let activeLocationId = 'austin';
let selectedPartySize = 2;
let selectedTime = '19:00';
let selectedDate = todayIn(LOCATIONS[0].timezone);
let lastFocused = null;

/** Today's date in a restaurant's own timezone, as YYYY-MM-DD. */
function todayIn(timezone) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
  return parts; // en-CA already formats as YYYY-MM-DD
}

const TIMES = [
  { label: '5:00 PM', value: '17:00' },
  { label: '5:15 PM', value: '17:15' },
  { label: '5:30 PM', value: '17:30' },
  { label: '6:00 PM', value: '18:00' },
  { label: '6:15 PM', value: '18:15' },
  { label: '6:30 PM', value: '18:30' },
  { label: '7:00 PM', value: '19:00' },
  { label: '7:15 PM', value: '19:15' },
  { label: '7:30 PM', value: '19:30' },
  { label: '8:00 PM', value: '20:00' },
  { label: '8:15 PM', value: '20:15' },
  { label: '8:30 PM', value: '20:30' }
];

function currentLocation() {
  return LOCATIONS.find((l) => l.id === activeLocationId) || LOCATIONS[0];
}

export function initReservations() {
  if (document.getElementById('conciergeDrawer')) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';
  backdrop.id = 'drawerBackdrop';

  const drawer = document.createElement('aside');
  drawer.className = 'concierge-drawer';
  drawer.id = 'conciergeDrawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-labelledby', 'conciergeDrawerTitle');
  drawer.setAttribute('inert', '');

  drawer.innerHTML = `
    <div class="drawer-header">
      <h2 class="drawer-title" id="conciergeDrawerTitle">Reserve A Table ✦</h2>
      <button type="button" class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close reservation panel">&times;</button>
    </div>
    <div class="drawer-body">
      <div class="drawer-form-group">
        <span class="drawer-label" id="cityTabLabel">Select Location</span>
        <div class="city-tab-group" id="cityTabGroup" role="group" aria-labelledby="cityTabLabel">
          ${LOCATIONS.map(
            (loc) => `
            <button type="button" class="city-tab-btn ${loc.id === activeLocationId ? 'active' : ''}"
                    data-loc="${loc.id}" aria-pressed="${loc.id === activeLocationId}">${loc.city}</button>`
          ).join('')}
        </div>
      </div>

      <div class="drawer-form-group">
        <span class="drawer-label" id="partyLabel">Guests (Party Size)</span>
        <div class="party-size-selector" id="partySelector" role="group" aria-labelledby="partyLabel">
          ${[1, 2, 3, 4, 5, 6, 7, '8+']
            .map(
              (num) => `
            <button type="button" class="party-chip ${num === selectedPartySize ? 'active' : ''}"
                    data-size="${num}" aria-pressed="${num === selectedPartySize}">${num}</button>`
            )
            .join('')}
        </div>
      </div>

      <div class="drawer-form-group">
        <label class="drawer-label" for="reservationDate">Date</label>
        <input type="date" class="date-picker-input" id="reservationDate"
               value="${selectedDate}" min="${selectedDate}" />
      </div>

      <div class="drawer-form-group">
        <span class="drawer-label" id="timeLabel">Preferred Seating Time</span>
        <div class="time-slots-grid" id="timeSlotsGrid" role="group" aria-labelledby="timeLabel"></div>
        <p class="drawer-note" id="availabilityNote">
          These are our seating windows. OpenTable confirms what's actually available
          for your date and party size on the next screen.
        </p>
      </div>
    </div>
    <div class="drawer-footer">
      <button type="button" class="btn-haute btn-primary-gold" id="dispatchOpenTableBtn" style="width: 100%; padding: 1.1rem;">
        ✦ Continue on OpenTable
      </button>
    </div>
  `;

  document.body.append(backdrop, drawer);

  document.getElementById('drawerCloseBtn').addEventListener('click', closeConciergeDrawer);
  backdrop.addEventListener('click', closeConciergeDrawer);

  document.getElementById('cityTabGroup').addEventListener('click', (e) => {
    const btn = e.target.closest('.city-tab-btn');
    if (!btn) return;
    setActive('.city-tab-btn', btn);
    activeLocationId = btn.dataset.loc;
    syncDateFloor();
  });

  document.getElementById('partySelector').addEventListener('click', (e) => {
    const chip = e.target.closest('.party-chip');
    if (!chip) return;
    setActive('.party-chip', chip);
    selectedPartySize = chip.dataset.size === '8+' ? 8 : Number(chip.dataset.size);
  });

  // Bound once — renderTimeSlots only rewrites the buttons.
  document.getElementById('timeSlotsGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.time-slot-btn');
    if (!btn) return;
    setActive('.time-slot-btn', btn);
    selectedTime = btn.dataset.time;
  });

  document.getElementById('reservationDate').addEventListener('change', (e) => {
    selectedDate = e.target.value;
  });

  document.getElementById('dispatchOpenTableBtn').addEventListener('click', dispatchOpenTable);

  drawer.addEventListener('keydown', trapFocus);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeConciergeDrawer();
  });

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-reserve-trigger]');
    if (!trigger) return;
    e.preventDefault();
    openConciergeDrawer(trigger.dataset.location);
  });

  renderTimeSlots();
  syncDateFloor();
}

function setActive(selector, active) {
  document.querySelectorAll(selector).forEach((el) => {
    const on = el === active;
    el.classList.toggle('active', on);
    el.setAttribute('aria-pressed', String(on));
  });
}

/** Never let the picker sit on a date that is already past where the restaurant is. */
function syncDateFloor() {
  const input = document.getElementById('reservationDate');
  if (!input) return;
  const floor = todayIn(currentLocation().timezone);
  input.min = floor;
  if (!input.value || input.value < floor) {
    input.value = floor;
    selectedDate = floor;
  }
}

function renderTimeSlots() {
  const grid = document.getElementById('timeSlotsGrid');
  if (!grid) return;
  grid.innerHTML = TIMES.map(
    (t) => `
    <button type="button" class="time-slot-btn ${t.value === selectedTime ? 'active' : ''}"
            data-time="${t.value}" aria-pressed="${t.value === selectedTime}">${t.label}</button>`
  ).join('');
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const drawer = document.getElementById('conciergeDrawer');
  const focusable = drawer.querySelectorAll('button:not([disabled]), input, a[href]');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

export function openConciergeDrawer(locationId) {
  const drawer = document.getElementById('conciergeDrawer');
  if (!drawer) return;

  lastFocused = document.activeElement;

  if (locationId && LOCATIONS.some((l) => l.id === locationId)) {
    activeLocationId = locationId;
    const btn = document.querySelector(`.city-tab-btn[data-loc="${locationId}"]`);
    if (btn) setActive('.city-tab-btn', btn);
    syncDateFloor();
  }

  drawer.classList.add('open');
  drawer.removeAttribute('inert');
  document.getElementById('drawerBackdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('drawerCloseBtn')?.focus();
}

export function closeConciergeDrawer() {
  const drawer = document.getElementById('conciergeDrawer');
  if (!drawer?.classList.contains('open')) return;

  drawer.classList.remove('open');
  drawer.setAttribute('inert', '');
  document.getElementById('drawerBackdrop')?.classList.remove('active');
  document.body.style.overflow = '';
  if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
}

function dispatchOpenTable() {
  const loc = currentLocation();
  const url = new URL(loc.openTableUrl);
  url.searchParams.set('dateTime', `${selectedDate}T${selectedTime}`);
  url.searchParams.set('covers', String(selectedPartySize));

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'reservation_dispatch',
    location: loc.id,
    covers: selectedPartySize,
    reservation_date: selectedDate,
    reservation_time: selectedTime
  });

  window.open(url.toString(), '_blank', 'noopener,noreferrer');
}
