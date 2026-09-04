/**
 * Schema.org JSON-LD builder — The Guest House
 *
 * Pure data. tools/build-schema.mjs imports this at build time and writes the
 * result into every page's <head>, so answer engines that do not run
 * JavaScript still see it.
 */

import { LOCATIONS } from '../data/locations.js';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_SERVICES } from '../data/menu.js';

const SITE = 'https://www.welcometgh.com';
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openingHours(location) {
  return location.hoursSpec.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.days.map((d) => DAY_NAMES[d]),
    opens: slot.opens,
    // schema.org expects 23:59 rather than 24:00 for a midnight close
    closes: slot.closes === '24:00' ? '23:59' : slot.closes
  }));
}

function menu(location) {
  // Sections mirror the page: services group courses, courses hold the dishes.
  // Prices stay out — structured data should only assert what the page shows.
  const courses = MENU_SERVICES.filter((s) => location.services.includes(s.id))
    .flatMap((service) => service.courses)
    .map((courseId) => ({
      '@type': 'MenuSection',
      name: MENU_CATEGORIES.find((c) => c.id === courseId)?.label || courseId,
      hasMenuItem: MENU_ITEMS.filter(
        (item) =>
          item.category === courseId &&
          (!item.locations || item.locations.includes(location.id))
      ).map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description
      }))
    }))
    .filter((section) => section.hasMenuItem.length);

  return {
    '@type': 'Menu',
    name: `${location.name} Menu`,
    url: `${SITE}${location.menuPath}`,
    hasMenuSection: courses
  };
}

export function buildRestaurantSchemas() {
  return LOCATIONS.map((location) => ({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE}/#${location.id}`,
    name: location.name,
    image: location.image,
    url: `${SITE}/${location.id}/`,
    telephone: location.phone,
    email: location.email,
    priceRange: '$$$$',
    servesCuisine: ['New American', 'Steakhouse', 'Raw Bar', 'Cocktails'],
    acceptsReservations: location.openTableUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.fullAddress.trim().split(' ').pop(),
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude
    },
    openingHoursSpecification: openingHours(location),
    hasMenu: menu(location),
    sameAs: ['https://www.instagram.com/welcometgh']
  }));
}
