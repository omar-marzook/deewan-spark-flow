import { SEOData } from './seo-context';

export function extractSEOFromPageProps(pageContext: any): SEOData {
  // Extract from documentProps first (server-side)
  const docProps = pageContext.documentProps || {};
  
  // Default SEO data
  const defaultSEO: SEOData = {
    title: 'Deewan',
    description: 'Deewan - Communication Platform',
    ogType: 'website',
    ogImage: '/deewan-og.png',
    twitterCard: 'summary_large_image',
    gtmId: 'GTM-NQ3879TV'
  };
  
  // Merge with documentProps
  const seoFromDocProps: Partial<SEOData> = {
    title: docProps.title,
    description: docProps.description,
    additionalHead: docProps.head
  };
  
  // Merge with pageProps.seoData if available (for dynamic pages)
  const pageProps = pageContext.pageProps || {};
  const seoFromPageProps = pageProps.seoData || {};
  
  // Combine all sources, with pageProps taking precedence
  return {
    ...defaultSEO,
    ...seoFromDocProps,
    ...seoFromPageProps
  };
}