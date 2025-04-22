
import React from 'react';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OurStory = () => {
  const timelineItems = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Started with a mission to transform digital communication',
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Launched comprehensive communication suite',
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Introduced AI-powered solutions',
    },
    {
      year: '2024',
      title: 'Growth',
      description: 'Serving 100+ enterprises across Saudi Arabia',
    },
  ];

  return (
    <section id="our-story" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-deewan-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-deewan-secondary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <History className="text-deewan-primary h-5 w-5 mr-2" />
            <span className="text-sm font-medium text-deewan-dark/80">Our Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deewan-dark">
            Our Story of <span className="text-deewan-primary">Growth</span>
          </h2>
          
          <p className="text-lg text-deewan-dark/80 max-w-2xl mx-auto">
            From our beginnings in 2018 to today, we've been on a mission to revolutionize
            how organizations communicate in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-deewan-primary/5 to-deewan-secondary/5 rounded-3xl transform rotate-3"></div>
            <div className="glass p-8 rounded-2xl relative space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-deewan-primary/10 flex items-center justify-center">
                    <span className="text-deewan-primary font-bold text-sm">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-deewan-dark">{item.title}</h3>
                  <p className="text-deewan-dark/70">{item.description}</p>
                  {index !== timelineItems.length - 1 && (
                    <div className="absolute left-4 top-8 bottom-0 w-px bg-gradient-to-b from-deewan-primary/20 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-deewan-dark">Our Mission</h3>
                <p className="text-deewan-dark/80">
                  To create communication technology that brings people closer together,
                  making digital interactions as natural and effective as face-to-face conversations.
                </p>
                
                <h3 className="text-2xl font-bold text-deewan-dark">Our Vision</h3>
                <p className="text-deewan-dark/80">
                  To be the cornerstone of communication infrastructure for forward-thinking
                  organizations, bridging the gap between technical possibility and human understanding.
                </p>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-deewan-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-deewan-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
