
import React, { useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductUseCases from "@/components/product/ProductUseCases";
import ProductCTA from "@/components/product/ProductCTA";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import productsData from "@/data/products-data";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import IndustrySolutionsRedesign from "@/components/product/IndustrySolutionsRedesign";

// Steps for the How It Works section
const steps = [
  {
    number: 1,
    title: "Connect Your Channels",
    description: "Easily integrate WhatsApp, Facebook, Instagram, Web Chat, Email and other communication channels."
  },
  {
    number: 2,
    title: "Configure Routing & Automation",
    description: "Set up intelligent routing rules and automate responses for common customer inquiries."
  },
  {
    number: 3,
    title: "Manage Conversations",
    description: "Respond to all customer messages from a unified dashboard with full conversation history."
  },
  {
    number: 4,
    title: "Analyze & Improve",
    description: "Track performance metrics and customer satisfaction to continuously enhance your service."
  }
];

const OmniChannelChatPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const productData = productsData["omni-channel-chat"];

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <ProductHero 
        name={productData.name} 
        tagline={productData.tagline} 
        heroImage={productData.heroImage}
        onContactClick={scrollToContact}
      />
      
      {/* Features Section */}
      <ProductFeatures features={productData.features} />
      
      {/* Use Cases Section */}
      <ProductUseCases useCases={productData.useCases} />
      
      {/* How It Works Section */}
      <HowItWorksSteps steps={steps} />
      
      {/* Industry Solutions */}
      <IndustrySolutionsRedesign />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* CTA Section */}
      <ProductCTA onContactClick={scrollToContact} />
      
      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OmniChannelChatPage;
