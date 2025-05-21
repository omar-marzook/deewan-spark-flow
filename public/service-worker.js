/**
 * Deewan Service Worker
 * Implements caching strategies for improved performance
 */

// Cache names
const STATIC_CACHE_NAME = 'deewan-static-v1';
const IMAGE_CACHE_NAME = 'deewan-images-v1';
const VIDEO_CACHE_NAME = 'deewan-videos-v1';
const THIRD_PARTY_CACHE_NAME = 'deewan-third-party-v1';

// Create a simple offline page URL
const OFFLINE_URL = '/offline.html';

// Resources to cache immediately on install
const STATIC_RESOURCES = [
  '/',
  '/index.html',
  '/deewan-logo.png',
  '/deewan-logo.svg',
  '/favicon.ico',
  OFFLINE_URL
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Caching static resources');
        return cache.addAll(STATIC_RESOURCES);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [STATIC_CACHE_NAME, IMAGE_CACHE_NAME, VIDEO_CACHE_NAME];
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            console.log('Deleting outdated cache:', cacheToDelete);
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper function to determine cache strategy based on request
function getCacheStrategy(request) {
  const url = new URL(request.url);
  
  // Image files
  if (request.destination === 'image' || 
      url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)) {
    return {
      cacheName: IMAGE_CACHE_NAME,
      strategy: 'cache-first'
    };
  }
  
  // Video files
  if (request.destination === 'video' || 
      url.pathname.match(/\.(mp4|webm|ogg)$/i)) {
    return {
      cacheName: VIDEO_CACHE_NAME,
      strategy: 'cache-first'
    };
  }
  
  // HTML files - use network first for dynamic content
  if (request.destination === 'document' || 
      url.pathname.match(/\.(html|htm)$/i)) {
    return {
      cacheName: STATIC_CACHE_NAME,
      strategy: 'network-first'
    };
  }
  
  // Default to stale-while-revalidate for other assets
  return {
    cacheName: STATIC_CACHE_NAME,
    strategy: 'stale-while-revalidate'
  };
}

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  // Handle cross-origin requests with stale-while-revalidate
  if (!event.request.url.startsWith(self.location.origin)) {
    // For third-party resources, use stale-while-revalidate
    event.respondWith(
      caches.open(THIRD_PARTY_CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request)
            .then((cachedResponse) => {
              const fetchPromise = fetch(event.request)
                .then((networkResponse) => {
                  cache.put(event.request, networkResponse.clone());
                  return networkResponse;
                })
                .catch(error => {
                  console.error('Failed to fetch third-party resource:', error);
                  // Still throw the error so it can be caught by the outer catch
                  throw error;
                });
              
              return cachedResponse || fetchPromise;
            });
        })
    );
    return;
  }
  
  // Handle navigation requests with network-first, falling back to offline page
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  const { cacheName, strategy } = getCacheStrategy(event.request);
  
  if (strategy === 'cache-first') {
    // Cache-first strategy (good for immutable assets like images)
    event.respondWith(
      caches.open(cacheName)
        .then((cache) => {
          return cache.match(event.request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              
              return fetch(event.request)
                .then((networkResponse) => {
                  // Cache a copy of the response
                  cache.put(event.request, networkResponse.clone());
                  return networkResponse;
                })
                .catch((error) => {
                  console.error('Fetch failed:', error);
                  throw error;
                });
            });
        })
    );
  } else if (strategy === 'network-first') {
    // Network-first strategy (good for frequently updated content)
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Cache a fresh copy
          caches.open(cacheName)
            .then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          return networkResponse;
        })
        .catch(() => {
          // If network fails, try the cache
          return caches.match(event.request);
        })
    );
  } else {
    // Stale-while-revalidate (default)
    event.respondWith(
      caches.open(cacheName)
        .then((cache) => {
          return cache.match(event.request)
            .then((cachedResponse) => {
              const fetchPromise = fetch(event.request)
                .then((networkResponse) => {
                  cache.put(event.request, networkResponse.clone());
                  return networkResponse;
                });
              
              // Return cached response immediately, then update cache in background
              return cachedResponse || fetchPromise;
            });
        })
    );
  }
});