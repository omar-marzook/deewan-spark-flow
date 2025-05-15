import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSEO, SEOData } from '@/lib/seo-context';

// Keep the same props interface for backward compatibility
interface SEOProps extends SEOData {}

const SEO = (props: SEOProps) => {
  const { updateSEO } = useSEO();
  const siteUrl = 'https://www.deewan.sa';
  
  // Update the SEO context when props change
  useEffect(() => {
    updateSEO(props);
  }, [
    props.title, 
    props.description, 
    props.canonical, 
    props.ogType, 
    props.ogImage, 
    props.twitterCard, 
    props.schema
    // Removed updateSEO from dependencies to prevent infinite loop
  ]);
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {props.canonical && <link rel="canonical" href={`${siteUrl}${props.canonical}`} />}
      
      {/* Open Graph Tags */}
      <meta property="og:site_name" content="Deewan" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content={props.ogType || 'website'} />
      <meta property="og:image" content={`${siteUrl}${props.ogImage || '/deewan-og.png'}`} />
      {props.canonical && <meta property="og:url" content={`${siteUrl}${props.canonical}`} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={props.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={`${siteUrl}${props.ogImage || '/deewan-og.png'}`} />
      
      {/* Schema.org JSON-LD */}
      {props.schema && (
        <script type="application/ld+json">
          {JSON.stringify(props.schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;