/**
 * Homepage & location page initializer — The Guest House
 */

import { initSiteChrome } from './site-nav.js';
import { initReveal } from './reveal.js';
import { initOrbitalMenu } from './orbital-menu.js';
import { initSocialMosaic } from './social-mosaic.js';
import { initReservations } from './reservations.js';
import { initLocationHours } from './location-hours.js';

document.addEventListener('DOMContentLoaded', () => {
  initSiteChrome();
  initReservations();
  initLocationHours();
  initReveal();

  if (document.getElementById('orbitalStage')) initOrbitalMenu();
  initSocialMosaic();
});
