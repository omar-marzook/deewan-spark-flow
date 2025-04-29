
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import PostContent from "@/components/blog/PostContent";

const CitcRegulations = () => {
  // Full content from original page
  const fullContent = [
    { type: "heading", text: "Compliance Framework" },
    { 
      type: "paragraph", 
      text: "Deewan strictly adheres to all CITC (Communications and Information Technology Commission) regulations governing communication services in Saudi Arabia. Our compliance framework ensures that all our services meet or exceed regulatory requirements."
    },
    { type: "heading", text: "Service Standards" },
    { 
      type: "paragraph", 
      text: "Our services are designed and operated in accordance with CITC standards for:"
    },
    { 
      type: "paragraph", 
      text: "• Quality of Service (QoS) requirements\n• Data protection and privacy measures\n• Network security protocols\n• Customer service response times"
    },
    { type: "heading", text: "Regulatory Updates" },
    { 
      type: "paragraph", 
      text: "We continuously monitor and implement updates to our services based on new CITC regulations and guidelines. This ensures ongoing compliance and service improvement."
    },
    { type: "heading", text: "User Data Protection" },
    { 
      type: "paragraph", 
      text: "In compliance with CITC regulations, we implement comprehensive measures to protect user data, including:"
    },
    { 
      type: "paragraph", 
      text: "• End-to-end encryption for sensitive communications\n• Secure data storage and processing\n• Regular security audits\n• Transparent data handling practices"
    },
    { type: "heading", text: "Service Accessibility" },
    { 
      type: "paragraph", 
      text: "Our services are designed to be accessible to all users in compliance with CITC guidelines. We implement features to ensure accessibility for users with disabilities and provide service in multiple languages where appropriate."
    },
    { type: "heading", text: "Dispute Resolution" },
    { 
      type: "paragraph", 
      text: "In accordance with CITC requirements, we have established clear procedures for handling customer complaints and disputes. Our customer service team is trained to address issues promptly and effectively in line with regulatory standards."
    },
    { type: "heading", text: "Reporting and Documentation" },
    { 
      type: "paragraph", 
      text: "We maintain comprehensive records of our compliance activities and service performance metrics as required by CITC. These records are available for regulatory review upon request."
    },
    { type: "heading", text: "Contact for Regulatory Matters" },
    { 
      type: "paragraph", 
      text: "For inquiries related to our compliance with CITC regulations, please contact our regulatory compliance team at compliance@deewan.sa."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gradient-to-b from-gray-50/80 via-gray-100/80 to-gray-50/80">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative backdrop-blur-sm bg-white/20 rounded-2xl p-8 md:p-12 border border-white/30 shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-deewan-dark mb-12 font-display">CITC Regulations Compliance Policy</h1>
            <PostContent content={fullContent} />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CitcRegulations;
