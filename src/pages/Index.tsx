
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import AlternativeProducts from "../components/AlternativeProducts";
import Industries from "../components/Industries";
import Stats from "../components/Stats";
import AlternativeStats from "../components/AlternativeStats";
import LogoCarousel from "../components/LogoCarousel";
import Departments from "../components/Departments";
import Testimonials from "../components/Testimonials";
import AlternativeTestimonials from "../components/AlternativeTestimonials";
import BlogSection from "../components/BlogSection";
import Contact from "../components/Contact";
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
      <Stats />
      <AlternativeStats />
      <Departments />
      <Testimonials />
      <AlternativeTestimonials /> {/* Added new testimonials component */}
      <BlogSection />
      <Contact />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
