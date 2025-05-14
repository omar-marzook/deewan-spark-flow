// Server-side logic for the Product Detail page
import productsData from '../data/products-data';
import { getProductSeoContent } from '../lib/productSeo';

// This function runs before rendering the page on the server
export async function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams;
  
  // Get the specific product data based on the slug
  const product = productsData[slug];
  
  // If product not found, return 404
  if (!product) {
    return {
      pageContext: {
        is404: true
      }
    };
  }
  
  // Get SEO metadata for the product
  const seoData = getProductSeoContent(product.name, product.slug);
  
  const pageProps = {
    product
  };
  
  return {
    pageContext: {
      pageProps,
      // Add SEO metadata
      title: seoData.title || `${product.name} - Deewan`,
      description: seoData.description || product.description,
      keywords: seoData.keywords || `Deewan, ${product.name}, communication solutions`,
      ogType: 'product',
      ogImage: product.heroImage || '/media/deewan-og.png',
      canonical: `/products/${slug}`
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
    ogImage: pageContext.ogImage,
    canonical: pageContext.canonical,
    is404: pageContext.is404
  };
}