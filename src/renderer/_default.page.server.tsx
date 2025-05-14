import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { render } from '../entry-server';

export { render };

// This function provides the HTML template for server-rendered pages
export async function onRenderHtml(pageContext: any) {
  const { pageHtml } = await render(pageContext);
  
  // Get metadata from the page context or use defaults
  const title = pageContext.title || 'Deewan Spark Flow';
  const description = pageContext.description || 'Deewan Spark Flow Application';
  
  // Create the HTML document
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  
  return {
    documentHtml,
    pageContext: {
      // We can add additional context here that will be available
      // in the browser as well
    }
  };
}

// This function can be used to pass data to the client
export function passToClient(pageContext: any) {
  return {
    pageProps: pageContext.pageProps,
    title: pageContext.title,
    description: pageContext.description,
    urlOriginal: pageContext.urlOriginal
  };
}