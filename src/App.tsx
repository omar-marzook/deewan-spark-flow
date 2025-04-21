
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Update page title and description for better SEO
    document.title = "Deewan - Intelligent Communication Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Deewan provides intelligent, customizable communication solutions prioritizing security and scalability for businesses across Saudi Arabia and beyond.");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* About Us page */}
            <Route path="/about" element={<AboutUs />} />
            {/* Redirect /product to /products/messaging-api */}
            <Route path="/product" element={<Navigate to="/products/messaging-api" replace />} />
            {/* Dynamic product pages */}
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
