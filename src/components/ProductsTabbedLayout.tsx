import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, MessageSquare, Zap, Shield, Database, Phone, Server, FileText, Globe, Code, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import productsData from '@/data/products-data';

const ProductsTabbedLayout = () => {
  // Extract application products and API products from productsData
  const applicationSlugs = ['campaigns', 'omni-channel-chat', 'bots', 'mfa', 'ivr'];
  const apiSlugs = ['sms-api', 'whatsapp-api', 'email-api', 'voice-api', 'push-notifications-api'];
  
  const applications = applicationSlugs.map(slug => {
    const product = productsData[slug];
    return {
      id: slug,
      title: product.name,
      description: product.tagline,
      slug: slug,
      // Create a new icon with the correct size
      icon: slug === 'campaigns' ? <Bell className="w-12 h-12 text-deewan-primary" /> :
            slug === 'omni-channel-chat' ? <MessageSquare className="w-12 h-12 text-deewan-primary" /> :
            slug === 'bots' ? <Zap className="w-12 h-12 text-deewan-primary" /> :
            slug === 'mfa' ? <Shield className="w-12 h-12 text-deewan-primary" /> :
            slug === 'ivr' ? <Phone className="w-12 h-12 text-deewan-primary" /> :
            <Bell className="w-12 h-12 text-deewan-primary" />,
      color: "bg-deewan-primary/10"
    };
  });
  
  const apis = apiSlugs.map(slug => {
    const product = productsData[slug];
    return {
      id: slug,
      title: product.name,
      description: product.tagline,
      slug: slug,
      // Use appropriate icon based on product name
      icon: slug === 'sms-api' ? <MessageSquare className="w-12 h-12 text-deewan-secondary" /> :
            slug === 'whatsapp-api' ? <MessageSquare className="w-12 h-12 text-deewan-secondary" /> :
            slug === 'voice-api' ? <Phone className="w-12 h-12 text-deewan-secondary" /> :
            slug === 'email-api' ? <Mail className="w-12 h-12 text-deewan-secondary" /> :
            <Bell className="w-12 h-12 text-deewan-secondary" />,
      color: "bg-deewan-secondary/10"
    };
  });

  // Animation variants
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      y: 20,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  return <section id="products" className="py-24 relative overflow-hidden">
      {/* Enhanced glassmorphic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-gray-50/30 to-white/40 backdrop-blur-sm -z-10"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-deewan-primary/20 rounded-full filter blur-3xl -z-5"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-deewan-secondary/20 rounded-full filter blur-3xl -z-5"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-96 bg-deewan-primary/5 rounded-full filter blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="text-deewan-primary">Product</span> Ecosystem</h2>
          <p className="text-base md:text-lg text-deewan-gray">End-to-end communication tools designed to power today's growing businesses.</p>
        </div>
        
        {/* Enhanced glassmorphic tabs */}
        <Tabs defaultValue="applications" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="p-1 h-14 backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-lg">
              <TabsTrigger value="applications" className="px-8 h-12 data-[state=active]:bg-deewan-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300">
                Applications
              </TabsTrigger>
              <TabsTrigger value="apis" className="px-8 h-12 data-[state=active]:bg-deewan-secondary data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300">
                Communication APIs
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Applications content with glassmorphic cards */}
          <TabsContent value="applications" className="mt-8 focus-visible:outline-none">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" animate="show">
              {applications.map(app => <motion.div key={app.id} variants={item} className="group">
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
                      <a href={`/products/${app.slug}`} 
                         className="inline-flex items-center justify-center rounded-lg backdrop-blur-sm bg-deewan-primary/20 text-deewan-primary px-5 py-2 font-medium hover:bg-deewan-primary hover:text-white transition-colors duration-300 border border-deewan-primary/20">
                        View Product
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </TabsContent>
          
          {/* APIs content with glassmorphic cards */}
          <TabsContent value="apis" className="mt-8 focus-visible:outline-none">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" animate="show">
              {apis.map(api => <motion.div key={api.id} variants={item} className="group">
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
                      <a href={`/products/${api.slug}`} 
                         className="inline-flex items-center justify-center rounded-lg backdrop-blur-sm bg-deewan-secondary/20 text-deewan-secondary px-5 py-2 font-medium hover:bg-deewan-secondary hover:text-white transition-colors duration-300 border border-deewan-secondary/20">
                        View Product
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>;
};
export default ProductsTabbedLayout;