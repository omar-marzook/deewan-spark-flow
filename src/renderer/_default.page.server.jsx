import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from './PageShell'

export async function render(pageContext) {
  const { Page, pageProps } = pageContext
  
  // This is where your React app is rendered to HTML
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  
  // Create the full HTML document
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>${pageContext.title || 'Deewan'}</title>
        <meta name="description" content="${pageContext.description || 'Deewan - Communication Platform'}" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
  
  return {
    documentHtml,
    pageContext: {
      // This is optional but enables you to add data to `pageContext` that is available to the client
    }
  }
}