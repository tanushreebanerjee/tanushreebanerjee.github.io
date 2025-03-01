const CACHE_NAME = 'tanushree-banerjee-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/pdfs/cv.pdf',
  '/images_resized/avatar.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});
