
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: any;
  hoverAnimation: any;
}

const ValueCard = ({ icon, title, description, variants, hoverAnimation }: ValueCardProps) => {
  return (
    <motion.div
      variants={variants}
      whileHover={hoverAnimation}
      className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-sm relative overflow-hidden group"
    >
      <div className="absolute -inset-10 bg-deewan-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
      
      <div className="relative z-10">
        <div className="mb-6 p-4 rounded-lg bg-white/80 w-16 h-16 flex items-center justify-center shadow-sm border border-white/50 group-hover:bg-deewan-primary/10 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-deewan-dark group-hover:text-deewan-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-deewan-dark/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ValueCard;
