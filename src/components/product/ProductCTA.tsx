import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
interface ProductCTAProps {
  onContactClick: () => void;
}
const ProductCTA: React.FC<ProductCTAProps> = ({
  onContactClick
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  return <section 
    id="product-cta" 
    className="relative py-24 overflow-hidden bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5"
    aria-labelledby="product-cta-heading"
  >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className={`absolute w-[400px] h-[400px] -top-48 -right-48 bg-deewan-primary/10 rounded-full blur-3xl ${prefersReducedMotion ? '' : 'animate-[pulse_15s_ease-in-out_infinite]'}`}></div>
        <div className={`absolute w-[400px] h-[400px] bottom-0 -left-48 bg-deewan-secondary/10 rounded-full blur-3xl ${prefersReducedMotion ? '' : 'animate-[pulse_20s_ease-in-out_infinite]'}`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="product-cta-heading" 
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-deewan-primary to-deewan-secondary bg-clip-text text-transparent font-display"
          >
            Ready to Transform Your Communication?
          </h2>
          
          <p className="text-lg text-deewan-gray mb-8 max-w-2xl mx-auto">
            Connect with our team today to discover how our solutions can help your business communicate more effectively.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={onContactClick} 
              variant="default" 
              size="lg"
              aria-label="Get Started Today"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={onContactClick}
              aria-label="Schedule a Demo"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductCTA;