// Server-side logic for the CITC Regulations page

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // You can fetch data here that will be available to the page component
  // For example, regulations data from an API or database
  
  const pageProps = {
    // Add any data needed by the CITC Regulations page here
    regulations: [
      {
        id: 1,
        title: 'SMS Regulations',
        content: 'All SMS messages must comply with CITC regulations regarding content and opt-in requirements.'
      },
      {
        id: 2,
        title: 'WhatsApp Business API Regulations',
        content: 'WhatsApp Business API usage must adhere to CITC guidelines for business messaging.'
      },
      {
        id: 3,
        title: 'Voice Services Regulations',
        content: 'Voice services must comply with CITC regulations for telecommunications services.'
      }
    ]
  };
  
  return {
    pageContext: {
      pageProps,
      // Add SEO metadata
      title: 'CITC Regulations - Deewan',
      description: 'Learn about the CITC regulations that govern communication services in Saudi Arabia and how Deewan ensures compliance.',
      keywords: 'CITC regulations, Saudi Arabia communications regulations, telecom compliance, Deewan compliance',
      ogType: 'website',
      canonical: '/citc-regulations'
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