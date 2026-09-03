/**
 * Official Menu Dataset - The Guest House
 * Exact authentic menu items extracted from https://www.welcometgh.com/
 */

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'raw-bar', label: 'Raw Bar & Caviar' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'salads', label: 'Salads' },
  { id: 'butchers-prime', label: "Butcher's Best" },
  { id: 'entrees', label: 'Entrées' },
  { id: 'sides', label: 'Sides' },
  { id: 'cocktails', label: 'Cocktails' },
  { id: 'brunch', label: 'Sunday Brunch' }
];

export const DIETARY_TAGS = [
  { id: 'all', label: 'All Diets' },
  { id: 'GF', label: 'GF (Gluten Free)' },
  { id: 'V', label: 'V (Vegetarian)' },
  { id: 'DF', label: 'DF (Dairy Free)' }
];

export const MENU_ITEMS = [
  // --- RAW BAR ---
  {
    id: 'traditional-caviar-service',
    name: 'Traditional Caviar Service',
    category: 'raw-bar',
    price: 165,
    description: 'Traditional accoutrements | Royal Daurenki | Royal Ossetra | Tsar Daurenki.',
    dietary: ['GF'],
    pairing: 'Champagne pairing available',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: true,
    orbitCategory: 'Raw Bar'
  },
  {
    id: 'coastal-oysters',
    name: 'Coastal Oysters',
    category: 'raw-bar',
    price: 36,
    description: 'Chilled on ice with cocktail sauce | mignonette.',
    dietary: ['DF', 'GF'],
    pairing: 'Chablis Premier Cru',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: false,
    orbitCategory: 'Raw Bar'
  },
  {
    id: 'shrimp-cocktail',
    name: 'Shrimp Cocktail',
    category: 'raw-bar',
    price: 28,
    description: 'Chili cocktail sauce | lemon.',
    dietary: ['DF', 'GF'],
    pairing: 'Sauvignon Blanc',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: false,
    orbitCategory: 'Raw Bar'
  },
  {
    id: 'hamachi-crudo',
    name: 'Hamachi Crudo',
    category: 'raw-bar',
    price: 26,
    description: 'Jalapeño | coconut | lime.',
    dietary: ['DF', 'GF'],
    pairing: 'Sancerre Blanc',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Raw Bar'
  },
  {
    id: 'tuna-caviar-cones',
    name: 'Tuna & Caviar Cones',
    category: 'raw-bar',
    price: 28,
    description: 'Yellowfin tuna tartare in sesame cone | Royal Daurenki caviar | chives.',
    dietary: ['DF'],
    pairing: 'Billecart-Salmon Brut Rosé',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: true,
    orbitCategory: 'Raw Bar'
  },
  {
    id: 'taylor-bay-scallop-ceviche',
    name: 'Taylor Bay Scallop Ceviche',
    category: 'raw-bar',
    price: 27,
    description: 'Yuzu | lychee | lavender | lime.',
    dietary: ['DF', 'GF'],
    pairing: 'Riesling Grand Cru',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: false,
    orbitCategory: 'Raw Bar'
  },
  {
    id: 'half-maine-lobster-tail',
    name: 'Half Maine Lobster Tail',
    category: 'raw-bar',
    price: 34,
    description: 'Chilled or grilled with garlic herb brown butter.',
    dietary: ['GF'],
    pairing: 'Chardonnay Carneros',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Raw Bar'
  },

  // --- APPETIZERS ---
  {
    id: 'wagyu-pastrami',
    name: 'Wagyu Pastrami',
    category: 'appetizers',
    price: 26,
    description: 'Pickled mustard seeds | toasted coriander | smoked paprika.',
    dietary: ['GF'],
    pairing: 'Pinot Noir Russian River',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: "Butcher's Prime"
  },
  {
    id: 'steak-tartare',
    name: 'Steak Tartare',
    category: 'appetizers',
    price: 28,
    description: ' Linz prime beef | black truffle toast.',
    dietary: [],
    pairing: 'Barolo DOCG',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: true,
    orbitCategory: "Butcher's Prime"
  },
  {
    id: 'chicken-tenders',
    name: 'Chicken Tenders',
    category: 'appetizers',
    price: 22,
    description: 'House-made buttermilk tenders | ranch | sweet BBQ aioli.',
    dietary: [],
    pairing: 'Craft IPA',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'crab-cake',
    name: 'Chesapeake Bay Crab Cake',
    category: 'appetizers',
    price: 32,
    description: 'Chesapeake bay lump crab | corn relish | smoked tomato butter.',
    dietary: [],
    pairing: 'Napa Valley Chardonnay',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'charred-moroccan-beet',
    name: 'Charred Moroccan Beet',
    category: 'appetizers',
    price: 20,
    description: 'Cucumber yogurt | pistachio dukkah | burnt citrus.',
    dietary: ['V'],
    pairing: 'Rosé de Provence',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'half-lobster-thermidor',
    name: 'Half 2lb. Lobster Thermidor',
    category: 'appetizers',
    price: 54,
    description: 'Maine lobster | king crab | spanish chorizo.',
    dietary: [],
    pairing: 'Far Niente Chardonnay',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: true,
    orbitCategory: 'Entrées'
  },
  {
    id: 'spicy-rigatoni',
    name: 'Spicy Rigatoni',
    category: 'appetizers',
    price: 28,
    description: 'Pancetta | Calabrian chili | house-made pomodoro.',
    dietary: [],
    pairing: 'Chianti Classico Riserva',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'bucatini-cacio-e-pepe',
    name: 'Bucatini Cacio e Pepe',
    category: 'appetizers',
    price: 26,
    description: 'Black pepper | 36-month aged parmesan | + add fresh black truffle (MP).',
    dietary: ['V'],
    pairing: 'Brunello di Montalcino',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'hot-rock-wagyu',
    name: 'Hot Rock Tableside Wagyu',
    category: 'appetizers',
    price: 68,
    description: 'Tableside Japanese Wagyu seared on hot stone | Mizusako | Kusunoki | Sanuki olive-fed (3oz min).',
    dietary: ['DF', 'GF'],
    pairing: 'Silver Oak Cabernet',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: true,
    orbitCategory: "Butcher's Prime"
  },

  // --- SALADS ---
  {
    id: 'little-gem-caesar',
    name: 'Little Gem Caesar',
    category: 'salads',
    price: 22,
    description: 'Rustic house-made croutons | grated Reggiano parmesan.',
    dietary: ['V'],
    pairing: 'Pinot Grigio',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'pear-gorgonzola',
    name: 'Pear & Gorgonzola Salad',
    category: 'salads',
    price: 24,
    description: 'Honey vinaigrette | pickled shallots | toasted walnuts.',
    dietary: ['V', 'GF'],
    pairing: 'Sauvignon Blanc',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'shaved-brussels-sprouts',
    name: 'Shaved Brussels Sprouts Salad',
    category: 'salads',
    price: 22,
    description: 'Toasted hazelnuts | crushed red grapes | aged Gouda.',
    dietary: ['V', 'GF'],
    pairing: 'Chardonnay',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },

  // --- BUTCHER'S BEST (STEAKS) ---
  {
    id: '30-day-tomahawk',
    name: '30-Day Wet Aged Prime Tomahawk',
    category: 'butchers-prime',
    price: 185,
    description: '38oz Center-cut prime ribeye on bone | USA All-American beef sourced by Linz Meats.',
    dietary: ['GF'],
    pairing: 'Caymus Special Selection Cabernet',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: true,
    orbitCategory: "Butcher's Prime"
  },
  {
    id: 'sher-farms-wagyu',
    name: 'Sher Farms Wagyu Beef — 8oz Top Cap',
    category: 'butchers-prime',
    price: 98,
    description: 'Australian Wagyu beef | red wine bordelaise.',
    dietary: ['GF'],
    pairing: 'Stag\'s Leap Cabernet',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: "Butcher's Prime"
  },
  {
    id: '20oz-dry-aged-ribeye',
    name: '20oz 40-Day Dry Aged Bone-In Ribeye',
    category: 'butchers-prime',
    price: 115,
    description: 'USA Prime dry-aged ribeye | roasted garlic bulb | rosemary salt.',
    dietary: ['GF'],
    pairing: 'Opus One Napa Valley',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: true,
    orbitCategory: "Butcher's Prime"
  },
  {
    id: 'mayura-chocolate-wagyu',
    name: 'Mayura Chocolate-Fed Wagyu New York',
    category: 'butchers-prime',
    price: 125,
    description: 'Australian full-blood chocolate-fed Wagyu New York strip.',
    dietary: ['GF'],
    pairing: 'Bordeaux Grand Cru',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: "Butcher's Prime"
  },
  {
    id: 'parmesan-crusted-filet',
    name: 'Parmesan-Crusted Filet',
    category: 'butchers-prime',
    price: 72,
    description: 'USA Prime center-cut filet | roasted allium | veal reduction.',
    dietary: ['GF'],
    pairing: 'Merlot Napa Valley',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: "Butcher's Prime"
  },

  // --- ENTRÉES ---
  {
    id: 'chicken-parmesan-a-la-raj',
    name: 'Chicken Parmesan a la Raj',
    category: 'entrees',
    price: 38,
    description: 'Fresh mozzarella | spicy pomodoro | pistachio pesto.',
    dietary: [],
    pairing: 'Chianti Classico',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'faroe-island-salmon',
    name: 'Faroe Island Salmon',
    category: 'entrees',
    price: 42,
    description: 'Beech mushrooms | ponzu brown butter.',
    dietary: ['GF'],
    pairing: 'Pinot Noir',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'berkshire-pork-chop',
    name: 'Free Range Berkshire Pork Chop',
    category: 'entrees',
    price: 46,
    description: 'Heirloom apple butter | braised kale | BBQ lentils.',
    dietary: ['GF'],
    pairing: 'Zinfandel Sonoma',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'braised-short-rib',
    name: 'Braised Short-Rib',
    category: 'entrees',
    price: 48,
    description: 'Carrots | onion roast | pea shoots.',
    dietary: ['GF'],
    pairing: 'Syrah Paso Robles',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'maine-diver-scallops',
    name: 'Maine Diver Wild Scallops',
    category: 'entrees',
    price: 52,
    description: 'Caramelized corn | parsnip mousse | ají amarillo.',
    dietary: ['GF'],
    pairing: 'Chardonnay Carneros',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'branzino',
    name: 'Whole Roasted Branzino',
    category: 'entrees',
    price: 48,
    description: 'Salsa verde | Castelvetrano olives | baked lemon.',
    dietary: ['DF', 'GF'],
    pairing: 'Vermentino di Gallura',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'seasonal-squash-risotto',
    name: 'Seasonal Squash Risotto',
    category: 'entrees',
    price: 34,
    description: 'Rosemary | seasonal vegetables | aged parmesan.',
    dietary: ['V', 'GF'],
    pairing: 'Barbera d\'Asti',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif',
    featured: false,
    orbitCategory: 'Entrées'
  },
  {
    id: 'original-100-cheesesteak',
    name: 'The Original $100 Cheesesteak',
    category: 'entrees',
    price: 100,
    description: ' Linz Wagyu, black truffle butter, fontina cheese + includes glass of Dom Pérignon.',
    dietary: [],
    pairing: 'Includes Dom Pérignon Glass',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    featured: true,
    orbitCategory: 'Entrées'
  },

  // --- SIDES ---
  {
    id: 'charred-brussels',
    name: 'Charred Brussels Sprouts',
    category: 'sides',
    price: 16,
    description: 'Crispy brussels | honey glaze.',
    dietary: ['V', 'GF'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },
  {
    id: 'miso-mushrooms',
    name: 'Miso Mushrooms',
    category: 'sides',
    price: 18,
    description: 'Wild mushroom medley | white miso butter.',
    dietary: ['V', 'GF'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },
  {
    id: 'sweet-corn-pudding',
    name: 'Sweet Corn Pudding',
    category: 'sides',
    price: 16,
    description: 'Roasted sweet corn | brown butter crust.',
    dietary: ['V'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },
  {
    id: 'yukon-potato-puree',
    name: 'Yukon Potato Purée',
    category: 'sides',
    price: 16,
    description: 'Whipped French butter | chives.',
    dietary: ['V', 'GF'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },
  {
    id: 'gh-mac-n-cheese',
    name: 'GH Mac & Cheese',
    category: 'sides',
    price: 22,
    description: '5-Cheese mornay sauce | herb breadcrumbs.',
    dietary: ['V'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },
  {
    id: 'parmesan-truffle-fries',
    name: 'Parmesan Truffle Fries',
    category: 'sides',
    price: 18,
    description: 'Hand-cut fries | black truffle oil | shaved parmesan.',
    dietary: ['V', 'GF'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },
  {
    id: 'roasted-broccolini',
    name: 'Roasted Broccolini',
    category: 'sides',
    price: 16,
    description: 'Garlic chips | chili oil | lemon zest.',
    dietary: ['V', 'GF', 'DF'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },
  {
    id: 'wagyu-fried-rice',
    name: 'Wagyu Fried Rice',
    category: 'sides',
    price: 24,
    description: ' Linz Wagyu steak bites | scallions | garlic tamari.',
    dietary: ['DF'],
    pairing: '',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: false,
    orbitCategory: 'Sides'
  },

  // --- COCKTAILS ---
  {
    id: 'magic-mushroom-cocktail',
    name: 'The Magic Mushroom',
    category: 'cocktails',
    price: 26,
    description: 'Casa Dragones Blanco Tequila, passion fruit, lime, aromatic citrus cloud vapor ritual.',
    dietary: ['GF', 'V', 'DF'],
    pairing: 'Tableside Theater Ritual',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d761642a9764c6d415767d_444A5548.avif',
    featured: true,
    orbitCategory: 'Cocktails'
  },
  {
    id: 'smoked-gold-old-fashioned',
    name: 'Smoked Heritage Old Fashioned',
    category: 'cocktails',
    price: 28,
    description: 'WhistlePig 10-Yr Rye, hickory smoke infusion, Angostura, 24K edible gold leaf ice sphere.',
    dietary: ['GF', 'V', 'DF'],
    pairing: 'Cigar Lounge Sanctuary',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif',
    featured: true,
    orbitCategory: 'Cocktails'
  },
  {
    id: 'tgh-signature-margarita',
    name: 'TGH Velvet Margarita',
    category: 'cocktails',
    price: 24,
    description: 'Clase Azul Reposado, Grand Marnier Cuvée, hand-pressed lime, black lava salt rim.',
    dietary: ['GF', 'V', 'DF'],
    pairing: 'Sunset Terrace',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/69daeebce8bb681039705771_GH%20MARGARITA%202.jpeg',
    featured: false,
    orbitCategory: 'Cocktails'
  },

  // --- SUNDAY BRUNCH ---
  {
    id: 'smoked-salmon-tier',
    name: 'Smoked Salmon Tier',
    category: 'brunch',
    price: 42,
    description: 'Artisanal bagels | traditional components | capers | cream cheese | dill.',
    dietary: [],
    pairing: 'Mimosa Flight',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/68136f525e0737a996bae848_67fd6a90e8ec14288cfaa609_4.6.25%20GMG_TGH_BRUNCH%20CAMPAIGN_DAY%202-267%400.33x.jpg',
    featured: true,
    orbitCategory: 'Brunch'
  },
  {
    id: 'gh-sweet-roll',
    name: 'GH Sweet Roll',
    category: 'brunch',
    price: 18,
    description: 'Cinnamon sugar | cream cheese frosting | pecan praline.',
    dietary: ['V'],
    pairing: 'Espresso Martini',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/68136f525e0737a996bae848_67fd6a90e8ec14288cfaa609_4.6.25%20GMG_TGH_BRUNCH%20CAMPAIGN_DAY%202-267%400.33x.jpg',
    featured: false,
    orbitCategory: 'Brunch'
  },
  {
    id: 'nonnas-banana-bread',
    name: 'Nonna\'s Banana Bread',
    category: 'brunch',
    price: 16,
    description: 'Roasted honey butter | toasted walnuts.',
    dietary: ['V'],
    pairing: 'Cappuccino',
    image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/68136f525e0737a996bae848_67fd6a90e8ec14288cfaa609_4.6.25%20GMG_TGH_BRUNCH%20CAMPAIGN_DAY%202-267%400.33x.jpg',
    featured: false,
    orbitCategory: 'Brunch'
  }
];
