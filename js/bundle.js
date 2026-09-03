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

  // 3. ORBITAL CIRCLE ANIMATION ENGINE
  function initOrbitalMenu() {
    var stage = document.getElementById('orbitalStage');
    var teaserCard = document.getElementById('orbitalTeaser');
    if (!stage || stage.dataset.initialized === 'true') return;
    stage.dataset.initialized = 'true';

    var items = [
      { id: 'tomahawk', name: '38oz 30-Day Prime Tomahawk', image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80' },
      { id: 'caviar', name: 'Traditional Caviar Service', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg' },
      { id: 'oysters', name: 'Coastal Oysters', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif' },
      { id: 'shrimp', name: 'Shrimp Cocktail', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80' },
      { id: 'hamachi', name: 'Hamachi Crudo', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80' },
      { id: 'rigatoni', name: 'Spicy Rigatoni', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80' },
      { id: 'wagyu', name: 'Hot Rock Tableside Wagyu', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
      { id: 'mushroom', name: 'The Magic Mushroom Cocktail', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d761642a9764c6d415767d_444A5548.avif' },
      { id: 'salmon', name: 'Faroe Island Salmon', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80' },
      { id: 'margarita', name: 'GH Velvet Margarita', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/69daeebce8bb681039705771_GH%20MARGARITA%202.jpeg' }
    ];

    var currentAngle = 90;
    var targetSpeed = 0.35;
    var speed = targetSpeed;
    var isHovered = false;
    var isDragging = false;
    var lastMouseY = 0;
    var velocityY = 0;

    function createDiscs() {
      stage.innerHTML = '<div class="orbital-ring orbital-ring-outer"></div><div class="orbital-ring orbital-ring-inner"></div>';
      items.forEach(function (item, index) {
        var disc = document.createElement('div');
        disc.className = 'dish-disc';
        disc.dataset.id = item.id;
        disc.dataset.index = index;
        disc.innerHTML = '<img src="' + item.image + '" alt="' + item.name + '" class="dish-disc-img" />';
        disc.addEventListener('click', function () {
          var step = 360 / items.length;
          currentAngle = 180 - (index * step);
          updatePositions();
          window.openConciergeDrawer();
        });
        stage.appendChild(disc);
      });
      updatePositions();
    }

    function updatePositions() {
      var stageRect = stage.getBoundingClientRect();
      var w = stageRect.width || stage.offsetWidth || 500;
      var h = stageRect.height || stage.offsetHeight || 440;

      var isMobile = window.innerWidth <= 768;
      var isTablet = window.innerWidth <= 1024;

      var radius = isMobile ? 130 : (isTablet ? 160 : 190);
      var discSize = isMobile ? 64 : (isTablet ? 76 : 88);

      var originX = w * (isMobile ? 0.50 : 0.60);
      var originY = h / 2;

      var step = 360 / items.length;
      var closestDisc = null;
      var minDistanceToApex = Infinity;

      var discs = stage.querySelectorAll('.dish-disc');
      discs.forEach(function (disc, index) {
        var angle = (currentAngle + (index * step)) % 360;
        if (angle < 0) angle += 360;

        var rad = (angle * Math.PI) / 180;
        var x = originX + radius * Math.cos(rad);
        var y = originY + radius * Math.sin(rad);

        var distFromApex = Math.abs(angle - 180);
        if (distFromApex > 180) distFromApex = 360 - distFromApex;

        var scale = 1.0;
        if (distFromApex < 30) {
          scale = 1.25 - (distFromApex / 30) * 0.25;
        }

        if (distFromApex < minDistanceToApex) {
          minDistanceToApex = distFromApex;
          closestDisc = items[index];
        }

        disc.style.transform = 'translate3d(' + (x - discSize / 2) + 'px, ' + (y - discSize / 2) + 'px, 0) scale(' + scale + ')';
        if (distFromApex < 15) disc.classList.add('apex');
        else disc.classList.remove('apex');
      });

      if (closestDisc && teaserCard) {
        teaserCard.innerHTML = '<div class="teaser-info"><span class="teaser-name">' + closestDisc.name + '</span></div><button class="btn-haute btn-primary-gold" id="teaserReserveBtn">Reserve ✦</button>';
        var btn = teaserCard.querySelector('#teaserReserveBtn');
        if (btn) btn.addEventListener('click', function () { window.openConciergeDrawer(); });
      }
    }

    function animate() {
      if (!isHovered && !isDragging) {
        currentAngle += speed;
        speed += (targetSpeed - speed) * 0.05;
      } else if (isDragging) {
        speed = velocityY * 0.4;
        currentAngle += speed;
      }
      updatePositions();
      requestAnimationFrame(animate);
    }

    stage.addEventListener('mouseenter', function () { isHovered = true; });
    stage.addEventListener('mouseleave', function () { isHovered = false; isDragging = false; });
    stage.addEventListener('mousedown', function (e) { isDragging = true; lastMouseY = e.clientY; });
    window.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      velocityY = e.clientY - lastMouseY;
      lastMouseY = e.clientY;
    });
    window.addEventListener('mouseup', function () { isDragging = false; });

    stage.addEventListener('touchstart', function (e) { isDragging = true; lastMouseY = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener('touchmove', function (e) {
      if (!isDragging) return;
      velocityY = e.touches[0].clientY - lastMouseY;
      lastMouseY = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function () { isDragging = false; });

    window.addEventListener('resize', updatePositions);

    createDiscs();
    requestAnimationFrame(animate);
  }

  // 4. DOM EVENT LISTENERS
  function setupApp() {
    initOrbitalMenu();

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
