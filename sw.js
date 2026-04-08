// We use the version number so you can easily clear the cache if you make major updates later
const CACHE_NAME = 'budget-app-v14.15';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// 1. Install the service worker and save the files to device memory
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Intercept network requests and serve the local files if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached version if found, otherwise try to fetch from the internet
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// 3. Clean up old caches if you ever update the CACHE_NAME version
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});