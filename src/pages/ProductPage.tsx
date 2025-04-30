
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductHero from "@/components/product/ProductHero";
import PowerfulCapabilitiesRedesign from "@/components/product/PowerfulCapabilitiesRedesign";
import CoreFeaturesStaggered from "@/components/product/CoreFeaturesStaggered";
import ProductUseCases from "@/components/product/ProductUseCases";
import ProductCTA from "@/components/product/ProductCTA";
import IndustrySolutionsRedesign from "@/components/product/IndustrySolutionsRedesign";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import HowItWorksVideo from "@/components/product/HowItWorksVideo";
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
      <PowerfulCapabilitiesRedesign />
      <CoreFeaturesStaggered />
      <ProductUseCases useCases={productData.useCases} />
      <IndustrySolutionsRedesign />
      {productData.howItWorks?.steps && (
        <HowItWorksSteps steps={productData.howItWorks.steps} />
      )}
      {productData.howItWorks?.videoUrl && (
        <HowItWorksVideo videoUrl={productData.howItWorks.videoUrl} />
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
