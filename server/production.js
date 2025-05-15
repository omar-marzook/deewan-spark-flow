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