import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageShell } from './PageShell'
import { extractSEOFromPageProps } from '@/lib/extract-seo'

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
  
  // Extract SEO data from the page context
  const seoData = extractSEOFromPageProps(pageContext);
  
  // Generate additional head content from SEO data
  let additionalHead = seoData.additionalHead || '';
  
  // Add Open Graph tags if not in additionalHead
  if (!additionalHead.includes('og:title')) {
    additionalHead += `
    <meta property="og:title" content="${seoData.title}" />
    <meta property="og:description" content="${seoData.description}" />
    <meta property="og:type" content="${seoData.ogType || 'website'}" />
    <meta property="og:image" content="https://www.deewan.sa${seoData.ogImage || '/deewan-og.png'}" />
    `;
  }
  
  // Add Twitter Card tags if not in additionalHead
  if (!additionalHead.includes('twitter:card')) {
    additionalHead += `
    <meta name="twitter:card" content="${seoData.twitterCard || 'summary_large_image'}" />
    <meta name="twitter:title" content="${seoData.title}" />
    <meta name="twitter:description" content="${seoData.description}" />
    <meta name="twitter:image" content="https://www.deewan.sa${seoData.ogImage || '/deewan-og.png'}" />
    `;
  }
  
  // Add canonical URL if provided
  if (seoData.canonical && !additionalHead.includes('rel="canonical"')) {
    additionalHead += `
    <link rel="canonical" href="https://www.deewan.sa${seoData.canonical}" />
    `;
  }
  
  // Add schema.org JSON-LD if provided
  if (seoData.schema && !additionalHead.includes('application/ld+json')) {
    additionalHead += `
    <script type="application/ld+json">
      ${JSON.stringify(seoData.schema)}
    </script>
    `;
  }
  
  // Create the full HTML document with enhanced SEO
  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    ${dangerouslySkipEscape(additionalHead)}
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
      // Pass SEO data to the client
      seoData
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