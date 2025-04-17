
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Bell, MessageSquare, Zap, Shield, Database,
  Phone, Server, FileText, Globe, Code 
} from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsTabbedLayout = () => {
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white -z-10"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-deewan-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-deewan-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="text-deewan-primary">Product</span> Ecosystem</h2>
          <p className="text-xl text-deewan-dark">
            Comprehensive communication solutions designed for modern businesses
          </p>
        </div>
        
        {/* Custom styled tabs */}
        <Tabs defaultValue="applications" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="p-1 h-14 bg-white border border-gray-200 rounded-xl shadow-sm">
              <TabsTrigger 
                value="applications" 
                className="px-8 h-12 data-[state=active]:bg-deewan-primary data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                Applications
              </TabsTrigger>
              <TabsTrigger 
                value="apis" 
                className="px-8 h-12 data-[state=active]:bg-deewan-secondary data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                Communication APIs
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Applications content */}
          <TabsContent value="applications" className="mt-8 focus-visible:outline-none">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {applications.map(app => (
                <motion.div key={app.id} variants={item} className="group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className={`${app.color} p-5 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        {app.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-center mb-4 text-deewan-dark">{app.title}</h3>
                    
                    <p className="text-deewan-gray text-center mb-6 flex-grow">
                      {app.description}
                    </p>
                    
                    <div className="mt-auto text-center">
                      <a href="#" className="inline-flex items-center justify-center rounded-lg bg-deewan-primary/10 text-deewan-primary px-5 py-2 font-medium hover:bg-deewan-primary hover:text-white transition-colors duration-300">
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
          
          {/* APIs content */}
          <TabsContent value="apis" className="mt-8 focus-visible:outline-none">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {apis.map(api => (
                <motion.div key={api.id} variants={item} className="group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col">
                    <div className="flex justify-center mb-6">
                      <div className={`${api.color} p-5 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        {api.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-center mb-4 text-deewan-dark">{api.title}</h3>
                    
                    <p className="text-deewan-gray text-center mb-6 flex-grow">
                      {api.description}
                    </p>
                    
                    <div className="mt-auto text-center">
                      <a href="#" className="inline-flex items-center justify-center rounded-lg bg-deewan-secondary/10 text-deewan-secondary px-5 py-2 font-medium hover:bg-deewan-secondary hover:text-white transition-colors duration-300">
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
