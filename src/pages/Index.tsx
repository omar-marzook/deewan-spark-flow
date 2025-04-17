
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import AlternativeProducts from "../components/AlternativeProducts";
import Industries from "../components/Industries";
import LogoCarousel from "../components/LogoCarousel";
import Departments from "../components/Departments";
import DepartmentsWeServe from "../components/DepartmentsWeServe";
import CreativeTestimonials from "../components/CreativeTestimonials";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <AlternativeProducts />
      {/* APIs section removed as requested */}
      <Industries />
      {/* Stats section removed as requested */}
      {/* AlternativeStats section removed as requested */}
      <LogoCarousel />
      <Departments />
      <DepartmentsWeServe />
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
