/**
 * Semi-Circle Orbital Culinary Dial Engine - The Guest House
 * Continuous orbital animation, apex proximity scaling, momentum scrub, touch swipe & reservation trigger
 */

import { MENU_ITEMS } from '../data/menu.js';
import { openConciergeDrawer } from './reservations.js';

const FALLBACK_ITEMS = [
  { id: 'tomahawk', name: '38oz 30-Day Prime Tomahawk', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760c6d9a441e8f237efeb_444A5645.avif' },
  { id: 'caviar', name: 'Traditional Caviar Service', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67e6a2e983921a019c3bc1fc_The%20Guest%20House-028-Edit-%20Kieran%20Reeves%20Photography%20%5BWeb-Res%5D.jpg' },
  { id: 'oysters', name: 'Coastal Oysters', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760e7b8353a26440fc469_444A6464.avif' },
  { id: 'shrimp', name: 'Shrimp Cocktail', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760b73dfcaad6e7c7a5db_444A5453.avif' },
  { id: 'hamachi', name: 'Hamachi Crudo', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760d69614a9ec851a7be8_444A6451.avif' },
  { id: 'rigatoni', name: 'Spicy Rigatoni', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d7611e92d8f99e4f55fa72_444A6793.avif' },
  { id: 'wagyu', name: 'Hot Rock Tableside Wagyu', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760c6d9a441e8f237efeb_444A5645.avif' },
  { id: 'mushroom', name: 'The Magic Mushroom Cocktail', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d761642a9764c6d415767d_444A5548.avif' },
  { id: 'salmon', name: 'Faroe Island Salmon', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/67d760d69614a9ec851a7be8_444A6451.avif' },
  { id: 'margarita', name: 'GH Velvet Margarita', image: 'https://cdn.prod.website-files.com/67bb6386df4aa62305345be6/69daeebce8bb681039705771_GH%20MARGARITA%202.jpeg' }
];

export function initOrbitalMenu() {
  const stage = document.getElementById('orbitalStage');
  const teaserCard = document.getElementById('orbitalTeaser');
  if (!stage) return;

  // Curated 10 Signature Highlights for smooth 3D orbital wheel
  let filteredItems = [];
  if (Array.isArray(MENU_ITEMS)) {
    filteredItems = MENU_ITEMS.filter(item => item && item.image && item.featured).slice(0, 10);
  }
  if (!filteredItems || filteredItems.length === 0) {
    filteredItems = FALLBACK_ITEMS;
  }

  // Geometry Parameters
  let isMobile = window.innerWidth <= 900;
  let radius = isMobile ? 135 : 210;
  let discSize = isMobile ? 72 : 96;

  // Rotation State
  let currentAngle = 90; // Start angle in degrees
  let targetSpeed = 0.35; // Continuous ambient rotation speed (deg/frame)
  let speed = targetSpeed;
  let isHovered = false;
  let isDragging = false;
  let lastMouseY = 0;
  let velocityY = 0;

  // Render Dish Discs into Stage
  function createDiscs() {
    stage.innerHTML = `
      <div class="orbital-ring orbital-ring-outer"></div>
      <div class="orbital-ring orbital-ring-inner"></div>
    `;

    filteredItems.forEach((item, index) => {
      const disc = document.createElement('div');
      disc.className = 'dish-disc';
      disc.dataset.id = item.id;
      disc.dataset.index = index;
      disc.innerHTML = `<img src="${item.image}" alt="${item.name}" class="dish-disc-img" />`;
      
      disc.addEventListener('click', () => {
        // Rotate selected dish to apex (180 deg facing left)
        const step = 360 / filteredItems.length;
        const targetAngle = 180 - (index * step);
        currentAngle = targetAngle;
        updatePositions();
        
        // Launch concierge reservation drawer for this dish
        openConciergeDrawer();
      });

      stage.appendChild(disc);
    });

    updatePositions();
  }

  // Update Disc Positions on Semi-Circle Arc
  function updatePositions() {
    const stageRect = stage.getBoundingClientRect();
    isMobile = window.innerWidth <= 900;
    radius = isMobile ? 130 : 190;
    discSize = isMobile ? 70 : 88;

    // Origin aligned with concentric gold rings (60% left)
    const originX = stageRect.width * (isMobile ? 0.50 : 0.60);
    const originY = stageRect.height / 2;

    const total = filteredItems.length;
    const step = 360 / total;

    let closestDisc = null;
    let minDistanceToApex = Infinity;

    const discs = stage.querySelectorAll('.dish-disc');
    discs.forEach((disc, index) => {
      let angle = (currentAngle + (index * step)) % 360;
      if (angle < 0) angle += 360;

      const rad = (angle * Math.PI) / 180;
      const x = originX + radius * Math.cos(rad);
      const y = originY + radius * Math.sin(rad);

      // Apex proximity calculation (Apex is theta = 180 deg, facing left)
      let distFromApex = Math.abs(angle - 180);
      if (distFromApex > 180) distFromApex = 360 - distFromApex;

      let scale = 1.0;
      if (distFromApex < 30) {
        scale = 1.2 - (distFromApex / 30) * 0.2;
      }

      if (distFromApex < minDistanceToApex) {
        minDistanceToApex = distFromApex;
        closestDisc = filteredItems[index];
      }

      disc.style.transform = `translate3d(${x - discSize / 2}px, ${y - discSize / 2}px, 0) scale(${scale})`;
      
      if (distFromApex < 15) {
        disc.classList.add('apex');
      } else {
        disc.classList.remove('apex');
      }
    });

    // Update synchronized Teaser Card
    if (closestDisc && teaserCard) {
      teaserCard.innerHTML = `
        <div class="teaser-info">
          <span class="teaser-name">${closestDisc.name}</span>
        </div>
        <button class="btn-haute btn-primary-gold" id="teaserReserveBtn">Reserve ✦</button>
      `;
      const btn = teaserCard.querySelector('#teaserReserveBtn');
      if (btn) {
        btn.addEventListener('click', () => openConciergeDrawer());
      }
    }
  }

  // Animation Loop (rAF)
  function animate() {
    if (!isHovered && !isDragging) {
      currentAngle += speed;
      // Decay velocity back to targetSpeed
      speed += (targetSpeed - speed) * 0.05;
    } else if (isDragging) {
      speed = velocityY * 0.4;
      currentAngle += speed;
    }

    updatePositions();
    requestAnimationFrame(animate);
  }

  // Event Listeners for Hover, Mouse Drag, Wheel & Touch Physics
  stage.addEventListener('mouseenter', () => { isHovered = true; });
  stage.addEventListener('mouseleave', () => { isHovered = false; isDragging = false; });

  stage.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    velocityY = e.clientY - lastMouseY;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    currentAngle += e.deltaY * 0.15;
    updatePositions();
  }, { passive: false });

  // Mobile Touch Events
  stage.addEventListener('touchstart', (e) => {
    isDragging = true;
    lastMouseY = e.touches[0].clientY;
  }, { passive: true });

  stage.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    velocityY = e.touches[0].clientY - lastMouseY;
    lastMouseY = e.touches[0].clientY;
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('resize', updatePositions);

  // Initialize stage
  createDiscs();
  requestAnimationFrame(animate);
}
