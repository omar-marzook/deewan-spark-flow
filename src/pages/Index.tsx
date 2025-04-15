import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import APIs from "../components/APIs";
import Industries from "../components/Industries";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <APIs />
      <Industries />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
