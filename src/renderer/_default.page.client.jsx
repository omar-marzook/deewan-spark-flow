import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import '../index.css'
import { Buffer } from 'buffer'

// Make Buffer available globally
window.Buffer = Buffer

// Register performance measurement
const reportWebVitals = () => {
  if ('performance' in window && 'getEntriesByType' in performance) {
    // Get LCP
    const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0];
    if (lcpEntry) {
      console.log('LCP:', lcpEntry.startTime / 1000, 'seconds');
    }
    
    // Get FID
    const fidEntry = performance.getEntriesByType('first-input')[0];
    if (fidEntry) {
      console.log('FID:', fidEntry.processingStart - fidEntry.startTime, 'ms');
    }
  }
};

// Initialize React root management
if (typeof window.__VIKE_STATE__ === 'undefined') {
  window.__VIKE_STATE__ = {
    isFirstLoad: true,
    root: null,
    rootElement: null
  };
}

export async function render(pageContext) {
  const { Page, pageProps } = pageContext
  
  // Create the PageShell component first
  const pageShellPromise = PageShell({ 
    pageContext, 
    children: <Page {...pageProps} /> 
  });
  
  // Await the async PageShell component
  const pageShellContent = await pageShellPromise;
  
  // Get the root element
  const rootElement = document.getElementById('root');
  
  // Store reference to the root element
  window.__VIKE_STATE__.rootElement = rootElement;
  
  // First page load - try hydration
  if (window.__VIKE_STATE__.isFirstLoad) {
    window.__VIKE_STATE__.isFirstLoad = false;
    
    try {
      // For the initial page load, use hydrateRoot
      // Store the hydration root so we can use it for future renders
      const hydrationRoot = hydrateRoot(rootElement, pageShellContent);
      window.__VIKE_STATE__.root = {
        render: (content) => hydrationRoot.render(content)
      };
    } catch (error) {
      console.warn('Hydration failed, falling back to client-side rendering:', error);
      
      // Clean up the DOM if hydration fails
      while (rootElement.firstChild) {
        rootElement.removeChild(rootElement.firstChild);
      }
      
      // Create a new root and store it
      const newRoot = createRoot(rootElement);
      window.__VIKE_STATE__.root = newRoot;
      newRoot.render(pageShellContent);
    }
  } else {
    // Client-side navigation - use the existing root
    if (!window.__VIKE_STATE__.root) {
      console.warn('No root instance found for client-side navigation, creating one');
      
      // This should rarely happen, but just in case
      const newRoot = createRoot(rootElement);
      window.__VIKE_STATE__.root = newRoot;
      newRoot.render(pageShellContent);
    } else {
      // Use the existing root for rendering
      window.__VIKE_STATE__.root.render(pageShellContent);
    }
  }
}

// Enable client-side routing
export const clientRouting = true
export const hydrationCanBeAborted = true

// Define routes for client-side navigation
export const prefetchStaticAssets = { when: 'VIEWPORT' }

// This is called when a new page is navigated to
export function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.')
  
  // Measure and report web vitals after hydration
  setTimeout(reportWebVitals, 1000);
}

// This is called when a navigation happens
export function onPageTransitionStart() {
  console.log('Page transition start')
  // You could show a loading indicator here
}

// This is called when a page transition completes
export function onPageTransitionEnd() {
  console.log('Page transition end')
  // You could hide a loading indicator here
}