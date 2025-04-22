import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-deewan-primary/10 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
        <div className="absolute w-[400px] h-[400px] top-1/2 -left-48 bg-deewan-secondary/10 rounded-full blur-3xl animate-[pulse_20s_ease-in-out_infinite]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px',
      opacity: 0.3
    }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Floating badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-deewan-dark/80 mb-8 animate-fade-in shadow-lg">
              <span className="w-2 h-2 bg-deewan-primary rounded-full mr-2 animate-pulse"></span>
              Deewan Products
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deewan-primary to-deewan-secondary bg-clip-text text-transparent font-display lg:text-4xl">
              {name}
            </h1>

            <p className="text-xl md:text-2xl text-deewan-dark/80 mb-8 leading-relaxed max-w-xl">
              {tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={onContactClick} size="lg" className="bg-deewan-primary hover:bg-deewan-primary/90 text-white px-8 py-6 text-lg h-auto rounded-xl shadow-lg shadow-deewan-primary/20 font-medium transition-all duration-300 hover:-translate-y-1">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" onClick={onContactClick} className="bg-white/50 backdrop-blur-sm border-2 border-deewan-primary/20 text-deewan-dark hover:bg-white/70 px-8 py-6 text-lg h-auto rounded-xl font-medium transition-all duration-300 hover:-translate-y-1">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main floating card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl rotate-12 animate-[float_6s_ease-in-out_infinite]">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-deewan-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-deewan-secondary/20 rounded-full blur-2xl"></div>
              
              {/* Content */}
              <div className="absolute inset-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 p-6 overflow-hidden">
                {heroImage ? <img src={heroImage} alt={name} className="w-full h-full object-cover rounded-lg" /> : <div className="w-full h-full flex items-center justify-center">
                    <img src="/logo.svg" alt="Deewan" className="w-32 h-32 opacity-50" />
                  </div>}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-deewan-primary/20 to-transparent rounded-xl border border-white/20 backdrop-blur-sm rotate-45 animate-[float_8s_ease-in-out_infinite_1s]"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-deewan-secondary/20 to-transparent rounded-xl border border-white/20 backdrop-blur-sm -rotate-12 animate-[float_7s_ease-in-out_infinite_0.5s]"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductHero;