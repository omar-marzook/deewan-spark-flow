
import { Bell, MessageSquare, Zap, Shield, Database, Phone, Server, FileText, Globe, Code } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ProductsCreativeLayout = () => {
  // Define product data
  const applications = [{
    id: 1,
    title: "Deewan Campaigns",
    description: "Manage SMS and WhatsApp campaigns efficiently with detailed analytics and scheduling tools.",
    icon: <Bell className="w-10 h-10 text-white" />,
    color: "from-deewan-primary to-deewan-primary/80",
    learnMoreLink: "#"
  }, {
    id: 2,
    title: "Deewan Omnichannel",
    description: "Handle customer inquiries across various platforms from a single interface.",
    icon: <MessageSquare className="w-10 h-10 text-white" />,
    color: "from-deewan-primary to-deewan-primary/80",
    learnMoreLink: "#"
  }, {
    id: 3,
    title: "Deewan Bots",
    description: "AI-powered customer service bots that handle routine inquiries and learn from interactions.",
    icon: <Zap className="w-10 h-10 text-white" />,
    color: "from-deewan-primary to-deewan-primary/80",
    learnMoreLink: "#"
  }, {
    id: 4,
    title: "Deewan MFA",
    description: "Secure multifactor authentication system for enhanced account protection.",
    icon: <Shield className="w-10 h-10 text-white" />,
    color: "from-deewan-primary to-deewan-primary/80",
    learnMoreLink: "#"
  }, {
    id: 5,
    title: "Deewan Analytics",
    description: "Comprehensive analytics for all your communication channels.",
    icon: <Database className="w-10 h-10 text-white" />,
    color: "from-deewan-primary to-deewan-primary/80",
    learnMoreLink: "#"
  }];
  
  const apis = [{
    id: 6,
    title: "SMS API",
    description: "Seamlessly integrate SMS functionality into your applications.",
    icon: <Phone className="w-10 h-10 text-white" />,
    color: "from-deewan-secondary to-deewan-secondary/80",
    learnMoreLink: "#"
  }, {
    id: 7,
    title: "WhatsApp API",
    description: "Official WhatsApp Business API for businesses of all sizes.",
    icon: <MessageSquare className="w-10 h-10 text-white" />,
    color: "from-deewan-secondary to-deewan-secondary/80",
    learnMoreLink: "#"
  }, {
    id: 8,
    title: "Verification API",
    description: "Verify users through multiple channels with a single API.",
    icon: <Shield className="w-10 h-10 text-white" />,
    color: "from-deewan-secondary to-deewan-secondary/80",
    learnMoreLink: "#"
  }, {
    id: 9,
    title: "Voice API",
    description: "Build voice-enabled applications with our simple Voice API.",
    icon: <Phone className="w-10 h-10 text-white" />,
    color: "from-deewan-secondary to-deewan-secondary/80",
    learnMoreLink: "#"
  }, {
    id: 10,
    title: "Lookup API",
    description: "Validate phone numbers and reduce undeliverable messages.",
    icon: <Server className="w-10 h-10 text-white" />,
    color: "from-deewan-secondary to-deewan-secondary/80",
    learnMoreLink: "#"
  }];

  // State for card hover effect
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Canvas animation reference and setup
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions and handle resize
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create animated floating particles
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];
    
    const colors = [
      'rgba(53, 162, 107, 0.3)',  // Primary green
      'rgba(43, 108, 176, 0.3)',  // Secondary blue
      'rgba(246, 196, 58, 0.2)'   // Accent
    ];
    
    // Create particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw animated blurry blobs
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.opacity})`);
        ctx.filter = 'blur(15px)';
        ctx.fill();
        ctx.closePath();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Render card component with enhanced glassmorphism
  const renderCard = (product: any) => (
    <div 
      key={product.id} 
      onMouseEnter={() => setHoveredCard(product.id)} 
      onMouseLeave={() => setHoveredCard(null)} 
      className="relative group overflow-hidden backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg"
    >
      <div className={`h-full flex flex-col p-6 transition-all duration-500 
                     ${hoveredCard === product.id ? 'transform scale-[1.02]' : ''}`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-90 
                        transition-opacity duration-500 rounded-lg -z-10`}></div>
        
        {/* Icon with circle background */}
        <div className="relative mb-6 z-10">
          <div className={`h-16 w-16 rounded-full flex items-center justify-center
                         backdrop-blur-md bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-500`}>
            {product.icon}
          </div>
        </div>
        
        {/* Text content */}
        <h3 className="text-xl font-bold mb-3 text-deewan-dark group-hover:text-white transition-colors duration-500">
          {product.title}
        </h3>
        <p className="text-deewan-gray group-hover:text-white/90 flex-grow mb-4 transition-colors duration-500">
          {product.description}
        </p>
        
        {/* Action button */}
        <div className="mt-auto">
          <a href={product.learnMoreLink} className="inline-flex items-center text-deewan-primary font-medium group-hover:text-white transition-colors duration-500">
            View Product
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="product-section" className="relative py-24 overflow-hidden">
      {/* Canvas background for animated blobs */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10" 
      />
      
      {/* Fixed gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-deewan-primary/10 rounded-full filter blur-[100px] -z-5"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-deewan-secondary/10 rounded-full filter blur-[100px] -z-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-deewan-accent/5 rounded-full filter blur-[120px] -z-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-deewan-dark">Our <span className="text-deewan-primary">Solutions</span> Ecosystem</h2>
          <p className="text-xl text-deewan-dark">
            Comprehensive communication tools designed for modern businesses
          </p>
        </div>
        
        {/* Applications section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-deewan-dark inline-flex items-center">
            <Bell className="w-6 h-6 mr-2 text-deewan-primary" />
            Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map(app => renderCard(app))}
          </div>
        </div>
        
        {/* APIs section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-deewan-dark inline-flex items-center">
            <Code className="w-6 h-6 mr-2 text-deewan-secondary" />
            Communication APIs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apis.map(api => renderCard(api))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCreativeLayout;
