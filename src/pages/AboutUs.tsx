
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
import { BarChart, CheckCircle, Users, Briefcase } from 'lucide-react';

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
        <AlternativeStats
          // Using default props explicitly for clarity
          showCards={true}
          gridCount={4}
          showTitle={true}
          stats={[
            {
              icon: <BarChart className="h-6 w-6 text-deewan-primary" />,
              value: "9+ Billion",
              label: "Annual Transactions"
            },
            {
              icon: <Users className="h-6 w-6 text-deewan-primary" />,
              value: "300+",
              label: "Satisfied Customers"
            },
            {
              icon: <Briefcase className="h-6 w-6 text-deewan-primary" />,
              value: "6+",
              label: "Industries Served"
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-deewan-primary" />,
              value: "99.9%",
              label: "Uptime Reliability"
            }
          ]}
          titleContent={{
            title: "<span class=\"text-deewan-primary\">Deewan</span> in Numbers",
            description: "Real impact. Measurable growth"
          }}
        />
        <CreativeTestimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
