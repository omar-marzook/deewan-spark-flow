
import React from 'react';
import { motion } from 'framer-motion';
import { History, Globe, BookOpen } from 'lucide-react';

const OurStory = () => {
  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section id="our-story" className="py-24 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-deewan-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
                <BookOpen className="text-deewan-primary h-5 w-5 mr-2" />
                <span className="text-sm font-medium text-deewan-dark/80">Our Journey</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-deewan-dark">
                Our <span className="text-deewan-primary">Story</span>
              </h2>
              
              <p className="text-lg mb-6 text-deewan-dark/80">
                Founded in 2018, Deewan began with a simple mission: to transform how organizations communicate in the digital age. We saw firsthand how fragmented communication tools created friction, and set out to build solutions that truly connect people.
              </p>
              
              <p className="text-lg text-deewan-dark/80">
                Today, we're proud to serve diverse clients across Saudi Arabia and beyond with intelligent, customizable communication solutions that prioritize security, scalability, and human experience.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-deewan-primary/10 mr-4">
                  <History className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-deewan-dark">Our Mission</h3>
                  <p className="text-deewan-dark/70">
                    To create communication technology that brings people closer together, making digital interactions as natural and effective as face-to-face conversations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-deewan-secondary/10 mr-4">
                  <Globe className="h-6 w-6 text-deewan-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-deewan-dark">Our Vision</h3>
                  <p className="text-deewan-dark/70">
                    To be the cornerstone of communication infrastructure for forward-thinking organizations, bridging the gap between technical possibility and human understanding.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Timeline visualization */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-lg">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-deewan-primary/10 blur-2xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-deewan-secondary/10 blur-2xl rounded-full"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-8 text-deewan-dark">Our Growth Journey</h3>
                
                {/* Timeline */}
                <div className="space-y-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-deewan-primary before:to-deewan-secondary">
                  <div className="relative">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-deewan-primary"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-deewan-dark">2018</h4>
                      <p className="text-deewan-dark/70">Founded with a focus on messaging APIs for enterprise</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-deewan-primary/80"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-deewan-dark">2020</h4>
                      <p className="text-deewan-dark/70">Expanded to full communication suite and omnichannel services</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-deewan-primary/60"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-deewan-dark">2022</h4>
                      <p className="text-deewan-dark/70">Introduced AI-powered solutions and chatbot platform</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-deewan-primary/40"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-deewan-dark">Today</h4>
                      <p className="text-deewan-dark/70">Serving 100+ enterprises with communication solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-deewan-accent/20 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full bg-deewan-primary/20 animate-float" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
