
import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductHero from "./product/ProductHero";
import ProductFeatures from "./product/ProductFeatures";
import LogoCarousel from "./LogoCarousel";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import ProductCTA from "./product/ProductCTA";
import HowItWorksSteps from "./product/HowItWorksSteps";
import HowItWorksVideo from "./product/HowItWorksVideo";
import DepartmentsWeServe from "./DepartmentsWeServe";

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

export interface ProductHowItWorksStep {
  number: string;
  title: string;
  description: string;
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
  howItWorks?: {
    steps?: ProductHowItWorksStep[];
    videoUrl?: string;
  };
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
      
      {/* How It Works Section */}
      {product.howItWorks?.steps && product.howItWorks.steps.length > 0 && (
        <HowItWorksSteps steps={product.howItWorks.steps.map((step, index) => ({
          number: `0${index + 1}`,
          title: step.title,
          description: step.description
        }))} />
      )}
      
      {product.howItWorks?.videoUrl && (
        <HowItWorksVideo videoUrl={product.howItWorks.videoUrl} />
      )}
      
      {/* Departments We Serve Section */}
      <DepartmentsWeServe />
      
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
