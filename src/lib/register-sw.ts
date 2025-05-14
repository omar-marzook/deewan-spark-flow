/**
 * Service Worker Registration Utility
 * 
 * This utility handles the registration of the service worker
 * for caching and offline support.
 */

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
}

/**
 * Unregister all service workers and clear caches
 * Useful during development or when troubleshooting
 */
export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        for (const registration of registrations) {
          registration.unregister();
          console.log('Service Worker unregistered');
        }
      });
    
    // Clear all caches
    if ('caches' in window) {
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              return caches.delete(cacheName);
            })
          );
        })
        .then(() => {
          console.log('Caches cleared');
        });
    }
  }
}