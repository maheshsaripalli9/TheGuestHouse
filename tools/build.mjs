/**
 * Build step — writes the shared partials into every page.
 *
 * Two things are injected between markers so they live in one place instead of
 * nine copies: the Schema.org JSON-LD, and the site footer (which is built from
 * data/locations.js, so a change of address or phone number lands everywhere).
 *
 *   npm run build          # write
 *   npm run check          # fail if any page is stale
 */

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { buildRestaurantSchemas } from '../js/aeo-schemas.js';
import { LOCATIONS } from '../data/locations.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');

const PAGES = [
  'index.html',
  'austin/index.html',
  'las-vegas/index.html',
  'scottsdale/index.html',
  'menu/index.html',
  'austin/menu/index.html',
  'las-vegas/menu/index.html',
  'scottsdale/menu/index.html',
  'private-events/index.html'
];

const LOGO =
  'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e69d474b2d6290e8d9e5f3_GH_Logo_tagline_wht%201.svg';

// These pages still live on the Webflow site and have not been ported yet.
const LEGACY = 'https://www.welcometgh.com';

const footer = `<footer class="footer-haute">
    <div class="container">

      <div class="footer-cta">
        <div>
          <p class="footer-cta-eyebrow">Austin &middot; Las Vegas &middot; Scottsdale</p>
          <p class="footer-cta-line">Every meal a celebration, every guest family.</p>
        </div>
        <button class="btn-haute btn-primary-gold" data-reserve-trigger>&#10022; Reserve a Table</button>
      </div>

      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${LOGO}" alt="The Guest House" class="footer-logo" />
          <p>A social steakhouse, raw bar and wine garden — wood flame grill, theatrical bar, and a room built for a crowd.</p>
          <a href="https://www.instagram.com/welcometgh" target="_blank" rel="noopener" class="social-icon-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>@welcometgh</span>
          </a>
        </div>

        <div class="footer-restaurants">
          <h2 class="footer-col-title">Restaurants</h2>
          <ul class="footer-venues">
${LOCATIONS.map(
  (l) => `            <li>
              <a class="footer-venue-city" href="/${l.id}/">${l.city}, ${l.state}</a>
              <span class="footer-venue-line">${l.address}</span>
              <a class="footer-venue-tel" href="tel:${l.phoneClean}">${l.phone}</a>
              <a class="footer-venue-menu" href="${l.menuPath}">Menu &rarr;</a>
            </li>`
).join('\n')}
          </ul>
        </div>

        <div>
          <h2 class="footer-col-title">Visit</h2>
          <ul class="footer-links">
            <li><a href="/menu/">Menus</a></li>
            <li><a href="/private-events/">Private Events &amp; Groups</a></li>
            <li><a href="#" data-reserve-trigger>Reservations</a></li>
            <li><a href="${LEGACY}/happy-hour" target="_blank" rel="noopener">Happy Hour</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer-col-title">Company</h2>
          <ul class="footer-links">
            <li><a href="${LEGACY}/faq" target="_blank" rel="noopener">FAQ</a></li>
            <li><a href="mailto:jobs@welcometgh.com">Careers</a></li>
            <li><a href="mailto:info@welcometgh.com">Press &amp; Inquiries</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom-row">
        <p>&copy; ${new Date().getFullYear()} The Guest House. All rights reserved.</p>
        <ul class="footer-legal">
          <li><a href="${LEGACY}/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></li>
          <li><a href="${LEGACY}/terms-of-use" target="_blank" rel="noopener">Terms of Use</a></li>
          <li><a href="${LEGACY}/accessibility-statement" target="_blank" rel="noopener">Accessibility</a></li>
        </ul>
      </div>
    </div>
  </footer>`;

const PARTIALS = [
  {
    name: 'schema',
    start: '<!-- tgh:schema:start -->',
    end: '<!-- tgh:schema:end -->',
    body: () =>
      `  <script type="application/ld+json">\n${JSON.stringify(buildRestaurantSchemas())}\n  </script>`,
    fallbackAnchor: '</head>'
  },
  {
    name: 'footer',
    start: '<!-- tgh:footer:start -->',
    end: '<!-- tgh:footer:end -->',
    body: () => '  ' + footer,
    fallbackAnchor: null
  }
];

let stale = 0;

for (const page of PAGES) {
  const path = join(ROOT, page);
  const original = await readFile(path, 'utf8');
  let next = original;

  for (const partial of PARTIALS) {
    const block = `${partial.start}\n${partial.body()}\n  ${partial.end}`;
    const at = next.indexOf(partial.start);

    if (at !== -1) {
      const end = next.indexOf(partial.end, at) + partial.end.length;
      next = next.slice(0, at) + block + next.slice(end);
    } else if (partial.fallbackAnchor) {
      next = next.replace(partial.fallbackAnchor, `  ${block}\n${partial.fallbackAnchor}`);
    } else {
      // First run for the footer: wrap whatever <footer> is already there.
      const fs = next.indexOf('<footer');
      const fe = next.indexOf('</footer>') + '</footer>'.length;
      if (fs === -1) continue;
      next = next.slice(0, fs) + block.trimStart() + next.slice(fe);
    }
  }

  if (next === original) {
    console.log(`  unchanged  ${page}`);
    continue;
  }

  stale++;
  if (check) {
    console.error(`  STALE      ${page}`);
    continue;
  }
  await writeFile(path, next, 'utf8');
  console.log(`  written    ${page}`);
}

if (check && stale) {
  console.error(`\n${stale} page(s) are stale. Run: npm run build`);
  process.exit(1);
}

console.log(`\nPartials current across ${PAGES.length} pages.`);
