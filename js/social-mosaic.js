/**
 * Social mosaic — @welcometgh
 *
 * An editorial grid rather than a uniform one: tiles take different spans, and
 * each sits at its own depth so it drifts at its own speed as the page moves.
 * The parallax is transform-only and runs on a rAF tick that is gated by an
 * IntersectionObserver, so nothing is computed while the section is off screen.
 */

import { SOCIAL_POSTS, SOCIAL_HANDLE, SOCIAL_PROFILE } from '../data/social-feed.js';

// Span pattern for the editorial grid, cycled over however many posts exist.
const SHAPES = ['is-tall', '', 'is-wide', '', '', 'is-tall', '', 'is-wide'];
const DEPTHS = [0.10, 0.04, 0.07, 0.02, 0.09, 0.03, 0.06, 0.05];

export function initSocialMosaic() {
  const mount = document.getElementById('socialMosaic');
  if (!mount || !SOCIAL_POSTS.length) return;

  mount.innerHTML = SOCIAL_POSTS.map((post, i) => `
    <a class="mosaic-tile ${SHAPES[i % SHAPES.length]}"
       href="${post.permalink}" target="_blank" rel="noopener"
       style="--depth: ${DEPTHS[i % DEPTHS.length]}">
      <img src="${post.image}" alt="${post.alt}" loading="lazy" decoding="async" />
      <span class="mosaic-caption">
        <span class="mosaic-handle">${SOCIAL_HANDLE}</span>
        <span class="mosaic-text">${post.caption}</span>
      </span>
    </a>`).join('');

  const link = document.getElementById('socialProfileLink');
  if (link) link.href = SOCIAL_PROFILE;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  // ---- depth ------------------------------------------------------------

  const tiles = [...mount.querySelectorAll('.mosaic-tile')];
  let running = false;
  let frame = null;

  function drift() {
    frame = null;
    const middle = window.innerHeight / 2;
    tiles.forEach((tile) => {
      const box = tile.getBoundingClientRect();
      // How far this tile's centre is from the middle of the screen, -1..1
      const offset = (box.top + box.height / 2 - middle) / window.innerHeight;
      const depth = parseFloat(tile.style.getPropertyValue('--depth')) || 0.05;
      tile.style.setProperty('--shift', `${(-offset * depth * 140).toFixed(1)}px`);
    });
  }

  function onScroll() {
    if (frame || !running) return;
    frame = requestAnimationFrame(drift);
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      running = entry.isIntersecting;
      if (running) {
        window.addEventListener('scroll', onScroll, { passive: true });
        drift();
      } else {
        window.removeEventListener('scroll', onScroll);
        if (frame) cancelAnimationFrame(frame);
        frame = null;
      }
    },
    { rootMargin: '120px 0px' }
  );

  observer.observe(mount);
  window.addEventListener('resize', onScroll, { passive: true });
}
