/**
 * Shared site chrome — mobile navigation drawer + skip link target.
 * Imported by every page so the header behaves identically everywhere.
 */

export function initSiteChrome() {
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('drawerCloseX');

  if (!drawer) return;

  let lastFocused = null;

  function openDrawer() {
    lastFocused = document.activeElement;
    drawer.classList.add('open');
    drawer.removeAttribute('inert');
    backdrop?.classList.add('active');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeDrawer() {
    if (!drawer.classList.contains('open')) return;
    drawer.classList.remove('open');
    drawer.setAttribute('inert', '');
    backdrop?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }

  drawer.setAttribute('inert', '');
  hamburger?.setAttribute('aria-expanded', 'false');
  hamburger?.setAttribute('aria-controls', 'mobileNavDrawer');

  hamburger?.addEventListener('click', (e) => {
    e.preventDefault();
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });

  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Keep focus inside the drawer while it is open.
  drawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !drawer.classList.contains('open')) return;
    const focusable = drawer.querySelectorAll('a[href], button:not([disabled])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  return { openDrawer, closeDrawer };
}
