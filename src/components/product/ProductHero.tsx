
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";

interface ProductHeroProps {
  name: string;
  tagline: string;
  heroImage?: string;
  onContactClick: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({ 
  name, 
  tagline, 
  heroImage, 
  onContactClick 
}) => {
  return (
    <section className="w-full min-h-[90vh] relative overflow-hidden flex items-center">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-deewan-primary/20 to-deewan-primary/5 blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-deewan-secondary/20 to-deewan-secondary/5 blur-3xl animate-[pulse_20s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] rounded-full bg-gradient-to-br from-deewan-accent/10 to-deewan-accent/2 blur-3xl animate-[pulse_18s_ease-in-out_infinite_2s]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col max-w-3xl animate-fade-in">
            <div className="bg-white/30 backdrop-blur-md px-6 py-4 rounded-xl inline-flex items-center border border-white/20 shadow-sm mb-8 self-start">
              <img src="/logo.svg" alt="Deewan Logo" className="h-8 mr-3" />
              <span className="font-semibold text-deewan-dark/90">Deewan Products</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-deewan-dark font-display">
              {name}
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-deewan-dark/80 leading-relaxed font-sans">
              {tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                onClick={onContactClick}
                className="bg-deewan-primary hover:bg-deewan-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-deewan-primary/20 px-8 py-6 text-lg h-auto"
              >
                Contact Sales
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={onContactClick}
                className="bg-white/50 backdrop-blur-sm border border-white/50 hover:bg-white/70 text-deewan-dark font-medium rounded-xl px-8 py-6 text-lg h-auto"
              >
                Explore Features
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              {/* Glassy card with product image/illustration */}
              <div className="bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl p-8 relative overflow-hidden">
                {/* Small decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-deewan-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-deewan-secondary/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10 flex items-center justify-center p-8">
                  {heroImage ? (
                    <img 
                      src={heroImage} 
                      alt={name} 
                      className="max-h-80 object-contain drop-shadow-xl" 
                    />
                  ) : (
                    <img 
                      src="/logo.svg" 
                      alt={name} 
                      className="h-64 w-64 object-contain drop-shadow-xl" 
                    />
                  )}
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 bg-deewan-accent/80 w-12 h-12 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 left-10 bg-deewan-primary/50 w-16 h-16 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
