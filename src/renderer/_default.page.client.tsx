import { render } from '../entry-client';

// Export the render function for client-side rendering
export { render };

// Simple client-side initialization
export async function onHydrationEnd() {
  console.log('Application hydrated');
}

// Handle page transitions
export async function onPageTransitionStart() {
  console.log('Page transition start');
  document.body.classList.add('page-transition');
}

export async function onPageTransitionEnd() {
  console.log('Page transition end');
  document.body.classList.remove('page-transition');
}