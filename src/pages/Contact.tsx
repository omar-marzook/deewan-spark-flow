
import React from "react";
import { Helmet } from "react-helmet";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactReassurance from "@/components/contact/ContactReassurance";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Helmet>
        <title>Contact Us - Deewan</title>
        <meta name="description" content="Contact Deewan for intelligent communication solutions. We're here to help with your business communication needs." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <ContactHero />
        <ContactReassurance />
        <ContactInfo />
      </main>
      
      <Footer />
    </LazyMotion>
  );
};

export default Contact;
