/**
 * Menu dataset — The Guest House
 *
 * Transcribed from the published menus at welcometgh.com/<location>/menu.
 * Dinner is identical at all three restaurants. Brunch "Only For You" and
 * several cocktails are not, so those items carry a `locations` array;
 * an item without one is served everywhere.
 *
 * Prices are held for happy hour only, which is the one service where the
 * printed menu shows them.
 */

export const MENU_CATEGORIES = [
    {
      "id": "raw-bar",
      "label": "Raw Bar"
    },
    {
      "id": "appetizers",
      "label": "Appetizers"
    },
    {
      "id": "salads",
      "label": "Salads"
    },
    {
      "id": "butchers-prime",
      "label": "Butcher's Best"
    },
    {
      "id": "entrees",
      "label": "Entrées"
    },
    {
      "id": "sides",
      "label": "Sides"
    },
    {
      "id": "brunch-table",
      "label": "For The Table"
    },
    {
      "id": "brunch-raw-bar",
      "label": "Raw Bar & Additions"
    },
    {
      "id": "brunch-mains",
      "label": "Only For You"
    },
    {
      "id": "cocktails-light-bright",
      "label": "Light & Bright"
    },
    {
      "id": "cocktails-spirit-forward",
      "label": "Spirit Forward"
    },
    {
      "id": "cocktails-bold-rich",
      "label": "Bold & Rich"
    },
    {
      "id": "cocktails-spirit-free",
      "label": "Spirit Free"
    },
    {
      "id": "cocktails-theatrical",
      "label": "Theatrical"
    },
    {
      "id": "hh-cocktails",
      "label": "Cocktails"
    },
    {
      "id": "hh-bites",
      "label": "Bites"
    }
  ];

export const DIETARY_TAGS = [
    {
      "id": "all",
      "label": "All Diets"
    },
    {
      "id": "GF",
      "label": "GF (Gluten Free)"
    },
    {
      "id": "V",
      "label": "V (Vegetarian)"
    },
    {
      "id": "DF",
      "label": "DF (Dairy Free)"
    },
    {
      "id": "CN",
      "label": "CN (Contains Nuts)"
    }
  ];

export const MENU_SERVICES = [
    {
      "id": "dinner",
      "label": "Dinner",
      "courses": [
        "raw-bar",
        "appetizers",
        "salads",
        "butchers-prime",
        "entrees",
        "sides"
      ]
    },
    {
      "id": "brunch",
      "label": "Brunch",
      "courses": [
        "brunch-table",
        "brunch-raw-bar",
        "brunch-mains"
      ]
    },
    {
      "id": "cocktails",
      "label": "Cocktails",
      "courses": [
        "cocktails-light-bright",
        "cocktails-spirit-forward",
        "cocktails-bold-rich",
        "cocktails-spirit-free",
        "cocktails-theatrical"
      ]
    },
    {
      "id": "happy-hour",
      "label": "Happy Hour",
      "courses": [
        "hh-cocktails",
        "hh-bites"
      ],
      "showPrices": true
    }
  ];

