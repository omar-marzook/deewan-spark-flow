import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import OurTeam from "@/components/about/OurTeam";
import ContactSection from "@/components/ContactSection";
import LogoCarousel from "@/components/LogoCarousel";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Deewan";
  }, []);
  return <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <OurStory />
        <OurValues />
        <OurTeam />
        
        <div className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            
            <LogoCarousel />
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>;
};
export default AboutUs;