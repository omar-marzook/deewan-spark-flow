
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProductHeroProps {
  onContactClick: () => void;
}
const ProductHero: React.FC<ProductHeroProps> = ({ onContactClick }) => (
  <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white pt-28 pb-10">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 max-w-xl animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.svg" alt="Deewan Logo" className="h-10" />
          <span className="font-extrabold text-2xl tracking-tight text-deewan-primary font-display" style={{ letterSpacing: '-0.03em' }}>Deewan</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deewan-dark leading-tight font-display" style={{ letterSpacing: '-0.03em' }}>
          Powerful. Secure. Scalable.<br />Business Communications
        </h1>
        <p className="mb-8 text-deewan-gray text-lg font-sans">
          The all-in-one solution for messaging, customer engagement,<br/>and automated communication across SMS, WhatsApp, Voice, and more.
        </p>
        <Button size="lg" className="bg-deewan-primary hover:bg-deewan-primary/90 text-white font-extrabold rounded-md shadow-xl"
          onClick={onContactClick}
        >
          Contact Us
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative animate-fade-in">
          <img src="/logo.svg" className="h-44 drop-shadow-lg" alt="Product illustration" />
          <div className="absolute right-2 top-1/3 w-24 h-24 bg-deewan-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute left-0 top-2/3 w-20 h-20 bg-deewan-primary/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductHero;
