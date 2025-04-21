
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCTAProps {
  onContactClick: () => void;
}

const ProductCTA: React.FC<ProductCTAProps> = ({ onContactClick }) => (
  <section className="w-full py-16 relative overflow-hidden">
    {/* Background gradient and blur */}
    <div className="absolute inset-0 bg-gradient-to-r from-deewan-primary/5 via-deewan-secondary/5 to-deewan-primary/5"></div>
    
    {/* Decorative elements */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-deewan-primary/15 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-deewan-secondary/15 rounded-full blur-3xl"></div>
    
    {/* Glass container */}
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 p-10 md:p-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-deewan-dark mb-4 font-display">
              Ready to transform your business communications?
            </h2>
            <p className="text-lg text-deewan-gray mb-6 md:mb-0 max-w-xl">
              Get in touch with our team today to discover how our solutions can help you connect better with your customers.
            </p>
          </div>
          
          <Button
            size="lg"
            className="bg-deewan-primary hover:bg-deewan-primary/90 text-white px-8 py-6 font-bold rounded-xl shadow-lg shadow-deewan-primary/20 text-lg h-auto"
            onClick={onContactClick}
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ProductCTA;
