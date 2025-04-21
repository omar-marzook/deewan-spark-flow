
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}
interface ProductFeaturesProps {
  features: Feature[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => (
  <section className="container mx-auto px-4 md:px-6 py-16">
    <h2 className="text-3xl font-extrabold mb-10 text-center text-deewan-dark font-display">Feature Highlights</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="group shadow-lg hover:shadow-xl transition-all rounded-xl bg-white/90 backdrop-blur p-6 border border-white/60 hover:scale-105 animate-fade-in font-sans">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-deewan-primary/15 rounded-xl">{f.icon}</div>
          </div>
          <h3 className="font-extrabold text-lg text-deewan-dark mb-2 font-display">{f.title}</h3>
          <p className="text-deewan-gray text-sm">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductFeatures;
