
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import PostContent from "@/components/blog/PostContent";

const PrivacyPolicy = () => {
  // Full content from original page
  const fullContent = [
    { type: "heading", text: "Information We Collect" },
    { 
      type: "paragraph", 
      text: "When you use Deewan's services, we may collect various types of information including:"
    },
    { 
      type: "paragraph", 
      text: "• Contact information (name, email, phone number)\n• Usage data and analytics\n• Communication preferences\n• Technical information about your devices"
    },
    { type: "heading", text: "How We Use Your Information" },
    { 
      type: "paragraph", 
      text: "We use the collected information to provide and improve our services, including:"
    },
    { 
      type: "paragraph", 
      text: "• Delivering our communication services\n• Improving user experience\n• Sending important updates and notifications\n• Analyzing service performance"
    },
    { type: "heading", text: "Information Sharing" },
    { 
      type: "paragraph", 
      text: "We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following cases:"
    },
    { 
      type: "paragraph", 
      text: "• With trusted third parties who assist us in operating our services\n• When required by law or to protect our rights\n• With your consent for specific purposes"
    },
    { type: "heading", text: "Data Security" },
    { 
      type: "paragraph", 
      text: "Deewan implements industry-standard security measures to protect your data. We regularly review and update our security practices to ensure the highest level of protection."
    },
    { type: "heading", text: "Your Data Rights" },
    { 
      type: "paragraph", 
      text: "You have the right to:"
    },
    { 
      type: "paragraph", 
      text: "• Access your personal data\n• Correct inaccuracies in your data\n• Request deletion of your data\n• Restrict or object to certain processing activities\n• Request portability of your data"
    },
    { type: "heading", text: "Cookies and Similar Technologies" },
    { 
      type: "paragraph", 
      text: "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings."
    },
    { type: "heading", text: "Children's Privacy" },
    { 
      type: "paragraph", 
      text: "Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we discover we have collected personal information from a child under 13, we will promptly delete it."
    },
    { type: "heading", text: "Changes to This Privacy Policy" },
    { 
      type: "paragraph", 
      text: "We may update our Privacy Policy periodically. We will notify you of significant changes by posting the new Privacy Policy on this page and updating the effective date."
    },
    { type: "heading", text: "Contact Us" },
    { 
      type: "paragraph", 
      text: "If you have questions or concerns about this Privacy Policy, please contact us at privacy@deewan.sa."
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
            <h1 className="text-4xl md:text-5xl font-bold text-deewan-dark mb-12 font-display">Privacy Policy</h1>
            <PostContent content={fullContent} />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
