// Server-side logic for the Products page
import productsData from '../data/products-data';

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  // Get all products data
  const products = Object.values(productsData);
  
  const pageProps = {
    products
  };
  
  return {
      pageContext: {
          pageProps,
          // Add SEO metadata
          title: 'Products - Deewan',
          description:
              "Explore Deewan's suite of intelligent communication solutions including WhatsApp Business API, SMS, Voice, Email, and more.",
          keywords:
              'Deewan products, communication solutions, WhatsApp Business API, SMS API, Voice API, Email API, Push Notifications, Chatbots',
          ogType: 'website',
          ogImage: '/media/deewan-og.png',
      },
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
    ogImage: pageContext.ogImage
  };
}