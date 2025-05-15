import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from './PageShell'

export async function render(pageContext) {
  const { Page, pageProps, routeParams } = pageContext
  
  // Make route params available to the page
  const props = { ...pageProps, routeParams }
  
  // Create the PageShell component first and await it
  const pageShellContent = await PageShell({
    pageContext,
    children: <Page {...props} />
  });
  
  // This is where your React app is rendered to HTML
  const pageHtml = renderToString(pageShellContent)
  
  // Get document props from the page or use defaults
  const title = pageContext.documentProps?.title || pageContext.title || 'Deewan'
  const description = pageContext.documentProps?.description || pageContext.description || 'Deewan - Communication Platform'
  
  // Create the full HTML document with consistent whitespace and formatting
  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    ${dangerouslySkipEscape(pageContext.documentProps?.head || '')}
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>`
  
  return {
    documentHtml,
    pageContext: {
      // Make route params available to the client
      routeParams,
      // Pass document props to the client
      title,
      description
    }
  }
}

// This hook is called when a new page is rendered
export function onBeforeRender(pageContext) {
  // You can modify pageContext here before it's passed to the render function
  return {
    pageContext: {
      // Add any additional data to pageContext here
    }
  }
}