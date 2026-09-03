/**
 * Bespoke Luxury Wine Bottle Cursor - The Guest House
 * Ultra-fast hardware-accelerated cursor with compact wine bottle, precision gold ring & pouring animation
 */

export function initLuxuryCursor() {
  const cursorContainer = document.createElement('div');
  cursorContainer.id = 'luxury-cursor-container';
  cursorContainer.innerHTML = `
    <!-- Precision Target Gold Circle Ring -->
    <div id="luxury-cursor-ring"></div>
    <div id="luxury-cursor-aura"></div>
    <div id="luxury-cursor-bottle">
      <!-- Compact Sleek Wine Bottle (Height 38px) -->
      <svg width="18" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Bottle Body -->
        <path d="M4 14 C4 11, 6 9, 7 6 L7 2 L11 2 L11 6 C12 9, 14 11, 14 14 L14 34 C14 36, 4 36, 4 34 Z" fill="#12100E" stroke="#8C6830" stroke-width="1.2"/>
        <!-- Gold Capsule -->
        <path d="M7 1 L11 1 L10.5 5 L7.5 5 Z" fill="#8C6830"/>
        <!-- Precision Center Dot -->
        <circle cx="9" cy="1" r="1.2" fill="#E0CEAA"/>
        <!-- Label -->
        <rect x="5.5" y="17" width="7" height="13" rx="0.5" fill="#FAF7F2" stroke="#8C6830" stroke-width="0.6"/>
        <line x1="7" y1="21" x2="11" y2="21" stroke="#8C6830" stroke-width="0.6"/>
      </svg>
    </div>
  `;

  const style = document.createElement('style');
  style.id = 'luxury-cursor-style';
  style.textContent = `
    #luxury-cursor-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      pointer-events: none;
      z-index: 99999;
      will-change: transform;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    #luxury-cursor-container.active {
      opacity: 1;
    }
    #luxury-cursor-ring {
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      border: 1.5px solid #8C6830;
      border-radius: 50%;
      transform: translate(-12px, -12px) scale(1);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, width 0.2s ease, height 0.2s ease;
      box-shadow: 0 0 10px rgba(140, 104, 48, 0.25);
    }
    #luxury-cursor-bottle {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-9px, -1px) rotate(0deg);
      transform-origin: 9px 1px; /* Precision tip hotspot */
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      filter: drop-shadow(0 2px 6px rgba(18, 16, 14, 0.3));
    }
    #luxury-cursor-aura {
      position: absolute;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(224, 206, 170, 0.5) 0%, rgba(140, 104, 48, 0) 70%);
      transform: translate(-14px, -14px) scale(1);
      transition: transform 0.2s ease, opacity 0.2s ease;
      opacity: 0.6;
    }
    #luxury-cursor-container.pouring #luxury-cursor-bottle {
      transform: translate(-9px, -1px) rotate(24deg); /* 24deg pouring tilt */
    }
    #luxury-cursor-container.pouring #luxury-cursor-ring {
      transform: translate(-16px, -16px) scale(1.35);
      border-color: #E0CEAA;
      width: 32px;
      height: 32px;
    }
    #luxury-cursor-container.pouring #luxury-cursor-aura {
      opacity: 1;
      transform: translate(-14px, -14px) scale(1.5);
    }
    @media (hover: hover) and (pointer: fine) {
      body, a, button, input, select, .dish-disc, .repertoire-card, .sanctuary-card, .social-card, .category-pill, .party-chip {
        cursor: none !important;
      }
    }
    @media (max-width: 768px) {
      #luxury-cursor-container {
        display: none !important; /* Hide mouse cursor div on mobile to avoid sticking */
      }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(cursorContainer);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let isVisible = false;

  const showCursor = () => {
    if (!isVisible) {
      isVisible = true;
      cursorContainer.classList.add('active');
    }
  };

  const hideCursor = () => {
    isVisible = false;
    cursorContainer.classList.remove('active');
  };

  window.addEventListener('mousemove', (e) => {
    showCursor();
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    hideCursor();
  });

  // Fast lerp factor (0.85 for near-instant 60fps tracking)
  function render() {
    cursorX += (mouseX - cursorX) * 0.85;
    cursorY += (mouseY - cursorY) * 0.85;

    cursorContainer.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  const interactiveSelectors = 'a, button, .dish-disc, .repertoire-card, .sanctuary-card, .social-card, .category-pill, .party-chip, .time-slot-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursorContainer.classList.add('pouring');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursorContainer.classList.remove('pouring');
    }
  });
}
