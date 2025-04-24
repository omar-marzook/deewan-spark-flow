import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { industries } from './industry-solutions/industryData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
const IndustrySolutionsRedesign = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.2
  });
  const handleIndustryClick = (id: string) => {
    setActiveIndustry(id);
  };

  // Find the active industry object
  const activeIndustryObj = industries.find(i => i.id === activeIndustry) || industries[0];
  const Icon = activeIndustryObj.icon;
  return <section ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-gradient-to-tl from-deewan-primary/20 to-deewan-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-br from-deewan-secondary/20 to-deewan-primary/10 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(53, 162, 107, 0.07) 0%, transparent 40%), radial-gradient(circle at 20% 70%, rgba(94, 148, 204, 0.05) 0%, transparent 40%)'
      }}></div>
      </div>

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
        duration: 0.6
      }}>
          <div className="inline-flex items-center bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-deewan-secondary rounded-full mr-2"></span>
            <span className="text-sm font-medium text-deewan-dark/80">Industry Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Tailored for Your Industry
          </h2>
          
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">Our communication platform adapts to the unique needs of your business</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side - Industry navigation */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {industries.map((industry, index) => {
            const isActive = activeIndustry === industry.id;
            const IndIcon = industry.icon;
            return <motion.div key={industry.id} initial={{
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
              delay: index * 0.08,
              ease: "easeOut"
            }}>
                  <Card className={cn("border transition-all duration-300 cursor-pointer overflow-hidden", isActive ? "bg-white/90 border-deewan-primary/30 shadow-lg" : "bg-white/50 border-white/50 hover:bg-white/70 hover:shadow-md")} onClick={() => handleIndustryClick(industry.id)}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={cn("p-3 rounded-lg transition-colors duration-300", isActive ? "bg-gradient-to-br from-deewan-secondary to-deewan-secondary/70 text-white" : "bg-white/70 text-deewan-secondary")}>
                          <IndIcon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className={cn("font-medium transition-colors duration-300 text-lg", isActive ? "text-deewan-dark" : "text-deewan-dark/80")}>
                            {industry.name}
                          </h3>
                        </div>
                        {isActive && <div className="text-deewan-primary">
                            <ArrowRight className="h-5 w-5" />
                          </div>}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </div>

          {/* Right side - Content display */}
          <div className="lg:col-span-8">
            <div className="relative h-[450px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                {industries.map(industry => {
                const isActive = industry.id === activeIndustry;
                if (!isActive) return null;

                // Get the icon component from the current industry object
                const IndustryIcon = industry.icon;
                return <motion.div key={industry.id} className="absolute inset-0" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} transition={{
                  duration: 0.5
                }}>
                      {/* Image background with overlay */}
                      <div className="absolute inset-0">
                        <img src={industry.image} alt={`${industry.name} industry`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-deewan-dark/80 to-deewan-dark/40 backdrop-blur-sm"></div>
                      </div>
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                        <div>
                          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-4">
                            <IndustryIcon className="h-4 w-4 mr-2 text-deewan-secondary" />
                            <span className="text-sm text-white/90">Industry Solution</span>
                          </div>
                          
                          <h3 className="text-3xl font-bold mb-4">
                            {industry.name}
                          </h3>
                          
                          <p className="text-white/80 max-w-lg text-lg mb-4">
                            {industry.description}
                          </p>
                          
                          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 max-w-md border border-white/10 mt-6">
                            <h4 className="font-medium text-lg mb-2">Key Benefits</h4>
                            <ul className="space-y-2">
                              {industry.id === 'healthcare' ? <>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>HIPAA-compliant secure messaging</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Automated appointment reminders</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Patient engagement tools</span>
                                  </li>
                                </> : industry.id === 'finance' ? <>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Secure transaction notifications</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Multi-factor authentication</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Compliance with financial regulations</span>
                                  </li>
                                </> : industry.id === 'education' ? <>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Emergency notifications</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Parent-teacher communication</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Schedule changes and event reminders</span>
                                  </li>
                                </> : industry.id === 'technology' ? <>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Flexible API integration</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Developer-friendly documentation</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Communication capabilities for apps</span>
                                  </li>
                                </> : <>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Order & shipping notifications</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Promotional campaign management</span>
                                  </li>
                                  <li className="flex items-center">
                                    <div className="h-2 w-2 bg-deewan-primary rounded-full mr-2"></div>
                                    <span>Customer feedback collection</span>
                                  </li>
                                </>}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex justify-start mt-6">
                          <Button className="bg-deewan-primary hover:bg-deewan-primary/90 text-white">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>;
              })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default IndustrySolutionsRedesign;