
import React, { useEffect } from "react";
import HeroSection from "@/components/about/HeroSection";
import TransformingDigital from "@/components/about/TransformingDigital";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import ContactSection from "@/components/ContactSection";
import AlternativeStats from "@/components/AlternativeStats";
import AlternativeTestimonials from "@/components/AlternativeTestimonials";
import SEO from "@/components/SEO";
import { generateBreadcrumbSchema, organizationSchema } from "@/lib/schema";
import { BarChart, CheckCircle, Users, Briefcase } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" }
  ]);

  // Combine schemas
  const combinedSchema = [breadcrumbSchema, organizationSchema];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO 
        title="About Deewan | Leading Communication Solutions Provider in Saudi Arabia"
        description="Learn about Deewan's mission to transform business communications with innovative, secure solutions tailored for the Saudi Arabian market."
        canonical="/about"
        schema={combinedSchema}
      />
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
            description: "Real impact for measurable growth."
          }}
        />
        <AlternativeTestimonials />
        <ContactSection />
      </main>
    </div>
  );
};

export default AboutUs;
