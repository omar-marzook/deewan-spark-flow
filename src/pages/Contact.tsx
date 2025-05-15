
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import ContactHero from "@/components/contact/ContactHero";
import ContactReassurance from "@/components/contact/ContactReassurance";
import ContactInfo from "@/components/contact/ContactInfo";
import SEO from "@/components/SEO";
import { generateBreadcrumbSchema, organizationSchema } from "@/lib/schema";

const Contact = () => {
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ]);

  // Combine schemas
  const combinedSchema = [breadcrumbSchema, organizationSchema];

  return (
    <LazyMotion features={domAnimation}>
      <SEO 
        title="Contact Deewan | Get in Touch with Our Communication Experts"
        description="Contact Deewan for intelligent communication solutions. We're here to help with your business communication needs in Saudi Arabia."
        canonical="/contact"
        schema={combinedSchema}
      />
      
      <main>
        <ContactHero />
        <ContactReassurance />
        <ContactInfo />
      </main>
    </LazyMotion>
  );
};

export default Contact;
