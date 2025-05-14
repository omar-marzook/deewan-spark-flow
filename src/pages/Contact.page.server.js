// Server-side logic for the Contact page

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // You can fetch data here that will be available to the page component
  // For example, office locations, contact information, etc.
  
  const pageProps = {
    // Add any data needed by the Contact page here
    contactInfo: {
      email: 'info@deewan.com',
      phone: '+966 12 345 6789',
      address: 'Riyadh, Saudi Arabia',
      officeHours: 'Sunday - Thursday: 9:00 AM - 5:00 PM'
    },
    socialMedia: {
      twitter: 'https://twitter.com/deewan',
      linkedin: 'https://linkedin.com/company/deewan',
      facebook: 'https://facebook.com/deewan'
    }
  };
  
  return {
    pageContext: {
      pageProps,
      // Add SEO metadata
      title: 'Contact Us - Deewan',
      description: 'Get in touch with Deewan for intelligent communication solutions. Our team is ready to help with your business needs.',
      keywords: 'contact Deewan, communication solutions contact, customer support, sales inquiry',
      ogType: 'website',
      canonical: '/contact'
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