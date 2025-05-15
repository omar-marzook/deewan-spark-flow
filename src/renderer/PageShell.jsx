import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageContextProvider } from './usePageContext'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductPage from '@/pages/ProductPage';
import BlogPostPage from '@/pages/BlogPostPage';

// We'll dynamically import the appropriate router based on environment
const queryClient = new QueryClient();

export async function PageShell({ pageContext, children }) {
  // We need to determine if we're on the client or server
  const isClient = typeof window !== 'undefined';
  
  // Get the current URL from pageContext
  const url = pageContext.urlOriginal || '/';
  
  // Create the appropriate router element based on environment
  let RouterElement = ({ children }) => <>{children}</>; // Default fallback
  
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
  
  return (
    <PageContextProvider pageContext={pageContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RouterElement>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main id="main-content" className="flex-grow">
                <Routes>
                  {/* Define explicit routes for products and blog posts */}
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
                  {/* Default route for all other pages */}
                  <Route path="*" element={children} />
                </Routes>
              </main>
              <Footer />
            </div>
          </RouterElement>
        </TooltipProvider>
      </QueryClientProvider>
    </PageContextProvider>
  )
}