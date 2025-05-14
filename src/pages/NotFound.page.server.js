// Server-side logic for the Not Found page

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // Set the HTTP status code to 404
  return {
    pageContext: {
      pageProps: {},
      // Add SEO metadata
      title: 'Page Not Found - Deewan',
      description: 'The page you are looking for could not be found.',
      statusCode: 404
    }
  };
}

// Control which data is passed to the client
export function passToClient(pageContext) {
  return {
    pageProps: pageContext.pageProps,
    title: pageContext.title,
    description: pageContext.description,
    statusCode: pageContext.statusCode
  };
}