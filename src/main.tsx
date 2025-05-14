import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Buffer } from 'buffer'
import { registerServiceWorker } from './lib/register-sw'

// Make Buffer available globally
window.Buffer = Buffer

// Register service worker for caching and offline support
// Only register in production to avoid caching during development
if (import.meta.env.PROD) {
  registerServiceWorker();
}

createRoot(document.getElementById("root")!).render(<App />);
