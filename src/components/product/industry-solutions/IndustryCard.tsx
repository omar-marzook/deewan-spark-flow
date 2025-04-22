
import React from 'react';
import { motion } from 'framer-motion';

interface IndustryCardProps {
  industry: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
  };
  isActive: boolean;
}

const IndustryCard = ({ industry, isActive }: IndustryCardProps) => {
  return (
    <motion.div
      data-industry-id={industry.id}
      className={`glass p-8 rounded-xl mb-8 border border-purple-100 transition-all duration-300 ${
        isActive 
          ? "bg-white/80 backdrop-blur-md shadow-lg border-purple-200 transform -translate-x-2"
          : "bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-x-1"
      }`}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-3 rounded-lg ${
          isActive 
            ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white" 
            : "bg-purple-100 text-purple-500"
        }`}>
          {industry.icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-800">{industry.name}</h3>
      </div>
      <p className="text-slate-600 pl-16">{industry.description}</p>
    </motion.div>
  );
};

export default IndustryCard;
