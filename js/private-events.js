/**
 * Private events inquiry routing — The Guest House
 *
 * Group and buyout enquiries go to Tripleseat (RDM Hospitality), the same
 * system the events team already works out of. Each restaurant has its own
 * party-request queue, so the guest lands in the right one.
 */

import { LOCATIONS } from '../data/locations.js';
import { refreshReveal } from './reveal.js';

// Room inventory as published on welcometgh.com — keep in sync with the events team.
const SPACES = {
  austin: [
    { name: 'Private Dining Parlour', capacity: 'Seated 12' },
    { name: 'Bar & Lounge', capacity: 'Seated 28 · standing 50' },
    { name: 'Main Dining Room', capacity: 'Seated 128 · standing 200' }
  ],
  'las-vegas': [
    { name: 'Private Dining Room', capacity: 'Capacity 20' },
    { name: 'The Parlour', capacity: 'Seated 36 · standing 50' },
    { name: 'Bar', capacity: '32 bar seats · 15 drink rail' },
    { name: 'Patio', capacity: 'Seated 90' },
    { name: 'Main Dining Room', capacity: 'Capacity 148' }
  ],
  scottsdale: [
    { name: 'Private Dining Room', capacity: 'Seated 20' },
    { name: 'Parlour', capacity: 'Seated 50 · standing 75' },
    { name: 'Bar / Patio', capacity: 'Standing 60 · patio 26 seated' },
    { name: 'Main Dining Room', capacity: 'Seated 144 · standing 200' }
  ]
};

const LARGEST = { austin: 200, 'las-vegas': 148, scottsdale: 200 };

export function initPrivateEvents() {
  const grid = document.getElementById('inquiryGrid');
  if (!grid) return;

  grid.innerHTML = LOCATIONS.map((location) => {
    const spaces = SPACES[location.id] || [];
    const largest = LARGEST[location.id];

    return `
      <article class="inquiry-card">
        <div class="inquiry-card-head">
          <span class="sanctuary-badge">${location.city}, ${location.state}</span>
          <h3 class="inquiry-city">${location.city}</h3>
          <p class="inquiry-capacity">Up to ${largest} guests</p>
        </div>

        <ul class="inquiry-spaces">
          ${spaces
            .map(
              (space) => `
            <li>
              <span class="inquiry-space-name">${space.name}</span>
              <span class="inquiry-space-cap">${space.capacity}</span>
            </li>`
            )
            .join('')}
        </ul>

        <div class="inquiry-actions">
          <a class="btn-haute btn-primary-gold" href="${location.tripleseatUrl}"
             target="_blank" rel="noopener"
             data-event="private_event_inquiry" data-location="${location.id}">
            ✦ Inquire Now
          </a>
          <div class="inquiry-direct">
            <a href="tel:${location.phoneClean}">${location.phone}</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:${location.email}?subject=Private%20Event%20Inquiry%20—%20${encodeURIComponent(location.city)}">Email the venue</a>
          </div>
        </div>
      </article>`;
  }).join('');

  // Send the handoff to the dataLayer so lost-lead volume is finally measurable.
  grid.addEventListener('click', (event) => {
    const link = event.target.closest('[data-event="private_event_inquiry"]');
    if (!link) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'private_event_inquiry',
      location: link.dataset.location
    });
  });

  refreshReveal();

  const jumpBtn = document.getElementById('inquireEventBtn');
  if (jumpBtn) {
    jumpBtn.addEventListener('click', () => {
      document.getElementById('eventFormContainer')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
