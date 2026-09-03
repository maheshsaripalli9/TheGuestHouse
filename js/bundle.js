/**
 * The Guest House - Unified Core Application Bundle
 * Pure vanilla JavaScript - Works flawlessly on file://, http://, and https:// protocols.
 */

(function () {
  // 1. LOCATIONS DATASET
  window.LOCATIONS = [
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
      image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760a537d59632f0fdd36c_665b87c9e4ddba6ce2c4dc5c_The%20Guest%20House-006-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.webp'
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
      image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d76053c435083e21e3f9d6_657e39003b5153896e223fac_image39.avif'
    },
    {
      id: 'scottsdale',
      city: 'Scottsdale',
      state: 'AZ',
      name: 'The Guest House Scottsdale',
      subtitle: 'Modern Culinary Sanctuary & Courtyard',
      address: '15301 N Scottsdale Rd',
      fullAddress: '15301 N Scottsdale Rd, Scottsdale, AZ 85254',
      phone: '(480) 625-4942',
      phoneClean: '4806254942',
      email: 'scottsdale@welcometgh.com',
      openTableRef: '1477102',
      openTableUrl: 'https://www.opentable.com/r/the-guest-house-scottsdale-reservations-scottsdale?restref=1477102&lang=en-US&ot_source=Restaurant%20website',
      image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67bb6387df4aa62305345cd9_annie-spratt-_0F_03SEF-M-unsplash%20(1).webp'
    }
  ];

  // 2. GLOBAL CONTROLLERS (Exposed directly on window)
  window.openMobileNav = function () {
    var drawer = document.getElementById('mobileNavDrawer');
    var backdrop = document.getElementById('mobileNavBackdrop');
    var btn = document.getElementById('hamburgerBtn');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    if (btn) {
      btn.classList.add('active');
      btn.style.pointerEvents = 'none';
    }
    document.body.style.overflow = 'hidden';
  };

  window.closeMobileNav = function () {
    var drawer = document.getElementById('mobileNavDrawer');
    var backdrop = document.getElementById('mobileNavBackdrop');
    var btn = document.getElementById('hamburgerBtn');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    if (btn) {
      btn.classList.remove('active');
      btn.style.pointerEvents = 'auto';
    }
    document.body.style.overflow = '';
  };

  window.toggleMobileNav = function () {
    var drawer = document.getElementById('mobileNavDrawer');
    if (drawer && drawer.classList.contains('open')) {
      window.closeMobileNav();
    } else {
      window.openMobileNav();
    }
  };

  window.openConciergeDrawer = function (locationId) {
    window.closeMobileNav();

    var activeLoc = locationId || 'austin';
    var drawer = document.getElementById('conciergeDrawer');
    var backdrop = document.getElementById('drawerBackdrop');

    if (drawer) {
      drawer.classList.add('open');
      var cityBtns = drawer.querySelectorAll('.city-tab-btn');
      cityBtns.forEach(function (btn) {
        if (btn.dataset.loc === activeLoc) btn.classList.add('active');
        else btn.classList.remove('active');
      });
    }
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeConciergeDrawer = function () {
    var drawer = document.getElementById('conciergeDrawer');
    var backdrop = document.getElementById('drawerBackdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  // 3. DOM EVENT LISTENERS
  function setupApp() {
    // 3-Bar Hamburger Button
    var btn = document.getElementById('hamburgerBtn');
    if (btn) {
      btn.onclick = function (e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        window.toggleMobileNav();
        return false;
      };
    }

    // Drawer Close X Button
    var drawerCloseBtn = document.getElementById('drawerCloseX');
    if (drawerCloseBtn) {
      drawerCloseBtn.onclick = function (e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        }
        window.closeMobileNav();
        return false;
      };
    }

    // Drawer Backdrop
    var backdrop = document.getElementById('mobileNavBackdrop');
    if (backdrop) {
      backdrop.onclick = function (e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        window.closeMobileNav();
        return false;
      };
    }

    // Mobile Nav Links
    var drawer = document.getElementById('mobileNavDrawer');
    if (drawer) {
      var links = drawer.querySelectorAll('.mobile-nav-link');
      links.forEach(function (link) {
        link.onclick = function () {
          window.closeMobileNav();
        };
      });
    }

    // Reserve Table Triggers
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-reserve-trigger]');
      if (trigger) {
        e.preventDefault();
        var locId = trigger.dataset.location;
        window.openConciergeDrawer(locId);
      }
    });

    // Escape Key Handler
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        window.closeMobileNav();
        window.closeConciergeDrawer();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupApp);
  } else {
    setupApp();
  }
})();
