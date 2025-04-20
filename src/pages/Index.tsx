
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductsTabbedLayout from "../components/ProductsTabbedLayout";
import AlternativeProducts from "../components/AlternativeProducts";
import Industries from "../components/Industries";
import Stats from "../components/Stats";
import LogoCarousel from "../components/LogoCarousel";
import DepartmentsWeServe from "../components/DepartmentsWeServe";
import DepartmentsOption from "../components/DepartmentsOption";
import CreativeTestimonials from "../components/CreativeTestimonials";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import AlternativeStats from "../components/AlternativeStats";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProductsTabbedLayout />
      <AlternativeProducts />
      <Industries />
      <AlternativeStats />
      <LogoCarousel />
      <DepartmentsWeServe />
      <DepartmentsOption />
      <CreativeTestimonials />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
