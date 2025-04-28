
import React from "react";
import { motion } from "framer-motion";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, children }) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/80 via-gray-100/80 to-gray-50/80">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative backdrop-blur-sm bg-white/20 rounded-2xl p-8 md:p-12 border border-white/30 shadow-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deewan-dark mb-12 font-display">{title}</h1>
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default LegalPageLayout;