export const MENU_ITEMS = [
    {
      "id": "traditional-caviar-service",
      "name": "TRADITIONAL CAVIAR SERVICE",
      "category": "raw-bar",
      "description": "traditional accoutrements | royal daurenki | royal ossetra | tsar daurenki",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": true
    },
    {
      "id": "coastal-oysters",
      "name": "COASTAL OYSTERS",
      "category": "raw-bar",
      "description": "chilled with cocktail sauce | mignonette",
      "dietary": [
        "DF",
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false
    },
    {
      "id": "shrimp-cocktail",
      "name": "SHRIMP COCKTAIL",
      "category": "raw-bar",
      "description": "chili cocktail sauce | lemon",
      "dietary": [
        "DF",
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false
    },
    {
      "id": "hamachi-crudo",
      "name": "HAMACHI CRUDO",
      "category": "raw-bar",
      "description": "jalapeño | coconut | lime",
      "dietary": [
        "DF",
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "tuna-caviar-cones",
      "name": "TUNA & CAVIAR CONES",
      "category": "raw-bar",
      "description": "royal daurenki | chives",
      "dietary": [
        "DF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": true
    },
    {
      "id": "taylor-bay-scallop-ceviche",
      "name": "TAYLOR BAY SCALLOP CEVICHE",
      "category": "raw-bar",
      "description": "yuzu | lychee | lavender | lime",
      "dietary": [
        "DF",
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false
    },
    {
      "id": "half-maine-lobster-tail",
      "name": "HALF MAINE LOBSTER TAIL",
      "category": "raw-bar",
      "description": "chilled or grilled",
      "dietary": [
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "wagyu-pastrami",
      "name": "WAGYU PASTRAMI",
      "category": "appetizers",
      "description": "pickled mustard seeds | toasted coriander | smoked paprika",
      "dietary": [
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "steak-tartare",
      "name": "STEAK TARTARE",
      "category": "appetizers",
      "description": "truffle toast",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": true
    },
    {
      "id": "chicken-tenders",
      "name": "CHICKEN TENDERS",
      "category": "appetizers",
      "description": "ranch | sweet bbq aioli",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "crab-cake",
      "name": "CRAB CAKE",
      "category": "appetizers",
      "description": "chesapeake bay | corn relish | smoked tomato butter",
      "dietary": []
    },
    {
      "id": "charred-moroccan-beet",
      "name": "CHARRED MOROCCAN BEET",
      "category": "appetizers",
      "description": "cucumber yogurt | pistachio dukkah | burnt citrus",
      "dietary": [
        "V"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "half-2lb-lobster-thermidor",
      "name": "HALF 2LB. LOBSTER THERMIDOR",
      "category": "appetizers",
      "description": "lobster | king crab | spanish chorizo",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": true
    },
    {
      "id": "spicy-rigatoni",
      "name": "SPICY RIGATONI",
      "category": "appetizers",
      "description": "pancetta | calabrian chili | house-made pomodoro",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false
    },
    {
      "id": "bucatini-cacio-e-pepe",
      "name": "BUCATINI CACIO E PEPE",
      "category": "appetizers",
      "description": "black pepper | parmesan | + add fresh truffle MP",
      "dietary": [
        "V"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false
    },
    {
      "id": "hot-rock-table-side-wagyu",
      "name": "HOT ROCK TABLE SIDE WAGYU",
      "category": "appetizers",
      "description": "table side japanese wagyu (3oz min) | mizusako | kusunoki | sanuki olive-fed",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": true
    },
    {
      "id": "little-gem-caesar",
      "name": "LITTLE GEM CAESAR",
      "category": "salads",
      "description": "rustic house-made croutons | grated reggiano",
      "dietary": [
        "V"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "pear-gorgonzola",
      "name": "PEAR & GORGONZOLA",
      "category": "salads",
      "description": "honey vinaigrette | pickled shallots | walnuts",
      "dietary": [
        "V",
        "GF"
      ]
    },
    {
      "id": "shaved-brussels-sprouts",
      "name": "SHAVED BRUSSELS SPROUTS",
      "category": "salads",
      "description": "toasted hazelnuts | crushed red grapes | aged gouda",
      "dietary": [
        "V",
        "GF"
      ]
    },
    {
      "id": "30-day-wet-aged-prime-tomahawk",
      "name": "30-DAY WET AGED PRIME TOMAHAWK",
      "category": "butchers-prime",
      "description": "USA | all-american beef sourced by linz meats",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": true
    },
    {
      "id": "sher-farms-wagyu-beef-8oz-top-cap",
      "name": "SHER FARMS WAGYU BEEF — 8OZ TOP CAP",
      "category": "butchers-prime",
      "description": "australian",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "20oz-40-day-dry-aged-bone-in-ribeye",
      "name": "20OZ 40-DAY DRY AGED BONE-IN RIBEYE",
      "category": "butchers-prime",
      "description": "USA",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": true
    },
    {
      "id": "mayura-chocolate-fed-wagyu-new-york",
      "name": "MAYURA CHOCOLATE-FED WAGYU NEW YORK",
      "category": "butchers-prime",
      "description": "australian",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "parmesan-crusted-filet",
      "name": "PARMESAN-CRUSTED FILET",
      "category": "butchers-prime",
      "description": "USA | roasted allium | veal reduction",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "chicken-parmesan-a-la-raj",
      "name": "CHICKEN PARMESAN A LA RAJ",
      "category": "entrees",
      "description": "fresh mozzarella | spicy pomodoro | pistachio pesto",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "faroe-island-salmon",
      "name": "FAROE ISLAND SALMON",
      "category": "entrees",
      "description": "beech mushrooms | ponzu brown butter",
      "dietary": [
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "free-range-berkshire-pork-chop",
      "name": "FREE RANGE BERKSHIRE PORK CHOP",
      "category": "entrees",
      "description": "heirloom apple butter | braised kale | bbq lentils",
      "dietary": [
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "braised-short-rib",
      "name": "BRAISED SHORT-RIB",
      "category": "entrees",
      "description": "carrots | onion roast | pea shoots",
      "dietary": [
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "maine-diver-wild-scallops",
      "name": "MAINE DIVER WILD SCALLOPS",
      "category": "entrees",
      "description": "caramelized corn | parsnip mousse | ají amarillo",
      "dietary": [
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false
    },
    {
      "id": "branzino",
      "name": "BRANZINO",
      "category": "entrees",
      "description": "salsa verde | castel vetrano olives | baked lemon",
      "dietary": [
        "DF",
        "GF"
      ]
    },
    {
      "id": "seasonal-squash-risotto",
      "name": "SEASONAL SQUASH RISOTTO",
      "category": "entrees",
      "description": "rosemary | seasonal vegetables | aged parmesan",
      "dietary": [
        "V",
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false
    },
    {
      "id": "the-original-100-cheesesteak",
      "name": "THE ORIGINAL $100 CHEESESTEAK",
      "category": "entrees",
      "description": "+ add glass of Dom Perignon",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": true
    },
    {
      "id": "shepherd-s-farm-lamb-chops",
      "name": "SHEPHERD’S FARM LAMB CHOPS",
      "category": "entrees",
      "description": "heirloom potatoes | herbed chermoula | lemon labneh",
      "dietary": [
        "GF"
      ]
    },
    {
      "id": "hot-seafood-plateau",
      "name": "HOT SEAFOOD PLATEAU",
      "category": "entrees",
      "description": "shrimp | cold water lobster | king crab | roasted bay scallops | oysters | clams | + gnocchiette pasta",
      "dietary": []
    },
    {
      "id": "charred-brussels",
      "name": "CHARRED BRUSSELS",
      "category": "sides",
      "description": "",
      "dietary": [
        "V",
        "GF"
      ]
    },
    {
      "id": "miso-mushrooms",
      "name": "MISO MUSHROOMS",
      "category": "sides",
      "description": "",
      "dietary": [
        "V",
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif",
      "featured": false
    },
    {
      "id": "sweet-corn-pudding",
      "name": "SWEET CORN PUDDING",
      "category": "sides",
      "description": "",
      "dietary": [
        "V"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif",
      "featured": false
    },
    {
      "id": "yukon-potato-puree",
      "name": "YUKON POTATO PUREE",
      "category": "sides",
      "description": "",
      "dietary": [
        "V",
        "GF"
      ]
    },
    {
      "id": "gh-mac-n-cheese",
      "name": "GH MAC | N | CHEESE",
      "category": "sides",
      "description": "",
      "dietary": [
        "V"
      ]
    },
    {
      "id": "parmesan-truffle-fries",
      "name": "PARMESAN TRUFFLE FRIES",
      "category": "sides",
      "description": "",
      "dietary": [
        "V",
        "GF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif",
      "featured": false
    },
    {
      "id": "roasted-broccolini",
      "name": "ROASTED BROCCOLINI",
      "category": "sides",
      "description": "",
      "dietary": [
        "V",
        "GF",
        "DF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif",
      "featured": false
    },
    {
      "id": "au-gratin-potatoes",
      "name": "AU GRATIN POTATOES",
      "category": "sides",
      "description": "",
      "dietary": [
        "V"
      ]
    },
    {
      "id": "roasted-carrots",
      "name": "ROASTED CARROTS",
      "category": "sides",
      "description": "",
      "dietary": [
        "V",
        "GF"
      ]
    },
    {
      "id": "wagyu-fried-rice",
      "name": "WAGYU FRIED RICE",
      "category": "sides",
      "description": "",
      "dietary": [
        "DF"
      ],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7619e9111472eddb538e4_444A6062.avif",
      "featured": false
    },
    {
      "id": "smoked-salmon-tier-brunch",
      "name": "Smoked Salmon Tier",
      "category": "brunch-table",
      "description": "bagel | traditional components",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/68136f525e0737a996bae848_67fd6a90e8ec14288cfaa609_4.6.25%20GMG_TGH_BRUNCH%20CAMPAIGN_DAY%202-267%400.33x.jpg",
      "featured": true
    },
    {
      "id": "gh-sweet-roll-brunch",
      "name": "GH Sweet Roll",
      "category": "brunch-table",
      "description": "cinnamon sugar | cream cheese frosted | pecan praline",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/68136f525e0737a996bae848_67fd6a90e8ec14288cfaa609_4.6.25%20GMG_TGH_BRUNCH%20CAMPAIGN_DAY%202-267%400.33x.jpg",
      "featured": false
    },
    {
      "id": "organic-seasonal-fruit-brunch",
      "name": "Organic Seasonal Fruit",
      "category": "brunch-table",
      "description": "citrus | seasonal fruit | elderflower-lychee syrup | mint",
      "dietary": []
    },
    {
      "id": "nonna-s-banana-bread-brunch",
      "name": "Nonna's Banana Bread",
      "category": "brunch-table",
      "description": "roasted honey butter | walnuts",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/68136f525e0737a996bae848_67fd6a90e8ec14288cfaa609_4.6.25%20GMG_TGH_BRUNCH%20CAMPAIGN_DAY%202-267%400.33x.jpg",
      "featured": false
    },
    {
      "id": "home-made-granola-brunch",
      "name": "Home Made Granola",
      "category": "brunch-table",
      "description": "greek yogurt | berries | acacia honey",
      "dietary": []
    },
    {
      "id": "cheese-charcuterie-board-brunch",
      "name": "Cheese & Charcuterie Board",
      "category": "brunch-table",
      "description": "chef selection fine cheeses and meats",
      "dietary": []
    },
    {
      "id": "bread-and-pastries-brunch",
      "name": "Bread and Pastries",
      "category": "brunch-table",
      "description": "key lime tarts | chocolate croissant | ham and cheese croissant | house made seasonal jelly",
      "dietary": []
    },
    {
      "id": "half-lobster-brunch",
      "name": "Half Lobster",
      "category": "brunch-raw-bar",
      "description": "chilled or grilled | brown butter",
      "dietary": []
    },
    {
      "id": "shrimp-cocktail-brunch",
      "name": "Shrimp Cocktail",
      "category": "brunch-raw-bar",
      "description": "chili cocktail sauce | lemon",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false
    },
    {
      "id": "roasted-king-crab-brunch",
      "name": "Roasted King Crab",
      "category": "brunch-raw-bar",
      "description": "uni butter | chili ponzu",
      "dietary": []
    },
    {
      "id": "coastal-oysters-6-brunch",
      "name": "Coastal Oysters (6)",
      "category": "brunch-raw-bar",
      "description": "chilled with cocktail sauce | mignonette",
      "dietary": []
    },
    {
      "id": "seafood-plateau-brunch",
      "name": "Seafood Plateau",
      "category": "brunch-raw-bar",
      "description": "chilled or warm | shrimp | cold water lobster | king crab | roasted bay scallop | oysters | clams",
      "dietary": []
    },
    {
      "id": "kaluga-caviar-brioche-brunch",
      "name": "Kaluga Caviar Brioche",
      "category": "brunch-raw-bar",
      "description": "chives | horseradish | brown butter crème fraiche",
      "dietary": []
    },
    {
      "id": "avocado-toast-austin",
      "name": "AVOCADO TOAST",
      "category": "brunch-mains",
      "description": "togarashi | soft boiled egg | miso",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "spicy-rigatoni-austin",
      "name": "SPICY RIGATONI",
      "category": "brunch-mains",
      "description": "+ add king crab 45 / chicken 16 / steak 29",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false,
      "locations": [
        "austin"
      ]
    },
    {
      "id": "gh-breakfast-sando-austin",
      "name": "GH BREAKFAST SANDO",
      "category": "brunch-mains",
      "description": "sausage | hash brown | american cheese",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "creme-anglaise-french-toast-austin",
      "name": "CREME ANGLAISE FRENCH TOAST",
      "category": "brunch-mains",
      "description": "bananas | spiced whipped cream | rum maple syrup",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "classic-breakfast-plate-austin",
      "name": "CLASSIC BREAKFAST PLATE",
      "category": "brunch-mains",
      "description": "2 eggs any style | bacon | house breakfast potatoes",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "blt-benedicts-austin",
      "name": "BLT BENEDICTS",
      "category": "brunch-mains",
      "description": "bacon | lobster hollandaise | home fries",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "short-rib-hash-austin",
      "name": "SHORT RIB HASH",
      "category": "brunch-mains",
      "description": "roasted peppers | eggs any style | caramelized onions",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "wagyu-flat-iron-austin",
      "name": "WAGYU FLAT IRON",
      "category": "brunch-mains",
      "description": "2 eggs any style | breakfast potatoes",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "chicken-and-waffles-austin",
      "name": "CHICKEN AND WAFFLES",
      "category": "brunch-mains",
      "description": "cheddar | bacon | chili maple syrup",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "omelette-of-the-day-austin",
      "name": "OMELETTE OF THE DAY",
      "category": "brunch-mains",
      "description": "",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "huevos-rancheros-austin",
      "name": "HUEVOS RANCHEROS",
      "category": "brunch-mains",
      "description": "roasted chile sauce | pickled shallots | chorizo",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "wagyu-f-o-burger-austin",
      "name": "WAGYU F.O. BURGER",
      "category": "brunch-mains",
      "description": "caramelized onions | onion rings | parmesan truffle fries",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "chicken-and-waffles-nv-az",
      "name": "Chicken and Waffles",
      "category": "brunch-mains",
      "description": "cheddar | bacon | chili maple syrup",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "wagyu-flat-iron-and-eggs-nv-az",
      "name": "Wagyu Flat Iron and Eggs",
      "category": "brunch-mains",
      "description": "eggs any style | breakfast potatoes",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "short-rib-hash-nv-az",
      "name": "Short Rib Hash",
      "category": "brunch-mains",
      "description": "kale | potatoes | hollandaise | any style egg",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "blt-benedicts-nv-az",
      "name": "BLT Benedicts",
      "category": "brunch-mains",
      "description": "bacon | lobster hollandaise | home fries",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "egg-croissant-sandwich-nv-az",
      "name": "Egg Croissant Sandwich",
      "category": "brunch-mains",
      "description": "greek olive tapenade | capriani tomatoes | mix greens + add smoked salmon 16",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "organic-eggs-any-style-nv-az",
      "name": "Organic Eggs (Any Style)",
      "category": "brunch-mains",
      "description": "served with home fries",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "beverly-cobb-salad-nv-az",
      "name": "Beverly Cobb Salad",
      "category": "brunch-mains",
      "description": "fennel dressing | cucumbers | cherry tomatoes | bacon | corn | avocado + add king crab 45 / chicken 16 / steak 29",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "spicy-rigatoni-nv-az",
      "name": "Spicy Rigatoni",
      "category": "brunch-mains",
      "description": "+ add king crab 45 / chicken 16 / steak 29",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false,
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "avocado-toast-nv-az",
      "name": "Avocado Toast",
      "category": "brunch-mains",
      "description": "charred avocado eggs any style | grilled corn",
      "dietary": [],
      "locations": [
        "las-vegas",
        "scottsdale"
      ]
    },
    {
      "id": "gh-margarita-cocktail",
      "name": "GH MARGARITA",
      "category": "cocktails-light-bright",
      "description": "choice of tequila or mezcal, fresh lime, white coconut tea infused-agave, caribbean orange liquor",
      "dietary": []
    },
    {
      "id": "magic-mushroom-cocktail",
      "name": "MAGIC MUSHROOM",
      "category": "cocktails-light-bright",
      "description": "tequila, genepy, cucumber, sweet pepper, ashwagandha infused agave, lemon",
      "dietary": []
    },
    {
      "id": "mulugheta-mojito-cocktail",
      "name": "MULUGHETA MOJITO",
      "category": "cocktails-light-bright",
      "description": "plantation 3 star rum, fresh mint, fruit cart demerara, lime juice, soda",
      "dietary": []
    },
    {
      "id": "bandersnatch-cocktail",
      "name": "BANDERSNATCH",
      "category": "cocktails-light-bright",
      "description": "vodka, kiwi, pineapple, lemongrass ginger cordial, quinquina, lime, house tepache, bitter blend",
      "dietary": []
    },
    {
      "id": "garden-starlight-cocktail",
      "name": "GARDEN STARLIGHT",
      "category": "cocktails-light-bright",
      "description": "lemon verbena gin, elderflower, stone fruit blend, basil, bubbles, shimmer",
      "dietary": []
    },
    {
      "id": "the-duchess",
      "name": "THE DUCHESS",
      "category": "cocktails-light-bright",
      "description": "choice of tequila or mezcal, house verdita, chili pepper blend agave, lime",
      "dietary": [],
      "locations": [
        "austin",
        "las-vegas"
      ]
    },
    {
      "id": "the-dutchess",
      "name": "THE DUTCHESS",
      "category": "cocktails-light-bright",
      "description": "choice of tequila or mezcal, house verdita, chili pepper blend agave, lime",
      "dietary": [],
      "locations": [
        "scottsdale"
      ]
    },
    {
      "id": "disappearing-act",
      "name": "DISAPPEARING ACT",
      "category": "cocktails-light-bright",
      "description": "house rum blend, lime, passionfruit, fruit cart demerara, creole shrubb, cilantro",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "properly-improper-cocktail",
      "name": "PROPERLY IMPROPER",
      "category": "cocktails-spirit-forward",
      "description": "rye whiskey, blackberry, earl grey cordial, lemon, mint, bitters",
      "dietary": []
    },
    {
      "id": "the-gryphon-cocktail",
      "name": "THE GRYPHON",
      "category": "cocktails-spirit-forward",
      "description": "honey butter bourbon, spiced vanilla demerara, ango, orange oil",
      "dietary": []
    },
    {
      "id": "gh-espresso-martini",
      "name": "GH ESPRESSO MARTINI",
      "category": "cocktails-bold-rich",
      "description": "house made croissant infused Tito's Vodka, espresso, amaro, borghetti, spiced demerara, vanilla cold foam, mocha dust",
      "dietary": []
    },
    {
      "id": "the-caterpillar-s-cloud",
      "name": "THE CATERPILLAR'S CLOUD",
      "category": "cocktails-spirit-free",
      "description": "Seedlip spice, prickly pear, cucumber, lime, agave",
      "dietary": []
    },
    {
      "id": "six-impossible-things",
      "name": "SIX IMPOSSIBLE THINGS",
      "category": "cocktails-spirit-free",
      "description": "seedlip grove, salted ginger cordial, sage, lemon",
      "dietary": []
    },
    {
      "id": "regal-decree",
      "name": "REGAL DECREE",
      "category": "cocktails-spirit-free",
      "description": "elderflower, spiced dem, san pellegrino lemon, non-alcoholic prosecco",
      "dietary": [],
      "locations": [
        "austin",
        "las-vegas"
      ]
    },
    {
      "id": "hidden-blossom",
      "name": "HIDDEN BLOSSOM",
      "category": "cocktails-spirit-free",
      "description": "seedlip grove 42, hibiscus, pink peppercorn, san pellegrino lemon",
      "dietary": [],
      "locations": [
        "scottsdale"
      ]
    },
    {
      "id": "magic-mushroom-theatrical",
      "name": "MAGIC MUSHROOM",
      "category": "cocktails-theatrical",
      "description": "tequila, genepy, cucumber, sweet pepper, ashwagandha infused agave, lemon served in mini forest setting accompanied by a seasonal citrus fog",
      "dietary": []
    },
    {
      "id": "tulgey-woods",
      "name": "TULGEY WOODS",
      "category": "cocktails-theatrical",
      "description": "seasonal margarita served at the foot of a tree accompanied by an orange blossom and rose water fog",
      "dietary": []
    },
    {
      "id": "tea-party",
      "name": "TEA PARTY",
      "category": "cocktails-theatrical",
      "description": "ketel one grapefruit and rose vodka, cointreau, lillet, lemon juice, fruit cart demerara, raspberry syrup served in a whimsical glass teapot accompanied by a rotating amuse bouche",
      "dietary": [],
      "locations": [
        "austin"
      ]
    },
    {
      "id": "wonderland-martini",
      "name": "WONDERLAND MARTINI",
      "category": "cocktails-theatrical",
      "description": "vodka, fresh watermelon, cranberry grape cordial, vanilla syrup, lime, vermouth presented in a martini glass nested in a seasonal 'Alice in Wonderland' themed terrarium, from which a watermelon-scented cloud emerges",
      "dietary": [],
      "locations": [
        "scottsdale"
      ]
    },
    {
      "id": "gh-margarita-hh",
      "name": "GH MARGARITA",
      "category": "hh-cocktails",
      "description": "choice of tequila or mezcal, fresh lime, white coconut tea infused-agave, caribbean orange liquor",
      "dietary": [],
      "price": "9"
    },
    {
      "id": "magic-mushroom-hh",
      "name": "MAGIC MUSHROOM",
      "category": "hh-cocktails",
      "description": "tequila, genepy, cucumber, sweet pepper, ashwagandha infused agave, lemon",
      "dietary": [],
      "price": "9"
    },
    {
      "id": "mulugheta-mojito-hh",
      "name": "MULUGHETA MOJITO",
      "category": "hh-cocktails",
      "description": "white rum, fresh mint, fruit cart demerara, lime juice, soda",
      "dietary": [],
      "price": "9"
    },
    {
      "id": "the-gryphon-hh",
      "name": "THE GRYPHON",
      "category": "hh-cocktails",
      "description": "honey butter bourbon, spiced vanilla demerara, ango, orange oil",
      "dietary": [],
      "price": "9"
    },
    {
      "id": "classic-martini-hh",
      "name": "CLASSIC MARTINI",
      "category": "hh-cocktails",
      "description": "choice of vodka or gin, vermouth, lemon oil",
      "dietary": [],
      "price": "9"
    },
    {
      "id": "dirty-martini-hh",
      "name": "DIRTY MARTINI",
      "category": "hh-cocktails",
      "description": "choice of vodka or gin, vermouth, olive brine",
      "dietary": [],
      "price": "9"
    },
    {
      "id": "old-fashion-hh",
      "name": "OLD FASHION",
      "category": "hh-cocktails",
      "description": "Bourbon, Demerara, Angostura, Orange Oil",
      "dietary": [],
      "price": "9"
    },
    {
      "id": "coastal-oysters-hh",
      "name": "COASTAL OYSTERS",
      "category": "hh-bites",
      "description": "chilled with cocktail sauce | mignonette",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false,
      "price": "2 per"
    },
    {
      "id": "taylor-bay-scallop-ceviche-hh",
      "name": "TAYLOR BAY SCALLOP CEVICHE",
      "category": "hh-bites",
      "description": "yuzu | lychee | lavender | lime",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false,
      "price": "4 per"
    },
    {
      "id": "tuna-cones-hh",
      "name": "TUNA CONES",
      "category": "hh-bites",
      "description": "chives",
      "dietary": [],
      "price": "5 per"
    },
    {
      "id": "spicy-salmon-cones-hh",
      "name": "SPICY SALMON CONES",
      "category": "hh-bites",
      "description": "sriracha | kewpie mayo | yuzu",
      "dietary": [],
      "price": "4 per"
    },
    {
      "id": "street-corn-hh",
      "name": "STREET CORN",
      "category": "hh-bites",
      "description": "cilantro | lime | roasted chili",
      "dietary": [],
      "price": "8"
    },
    {
      "id": "little-gem-caesar-hh",
      "name": "LITTLE GEM CAESAR",
      "category": "hh-bites",
      "description": "rustic house-made croutons | grated reggiano",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false,
      "price": "10"
    },
    {
      "id": "charred-moroccan-beet-hh",
      "name": "CHARRED MOROCCAN BEET",
      "category": "hh-bites",
      "description": "cucumber yogurt | pistachio dukkah | burnt citrus",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg",
      "featured": false,
      "price": "12"
    },
    {
      "id": "spicy-rigatoni-hh",
      "name": "SPICY RIGATONI",
      "category": "hh-bites",
      "description": "pancetta | calabrian chili | house-made pomodoro",
      "dietary": [],
      "image": "https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif",
      "featured": false,
      "price": "15"
    },
    {
      "id": "chicken-nuggets-hh",
      "name": "CHICKEN NUGGETS",
      "category": "hh-bites",
      "description": "ranch | sweet bbq aioli",
      "dietary": [],
      "price": "10"
    },
    {
      "id": "thai-fries-hh",
      "name": "THAI FRIES",
      "category": "hh-bites",
      "description": "crispy garlic | roasted peanuts | sweet soy",
      "dietary": [],
      "price": "11"
    },
    {
      "id": "the-f-o-burger-hh",
      "name": "THE F.O. BURGER",
      "category": "hh-bites",
      "description": "carmelized onions | onion rings | parmesan truffle fries",
      "dietary": [],
      "price": "18"
    },
    {
      "id": "chicken-wings-hh",
      "name": "CHICKEN WINGS",
      "category": "hh-bites",
      "description": "pickles | kimchi | gochujang ranch",
      "dietary": [],
      "price": "12"
    }
  ];
