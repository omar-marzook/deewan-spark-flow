// Apply the path-to-regexp patch first
import './path-to-regexp-patch.js'

import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { redirects } from './redirects.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

startServer()

async function startServer() {
  const app = express()
  
  // Use compression with higher level for better performance
  app.use(compression({
    level: 9, // Maximum compression level
    threshold: 0 // Compress all responses
  }));
  
  // Set proper caching headers
  app.use((req, res, next) => {
    // Font files: cache for 1 year with immutable
    if (req.url.match(/\.(woff|woff2)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Other static assets: cache for 1 year
    else if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|ico|svg|webp)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
    // HTML and API responses: no cache
    else {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
    
    // Add Vary header for proper caching with compression
    res.setHeader('Vary', 'Accept-Encoding');
    
    next();
  });
  
  if (isProduction) {
    app.use(express.static(join(root, 'dist/client')))
  } else {
    const vite = await import('vite')
    const viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true }
    })
    app.use(viteDevServer.middlewares)
  }

  // Middleware to catch and handle problematic URLs before they reach path-to-regexp
  app.use((req, res, next) => {
    if (req.url.includes('https://git.new/')) {
      console.warn('Blocked problematic URL pattern:', req.url);
      return res.status(400).send('Invalid URL format. URLs containing "https://git.new/" are not supported.');
    }
    next();
  });

  // Add redirect middleware before the main route handler
  app.use((req, res, next) => {
    const path = req.path;
    
    // Check if the path is in our redirects map
    if (redirects[path]) {
      console.log(`Redirecting: ${path} → ${redirects[path]}`);
      // Perform 301 (permanent) redirect
      return res.redirect(301, redirects[path]);
    }
    
    // No redirect found, continue to next middleware
    next();
  });

  app.get('*', async (req, res, next) => {
    try {
      // Additional safety check for URLs that might cause path-to-regexp errors
      if (req.originalUrl.includes(':') && !req.originalUrl.includes('/:')) {
        console.warn('Potentially problematic URL with colon:', req.originalUrl);
        return res.status(400).send('Invalid URL format. Please check your URL and try again.');
      }
      
      const pageContextInit = {
        urlOriginal: req.originalUrl
      }
      
      const pageContext = await renderPage(pageContextInit)
      const { httpResponse } = pageContext
      
      if (!httpResponse) {
        return next()
      }
      
      const { body, statusCode, contentType, headers } = httpResponse
      
      headers && Object.entries(headers).forEach(([name, value]) => {
        res.setHeader(name, value)
      })
      
      res.status(statusCode).type(contentType).send(body)
    } catch (error) {
      // Handle path-to-regexp errors specifically
      if (error.message && error.message.includes('Missing parameter name')) {
        console.error('Path-to-regexp error detected. URL might contain invalid characters:', req.originalUrl);
        res.status(400).send('Invalid URL format. Please check your URL and try again.');
      } else {
        console.error(error.stack);
        res.status(500).send('Server Error');
      }
    }
  });

  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}