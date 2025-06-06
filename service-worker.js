
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('brc-checklist').then(function(cache) {
      return cache.addAll([
        './BRC_Painting_Daily_Checklist.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
