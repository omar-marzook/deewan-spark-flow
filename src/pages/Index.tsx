
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import AlternativeProducts from "../components/AlternativeProducts";
import APIs from "../components/APIs";
import Industries from "../components/Industries";
import Stats from "../components/Stats";
import AlternativeStats from "../components/AlternativeStats";
import LogoCarousel from "../components/LogoCarousel";
import Departments from "../components/Departments";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <AlternativeProducts />
      <APIs />
      <Industries />
      <Stats />
      <AlternativeStats />
      <LogoCarousel />
      <Departments />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
