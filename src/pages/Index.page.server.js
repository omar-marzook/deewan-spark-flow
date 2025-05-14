// Server-side logic for the Index page

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // You can fetch data here that will be available to the page component
  // For example, from an API or database
  
  // For now, we'll just provide some basic metadata
  const pageProps = {
    // Add any data needed by the Index page here
  };
  
  return {
    pageContext: {
      pageProps,
      // Add SEO metadata
      title: 'Deewan Spark Flow - Home',
      description: 'Welcome to Deewan Spark Flow - Your communication platform'
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