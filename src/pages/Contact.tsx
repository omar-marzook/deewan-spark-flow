
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
  
  // Create complete SEO data object
  const seoData = {
    title: "Contact Deewan | Get in Touch with Our Communication Experts",
    description: "Contact Deewan for intelligent communication solutions. We're here to help with your business communication needs in Saudi Arabia.",
    canonical: "/contact",
    schema: combinedSchema
  };
  
  // Store SEO data in pageProps for server-side rendering
  if (typeof window === 'undefined') {
    // This only runs on the server
    // @ts-ignore - This will be picked up by Vike
    Contact.pageProps = { seoData };
  }

  return (
    <LazyMotion features={domAnimation}>
      <SEO {...seoData} />
      
      <main>
        <ContactHero />
        <ContactReassurance />
        <ContactInfo />
      </main>
    </LazyMotion>
  );
};

export default Contact;
