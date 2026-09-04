/**
 * Locations Dataset - The Guest House
 */

export const LOCATIONS = [
  {
    id: 'austin',
    city: 'Austin',
    state: 'TX',
    name: 'The Guest House Austin',
    subtitle: 'Social Dining & Wine Garden • Downtown',
    address: '110 San Antonio St Ste R140',
    fullAddress: '110 San Antonio St Ste R140, Austin, TX 78701',
    phone: '(512) 720-0000',
    phoneClean: '5127200000',
    email: 'info@welcometgh.com',
    openTableRef: '1353643',
    openTableUrl: 'https://www.opentable.com/r/the-guest-house-austin-reservations-austin?restref=1353643&lang=en-US&ot_source=Restaurant%20website',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760a537d59632f0fdd36c_665b87c9e4ddba6ce2c4dc5c_The%20Guest%20House-006-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.webp',
    secondaryImage: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/69423d2238f3f29e55b8876b_Austin_NYE.png',
    menuPath: '/austin/menu/',
    // All three publish dinner, brunch, cocktail and happy hour menus.
    services: ['dinner', 'brunch', 'cocktails', 'happy-hour'],
    timezone: 'America/Chicago',
    tripleseatUrl: 'https://rdmhospitality.tripleseat.com/party_request/34826',
    hoursSpec: [
      { days: [1, 2, 3, 4], opens: '16:00', closes: '22:00' },
      { days: [5], opens: '15:00', closes: '23:00' },
      { days: [6], opens: '16:00', closes: '23:00' },
      { days: [0], opens: '16:00', closes: '22:00' }
    ],
    hours: [
      { days: 'Monday – Thursday', time: '4:00 PM – 10:00 PM' },
      { days: 'Friday', time: '3:00 PM – 11:00 PM' },
      { days: 'Saturday', time: '4:00 PM – 11:00 PM' },
      { days: 'Sunday', time: '4:00 PM – 10:00 PM' }
    ],
    happyHour: 'Daily 4:00 PM – 6:00 PM (Fridays starting at 3:00 PM)',
    highlights: ['Wine Garden Terrace', 'Private Dining Suite', 'Tableside Wagyu Service'],
    geo: { latitude: 30.2652, longitude: -97.7478 }
  },
  {
    id: 'las-vegas',
    city: 'Las Vegas',
    state: 'NV',
    name: 'The Guest House Las Vegas',
    subtitle: 'High-Energy Steakhouse & Velvet Parlour',
    address: '6635 S Las Vegas Blvd Ste 125',
    fullAddress: '6635 S Las Vegas Blvd Ste 125, Las Vegas, NV 89119',
    phone: '(702) 303-0000',
    phoneClean: '7023030000',
    email: 'vegas@welcometgh.com',
    openTableRef: '1407928',
    openTableUrl: 'https://www.opentable.com/r/the-guest-house-las-vegas-reservations-las-vegas?restref=1407928&lang=en-US&ot_source=Restaurant%20website',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d76053c435083e21e3f9d6_657e39003b5153896e223fac_image39.avif',
    secondaryImage: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d76226c11e43c916f41651_444A6880.avif',
    menuPath: '/las-vegas/menu/',
    // All three publish dinner, brunch, cocktail and happy hour menus.
    services: ['dinner', 'brunch', 'cocktails', 'happy-hour'],
    timezone: 'America/Los_Angeles',
    tripleseatUrl: 'https://rdmhospitality.tripleseat.com/party_request/38762',
    hoursSpec: [
      { days: [1, 2, 3, 4], opens: '17:00', closes: '23:00' },
      { days: [5, 6], opens: '17:00', closes: '24:00' },
      { days: [0], opens: '11:00', closes: '15:00' },
      { days: [0], opens: '17:00', closes: '22:00' }
    ],
    hours: [
      { days: 'Monday – Thursday', time: '5:00 PM – 11:00 PM' },
      { days: 'Friday – Saturday', time: '5:00 PM – 12:00 AM' },
      { days: 'Sunday Brunch', time: '11:00 AM – 3:00 PM' },
      { days: 'Sunday Dinner', time: '5:00 PM – 10:00 PM' }
    ],
    happyHour: 'Daily 5:00 PM – 7:00 PM',
    highlights: ['Sunday Live DJ Brunch', 'Velvet Parlour', 'Raw Bar Ice Display'],
    geo: { latitude: 36.0691, longitude: -115.1728 }
  },
  {
    id: 'scottsdale',
    city: 'Scottsdale',
    state: 'AZ',
    name: 'The Guest House Scottsdale',
    subtitle: 'Wood-Fired Grill & Desert Courtyard',
    address: '15301 N Scottsdale Rd',
    fullAddress: '15301 N Scottsdale Rd, Scottsdale, AZ 85254',
    phone: '(480) 625-4942',
    phoneClean: '4806254942',
    email: 'scottsdale@welcometgh.com',
    openTableRef: '1477102',
    openTableUrl: 'https://www.opentable.com/r/the-guest-house-scottsdale-reservations-scottsdale?restref=1477102&lang=en-US&ot_source=Restaurant%20website',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/695b5245d6fa68239c05892b_67b4aaa333f00519aa469ef1_444A8474-Edit.webp',
    secondaryImage: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a5235b308f5400ad3a53_20240229_19_18_07byRogerHo.jpeg',
    menuPath: '/scottsdale/menu/',
    // All three publish dinner, brunch, cocktail and happy hour menus.
    services: ['dinner', 'brunch', 'cocktails', 'happy-hour'],
    timezone: 'America/Phoenix',
    tripleseatUrl: 'https://rdmhospitality.tripleseat.com/party_request/27739',
    hoursSpec: [
      { days: [1, 2, 3, 4], opens: '16:00', closes: '22:00' },
      { days: [5, 6], opens: '16:00', closes: '23:00' },
      { days: [0], opens: '16:00', closes: '21:30' }
    ],
    hours: [
      { days: 'Monday – Thursday', time: '4:00 PM – 10:00 PM' },
      { days: 'Friday – Saturday', time: '4:00 PM – 11:00 PM' },
      { days: 'Sunday', time: '4:00 PM – 9:30 PM' }
    ],
    happyHour: 'Daily 4:00 PM – 6:00 PM',
    highlights: ['Desert Courtyard Dining', 'Wood-Fired Grill', 'Sommelier Cellar Room'],
    geo: { latitude: 33.6253, longitude: -111.9261 }
  }
];
