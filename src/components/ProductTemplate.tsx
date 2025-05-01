
import React, { useRef, ReactNode } from "react";
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

// Define the DepartmentData interface
export interface DepartmentData {
  id: number;
  name: string;
  description: string[];
  icon: ReactNode;
  color: string;
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
  departmentsWeServe?: DepartmentData[];
  productFeatures?: {
    title?: string;
    subtitle?: string;
    capabilities?: Array<{
      icon: React.ElementType;
      title: string;
    }>;
  };
  isConversionApi?: boolean; // Flag to identify if the product is a conversion API
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
      
      {/* Features Section - Only show for non-conversion API products */}
      {!product.isConversionApi && (
        <div ref={featuresRef}>
          <ProductFeatures features={product.features} />
        </div>
      )}
      
      {/* How It Works Section - Only show for non-conversion API products */}
      {!product.isConversionApi && product.howItWorks?.steps && product.howItWorks.steps.length > 0 && (
        <HowItWorksSteps steps={product.howItWorks.steps.map((step, index) => ({
          number: `0${index + 1}`,
          title: step.title,
          description: step.description
        }))} />
      )}
      
      {!product.isConversionApi && product.howItWorks?.videoUrl && (
        <HowItWorksVideo videoUrl={product.howItWorks.videoUrl} />
      )}
      
      {/* Product Features Section - Optional for conversion APIs, not shown for applications */}
      {product.isConversionApi && product.productFeatures && (
        <ProductFeatures 
          title={product.productFeatures.title}
          subtitle={product.productFeatures.subtitle}
          capabilities={product.productFeatures.capabilities}
        />
      )}
      
      {/* Departments We Serve Section */}
      <DepartmentsWeServe departments={product.departmentsWeServe} />
      
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
