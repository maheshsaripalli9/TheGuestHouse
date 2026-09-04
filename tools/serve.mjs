/**
 * Local dev server — The Guest House
 *
 * python3 -m http.server sends no Cache-Control, so Chrome caches by heuristic
 * and an ES module already in the module map is never re-parsed. Edit
 * data/menu.js, reload, and the browser keeps serving you the previous version
 * with a "does not provide an export named …" error that no amount of normal
 * reloading clears.
 *
 * This serves the same folder with no-store, and mirrors the two Firebase
 * Hosting rewrites that matter locally: cleanUrls and trailingSlash.
 *
 *   npm run dev            # http://localhost:8080
 *   npm run dev -- 8081    # another port
 */

import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize, extname } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = Number(process.argv[2] || process.env.PORT || 8080);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

async function resolve(pathname) {
  // Block traversal, then try the path itself, then /index.html, then .html
  const safe = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  const base = join(ROOT, safe);

  for (const candidate of [base, join(base, 'index.html'), `${base}.html`]) {
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch {
      /* try the next candidate */
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const file = await resolve(pathname);

  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(`404 — no file for ${pathname}\n`);
    console.log(`  404  ${pathname}`);
    return;
  }

  res.writeHead(200, {
    'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream',
    // The whole point: never let the browser reuse a module across an edit.
    'Cache-Control': 'no-store, must-revalidate'
  });
  createReadStream(file).pipe(res);
  console.log(`  200  ${pathname}`);
});

server.listen(PORT, () => {
  console.log(`\nThe Guest House — serving ${ROOT}`);
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  no-store, so edits show up on a plain reload\n`);
});
