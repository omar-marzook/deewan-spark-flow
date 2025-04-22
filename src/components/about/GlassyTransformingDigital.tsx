
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield } from 'lucide-react';

const GlassyTransformingDigital = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-deewan-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-deewan-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow delay-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-deewan-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/30 p-8 md:p-12 rounded-2xl border border-white/20 shadow-lg"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Alternative <span className="text-deewan-primary">Glassy</span> Design
            </h2>
            <p className="text-lg text-deewan-dark/80 max-w-3xl mx-auto">
              Experience our vision through a modern, glassy interface that represents our innovative approach to digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Extending our innovative solutions across borders, connecting businesses worldwide."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Vision 2030",
                description: "Leading the digital transformation aligned with Saudi Arabia's vision for the future."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Innovation Hub",
                description: "Pioneering new technologies and solutions for enterprise communication."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/40 rounded-xl p-6 border border-white/20 hover:bg-white/50 transition-all duration-300"
              >
                <div className="text-deewan-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-deewan-dark/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlassyTransformingDigital;
