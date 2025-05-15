import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { root } from './root.js'

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