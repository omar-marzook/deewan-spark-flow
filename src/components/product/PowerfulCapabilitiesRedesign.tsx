import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Zap, Shield, Globe, BarChart, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
interface FeatureItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}
const features: FeatureItem[] = [{
  id: 'realtime',
  icon: Zap,
  title: 'Real-time Communications',
  description: 'Deliver instant messages to customers through SMS, WhatsApp, or Voice with high reliability.'
}, {
  id: 'centralized',
  icon: Globe,
  title: 'Centralized Management',
  description: 'One dashboard to manage campaigns, user conversations, analytics, and reporting.'
}, {
  id: 'ai',
  icon: CheckCircle,
  title: 'AI-powered Automation',
  description: 'Automate customer replies, authentication, and routine tasks with smart bots.'
}, {
  id: 'analytics',
  icon: BarChart,
  title: 'Insightful Analytics',
  description: 'Gain actionable insights from comprehensive analytics and reporting.'
}, {
  id: 'api',
  icon: MessageCircle,
  title: 'Omnichannel APIs',
  description: 'APIs for SMS, WhatsApp, Voice, Verification and more, easily integrated with your applications.'
}, {
  id: 'personalization',
  icon: Shield,
  title: 'Personalization',
  description: 'Personalize messages at scale to improve engagement and conversion.'
}];
const PowerfulCapabilitiesRedesign = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2
  });
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Automatic cycling through features (can be disabled if you prefer pure interactive)
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = features.findIndex(f => f.id === activeFeature);
      const nextIndex = (currentIndex + 1) % features.length;
      setActiveFeature(features[nextIndex].id);
    }, 5000); // Change feature every 5 seconds

    return () => clearInterval(interval);
  }, [activeFeature]);
  return <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{
      opacity: bgOpacity
    }}>
        <div className="absolute top-0 right-0 w-[70%] h-[50%] bg-deewan-primary/5 rounded-full blur-[120px] transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-deewan-secondary/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(53, 162, 107, 0.15) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(94, 148, 204, 0.1) 0%, transparent 70%)'
      }}></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }}>
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-deewan-primary rounded-full mr-2"></span>
            <span className="text-sm font-medium text-deewan-dark/80">Our Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Designed for Modern Communication
          </h2>
          
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Our platform brings together technology and simplicity to power your business communications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Feature selector */}
          <div className="lg:col-span-4 space-y-6">
            {features.map((feature, index) => {
            const isActive = activeFeature === feature.id;
            return <motion.div key={feature.id} initial={{
              opacity: 0,
              x: -20
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -20
            }} transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut"
            }}>
                  <button onClick={() => setActiveFeature(feature.id)} className={cn("w-full text-left p-4 rounded-xl transition-all duration-300 glass border group", isActive ? "bg-white/80 border-deewan-primary/30 shadow-lg shadow-deewan-primary/5" : "bg-white/40 border-white/20 hover:bg-white/60 hover:shadow-md")}>
                    <div className="flex items-center gap-4">
                      <div className={cn("p-3 rounded-lg transition-colors duration-300", isActive ? "bg-gradient-to-br from-deewan-primary to-deewan-primary/70 text-white" : "bg-white/70 text-deewan-primary group-hover:bg-white/90")}>
                        {React.createElement(feature.icon, {
                      className: "h-5 w-5"
                    })}
                      </div>
                      <span className={cn("font-medium transition-colors duration-300", isActive ? "text-deewan-dark" : "text-deewan-dark/70")}>
                        {feature.title}
                      </span>
                    </div>
                  </button>
                </motion.div>;
          })}
          </div>

          {/* Right side - Feature detail */}
          <div className="lg:col-span-8 h-full">
            <div className="relative h-[400px] lg:h-[450px] overflow-hidden rounded-2xl glass border border-white/40 shadow-xl p-8">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tl from-deewan-primary/30 to-deewan-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-deewan-secondary/20 to-transparent rounded-full blur-3xl"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                {features.map(feature => {
                const isActive = activeFeature === feature.id;
                const IconComponent = feature.icon;
                return <motion.div key={feature.id} className="absolute inset-0 flex flex-col justify-between h-full w-full p-8" initial={{
                  opacity: 0,
                  scale: 0.9
                }} animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.9,
                  zIndex: isActive ? 10 : 0
                }} transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}>
                      <div>
                        <div className="p-4 mb-6 inline-flex rounded-xl bg-gradient-to-br from-deewan-primary/10 to-deewan-primary/5 backdrop-blur-sm text-deewan-primary">
                          <IconComponent className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-deewan-dark mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-deewan-dark/70 max-w-2xl mb-8">
                          {feature.description}
                        </p>
                      </div>

                      {/* Decorative illustration or content specific to each feature could go here */}
                      <div className="mt-auto relative">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-deewan-primary/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg relative">
                          <div className="flex items-center">
                            <div className="h-3 w-3 bg-deewan-primary rounded-full mr-3"></div>
                            <p className="text-sm text-deewan-dark/80 italic">
                              "{feature.id === 'ai' ? 'Reduce response time by up to 80%' : feature.id === 'analytics' ? 'Understand customer behavior in real-time' : feature.id === 'realtime' ? 'Deliver messages in milliseconds' : feature.id === 'centralized' ? 'Manage all communications from one place' : feature.id === 'api' ? 'Connect with any channel or service' : 'Boost engagement with personalized messaging'}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>;
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PowerfulCapabilitiesRedesign;