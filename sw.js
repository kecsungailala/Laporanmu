// Service worker Laporan RHK 2026: membuat aplikasi bisa di-install dan cepat dibuka.
// Halaman selalu diambil terbaru dari internet; salinan lama hanya dipakai saat offline.
const CACHE = 'laporan-rhk-v6';
const FILE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './favicon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILE)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;   // data ke server tidak disimpan
  e.respondWith(
    fetch(req).then(r => { const salin = r.clone(); caches.open(CACHE).then(c => c.put(req, salin)); return r; })
              .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
