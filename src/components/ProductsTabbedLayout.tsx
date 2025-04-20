import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Bell, MessageSquare, Zap, Shield, Database,
  Phone, Server, FileText, Globe, Code 
} from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsTabbedLayout = () => {
  // Canvas reference for the flowing background animation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create flowing, morphing blobs
    const blobs: Array<{
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      color: string;
      speed: number;
      angle: number;
      phase: number;
      phaseSpeed: number;
      opacity: number;
      rotationSpeed: number;
      rotation: number;
    }> = [];
    
    // Brand colors with transparency for the blobs
    const colors = [
      'rgba(53, 162, 107, 0.2)',  // Primary green
      'rgba(43, 108, 176, 0.2)',  // Secondary blue
      'rgba(246, 196, 58, 0.12)',  // Accent yellow
    ];
    
    // Create larger, flowing blobs
    for (let i = 0; i < 5; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 150,
        baseRadius: Math.random() * 200 + 150,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: (Math.random() - 0.5) * 0.4,
        angle: Math.random() * Math.PI * 2,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.0004 + Math.random() * 0.0008,
        opacity: 0.15 + Math.random() * 0.25,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
        rotation: Math.random() * Math.PI
      });
    }
    
    // Animation function for flowing, morphing effect
    const animate = () => {
      // Clear with slight fade for trailing effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and animate flowing blobs
      blobs.forEach(blob => {
        // Morph radius over time for organic movement
        const radiusVariation = Math.sin(blob.phase) * (blob.baseRadius * 0.2);
        const currentRadius = blob.baseRadius + radiusVariation;
        
        // Move blobs in flowing pattern
        blob.x += Math.cos(blob.angle) * blob.speed;
        blob.y += Math.sin(blob.angle) * blob.speed;
        
        // Slowly rotate direction
        blob.angle += Math.sin(blob.phase) * 0.015;
        
        // Update phase for radius pulsing
        blob.phase += blob.phaseSpeed;
        
        // Update rotation for blob
        blob.rotation += blob.rotationSpeed;
        
        // Save context state
        ctx.save();
        
        // Translate to blob center
        ctx.translate(blob.x, blob.y);
        ctx.rotate(blob.rotation);
        
        // Draw gradient blob with subtle elliptical shape
        const gradient = ctx.createRadialGradient(
          0, 0, 0,
          0, 0, currentRadius
        );
        
        // Color with inner and outer edges - FIX: Correctly format the rgba string
        const baseColor = blob.color.substring(0, blob.color.lastIndexOf(')'));
        gradient.addColorStop(0, `${baseColor}, ${blob.opacity})`);
        gradient.addColorStop(1, `${baseColor}, 0)`);
        
        // Draw elliptical blob
        ctx.beginPath();
        ctx.scale(1, 0.7 + Math.sin(blob.phase) * 0.3); // Vary the ellipse shape
        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.filter = 'blur(35px)';
        ctx.fill();
        ctx.filter = 'none';
        
        // Restore context
        ctx.restore();
        
        // Wrap around edges with smooth transition
        if (blob.x < -currentRadius * 2) blob.x = canvas.width + currentRadius;
        if (blob.x > canvas.width + currentRadius * 2) blob.x = -currentRadius;
        if (blob.y < -currentRadius * 2) blob.y = canvas.height + currentRadius;
        if (blob.y > canvas.height + currentRadius * 2) blob.y = -currentRadius;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Product data
  const applications = [
    {
      id: 1,
      title: "Deewan Campaigns",
      description: "Manage SMS and WhatsApp campaigns efficiently with detailed analytics and scheduling tools.",
      icon: <Bell className="w-12 h-12 text-deewan-primary" />,
      color: "bg-deewan-primary/10"
    },
    {
      id: 2,
      title: "Deewan Omnichannel",
      description: "Handle customer inquiries across various platforms from a single interface.",
      icon: <MessageSquare className="w-12 h-12 text-deewan-primary" />,
      color: "bg-deewan-primary/10"
    },
    {
      id: 3,
      title: "Deewan Bots",
      description: "AI-powered customer service bots that handle routine inquiries and learn from interactions.",
      icon: <Zap className="w-12 h-12 text-deewan-primary" />,
      color: "bg-deewan-primary/10"
    },
    {
      id: 4,
      title: "Deewan MFA",
      description: "Secure multifactor authentication system for enhanced account protection.",
      icon: <Shield className="w-12 h-12 text-deewan-primary" />,
      color: "bg-deewan-primary/10"
    },
    {
      id: 5,
      title: "Deewan Analytics",
      description: "Comprehensive analytics for all your communication channels.",
      icon: <Database className="w-12 h-12 text-deewan-primary" />,
      color: "bg-deewan-primary/10"
    }
  ];

  const apis = [
    {
      id: 6,
      title: "SMS API",
      description: "Seamlessly integrate SMS functionality into your applications.",
      icon: <Phone className="w-12 h-12 text-deewan-secondary" />,
      color: "bg-deewan-secondary/10"
    },
    {
      id: 7,
      title: "WhatsApp API",
      description: "Official WhatsApp Business API for businesses of all sizes.",
      icon: <MessageSquare className="w-12 h-12 text-deewan-secondary" />,
      color: "bg-deewan-secondary/10"
    },
    {
      id: 8,
      title: "Verification API",
      description: "Verify users through multiple channels with a single API.",
      icon: <Shield className="w-12 h-12 text-deewan-secondary" />,
      color: "bg-deewan-secondary/10"
    },
    {
      id: 9,
      title: "Voice API",
      description: "Build voice-enabled applications with our simple Voice API.",
      icon: <Phone className="w-12 h-12 text-deewan-secondary" />,
      color: "bg-deewan-secondary/10"
    },
    {
      id: 10,
      title: "Lookup API",
      description: "Validate phone numbers and reduce undeliverable messages.",
      icon: <Server className="w-12 h-12 text-deewan-secondary" />,
      color: "bg-deewan-secondary/10"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="product-section-tabs" className="py-24 relative overflow-hidden">
      {/* Canvas-based flowing animation background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full opacity-90 pointer-events-none"
      />
      
      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/30 backdrop-blur-sm -z-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="text-deewan-primary">Product</span> Ecosystem</h2>
          <p className="text-xl text-deewan-dark">
            Comprehensive communication solutions designed for modern businesses
          </p>
        </div>
        
        {/* Enhanced glassmorphic tabs */}
        <Tabs defaultValue="applications" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="p-1 h-14 backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-lg">
              <TabsTrigger 
                value="applications" 
                className="px-8 h-12 data-[state=active]:bg-deewan-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300"
              >
                Applications
              </TabsTrigger>
              <TabsTrigger 
                value="apis" 
                className="px-8 h-12 data-[state=active]:bg-deewan-secondary data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300"
              >
                Communication APIs
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Applications content with glassmorphic cards */}
          <TabsContent value="applications" className="mt-8 focus-visible:outline-none">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {applications.map(app => (
                <motion.div key={app.id} variants={item} className="group">
                  <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className={`${app.color} p-5 rounded-xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm bg-white/30 border border-white/20`}>
                        {app.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-center mb-4 text-deewan-dark">{app.title}</h3>
                    
                    <p className="text-deewan-gray text-center mb-6 flex-grow">
                      {app.description}
                    </p>
                    
                    <div className="mt-auto text-center">
                      <a href="#" className="inline-flex items-center justify-center rounded-lg backdrop-blur-sm bg-deewan-primary/20 text-deewan-primary px-5 py-2 font-medium hover:bg-deewan-primary hover:text-white transition-colors duration-300 border border-deewan-primary/20">
                        View Product
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* APIs content with glassmorphic cards */}
          <TabsContent value="apis" className="mt-8 focus-visible:outline-none">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {apis.map(api => (
                <motion.div key={api.id} variants={item} className="group">
                  <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className={`${api.color} p-5 rounded-xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm bg-white/30 border border-white/20`}>
                        {api.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-center mb-4 text-deewan-dark">{api.title}</h3>
                    
                    <p className="text-deewan-gray text-center mb-6 flex-grow">
                      {api.description}
                    </p>
                    
                    <div className="mt-auto text-center">
                      <a href="#" className="inline-flex items-center justify-center rounded-lg backdrop-blur-sm bg-deewan-secondary/20 text-deewan-secondary px-5 py-2 font-medium hover:bg-deewan-secondary hover:text-white transition-colors duration-300 border border-deewan-secondary/20">
                        View API
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsTabbedLayout;
