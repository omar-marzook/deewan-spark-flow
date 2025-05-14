// Server-side logic for the Privacy Policy page

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // You can fetch data here that will be available to the page component
  // For example, privacy policy content from a CMS or database
  
  const pageProps = {
    // Add any data needed by the Privacy Policy page here
    lastUpdated: '2025-05-01',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'This Privacy Policy describes how Deewan collects, uses, and shares your personal information.'
      },
      {
        id: 'data-collection',
        title: 'Data Collection',
        content: 'We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.'
      },
      {
        id: 'data-usage',
        title: 'How We Use Your Data',
        content: 'We use your personal information to provide, maintain, and improve our services, to develop new products and services, and to protect Deewan and our users.'
      }
    ]
  };
  
  return {
    pageContext: {
      pageProps,
      // Add SEO metadata
      title: 'Privacy Policy - Deewan',
      description: 'Learn about how Deewan collects, uses, and protects your personal information.',
      keywords: 'Deewan privacy policy, data protection, personal information, privacy',
      ogType: 'website',
      canonical: '/privacy-policy'
    }
  };
}

// Control which data is passed to the client
export function passToClient(pageContext) {
  return {
    pageProps: pageContext.pageProps,
    title: pageContext.title,
    description: pageContext.description,
    keywords: pageContext.keywords,
    ogType: pageContext.ogType,
    canonical: pageContext.canonical
  };
}