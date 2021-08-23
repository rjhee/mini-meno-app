const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = ['./offline.html'];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        // eslint-disable-next-line array-callback-return
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorcker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.mode !== 'navigate') {
    return;
  }
  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match('./offline.html');
      });
    })
  );
});
