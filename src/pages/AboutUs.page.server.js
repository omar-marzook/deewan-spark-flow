// Server-side logic for the AboutUs page

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // You can fetch data here that will be available to the page component
  // For example, from an API or database
  
  // For now, we'll just provide some basic metadata
  const pageProps = {
    // Add any data needed by the AboutUs page here
  };
  
  return {
    pageContext: {
      pageProps,
      // Add SEO metadata
      title: 'About Us - Deewan',
      description: 'Learn more about Deewan and our mission'
    }
  };
}

// Control which data is passed to the client
export function passToClient(pageContext) {
  return {
    pageProps: pageContext.pageProps,
    title: pageContext.title,
    description: pageContext.description
  };
}