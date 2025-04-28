
import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksStepsProps {
  steps: Step[];
}

const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({ steps }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-deewan-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-deewan-secondary rounded-full mr-2"></span>
            <span className="text-sm font-medium text-deewan-dark/80">Implementation</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            <span className="text-deewan-primary">How It</span> Works
          </h2>
          
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Get started with our Omni-Channel Chat platform in four simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-8 mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-deewan-primary/20 flex items-center justify-center text-deewan-primary font-bold text-xl shadow-sm">
                  {step.number}
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-deewan-primary/20 absolute top-12 left-6 transform -translate-x-1/2"></div>
                )}
              </div>
              
              {/* Step content */}
              <div className="glass-card p-6 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 flex-grow shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-deewan-dark">
                  {step.title}
                </h3>
                <p className="text-deewan-dark/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
