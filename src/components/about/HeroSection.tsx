import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-deewan-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-deewan-secondary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center lg:text-left">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Transforming Communication Across Industries</h1>
            
            <p className="text-xl mb-8 text-deewan-dark/80 max-w-xl">We build intelligent tools that bridge gaps, spark conversations, and help organizations connect.</p>
            
            <a href="#our-story" className="btn-primary flex items-center justify-center w-fit mx-auto lg:mx-0 gap-2">
              Discover Our Story
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[400px] h-[400px]">
                  {/* Middle East Map Outline - Stylized */}
                  <div className="absolute inset-0 bg-gradient-to-br from-deewan-primary/20 to-deewan-secondary/20 rounded-full animate-morph-blob"></div>
                  <div className="absolute inset-4 bg-white/40 backdrop-blur-xl rounded-full border border-white/20"></div>
                  
                  {/* Connection Lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-deewan-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  </div>
                  
                  {/* Floating Dots - Representing Key Cities */}
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-deewan-primary rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-deewan-secondary rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-deewan-accent rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;