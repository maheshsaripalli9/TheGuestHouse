/**
 * Social gallery — @welcometgh
 *
 * Curated by hand for now. The shape below is exactly what a scheduled
 * Firebase Function should write when the Instagram Graph API is wired up, so
 * switching from curated to live is a data change and nothing else:
 *
 *   { id, image, alt, caption, permalink, postedAt }
 *
 * Notes for whoever builds that Function:
 *
 *   - Instagram's own CDN URLs (scontent-*.cdninstagram.com) are signed and
 *     expire, so they cannot be hotlinked. The Function must copy each image
 *     into Firebase Storage (or /assets/social/) and write that URL here.
 *   - Pull /me/media?fields=id,media_url,permalink,caption,timestamp with a
 *     long-lived Business token, refreshed every 60 days. Once a day is
 *     plenty for a restaurant.
 *   - Only the account's own posts. A profile grid also surfaces tagged posts
 *     from other accounts, which are not ours to republish.
 *
 * Engagement counts are deliberately absent. The previous version displayed
 * invented ones ("4,892 Likes"); if they are wanted back they have to come
 * from the API.
 */

const PROFILE = 'https://www.instagram.com/welcometgh/';
const CDN = 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/';

export const SOCIAL_HANDLE = '@welcometgh';
export const SOCIAL_PROFILE = PROFILE;

export const SOCIAL_POSTS = [
  {
    id: 'tomahawk',
    image: CDN + '67e6a3d9ddf27ba2f3fb5619_The%20Guest%20House-004-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    alt: 'A 30-day wet aged prime tomahawk resting on the board before carving',
    caption: 'Wood flame, white oak, and a 38oz tomahawk',
    permalink: PROFILE,
    postedAt: null
  },
  {
    id: 'caviar-service',
    image: CDN + '67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg',
    alt: 'Traditional caviar service with accoutrements on ice',
    caption: 'Royal Daurenki, Royal Ossetra, Tsar Daurenki',
    permalink: PROFILE,
    postedAt: null
  },
  {
    id: 'magic-mushroom',
    image: CDN + '67d761642a9764c6d415767d_444A5548.avif',
    alt: 'The Magic Mushroom cocktail under its citrus vapour cloud',
    caption: 'The Magic Mushroom, served in a forest of its own',
    permalink: PROFILE,
    postedAt: null
  },
  {
    id: 'raw-bar',
    image: CDN + '67d760e7b8353a26440fc469_444A6464.avif',
    alt: 'Tuna and caviar cones set on crushed ice at the raw bar',
    caption: 'Tuna & caviar cones, straight off the ice',
    permalink: PROFILE,
    postedAt: null
  },
  {
    id: 'dining-room',
    image: CDN + '67d760a537d59632f0fdd36c_665b87c9e4ddba6ce2c4dc5c_The%20Guest%20House-006-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.webp',
    alt: 'The main dining room at night, lit low and full',
    caption: 'The room, most nights',
    permalink: PROFILE,
    postedAt: null
  },
  {
    id: 'vegas-room',
    image: CDN + '67d76053c435083e21e3f9d6_657e39003b5153896e223fac_image39.avif',
    alt: 'The Las Vegas dining room and bar',
    caption: 'Las Vegas, after dark',
    permalink: PROFILE,
    postedAt: null
  },
  {
    id: 'margarita',
    image: CDN + '69daeebce8bb681039705771_GH%20MARGARITA%202.jpeg',
    alt: 'The GH Margarita, salted and served up',
    caption: 'GH Margarita — tequila or mezcal, your call',
    permalink: PROFILE,
    postedAt: null
  },
  {
    id: 'scottsdale-room',
    image: CDN + '695b5245d6fa68239c05892b_67b4aaa333f00519aa469ef1_444A8474-Edit.webp',
    alt: 'The Scottsdale dining room',
    caption: 'Scottsdale Quarter',
    permalink: PROFILE,
    postedAt: null
  }
];
