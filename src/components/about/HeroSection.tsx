import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Users } from 'lucide-react';
const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.clientHeight;
    };
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Blob configuration
    const blobs = [{
      x: canvas.width * 0.2,
      y: canvas.height * 0.3,
      radius: 150,
      color: '#21a17c20',
      vx: 0.3,
      vy: 0.2
    }, {
      x: canvas.width * 0.7,
      y: canvas.height * 0.5,
      radius: 180,
      color: '#3565b220',
      vx: -0.2,
      vy: 0.3
    }, {
      x: canvas.width * 0.5,
      y: canvas.height * 0.7,
      radius: 120,
      color: '#f6c43a20',
      vx: 0.1,
      vy: -0.2
    }];
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update each blob
      blobs.forEach(blob => {
        // Move the blob
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off walls
        if (blob.x - blob.radius < 0 || blob.x + blob.radius > canvas.width) blob.vx *= -1;
        if (blob.y - blob.radius < 0 || blob.y + blob.radius > canvas.height) blob.vy *= -1;

        // Draw the blob
        ctx.beginPath();
        ctx.fillStyle = blob.color;
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" style={{
      height: '100vh'
    }} />
      
      {/* Glassmorphism overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-sm -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gradient bg-gradient-to-r from-deewan-dark via-deewan-primary to-deewan-secondary bg-clip-text text-transparent">
                We're Deewan — People, Product, Purpose.
              </h1>
              
              <p className="text-xl mb-8 text-deewan-dark/80">
                We build intelligent communication tools that bridge gaps, simplify interactions, and empower organizations to connect more meaningfully with their audience.
              </p>
              
              <a href="#our-story" className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm text-deewan-primary font-medium rounded-lg border border-deewan-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-deewan-primary/10">
                Discover Our Story
                <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>
          
          <div className="hidden lg:block">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 0.3
          }} className="relative">
              {/* Decorative chat bubbles */}
              <div className="relative h-96">
                {/* Message box 1 */}
                <motion.div initial={{
                y: 20,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                delay: 0.5,
                duration: 0.8
              }} className="absolute top-0 left-12 glass p-4 rounded-2xl rounded-bl-none shadow-lg max-w-xs">
                  <div className="flex items-start">
                    <MessageSquare className="text-deewan-primary mr-3 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-medium text-deewan-dark">Communication</h4>
                      <p className="text-sm text-deewan-dark/70">Building bridges between people and technology</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Message box 2 */}
                <motion.div initial={{
                y: 20,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                delay: 0.7,
                duration: 0.8
              }} className="absolute top-1/3 right-0 glass p-4 rounded-2xl rounded-br-none shadow-lg max-w-xs">
                  <div className="flex items-start">
                    <Users className="text-deewan-secondary mr-3 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-medium text-deewan-dark">People First</h4>
                      <p className="text-sm text-deewan-dark/70">We design our products around human needs</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Message box 3 */}
                <motion.div initial={{
                y: 20,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                delay: 0.9,
                duration: 0.8
              }} className="absolute bottom-0 left-0 glass p-4 rounded-2xl rounded-bl-none shadow-lg max-w-xs">
                  <div className="flex items-start">
                    <Send className="text-deewan-accent mr-3 mt-1 h-5 w-5" />
                    <div>
                      <h4 className="font-medium text-deewan-dark">Innovation</h4>
                      <p className="text-sm text-deewan-dark/70">Constantly evolving our solutions to meet tomorrow's challenges</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Central circle */}
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-deewan-dark/50 animate-bounce">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="text-sm">Scroll to explore</span>
      </div>
    </section>;
};
export default HeroSection;