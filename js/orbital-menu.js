/**
 * Semi-Circle Orbital Culinary Dial Engine - The Guest House
 * Continuous orbital animation, apex proximity scaling, momentum scrub, touch swipe & reservation trigger
 */

import { MENU_ITEMS } from '../data/menu.js';
import { openConciergeDrawer } from './reservations.js';

export function initOrbitalMenu() {
  const stage = document.getElementById('orbitalStage');
  const teaserCard = document.getElementById('orbitalTeaser');
  if (!stage) return;

  // Curated 10 Signature Highlights for smooth 3D orbital wheel
  let filteredItems = MENU_ITEMS.filter(item => item.featured).slice(0, 10);

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
    radius = isMobile ? 135 : 210;
    discSize = isMobile ? 72 : 96;

    // Origin flush against right edge
    const originX = stageRect.width * (isMobile ? 0.90 : 0.98);
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
