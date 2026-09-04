/**
 * Hours & "open now" state — The Guest House
 * Evaluates each restaurant's own timezone, so a guest in London still sees
 * the truth about Austin.
 */

import { LOCATIONS } from '../data/locations.js';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function formatTime(hhmm) {
  let [h, m] = hhmm.split(':').map(Number);
  h = h % 24;
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour12} ${suffix}` : `${hour12}:${String(m).padStart(2, '0')} ${suffix}`;
}

/** Short timezone label for a restaurant, e.g. CDT — so a guest reading from
 *  another state knows whose clock these times are on. */
function zoneLabel(timezone) {
  return new Intl.DateTimeFormat('en-US', { timeZone: timezone, timeZoneName: 'short' })
    .formatToParts(new Date())
    .find((p) => p.type === 'timeZoneName')?.value || '';
}

/** Current day-of-week and minutes-since-midnight in an IANA timezone. */
function localNow(timezone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(new Date());

  const get = (type) => parts.find((p) => p.type === type)?.value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const hour = Number(get('hour')) % 24;
  return { day, minutes: hour * 60 + Number(get('minute')) };
}

/**
 * @returns {{open: boolean, label: string}} current state for a location.
 */
export function getOpenState(location) {
  if (!location.hoursSpec || !location.timezone) return { open: false, label: '' };
  const { day, minutes } = localNow(location.timezone);
  const zone = zoneLabel(location.timezone);

  const todays = location.hoursSpec
    .filter((slot) => slot.days.includes(day))
    .sort((a, b) => toMinutes(a.opens) - toMinutes(b.opens));

  for (const slot of todays) {
    const opens = toMinutes(slot.opens);
    const closes = toMinutes(slot.closes); // 24:00 stays 1440, i.e. midnight
    if (minutes >= opens && minutes < closes) {
      return { open: true, label: `Open now · until ${formatTime(slot.closes)} ${zone}` };
    }
  }

  const nextToday = todays.find((slot) => minutes < toMinutes(slot.opens));
  if (nextToday) return { open: false, label: `Closed · opens ${formatTime(nextToday.opens)} ${zone}` };

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7;
    const slot = location.hoursSpec
      .filter((s) => s.days.includes(nextDay))
      .sort((a, b) => toMinutes(a.opens) - toMinutes(b.opens))[0];
    if (slot) {
      const when = offset === 1 ? 'tomorrow' : DAY_NAMES[nextDay];
      return { open: false, label: `Closed · opens ${when} at ${formatTime(slot.opens)} ${zone}` };
    }
  }

  return { open: false, label: 'Closed' };
}

/** Paint hours and open state into any [data-hours-for="<location id>"] container. */
export function initLocationHours() {
  const mounts = document.querySelectorAll('[data-hours-for]');
  if (!mounts.length) return;

  const render = () => {
    mounts.forEach((mount) => {
      const location = LOCATIONS.find((l) => l.id === mount.dataset.hoursFor);
      if (!location) return;
      const state = getOpenState(location);
      const rows = location.hours
        .map((h) => `<div class="hours-row"><span>${h.days}</span><span>${h.time}</span></div>`)
        .join('');

      mount.innerHTML = `
        <p class="open-state ${state.open ? 'is-open' : 'is-closed'}">
          <span class="open-dot" aria-hidden="true"></span>${state.label}
        </p>
        <div class="hours-list">${rows}</div>
        <p class="hours-zone">All times ${location.city} local (${zoneLabel(location.timezone)})</p>
      `;
    });
  };

  render();
  // Re-evaluate on the minute boundary so the badge never goes stale.
  setInterval(render, 60_000);
}
