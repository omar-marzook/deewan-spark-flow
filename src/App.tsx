
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import OmniChannelChatPage from "./pages/OmniChannelChatPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CitcRegulations from "./pages/CitcRegulations";

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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/products" element={<Navigate to="/products/messaging-api" replace />} />
            <Route path="/products/omni-channel-chat" element={<OmniChannelChatPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/citc-regulations" element={<CitcRegulations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
