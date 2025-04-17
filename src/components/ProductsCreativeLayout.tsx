
import { 
  Bell, MessageSquare, Zap, Shield, Database,
  Phone, Server, FileText, Globe, Code 
} from 'lucide-react';
import { useState } from 'react';

const ProductsCreativeLayout = () => {
  // Define product data
  const applications = [
    {
      id: 1,
      title: "Deewan Campaigns",
      description: "Manage SMS and WhatsApp campaigns efficiently with detailed analytics and scheduling tools.",
      icon: <Bell className="w-10 h-10 text-white" />,
      color: "from-deewan-primary to-deewan-primary/80",
      learnMoreLink: "#"
    },
    {
      id: 2,
      title: "Deewan Omnichannel",
      description: "Handle customer inquiries across various platforms from a single interface.",
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      color: "from-deewan-primary to-deewan-primary/80",
      learnMoreLink: "#"
    },
    {
      id: 3,
      title: "Deewan Bots",
      description: "AI-powered customer service bots that handle routine inquiries and learn from interactions.",
      icon: <Zap className="w-10 h-10 text-white" />,
      color: "from-deewan-primary to-deewan-primary/80",
      learnMoreLink: "#"
    },
    {
      id: 4,
      title: "Deewan MFA",
      description: "Secure multifactor authentication system for enhanced account protection.",
      icon: <Shield className="w-10 h-10 text-white" />,
      color: "from-deewan-primary to-deewan-primary/80",
      learnMoreLink: "#"
    },
    {
      id: 5,
      title: "Deewan Analytics",
      description: "Comprehensive analytics for all your communication channels.",
      icon: <Database className="w-10 h-10 text-white" />,
      color: "from-deewan-primary to-deewan-primary/80",
      learnMoreLink: "#"
    }
  ];

  const apis = [
    {
      id: 6,
      title: "SMS API",
      description: "Seamlessly integrate SMS functionality into your applications.",
      icon: <Phone className="w-10 h-10 text-white" />,
      color: "from-deewan-secondary to-deewan-secondary/80",
      learnMoreLink: "#"
    },
    {
      id: 7,
      title: "WhatsApp API",
      description: "Official WhatsApp Business API for businesses of all sizes.",
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      color: "from-deewan-secondary to-deewan-secondary/80",
      learnMoreLink: "#"
    },
    {
      id: 8,
      title: "Verification API",
      description: "Verify users through multiple channels with a single API.",
      icon: <Shield className="w-10 h-10 text-white" />,
      color: "from-deewan-secondary to-deewan-secondary/80",
      learnMoreLink: "#"
    },
    {
      id: 9,
      title: "Voice API",
      description: "Build voice-enabled applications with our simple Voice API.",
      icon: <Phone className="w-10 h-10 text-white" />,
      color: "from-deewan-secondary to-deewan-secondary/80",
      learnMoreLink: "#"
    },
    {
      id: 10,
      title: "Lookup API",
      description: "Validate phone numbers and reduce undeliverable messages.",
      icon: <Server className="w-10 h-10 text-white" />,
      color: "from-deewan-secondary to-deewan-secondary/80",
      learnMoreLink: "#"
    }
  ];

  // State for card hover effect
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Render card component
  const renderCard = (product: any) => (
    <div 
      key={product.id}
      className="relative group overflow-hidden"
      onMouseEnter={() => setHoveredCard(product.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className={`glass-card h-full flex flex-col p-6 transition-all duration-500 
                     ${hoveredCard === product.id ? 'transform scale-[1.02]' : ''}`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-90 
                        transition-opacity duration-500 rounded-lg -z-10`}></div>
        
        {/* Icon with circle background */}
        <div className="relative mb-6 z-10">
          <div className={`h-16 w-16 rounded-full flex items-center justify-center
                         bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-500`}>
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
          <a 
            href={product.learnMoreLink} 
            className="inline-flex items-center text-deewan-primary font-medium group-hover:text-white transition-colors duration-500"
          >
            View Product
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="product-section-creative" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-deewan-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-deewan-secondary/5 rounded-full filter blur-3xl animate-pulse-slow" 
           style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="gradient-text">Intelligent</span> Products</h2>
          <p className="text-xl text-deewan-dark">
            Comprehensive communication solutions designed for modern businesses
          </p>
        </div>
        
        {/* Applications section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-0.5 flex-grow max-w-xs bg-gradient-to-r from-transparent via-deewan-primary/30 to-transparent"></div>
            <h3 className="text-2xl font-bold px-6 text-deewan-primary">Applications</h3>
            <div className="h-0.5 flex-grow max-w-xs bg-gradient-to-r from-transparent via-deewan-primary/30 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {applications.map(app => renderCard(app))}
          </div>
        </div>
        
        {/* APIs section */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <div className="h-0.5 flex-grow max-w-xs bg-gradient-to-r from-transparent via-deewan-secondary/30 to-transparent"></div>
            <h3 className="text-2xl font-bold px-6 text-deewan-secondary">Communication APIs</h3>
            <div className="h-0.5 flex-grow max-w-xs bg-gradient-to-r from-transparent via-deewan-secondary/30 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {apis.map(api => renderCard(api))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCreativeLayout;
