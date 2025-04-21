
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const ValuesHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6"
      >
        <Award className="text-deewan-primary h-5 w-5 mr-2" />
        <span className="text-sm font-medium text-deewan-dark/80">What Guides Us</span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold mb-6 text-deewan-dark"
      >
        Our <span className="text-deewan-primary">Values</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-deewan-dark/70 max-w-3xl mx-auto"
      >
        These core principles guide everything we do — from how we build our products to 
        how we interact with clients and each other.
      </motion.p>
    </div>
  );
};

export default ValuesHeader;
