import { Bell, MessageSquare, Zap, Shield, Database, Phone, Server, FileText, Globe, Code } from 'lucide-react';
import { useState } from 'react';
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

  // Render card component
  const renderCard = (product: any) => <div key={product.id} onMouseEnter={() => setHoveredCard(product.id)} onMouseLeave={() => setHoveredCard(null)} className="relative group overflow-hidden glass-card bg-gradient-to-br from-deewan-primary/10 to-deewan-primary/5">
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
          <a href={product.learnMoreLink} className="inline-flex items-center text-deewan-primary font-medium group-hover:text-white transition-colors duration-500">
            View Product
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>;
  return;
};
export default ProductsCreativeLayout;