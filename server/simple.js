import express from 'express'
import { createPageRenderer } from 'vike/server'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

startServer()

async function startServer() {
  const app = express()

  // Serve static assets
  if (isProduction) {
    app.use(express.static(join(root, 'dist/client')))
  } else {
    // In development, Vite runs its own server
    const vite = await import('vite')
    const viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true }
    })
    app.use(viteDevServer.middlewares)
  }

  // Vike page renderer
  const renderPage = createPageRenderer({
    viteDevServer: !isProduction && (await import('vite')).createServer(),
    root,
    outDir: isProduction ? join(root, 'dist') : undefined,
    isProduction
  })

  // Serve pages
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl
    console.log(`Request: ${url}`)

    try {
      const pageContextInit = { urlOriginal: url }
      const pageContext = await renderPage(pageContextInit)
      const { httpResponse } = pageContext

      if (!httpResponse) {
        return next()
      }

      const { body, statusCode, contentType, headers } = httpResponse

      // Set headers
      headers && Object.entries(headers).forEach(([name, value]) => {
        res.setHeader(name, value)
      })

      res.status(statusCode).type(contentType).send(body)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
    }
  })

  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}