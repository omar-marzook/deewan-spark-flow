
import { Button } from "@/components/ui/button";

interface ProductCTAProps {
  onContactClick: () => void;
}
const ProductCTA: React.FC<ProductCTAProps> = ({ onContactClick }) => (
  <section className="w-full py-8 bg-white border-t border-deewan-primary/10">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-xl md:text-2xl font-semibold text-deewan-dark mb-4 md:mb-0 font-display">
        Ready to connect with your customers?
      </div>
      <Button
        size="lg"
        className="bg-deewan-primary hover:bg-deewan-primary/90 text-white px-8 font-extrabold rounded-md"
        onClick={onContactClick}
      >
        Contact Us Now
      </Button>
    </div>
  </section>
);

export default ProductCTA;
