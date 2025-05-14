import express from 'express';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';
import { renderPage } from 'vite-plugin-ssr/server';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
  const app = express();
  app.use(compression());

  const viteServer = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  
  app.use(viteServer.middlewares);

  app.get('*', async (req, res, next) => {
    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl
      };
      
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;
      
      if (!httpResponse) return next();
      
      const { body, statusCode, contentType, earlyHints } = httpResponse;
      
      if (res.writeEarlyHints) {
        res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
      }
      
      res.status(statusCode).type(contentType).send(body);
    } catch (error) {
      viteServer.ssrFixStacktrace(error);
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();