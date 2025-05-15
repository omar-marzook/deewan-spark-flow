import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageContextProvider } from './usePageContext'

// Create a client-side only version of BrowserRouter
const BrowserRouter = ({ children }) => {
  return <>{children}</>
}

const queryClient = new QueryClient();

export function PageShell({ pageContext, children }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </PageContextProvider>
  )
}