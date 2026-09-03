/**
 * Slide-Out Maitre D' Concierge Reservation Drawer - The Guest House
 * City switcher, party size picker, date picker, 15-min slot generator & OpenTable URL dispatch
 */

import { LOCATIONS } from '../data/locations.js';

let activeLocationId = 'austin';
let selectedPartySize = 2;
let selectedDate = new Date().toISOString().split('T')[0];
let selectedTime = '19:00'; // 7:00 PM default

export function initReservations() {
  // Inject Drawer Markup if not present
  if (!document.getElementById('conciergeDrawer')) {
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    backdrop.id = 'drawerBackdrop';

    const drawer = document.createElement('aside');
    drawer.className = 'concierge-drawer';
    drawer.id = 'conciergeDrawer';
    drawer.setAttribute('aria-label', "Maitre D' Concierge Reservation Drawer");

    drawer.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title">Reserve A Table ✦</div>
        <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close Reservation Drawer">&times;</button>
      </div>
      <div class="drawer-body">
        <!-- City Switcher -->
        <div class="drawer-form-group">
          <label class="drawer-label">Select Location</label>
          <div class="city-tab-group" id="cityTabGroup">
            ${LOCATIONS.map(loc => `
              <button class="city-tab-btn ${loc.id === activeLocationId ? 'active' : ''}" data-loc="${loc.id}">
                ${loc.city}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Party Size Selector -->
        <div class="drawer-form-group">
          <label class="drawer-label">Guests (Party Size)</label>
          <div class="party-size-selector" id="partySelector">
            ${[1, 2, 3, 4, 5, 6, 7, '8+'].map(num => `
              <div class="party-chip ${num === selectedPartySize ? 'active' : ''}" data-size="${num}">${num}</div>
            `).join('')}
          </div>
        </div>

        <!-- Date Picker -->
        <div class="drawer-form-group">
          <label class="drawer-label">Date</label>
          <input type="date" class="date-picker-input" id="reservationDate" value="${selectedDate}" min="${selectedDate}" />
        </div>

        <!-- 15-Minute Slot Generator -->
        <div class="drawer-form-group">
          <label class="drawer-label">Available Seating Times</label>
          <div class="time-slots-grid" id="timeSlotsGrid"></div>
        </div>
      </div>
      <div class="drawer-footer">
        <button class="btn-haute btn-primary-gold" id="dispatchOpenTableBtn" style="width: 100%; padding: 1.1rem;">
          ✦ Confirm Seating on OpenTable
        </button>
      </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    // Bind Drawer Internal Events
    document.getElementById('drawerCloseBtn').addEventListener('click', closeConciergeDrawer);
    backdrop.addEventListener('click', closeConciergeDrawer);

    // City Switching
    document.getElementById('cityTabGroup').addEventListener('click', (e) => {
      const btn = e.target.closest('.city-tab-btn');
      if (!btn) return;
      document.querySelectorAll('.city-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLocationId = btn.dataset.loc;
    });

    // Party Size Selection
    document.getElementById('partySelector').addEventListener('click', (e) => {
      const chip = e.target.closest('.party-chip');
      if (!chip) return;
      document.querySelectorAll('.party-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedPartySize = chip.dataset.size === '8+' ? 8 : parseInt(chip.dataset.size);
    });

    // Date Change
    document.getElementById('reservationDate').addEventListener('change', (e) => {
      selectedDate = e.target.value;
      renderTimeSlots();
    });

    // Dispatch to OpenTable
    document.getElementById('dispatchOpenTableBtn').addEventListener('click', dispatchOpenTable);
  }

  renderTimeSlots();

  // Attach global triggers to any element with [data-reserve-trigger]
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-reserve-trigger]') || e.target.closest('.btn-reserve-trigger')) {
      e.preventDefault();
      const locId = e.target.closest('[data-location-id]')?.dataset.locationId;
      if (locId) activeLocationId = locId;
      openConciergeDrawer();
    }
  });
}

// Generate 15-minute time slots (e.g. 5:00 PM to 10:00 PM)
function renderTimeSlots() {
  const grid = document.getElementById('timeSlotsGrid');
  if (!grid) return;

  const times = [
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

  grid.innerHTML = times.map(t => `
    <button class="time-slot-btn ${t.value === selectedTime ? 'active' : ''}" data-time="${t.value}">
      ${t.label}
    </button>
  `).join('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.time-slot-btn');
    if (!btn) return;
    grid.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTime = btn.dataset.time;
  });
}

export function openConciergeDrawer(locationId) {
  // Dismiss mobile nav drawer if open to avoid overlay collision
  document.getElementById('mobileNavDrawer')?.classList.remove('open');
  document.getElementById('mobileNavBackdrop')?.classList.remove('active');
  document.getElementById('hamburgerBtn')?.classList.remove('active');

  if (locationId) {
    activeLocationId = locationId;
    const cityBtns = document.querySelectorAll('.city-tab-btn');
    cityBtns.forEach(btn => {
      if (btn.dataset.loc === locationId) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }
  document.getElementById('conciergeDrawer')?.classList.add('open');
  document.getElementById('drawerBackdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeConciergeDrawer() {
  document.getElementById('conciergeDrawer')?.classList.remove('open');
  document.getElementById('drawerBackdrop')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Build & Open OpenTable Redirect URL
function dispatchOpenTable() {
  const loc = LOCATIONS.find(l => l.id === activeLocationId) || LOCATIONS[0];
  const formattedDateTime = `${selectedDate}T${selectedTime}`;
  const openTableUrl = `https://www.opentable.com/r/the-guest-house-${loc.id}-reservations-${loc.id}?restref=${loc.openTableRef}&dateTime=${formattedDateTime}&covers=${selectedPartySize}&lang=en-US&ot_source=Restaurant%20website`;
  
  window.open(openTableUrl, '_blank', 'noopener,noreferrer');
}
