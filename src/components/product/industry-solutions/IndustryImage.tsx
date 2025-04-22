
import React from 'react';
import { motion } from 'framer-motion';

interface IndustryImageProps {
  industry: {
    id: string;
    name: string;
    image: string;
  };
  isActive: boolean;
}

const IndustryImage = ({ industry, isActive }: IndustryImageProps) => {
  return (
    <motion.div
      key={industry.id}
      className="absolute inset-0 rounded-2xl overflow-hidden border border-purple-100 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        zIndex: isActive ? 1 : 0
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent z-10"></div>
      
      {/* Background image */}
      <img 
        src={industry.image} 
        alt={industry.name} 
        className="w-full h-full object-cover"
      />
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-purple-900/70 to-transparent z-20">
        <h3 className="text-white text-xl font-bold">{industry.name}</h3>
        <p className="text-purple-50 text-sm mt-1">Communication solutions for {industry.name.toLowerCase()}</p>
      </div>
    </motion.div>
  );
};

export default IndustryImage;
