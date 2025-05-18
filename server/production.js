// Apply the path-to-regexp patch first
import './path-to-regexp-patch.js'

import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

startServer()

async function startServer() {
  const app = express()
  
  app.use(compression())
  
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
})

  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}