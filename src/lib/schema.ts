/**
 * Schema.org structured data for SEO
 */

// Organization schema for Deewan
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Deewan",
  "url": "https://www.deewan.sa",
  "logo": "https://www.deewan.sa/deewan-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Olaya St, Al Olaya",
    "addressLocality": "Riyadh",
    "postalCode": "12214",
    "addressCountry": "Saudi Arabia"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966552889989",
    "contactType": "customer service",
    "email": "support@deewan.sa"
  },
  "sameAs": [
    "https://x.com/DeewanKSA",
    "https://www.linkedin.com/company/deewanksa"
  ]
};

// Product schema generator
export const generateProductSchema = (productName: string, productDescription: string, productSlug: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": productName,
    "description": productDescription,
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "SAR"
    },
    "url": `https://www.deewan.sa/products/${productSlug}`
  };
};

// Article schema generator for blog posts
export const generateArticleSchema = (
  title: string, 
  image: string, 
  publishDate: string, 
  modifiedDate: string = publishDate,
  authorName: string = "Deewan Team",
  slug: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": image.startsWith('http') ? image : `https://www.deewan.sa${image}`,
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deewan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.deewan.sa/deewan-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.deewan.sa/blog/${slug}`
    }
  };
};

// BreadcrumbList schema generator
export const generateBreadcrumbSchema = (items: {name: string, url: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `https://www.deewan.sa${item.url}`
    }))
  };
};