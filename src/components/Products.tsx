
import { MessageSquare, Bell, Shield, Zap } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Deewan Campaigns",
      description: "Manage SMS and WhatsApp campaigns efficiently with detailed analytics and scheduling tools.",
      icon: <Bell className="w-10 h-10 text-deewan-primary" />,
      color: "from-deewan-primary/10 to-deewan-primary/5"
    },
    {
      id: 2,
      title: "Deewan Omnichannel Chat",
      description: "Handle customer inquiries across various platforms from a single interface.",
      icon: <MessageSquare className="w-10 h-10 text-deewan-secondary" />,
      color: "from-deewan-secondary/10 to-deewan-secondary/5"
    },
    {
      id: 3,
      title: "Deewan Bots",
      description: "AI-powered customer service bots that handle routine inquiries and learn from interactions.",
      icon: <Zap className="w-10 h-10 text-deewan-accent" />,
      color: "from-deewan-accent/10 to-deewan-accent/5"
    },
    {
      id: 4,
      title: "Deewan MFA",
      description: "Secure multifactor authentication system for enhanced account protection.",
      icon: <Shield className="w-10 h-10 text-deewan-primary" />,
      color: "from-deewan-primary/10 to-deewan-primary/5"
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="absolute top-40 right-0 w-72 h-72 bg-deewan-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="gradient-text">Intelligent</span> Products</h2>
          <p className="text-xl text-deewan-dark">
            Comprehensive communication solutions designed to enhance your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className={`glass-card p-6 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br ${product.color}`}>
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-deewan-dark">{product.title}</h3>
                <p className="text-deewan-dark flex-grow">{product.description}</p>
                <a href={`/products/${product.id === 1 ? 'campaigns' : product.id === 2 ? 'omni-channel-chat' : product.id === 3 ? 'bots' : 'mfa'}`} className="mt-4 inline-flex items-center text-deewan-primary font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
