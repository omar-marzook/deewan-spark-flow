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
    <meta property="og:title" content="${
        seoData.title ||
        'Deewan - Intelligent Communication Solutions for Business | Saudi Arabia'
    }" />
    <meta property="og:description" content="${
        seoData.description ||
        'Deewan provides secure, scalable communication solutions including WhatsApp Business API, SMS, Voice, and AI-powered chatbots for businesses across Saudi Arabia.'
    }" />
    <meta property="og:type" content="${seoData.ogType || 'website'}" />
    <meta property="og:image" content="https://www.deewan.sa${
        seoData.ogImage || '/deewan-og.png'
    }" />
    `;
  }
  
  // Add Twitter Card tags if not in additionalHead
  if (!additionalHead.includes('twitter:card')) {
    additionalHead += `
    <meta name="twitter:card" content="${
        seoData.twitterCard || 'summary_large_image'
    }" />
    <meta name="twitter:title" content="${
        seoData.title ||
        'Deewan - Intelligent Communication Solutions for Business | Saudi Arabia'
    }" />
    <meta name="twitter:description" content="${
        seoData.description ||
        'Deewan provides secure, scalable communication solutions including WhatsApp Business API, SMS, Voice, and AI-powered chatbots for businesses across Saudi Arabia.'
    }" />
    <meta name="twitter:image" content="https://www.deewan.sa${
        seoData.ogImage || '/deewan-og.png'
    }" />
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
    
    <!-- Data Layer initialization -->
    <script>
      window.dataLayer = window.dataLayer || [];
    </script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NQ3879TV');</script>
    <!-- End Google Tag Manager -->
    
    <!-- Favicon -->
    <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
    <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
    
    <!-- Web App Manifest -->
    <link rel="manifest" href="/favicon/site.webmanifest" />
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#ffffff" />
    
    <!-- Preload critical fonts with high priority -->
    <link rel="preload" href="/fonts/Gilroy-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" fetchpriority="high" />
    <link rel="preload" href="/fonts/Gilroy-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    
    <!-- Preconnect to important domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    
    <title>${
        seoData.title ||
        'Deewan - Intelligent Communication Solutions for Business | Saudi Arabia'
    }</title>
    <meta name="description" content="${
        seoData.description ||
        'Deewan provides secure, scalable communication solutions including WhatsApp Business API, SMS, Voice, and AI-powered chatbots for businesses across Saudi Arabia.'
    }" />
    ${dangerouslySkipEscape(additionalHead || '')}
  </head>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQ3879TV"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <div id="root">${dangerouslySkipEscape(pageHtml || '')}</div>
  </body>
</html>`;
  
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