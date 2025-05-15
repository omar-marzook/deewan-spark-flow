import React from 'react'
import Index from './Index'

export const Page = Index

// Metadata for the home page
export const documentProps = {
  title: 'Deewan - Intelligent Communication Solutions for Business | Saudi Arabia',
  description: 'Deewan provides secure, scalable communication solutions including WhatsApp Business API, SMS, Voice, and AI-powered chatbots for businesses across Saudi Arabia.',
  // You can add additional head elements here
  head: `
    <meta property="og:title" content="Deewan - Intelligent Communication Solutions" />
    <meta property="og:description" content="Secure, scalable communication solutions for businesses across Saudi Arabia." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://deewan.sa/" />
    <meta property="og:image" content="https://deewan.sa/media/deewan-og-image.jpg" />
  `
}

// This is called when the page is loaded
export function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        // You can pass additional props to the page component here
      }
    }
  }
}