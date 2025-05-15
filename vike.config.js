// vike.config.js
import react from 'vike/plugin-react'

export default {
  plugins: [react({
    // Configure React plugin with hydration options
    hydrationCanBeAborted: true,
    // Use streaming for better performance
    streaming: true
  })],
  // Use V1 design
  prerender: {
    partial: true
  },
  // Configure routing
  filesystemRoutingRoot: 'src/pages',
  // Define valid page file extensions
  extensions: ['page.jsx', 'page.tsx'],
  // Configure page files
  disableAutoLiftCssUrls: true,
  // Enable client-side routing
  clientRouting: true,
  // Configure route parameters
  routeFileSystem: {
    // Define route parameter syntax
    paramFormat: {
      // Use @ prefix for route parameters (e.g., @slug.page.jsx)
      routeFiles: '@'
    }
  },
  // Configure page context
  passToClient: [
    'pageProps',
    'routeParams',
    'title',
    'description',
    'documentProps',
    'urlOriginal'
  ],
  // Add hydration configuration
  hydrationCanBeAborted: true
}