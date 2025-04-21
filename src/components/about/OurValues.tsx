
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Shield, Lightbulb, Heart } from 'lucide-react';

const OurValues = () => {
  // Values data
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
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };
  
  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white -z-10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-deewan-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
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
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              variants={cardHoverVariants}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-sm relative overflow-hidden group"
            >
              {/* Decorative background blur */}
              <div className="absolute -inset-10 bg-deewan-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon container */}
                <div className="mb-6 p-4 rounded-lg bg-white/80 w-16 h-16 flex items-center justify-center shadow-sm border border-white/50 group-hover:bg-deewan-primary/10 transition-colors duration-300">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-deewan-dark group-hover:text-deewan-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-deewan-dark/70">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;

