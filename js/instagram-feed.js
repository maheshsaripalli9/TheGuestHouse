/**
 * Seen at The Guest House - Scroll-Driven Parallax Instagram Reel Engine
 * Dual-motion ambient drift + vertical scroll push, hashtag regex stripper & infinite boundary loop
 */

import { INSTAGRAM_POSTS } from '../data/instagram-fallback.js';

export function initInstagramFeed() {
  const container = document.getElementById('socialFeedTrack');
  const viewport = document.getElementById('socialFeedViewport');
  if (!container || !viewport) return;

  // Duplicate dataset to guarantee seamless infinite loop
  const posts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  // Regex to strip #hashtags from captions
  const stripHashtags = (text) => text.replace(/#\w+/g, '').trim();

  container.innerHTML = posts.map((post, idx) => `
    <div class="social-card" data-index="${idx}">
      <img src="${post.image}" alt="Seen at The Guest House" class="social-card-img" loading="lazy" />
      <div class="social-card-overlay">
        <div>
          <div class="social-handle">${post.handle} ✦</div>
          <div class="social-likes">${post.likes} Likes</div>
        </div>
        <div class="social-caption">${stripHashtags(post.caption)}</div>
        <a href="${post.url}" target="_blank" rel="noopener" class="social-link-icon">
          View on Instagram →
        </a>
      </div>
    </div>
  `).join('');

  // Motion engine variables
  let offsetX = 0;
  let scrollVelocity = 0;
  let targetVelocity = 0;
  let lastScrollY = window.scrollY;
  let isPaused = false;
  const baseDriftSpeed = 0.45; // Smooth 0.45px/frame ambient drift

  // Track vertical page scroll with clamped velocity for buttery smoothness
  window.addEventListener('scroll', () => {
    if (isPaused) return;
    const deltaY = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
    
    // Clamp max velocity contribution to +/- 3.5px per frame
    const clampedDelta = Math.min(Math.max(deltaY * 0.12, -3.5), 3.5);
    targetVelocity += clampedDelta;
  }, { passive: true });

  // Hover & Touch Pause Handlers
  viewport.addEventListener('mouseenter', () => { isPaused = true; });
  viewport.addEventListener('mouseleave', () => { isPaused = false; });
  viewport.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
  viewport.addEventListener('touchend', () => { isPaused = false; });

  // Render Loop using rAF
  function render() {
    if (!isPaused) {
      // Smooth lerp velocity and apply decay
      scrollVelocity += (targetVelocity - scrollVelocity) * 0.15;
      targetVelocity *= 0.82;

      offsetX += baseDriftSpeed + scrollVelocity;

      // Infinite loop boundary check at half track width
      const trackWidth = container.scrollWidth / 2;
      if (offsetX >= trackWidth) {
        offsetX = 0;
      } else if (offsetX < 0) {
        offsetX = trackWidth - 1;
      }

      container.style.transform = `translate3d(-${offsetX}px, 0, 0)`;
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
