import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductHero from "./product/ProductHero";
import ProductFeatures from "./product/ProductFeatures";
import ProductUseCases from "./ProductUseCases";
import LogoCarousel from "./LogoCarousel";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import ProductCTA from "./product/ProductCTA";

// Define the types for our dynamic product data
export interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductUseCase {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage?: string;
  features: ProductFeature[];
  useCases: ProductUseCase[];
  ctaLink?: string;
}

interface ProductTemplateProps {
  product: ProductData;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  // Create refs for scroll to sections
  const contactRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Scroll to contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Scroll to features section
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <ProductHero 
        name={product.name} 
        tagline={product.tagline} 
        heroImage={product.heroImage}
        onContactClick={scrollToContact}
      />
      
      {/* Features Section */}
      <div ref={featuresRef}>
        <ProductFeatures features={product.features} />
      </div>
      
      {/* Use Cases Section */}
      <ProductUseCases useCases={product.useCases} />
      
      {/* Client Logos Section */}
      <LogoCarousel />
      
      {/* CTA Section */}
      <ProductCTA onContactClick={scrollToContact} />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductTemplate;
