import React from 'react'
import ProductPage from '../ProductPage'

export const Page = ProductPage

export function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams
  
  // You can fetch product data here if needed
  // For example, you could fetch product details from an API based on the slug
  
  return {
    pageContext: {
      // Pass the slug as a prop to the page component
      pageProps: { slug },
      // Set the document title and description based on the product
      documentProps: {
        title: `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')} | Deewan Products`,
        description: `Learn about Deewan's ${slug.replace(/-/g, ' ')} solution for your business.`
      }
    }
  }
}