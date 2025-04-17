
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductsTabbedLayout from "../components/ProductsTabbedLayout";
import AlternativeProducts from "../components/AlternativeProducts";
import Industries from "../components/Industries";
import LogoCarousel from "../components/LogoCarousel";
import DepartmentsWeServe from "../components/DepartmentsWeServe";
import DepartmentsOption from "../components/DepartmentsOption";
import CreativeTestimonials from "../components/CreativeTestimonials";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* Original Products section commented out to use new designs */}
      {/* <Products /> */}
      
      {/* Product Section Option 2: Tabbed Layout */}
      <ProductsTabbedLayout />
      
      <AlternativeProducts />
      {/* APIs section removed as requested */}
      <Industries />
      {/* Stats section removed as requested */}
      {/* AlternativeStats section removed as requested */}
      <LogoCarousel />
      <DepartmentsWeServe />
      <DepartmentsOption />
      {/* Testimonials section removed as requested */}
      {/* AlternativeTestimonials section removed as requested */}
      <CreativeTestimonials />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
