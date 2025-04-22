
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { MessageSquare } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 -left-32 w-96 h-96 bg-deewan-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-subtle"></div>
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-deewan-secondary/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-subtle delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-deewan-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-subtle delay-1000"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Hero content */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
                  <MessageSquare className="text-deewan-primary h-5 w-5 mr-2" />
                  <span className="text-sm font-medium text-deewan-dark/80">Let's Connect</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deewan-dark">
                  We'd Love to Hear <br />
                  <span className="text-deewan-primary">From You</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                  Have questions about our services? Want to explore how we can help your business? 
                  We're here to help and ready to start the conversation.
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Right column - Contact form */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
