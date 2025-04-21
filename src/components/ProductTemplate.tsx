
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoCarousel from "./LogoCarousel";
import Contact from "./Contact";
import BlogSection from "./BlogSection";

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
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden font-sans bg-white text-deewan-dark">
      {/* Navigation */}
      <Navbar />

      {/* Hero/Intro Section */}
      <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white pt-28 pb-10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-xl animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Deewan Logo" className="h-10" />
              <span className="font-extrabold text-2xl tracking-tight text-deewan-primary font-display" style={{ letterSpacing: '-0.03em' }}>
                Deewan
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deewan-dark leading-tight font-display" style={{ letterSpacing: '-0.03em' }}>
              {product.name}
            </h1>
            <p className="mb-8 text-deewan-gray text-lg font-sans">
              {product.tagline}
            </p>
            <Button 
              size="lg" 
              className="bg-deewan-primary hover:bg-deewan-primary/90 text-white font-extrabold rounded-md shadow-xl"
              onClick={() => navigate("#contact")}
            >
              Contact Us
            </Button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Product Illustration or Dynamic Image */}
            <div className="relative animate-fade-in">
              {product.heroImage ? (
                <img 
                  src={product.heroImage} 
                  alt={product.name} 
                  className="h-44 drop-shadow-lg" 
                />
              ) : (
                <img 
                  src="/logo.svg" 
                  className="h-44 drop-shadow-lg" 
                  alt="Product illustration" 
                />
              )}
              <div className="absolute right-2 top-1/3 w-24 h-24 bg-deewan-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute left-0 top-2/3 w-20 h-20 bg-deewan-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-deewan-dark font-display">Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {product.features.map((feature, index) => (
            <div 
              key={index} 
              className="group shadow-lg hover:shadow-xl transition-all rounded-xl bg-white/90 backdrop-blur p-6 border border-white/60 hover:scale-105 animate-fade-in font-sans"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-deewan-primary/15 rounded-xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-extrabold text-lg text-deewan-dark mb-2 font-display">{feature.title}</h3>
              <p className="text-deewan-gray text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full bg-gradient-to-br from-deewan-primary/5 to-deewan-secondary/10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-deewan-dark font-display">Tailored For Your Business</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {product.useCases.map((useCase, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl bg-white shadow-md flex-1 p-8 flex flex-col items-center hover:bg-deewan-primary/10 transition-colors duration-200 animate-fade-in font-sans"
              >
                <div className="mb-4">{useCase.icon}</div>
                <div className="font-bold text-lg text-deewan-dark mb-1 font-display">{useCase.title}</div>
                <div className="text-deewan-gray text-center">{useCase.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section - using the auto-sliding logo carousel */}
      <LogoCarousel />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductTemplate;
