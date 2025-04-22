
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactReassurance from "@/components/contact/ContactReassurance";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Deewan</title>
        <meta name="description" content="Contact Deewan for intelligent communication solutions. We're here to help with your business communication needs." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <ContactHero />
        <ContactReassurance />
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
