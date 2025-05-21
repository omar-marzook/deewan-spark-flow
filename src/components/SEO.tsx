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
    props.schema,
    props.gtmId
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
      
      {/* Preload critical fonts */}
      <link 
        rel="preload" 
        href="/src/static/fonts/Gilroy-Bold.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      <link 
        rel="preload" 
        href="/src/static/fonts/Gilroy-Regular.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      
      {/* Resource hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {/* Google Tag Manager - if specific GTM ID is provided for this page */}
      {props.gtmId && props.gtmId !== 'GTM-NQ3879TV' && (
        <>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${props.gtmId}');
            `}
          </script>
          <noscript>
            {`<iframe src="https://www.googletagmanager.com/ns.html?id=${props.gtmId}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
          </noscript>
        </>
      )}
    </Helmet>
  );
};

export default SEO;