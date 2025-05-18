import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { root } from './root.js'
import { redirects } from './redirects.js'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

startServer()

async function startServer() {
  const app = express()
  
  app.use(compression())
  
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    // Development: integrate with Vite dev server
    const vite = await import('vite')
    const viteDevMiddleware = (await vite.createServer({
      root,
      server: { middlewareMode: true }
    })).middlewares
    app.use(viteDevMiddleware)
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

  // Vike route handler
  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    }
    
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    
    if (!httpResponse) return next()
    
    const { body, statusCode, contentType, earlyHints } = httpResponse
    
    if (res.writeEarlyHints) {
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
    }
    
    res.status(statusCode).type(contentType).send(body)
  })

  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}