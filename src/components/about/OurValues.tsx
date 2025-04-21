
import React from 'react';
import { Star, Award, Shield, Lightbulb, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useValueAnimations } from '@/hooks/useValueAnimations';
import ValueCard from './ValueCard';
import ValuesHeader from './ValuesHeader';

const OurValues = () => {
  const { containerVariants, itemVariants, hoverAnimation } = useValueAnimations();

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-deewan-primary" />,
      title: "Innovation",
      description: "We constantly push boundaries to create solutions that anticipate tomorrow's communication needs."
    },
    {
      icon: <Shield className="h-8 w-8 text-deewan-primary" />,
      title: "Reliability",
      description: "Our systems are designed with security and stability at their core, ensuring dependable service."
    },
    {
      icon: <Star className="h-8 w-8 text-deewan-primary" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in every aspect of our work and products."
    },
    {
      icon: <Award className="h-8 w-8 text-deewan-primary" />,
      title: "Integrity",
      description: "Transparent and ethical practices guide all our business decisions and relationships."
    },
    {
      icon: <Heart className="h-8 w-8 text-deewan-primary" />,
      title: "Empathy",
      description: "We design with deep understanding of our users' experiences and communication needs."
    }
  ];
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white -z-10"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-deewan-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <ValuesHeader />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              variants={itemVariants}
              hoverAnimation={hoverAnimation}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
