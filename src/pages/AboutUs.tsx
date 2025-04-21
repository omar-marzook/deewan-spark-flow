import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import OurTeam from "@/components/about/OurTeam";
import LogoCarousel from "@/components/LogoCarousel";
import ContactSection from "@/components/ContactSection";

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "About Us | Deewan";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection />
        <OurStory />
        <OurValues />
        <OurTeam />
        
        {/* Partners/Clients Logos Section */}
        <div className="py-10">
          <div className="container mx-auto px-4 md:px-6 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-4 font-display">Our Trusted Partners</h2>
              <p className="text-lg text-deewan-gray max-w-2xl mx-auto">
                We're proud to work with leading organizations across Saudi Arabia and beyond.
              </p>
            </div>
          </div>
          <LogoCarousel />
        </div>
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
