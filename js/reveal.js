/**
 * Scroll choreography — The Guest House
 *
 * Real 3D, done with CSS transforms rather than WebGL: sections arrive from
 * behind the screen plane and rotate flat, and cards tilt under the pointer.
 * Everything is GPU-composited, costs no download, and degrades to "already
 * visible" when JavaScript or motion is unavailable.
 *
 * The page is readable at rest — nothing is parked at opacity 0 unless the
 * inline head snippet has confirmed JS is running.
 */

const REVEAL_TARGETS = [
  '.section-header-center',
  '.sanctuary-card',
  '.repertoire-card',
  '.chooser-card',
  '.inquiry-card',
  '.course',
  '.subpage-hero-content',
  '.menu-hero .container-haute',
  '[data-reveal]'
];

const TILT_TARGETS = '.sanctuary-card, .repertoire-card, .chooser-card, .inquiry-card';
const MAX_TILT = 5; // degrees — any more reads as a gimmick

let observer = null;
let enabled = false;

/**
 * Enrol any target that has not been enrolled yet. Safe to call again after
 * rendering — the menu page rebuilds its courses on every tab change.
 */
export function refreshReveal() {
  if (!enabled || !observer) return;

  const fresh = [...document.querySelectorAll(REVEAL_TARGETS.join(','))].filter(
    (el) => !el.classList.contains('will-reveal')
  );
  if (!fresh.length) return;

  // Stagger siblings so a row of cards deals in rather than snapping together.
  const seen = new Map();
  fresh.forEach((el) => {
    const index = seen.get(el.parentElement) || 0;
    seen.set(el.parentElement, index + 1);
    el.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 90}ms`);
    el.classList.add('will-reveal');
    observer.observe(el);
  });

  // Anything already on screen arrives immediately rather than waiting for a
  // scroll that may never come.
  requestAnimationFrame(() => {
    fresh.forEach((el) => {
      const box = el.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) el.classList.add('is-revealed');
    });
  });

  attachTilt();
}

export function initReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;

  if (reduceMotion.matches) {
    root.classList.remove('js-motion');
    return;
  }

  enabled = true;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target); // one arrival each, no yo-yo
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  );

  refreshReveal();

  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) {
      root.classList.remove('js-motion');
      document.querySelectorAll('.will-reveal').forEach((el) => el.classList.add('is-revealed'));
    }
  });
}

// ---- pointer tilt --------------------------------------------------------

function attachTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll(TILT_TARGETS).forEach((card) => {
    if (card.classList.contains('has-tilt')) return;
    {
      let frame = null;

      card.addEventListener('pointermove', (e) => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = null;
          const box = card.getBoundingClientRect();
          const px = (e.clientX - box.left) / box.width - 0.5;
          const py = (e.clientY - box.top) / box.height - 0.5;
          card.style.setProperty('--tilt-x', `${(-py * MAX_TILT).toFixed(2)}deg`);
          card.style.setProperty('--tilt-y', `${(px * MAX_TILT).toFixed(2)}deg`);
        });
      });

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });

      card.classList.add('has-tilt');
    }
  });
}
