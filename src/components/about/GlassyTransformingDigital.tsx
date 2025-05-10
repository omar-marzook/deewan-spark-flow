import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe, Shield } from 'lucide-react';

const GlassyTransformingDigital = () => {
  const prefersReducedMotion = useReducedMotion();
  return <section id="transforming-digital" className="py-24 relative overflow-hidden" aria-labelledby="transforming-digital-heading">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-deewan-primary/5 via-deewan-secondary/5 to-deewan-accent/5" aria-hidden="true">
        <div className={`absolute top-20 -left-32 w-96 h-96 bg-deewan-primary/20 rounded-full mix-blend-multiply filter blur-3xl ${prefersReducedMotion ? '' : 'animate-pulse-slow'}`}></div>
        <div className={`absolute bottom-20 -right-32 w-96 h-96 bg-deewan-secondary/20 rounded-full mix-blend-multiply filter blur-3xl ${prefersReducedMotion ? '' : 'animate-pulse-slow'}`}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Glassy header */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 mx-auto max-w-3xl">
            <h2 id="transforming-digital-heading" className="text-3xl md:text-4xl font-bold mb-4 text-deewan-dark">
              Transforming Digital <span className="text-deewan-primary">Communication</span>
            </h2>
            <p className="text-lg text-deewan-gray">Rooted in excellence and driven by innovation, we’re proud to be part of Saudi Arabia’s digital transformation journey—while building solutions that resonate across the globe.</p>
          </div>
        </motion.div>
        
        {/* Feature cards with glassmorphism effect */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 list-none p-0">
          {[{
          icon: <Globe className="w-8 h-8" aria-hidden="true" />,
          title: "Global Reach",
          description: "Expanding our solutions beyond Saudi Arabia to serve clients worldwide."
        }, {
          icon: <Shield className="w-8 h-8" aria-hidden="true" />,
          title: "Vision 2030",
          description: "Contributing to Saudi Arabia's digital transformation through innovative communication."
        }, {
          icon: <Shield className="w-8 h-8" aria-hidden="true" />,
          title: "Secure Systems",
          description: "Building communication platforms with security at their core."
        }, {
          icon: <Globe className="w-8 h-8" aria-hidden="true" />,
          title: "Local Expertise",
          description: "Combining global standards with deep local market knowledge."
        }].map((item, index) => (
          <li key={index}>
            <motion.div 
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1
              }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 h-full
                        hover:bg-white/20 hover:shadow-lg focus-within:bg-white/20 focus-within:shadow-lg transition-all duration-300 hover:transform hover:scale-105 focus-within:scale-105"
              tabIndex={0}
            >
              <div className="text-deewan-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-deewan-dark/70 text-sm">{item.description}</p>
            </motion.div>
          </li>
        ))}
        </ul>
        
        {/* Advanced glassmorphism card */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-2xl p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-deewan-primary/10 rounded-full mix-blend-multiply filter blur-2xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-deewan-secondary/10 rounded-full mix-blend-multiply filter blur-2xl" aria-hidden="true"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-deewan-dark">Our Commitment to Innovation</h3>
              <p className="text-deewan-gray mb-6">
                At Deewan, we're not just building communication tools – we're reimagining how people and organizations 
                connect in the digital age. Our solutions combine cutting-edge technology with intuitive design to 
                create seamless, secure, and effective communication experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-deewan-primary">User-Centered Design</h4>
                  <p className="text-sm text-deewan-gray">Creating intuitive interfaces that prioritize user experience.</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-deewan-primary">Enterprise-Grade Security</h4>
                  <p className="text-sm text-deewan-gray">Protecting sensitive communications with robust security measures.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default GlassyTransformingDigital;