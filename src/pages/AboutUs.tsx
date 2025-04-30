
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import TransformingDigital from "@/components/about/TransformingDigital";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import ContactSection from "@/components/ContactSection";
import AlternativeStats from "@/components/AlternativeStats";
import CreativeTestimonials from "@/components/CreativeTestimonials";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Deewan";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OurStory />
        <TransformingDigital />
        <OurValues />
        <WhatWeDo />
        <AlternativeStats />
        <CreativeTestimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
