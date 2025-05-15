import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageContextProvider } from './usePageContext'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Routes, Route } from 'react-router-dom';

// We'll dynamically import the appropriate router based on environment
const queryClient = new QueryClient();

export function PageShell({ pageContext, children }) {
  // We need to determine if we're on the client or server
  const isClient = typeof window !== 'undefined';
  
  // Get the current URL from pageContext
  const url = pageContext.urlOriginal || '/';
  
  // Create the appropriate router element based on environment
  let RouterElement;
  if (isClient) {
    // Client-side: Use BrowserRouter
    const { BrowserRouter } = require('react-router-dom');
    RouterElement = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
  } else {
    // Server-side: Use StaticRouter
    const { StaticRouter } = require('react-router-dom/server');
    RouterElement = ({ children }) => <StaticRouter location={url}>{children}</StaticRouter>;
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