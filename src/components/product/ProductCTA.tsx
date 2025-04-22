import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
interface ProductCTAProps {
  onContactClick: () => void;
}
const ProductCTA: React.FC<ProductCTAProps> = ({
  onContactClick
}) => {
  return <section className="relative py-24 overflow-hidden bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] -top-48 -right-48 bg-deewan-primary/10 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
        <div className="absolute w-[400px] h-[400px] bottom-0 -left-48 bg-deewan-secondary/10 rounded-full blur-3xl animate-[pulse_20s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-deewan-primary to-deewan-secondary bg-clip-text text-transparent font-display">
            Ready to Transform Your Communication?
          </h2>
          
          <p className="text-lg text-deewan-dark/70 mb-8 max-w-2xl mx-auto">
            Connect with our team today to discover how our solutions can help your business communicate more effectively.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={onContactClick} size="lg" className="btn-primary flex items-center justify-center gap-2 bg-deewan-primary">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={onContactClick} className="btn-secondary flex items-center justify-center bg-white">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductCTA;