import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { render } from '../entry-server';

export { render };

// This function provides the HTML template for server-rendered pages
export async function onRenderHtml(pageContext: any) {
  const { pageHtml } = await render(pageContext);
  
  // Get metadata from the page context or use defaults
  const title = pageContext.title || 'Deewan - Intelligent Communication Solutions';
  const description = pageContext.description || 'Deewan provides intelligent, customizable communication solutions prioritizing security and scalability for businesses across Saudi Arabia and beyond.';
  const canonical = pageContext.canonical || pageContext.urlOriginal;
  const ogImage = pageContext.ogImage || '/media/deewan-og.png';
  const ogType = pageContext.ogType || 'website';
  const keywords = pageContext.keywords || 'Deewan, Communication Platform, Saas, CPass';
  
  // Create the HTML document with enhanced SEO
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
        <meta name="author" content="Deewan" />
        <meta name="robots" content="index, follow" />
        
        <!-- Open Graph / Social Media Meta Tags -->
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="${ogType}" />
        <meta property="og:url" content="${canonical}" />
        <meta property="og:image" content="${ogImage}" />
        <meta property="og:site_name" content="Deewan - Intelligent Communication Solutions" />
        
        <!-- Twitter Card data -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="${ogImage}" />
        
        <!-- Canonical URL -->
        <link rel="canonical" href="${canonical}" />
        
        <!-- Favicon -->
        <link rel="icon" href="/favicon.ico" />
        
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
    canonical: pageContext.canonical,
    ogImage: pageContext.ogImage,
    ogType: pageContext.ogType,
    keywords: pageContext.keywords,
    urlOriginal: pageContext.urlOriginal
  };
}