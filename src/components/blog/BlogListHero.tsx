
import React from 'react';
import { motion } from 'framer-motion';

const BlogListHero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-deewan-primary/20 rounded-full filter blur-3xl opacity-60 animate-pulse-slow"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-deewan-secondary/20 rounded-full filter blur-3xl opacity-60 animate-pulse-slow delay-700"></div>
      <div className="absolute -bottom-20 left-1/3 w-60 h-60 bg-deewan-accent/10 rounded-full filter blur-3xl opacity-70 animate-pulse-slow delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-deewan-dark">
            Insights & Articles
          </h1>
          <p className="text-base md:text-lg text-deewan-gray max-w-2xl mx-auto">
            Ideas, updates, and insights from the team at Deewan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogListHero;
