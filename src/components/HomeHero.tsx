import { useState, useEffect } from "react";
import { ArrowUpRight, CircleDot, Circle, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";


interface HomeHeroProps {
  children?: React.ReactNode;
  className?: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ children, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Animation timing
        setTimeout(() => {
        setIsLoaded(true);
        }, 100);
    }, []);

  return (
      <section className={`container mx-auto px-4 py-12 md:py-24 relative z-10 ${className}`}>
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <CircleDot 
            className="absolute text-[#2b6cb0]/60 w-8 h-8"
            style={{
              top: '15%',
              right: '22%',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
          <Circle 
            className="absolute text-[#2b6cb0]/40 w-5 h-5"
            style={{
              top: '40%',
              left: '18%',
              animation: 'float 12s ease-in-out infinite 1s'
            }}
          />
          <CircleCheck 
            className="absolute text-[#0EA5E9]/50 w-6 h-6"
            style={{
              bottom: '25%',
              right: '30%',
              animation: 'float 10s ease-in-out infinite 2s'
            }}
          />
          <ArrowUpRight 
            className="absolute text-[#2b6cb0]/50 w-6 h-6"
            style={{
              top: '25%',
              left: '25%',
              animation: 'float 15s ease-in-out infinite 0.5s'
            }}
          />
        </div>

        {/* Ring behind text content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#2b6cb0]/20 rounded-full opacity-70"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#2b6cb0]/10 rounded-full opacity-50"></div>

        {/* Text Content - Moved above visual */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2c2d2d] leading-tight">
            <span className="block">Intelligent</span>
            <span className="block">communications, <span className="text-[#35a26b]">limitless growth</span>.</span>
          </h1>
          <p className="text-xl text-[#2c2d2d] mb-8 max-w-2xl mx-auto">
            Intelligent and scalability, customizable communication solutions that prioritize security and scalability.
          </p>
          
          {/* CTA Button - Updated to be more elongated, shorter and glassier */}
          <Button className="bg-[#35a26b]/80 hover:bg-[#35a26b]/90 backdrop-blur-sm text-white px-12 py-3 h-auto text-lg rounded-md border border-[#35a26b]/20 shadow-md">
            Request Call
          </Button>
        </div>
        
        {/* Visual with green gradient illumination */}
        <div className="relative max-w-4xl mx-auto">
          {/* Green Gradient Illumination */}
          <div className="absolute -inset-10 bg-[#35a26b]/20 rounded-full blur-3xl"></div>
          
          <div className={`transition-all duration-700 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* App Interface Mockups */}
              <div className="glass-card relative rounded-xl p-4 overflow-hidden w-full aspect-video">
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HomeHero;