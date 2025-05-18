// vike.config.js
import react from 'vike/plugin-react'

export default {
  plugins: [react({
    // Configure React plugin with hydration options
    hydrationCanBeAborted: true,
    // Use streaming for better performance
    streaming: true
  })],
  // V1 design configuration
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
  hydrationCanBeAborted: true,
  
  // V1 design: Use the new meta file approach
  meta: {
    // Define meta files
    metafiles: {
      // Use query parameter instead of 'as' option
      extractExportNames: {
        query: '?extractExportNames'
      },
      extractAssets: {
        query: '?extractAssets'
      }
    }
  },
  
  // Add URL validation to prevent path-to-regexp errors
  onBeforeRoute: (pageContext) => {
    // Check if the URL contains problematic patterns
    if (pageContext.urlOriginal && pageContext.urlOriginal.includes('https://git.new/')) {
      // Replace or remove the problematic pattern
      pageContext.urlOriginal = pageContext.urlOriginal.replace(/https:\/\/git\.new\/[^/]*/, '');
    }
    return pageContext;
  }
}