/**
 * Main Application Initializer - The Guest House Digital Flagship
 */

import { initLuxuryCursor } from './luxury-cursor.js';
import { initOrbitalMenu } from './orbital-menu.js';
import { initInstagramFeed } from './instagram-feed.js';
import { initReservations, openConciergeDrawer, closeConciergeDrawer } from './reservations.js';
import { injectAeoSchemas } from './aeo-schemas.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Modules
  initLuxuryCursor();
  initReservations();
  injectAeoSchemas();

  // Conditionally initialize page-specific engines
  if (document.getElementById('orbitalStage')) {
    initOrbitalMenu();
  }
  if (document.getElementById('socialFeedTrack')) {
    initInstagramFeed();
  }

  // Mobile Drawer Navigation Controller
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseX');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    if (hamburgerBtn) {
      hamburgerBtn.classList.add('active');
      hamburgerBtn.style.pointerEvents = 'none';
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.style.pointerEvents = 'auto';
    }
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (mobileDrawer?.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    });
  }

  // Close drawers when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeConciergeDrawer();
    }
  });

  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('.mobile-nav-link, button, a').forEach(el => {
      el.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // Global Reserve Triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-reserve-trigger]');
    if (trigger) {
      e.preventDefault();
      const locId = trigger.dataset.location;
      openConciergeDrawer(locId);
    }
  });

  // Mobile Sticky Bottom Bar Trigger
  const mobileStickyBtn = document.getElementById('mobileStickyReserve');
  if (mobileStickyBtn) {
    mobileStickyBtn.addEventListener('click', () => openConciergeDrawer());
  }
});
