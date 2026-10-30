const CACHE = 'cepd-app-v8';
const ASSETS = ['./', './index.html', './cepd-logo.webp', './icon-192.png', './icon-512.png', './manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('cepd-app-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (['baiboly-1865.json','bible-fr-lsg1910.json','bible-en-web.json'].some(name => new URL(req.url).pathname.endsWith('/'+name))) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(async res => {
      if (res.ok) { try { const cache = await caches.open(CACHE); await cache.put(req, res.clone()); } catch (error) {} }
      return res;
    })));
    return;
  }
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => { if (res.ok) {const copy = res.clone(); caches.open(CACHE).then(cache => cache.put('./index.html', copy));} return res; }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
});
