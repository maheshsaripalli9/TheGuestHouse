/**
 * AEO & SEO Microdata Injector - Schema.org JSON-LD - The Guest House
 */

import { LOCATIONS } from '../data/locations.js';
import { MENU_ITEMS } from '../data/menu.js';

export function injectAeoSchemas() {
  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';

  const restaurantSchemas = LOCATIONS.map(loc => ({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `https://www.welcometgh.com/#${loc.id}`,
    'name': loc.name,
    'image': loc.image,
    'url': 'https://www.welcometgh.com',
    'telephone': loc.phone,
    'priceRange': '$$$$',
    'servesCuisine': ['New American', 'Steakhouse', 'Raw Bar', 'Cocktails'],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': loc.address,
      'addressLocality': loc.city,
      'addressRegion': loc.state,
      'postalCode': loc.id === 'austin' ? '78701' : (loc.id === 'las-vegas' ? '89119' : '85254'),
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': loc.geo.latitude,
      'longitude': loc.geo.longitude
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        'opens': '16:00',
        'closes': '22:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Friday', 'Saturday'],
        'opens': '15:00',
        'closes': '23:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Sunday'],
        'opens': '11:00',
        'closes': '22:00'
      }
    ],
    'hasMenu': {
      '@type': 'Menu',
      'name': 'The Repertoire Menu',
      'hasMenuItem': MENU_ITEMS.map(item => ({
        '@type': 'MenuItem',
        'name': item.name,
        'description': item.description,
        'offers': {
          '@type': 'Offer',
          'price': item.price,
          'priceCurrency': 'USD'
        }
      }))
    }
  }));

  schemaScript.textContent = JSON.stringify(restaurantSchemas, null, 2);
  document.head.appendChild(schemaScript);
}
