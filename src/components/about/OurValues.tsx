import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const OurValues = () => {
  const values = [{
    icon: <Star className="w-8 h-8 text-deewan-primary" />,
    title: "Innovation First",
    description: "We constantly push boundaries to create cutting-edge solutions.",
    color: "bg-deewan-primary/10 text-deewan-primary",
    gradient: "from-deewan-primary/20 to-transparent"
  }, {
    icon: <Star className="w-8 h-8 text-deewan-secondary" />,
    title: "Customer Focus",
    description: "Every decision we make starts with our customers' needs.",
    color: "bg-deewan-secondary/10 text-deewan-secondary",
    gradient: "from-deewan-secondary/20 to-transparent"
  }, {
    icon: <Star className="w-8 h-8 text-deewan-accent" />,
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we do.",
    color: "bg-deewan-accent/10 text-deewan-accent",
    gradient: "from-deewan-accent/20 to-transparent"
  }];
  return <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/90"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deewan-dark">Innovation First – And Always.</h2>
          <p className="text-lg text-deewan-dark/80 max-w-2xl mx-auto">These principles guide everything we do and define who we are as a company.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="relative group">
              <div className="glass border-none p-8 rounded-2xl relative overflow-hidden h-full transition-all duration-300 hover:translate-y-[-5px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-deewan-dark group-hover:text-deewan-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-deewan-dark/70">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default OurValues;