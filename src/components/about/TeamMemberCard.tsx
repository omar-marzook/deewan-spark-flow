
import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  image: string;
  name: string;
  position: string;
  description: string;
  delay?: number; // Added optional delay prop
}

const TeamMemberCard = ({ image, name, position, description, delay = 0 }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
    >
      <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      
      <h4 className="text-xl font-bold mb-2 text-deewan-dark group-hover:text-deewan-primary transition-colors">
        {name}
      </h4>
      
      <p className="text-deewan-primary font-medium mb-3">
        {position}
      </p>
      
      <p className="text-deewan-dark/70 text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default TeamMemberCard;
