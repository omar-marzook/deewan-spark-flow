import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import '../index.css'
import { Buffer } from 'buffer'

// Make Buffer available globally
window.Buffer = Buffer

// Store the root instance globally to prevent multiple createRoot calls
let rootInstance = null;
// Track if this is the first render (initial page load)
let isFirstRender = true;

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
  
  // For the first render (initial page load), try hydration
  if (isFirstRender) {
    isFirstRender = false;
    
    try {
      // Attempt to hydrate the existing content
      hydrateRoot(rootElement, pageShellContent);
    } catch (error) {
      console.warn('Hydration failed, falling back to client-side rendering:', error);
      
      // If hydration fails, remove all children and render from scratch
      while (rootElement.firstChild) {
        rootElement.removeChild(rootElement.firstChild);
      }
      
      // Create a root instance for the first time
      rootInstance = createRoot(rootElement);
      rootInstance.render(pageShellContent);
    }
  } else {
    // For subsequent renders (client-side navigation), use the existing root
    if (!rootInstance) {
      // This should rarely happen, but just in case hydration succeeded
      // and we don't have a rootInstance yet
      rootInstance = createRoot(rootElement);
    }
    
    // Render using the existing root instance
    rootInstance.render(pageShellContent);
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