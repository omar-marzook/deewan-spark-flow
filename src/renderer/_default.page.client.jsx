import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import '../index.css'
import { Buffer } from 'buffer'

// Make Buffer available globally
window.Buffer = Buffer

export async function render(pageContext) {
  const { Page, pageProps } = pageContext
  
  // Create the PageShell component first
  const pageShellPromise = PageShell({ 
    pageContext, 
    children: <Page {...pageProps} /> 
  });
  
  // Await the async PageShell component
  const pageShellContent = await pageShellPromise;
  
  // Use a more robust hydration approach
  const rootElement = document.getElementById('root');
  
  // Hydrate with error handling
  try {
    hydrateRoot(rootElement, pageShellContent);
  } catch (error) {
    console.warn('Hydration failed, falling back to client-side rendering:', error);
    
    // If hydration fails, remove all children and render from scratch
    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }
    
    // Create a new root and render
    const root = createRoot(rootElement);
    root.render(pageShellContent);
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