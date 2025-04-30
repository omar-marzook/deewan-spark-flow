
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductHero from "@/components/product/ProductHero";
import AlternativeStats from "@/components/AlternativeStats";
import { CheckCircle, MessageSquare, Globe } from 'lucide-react';
import PowerfulCapabilitiesRedesign from "@/components/product/PowerfulCapabilitiesRedesign";
import CoreFeaturesStaggered from "@/components/product/CoreFeaturesStaggered";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import DepartmentsWeServe from "@/components/DepartmentsWeServe";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import productsData from "@/data/products-data";
import NotFound from "./NotFound";

export default function ProductPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  // Find the product data based on the slug
  const productData = slug ? productsData[slug] : null;
  
  // If no product is found, show the 404 page
  if (!productData) {
    return <NotFound />;
  }

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <ProductHero
        name={productData.name}
        tagline={productData.tagline}
        onContactClick={scrollToContact}
      />
      <AlternativeStats
        showCards={false}
        gridCount={3}
        showTitle={false}
        stats={productData.stats || [
          // Fallback stats if product doesn't have specific stats
          {
            icon: <MessageSquare className="h-6 w-6 text-deewan-primary" />,
            value: productData.features.length.toString() + "+",
            label: "Powerful Features"
          },
          {
            icon: <Globe className="h-6 w-6 text-deewan-primary" />,
            value: "24/7",
            label: "Customer Support"
          },
          {
            icon: <CheckCircle className="h-6 w-6 text-deewan-primary" />,
            value: "99.9%",
            label: "Uptime Reliability"
          }
        ]}
        titleContent={{
          title: `<span class="text-deewan-primary">${productData.name}</span> Stats`,
          description: "Powerful performance metrics"
        }}
      />
      <CoreFeaturesStaggered
        features={productData.features}
        title={productData.coreFeatures?.title || `<span class="text-deewan-primary">${productData.name}</span> Features`}
        subtitle={productData.coreFeatures?.subtitle || `Discover how ${productData.name} can transform your communication experience`}
      />
      <PowerfulCapabilitiesRedesign 
        title={productData.powerfulCapabilities?.title}
        subtitle={productData.powerfulCapabilities?.subtitle}
      />
      {productData.howItWorks?.steps && (
        <HowItWorksSteps steps={productData.howItWorks.steps} />
      )}
      <DepartmentsWeServe />
      <BlogSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
