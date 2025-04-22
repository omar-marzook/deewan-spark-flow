
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContactReassurance = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 md:px-6 py-12"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-lg">
            We usually reply within 1 business day. Your inquiry is important to us.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactReassurance;
