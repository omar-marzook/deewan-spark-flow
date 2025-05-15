import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageContextProvider } from './usePageContext'
import { SEOProvider } from '@/lib/seo-context';
import { extractSEOFromPageProps } from '@/lib/extract-seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductPage from '@/pages/ProductPage';
import BlogPostPage from '@/pages/BlogPostPage';
import Contact from '@/pages/Contact';
import AboutUs from '@/pages/AboutUs';
import BlogPage from '@/pages/BlogPage';
import Index from '@/pages/Index';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CitcRegulations from '@/pages/CitcRegulations';

// We'll dynamically import the appropriate router based on environment
const queryClient = new QueryClient();

export async function PageShell({ pageContext, children }) {
  // We need to determine if we're on the client or server
  const isClient = typeof window !== 'undefined';
  
  // Get the current URL from pageContext
  const url = pageContext.urlOriginal || '/';
  
  // Create the appropriate router element based on environment
  let RouterElement = ({ children }) => <>{children}</>; // Default fallback
  
  try {
    // Use dynamic import with React.lazy for client-side
    if (isClient) {
      // We're in the browser, so we can use BrowserRouter directly
      // Import from react-router-dom is already at the top level
      const { BrowserRouter } = await import('react-router-dom');
      
      // For client-side, we need to initialize the router with the current URL
      RouterElement = ({ children }) => (
        <BrowserRouter>
          {children}
        </BrowserRouter>
      );
    } else if (typeof window === 'undefined') {
      // Server-side: Use StaticRouter
      // This code only runs on the server
      const { StaticRouter } = await import('react-router-dom/server');
      RouterElement = ({ children }) => (
        <StaticRouter location={url}>
          {children}
        </StaticRouter>
      );
    }
  } catch (error) {
    console.error('Error initializing router:', error);
    // Continue with the default fallback
  }
  
  // Extract initial SEO data
  const initialSEOData = extractSEOFromPageProps(pageContext);
  
  return (
    <PageContextProvider pageContext={pageContext}>
      <QueryClientProvider client={queryClient}>
        <SEOProvider initialData={initialSEOData}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <RouterElement>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main id="main-content" className="flex-grow">
                <Routes>
                  {/* 
                    Define explicit routes for all main pages to prevent 404 errors during initial load
                    This ensures React Router recognizes these routes before Vike fully initializes
                  */}
                  <Route path="/" element={<Index {...(pageContext.pageProps || {})} />} />
                  <Route path="/contact" element={<Contact {...(pageContext.pageProps || {})} />} />
                  <Route path="/about" element={<AboutUs {...(pageContext.pageProps || {})} />} />
                  <Route path="/blog" element={<BlogPage {...(pageContext.pageProps || {})} />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy {...(pageContext.pageProps || {})} />} />
                  <Route path="/citc-regulations" element={<CitcRegulations {...(pageContext.pageProps || {})} />} />
                  
                  {/* Dynamic routes */}
                  <Route 
                    path="/products/:slug" 
                    element={
                      pageContext.urlPathname?.startsWith('/products/') ? 
                        <ProductPage 
                          slug={pageContext.routeParams?.slug} 
                          {...(pageContext.pageProps || {})}
                        /> : 
                        <ProductPage />
                    } 
                  />
                  <Route 
                    path="/blog/:slug" 
                    element={
                      pageContext.urlPathname?.startsWith('/blog/') ? 
                        <BlogPostPage 
                          slug={pageContext.routeParams?.slug}
                          post={pageContext.pageProps?.post}
                          {...(pageContext.pageProps || {})}
                        /> : 
                        <BlogPostPage />
                    } 
                  />
                  
                  {/* Default route for any other pages */}
                  <Route path="*" element={children} />
                </Routes>
              </main>
              <Footer />
            </div>
          </RouterElement>
        </TooltipProvider>
        </SEOProvider>
      </QueryClientProvider>
    </PageContextProvider>
  )
}