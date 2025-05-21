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
  
  app.use(compression())
  
  // Set proper caching headers
  app.use((req, res, next) => {
    // Static assets: cache for 1 year
    if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|ico|svg|webp|woff|woff2)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
    // HTML and API responses: no cache
    else {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
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
      console.error(error.stack)
      res.status(500).send('Server Error')
    }
  })

  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}