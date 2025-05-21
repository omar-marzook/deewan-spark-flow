import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Buffer } from 'buffer'
import { registerServiceWorker } from './lib/register-sw'
import { reportWebVitals } from './lib/web-vitals'

// Make Buffer available globally
window.Buffer = Buffer

// Register service worker for caching and offline support
// Only register in production to avoid caching during development
if (import.meta.env.PROD) {
  registerServiceWorker();
}

createRoot(document.getElementById("root")!).render(<App />);

// Report web vitals
reportWebVitals((metric) => {
  // In production, send to analytics
  if (import.meta.env.PROD) {
    console.log(metric);
    // Replace with your analytics service
    // Example: sendToAnalytics(metric);
  }
});
