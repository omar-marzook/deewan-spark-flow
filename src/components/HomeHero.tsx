import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown, CircleDot, Circle, CircleCheck } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

interface HomeHeroProps {
  children?: React.ReactNode;
  className?: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ children, className = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  // Use useRef instead of useState for tracking client-side animations
  // This prevents hydration mismatches
  const animationRef = useRef({
    isLoaded: false,
    isVideoLoaded: false
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Use a separate state for client-side only animations
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    // Only run animations on the client after hydration is complete
    animationRef.current.isLoaded = true;
    
    // Set state for client-side only animations
    setTimeout(() => {
      setClientLoaded(true);
    }, 100);
  }, []);

  // Handle video load event
  const handleVideoLoad = () => {
    animationRef.current.isVideoLoaded = true;
  };

  // Determine animation classes based on whether we're on client or server
  // For server rendering, we don't apply any animation classes
  const isClient = typeof window !== 'undefined';
  const animationClass = isClient && clientLoaded ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100';

  return (
      <section id="hero-section" className={`container mx-auto px-4 pt-40 pb-12 md:pt-40 md:pb-24 xl:pt-48 relative z-10 ${className}`} aria-labelledby="hero-heading">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <CircleDot
          className="absolute text-deewan-secondary/60 w-8 h-8"
          style={{
            top: '15%',
            right: '22%',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <Circle
          className="absolute text-deewan-secondary/40 w-5 h-5"
          style={{
            top: '40%',
            left: '18%',
            animation: 'float 12s ease-in-out infinite 1s'
          }}
        />
        <CircleCheck
          className="absolute text-deewan-secondary/50 w-6 h-6"
          style={{
            bottom: '25%',
            right: '30%',
            animation: 'float 10s ease-in-out infinite 2s'
          }}
        />
        <ArrowUpRight
          className="absolute text-deewan-secondary/50 w-6 h-6"
          style={{
            top: '25%',
            left: '25%',
            animation: 'float 15s ease-in-out infinite 0.5s'
          }}
        />
      </div>

      {/* Ring behind text content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-deewan-secondary/20 rounded-full opacity-70" aria-hidden="true"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-deewan-secondary/10 rounded-full opacity-50" aria-hidden="true"></div>

      {/* Text Content - Optimized for LCP */}
      {/* Hero heading placed outside animation container for faster LCP */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-deewan-dark">
          Connect smarter.<br/>
          Grow faster
        </h1>
      </div>
      
      {/* Rest of content can animate after heading is displayed */}
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-16"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-lg md:text-xl text-deewan-gray mb-8 max-w-2xl mx-auto">
          Customizable, secure communications built to scale across every channel.
        </p>

        {/* CTA Button */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ButtonLink 
            href="#products" 
            variant="default" 
            size="lg"
            aria-label="Explore our products"
            className="focus:ring-2 focus:ring-deewan-primary/50 focus:outline-none"
          >
            Explore Products
            <ArrowDown size={20} aria-hidden="true" />
          </ButtonLink>

          <ButtonLink 
            variant="secondary" 
            size="lg" 
            href="#contact"
            aria-label="Contact our sales team"
            className="focus:ring-2 focus:ring-deewan-primary/50 focus:outline-none"
          >
            Contact Sales
          </ButtonLink>
        </motion.div>
      </motion.div>

      {/* Visual with green gradient illumination - Optimized to not block LCP */}
      <motion.div 
        className="relative max-w-4xl mx-auto"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Green Gradient Illumination */}
        <div className="absolute -inset-10 bg-deewan-primary/20 rounded-full blur-3xl" aria-hidden="true"></div>

        <div>
          <div className="relative">
            {/* Video in aspect-video container */}
            <div className="glass-card relative p-4 overflow-hidden w-full rounded-xl" aria-hidden="true">
              <div className="aspect-video overflow-hidden rounded-lg">
                {/* Ensure video doesn't block LCP with preload="none" */}
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="none" /* Prevent video from blocking LCP */
                  onLoadedData={handleVideoLoad}
                  poster="/media/home-hero-section-poster.jpg" /* Add a poster image for faster initial render */
                >
                  <source src="/media/home-hero-section-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;