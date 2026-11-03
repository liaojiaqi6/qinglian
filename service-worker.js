// Qinglian v1.2.2 — cache only the application shell, never personal records or videos.
const CACHE = 'qinglian-shell-v1.2.2';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('qinglian-shell-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== self.location.origin || /\.(?:mp4|webm|mov|m4v)$/i.test(url.pathname)) return;
  if(req.mode === 'navigate') {
    event.respondWith(fetch(req).then(resp => {if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));}return resp;}).catch(()=>caches.match('./index.html')));
    return;
  }
  if(ASSETS.some(p => new URL(p,self.registration.scope).pathname === url.pathname)) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
  }
});
