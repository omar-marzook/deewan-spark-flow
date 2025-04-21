
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-deewan-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-deewan-primary rounded-full mr-2"></span>
            <span className="text-sm font-medium text-deewan-dark/80">Core Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-deewan-primary to-deewan-secondary bg-clip-text text-transparent font-display">
            Powerful Capabilities
          </h2>
          
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Explore the advanced features that make our solution stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Feature card with hover effects */}
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
                {/* Icon container */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-deewan-primary/10 rounded-xl blur-xl transform group-hover:scale-110 transition-transform"></div>
                  <div className="relative w-14 h-14 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/40">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-deewan-dark group-hover:text-deewan-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-deewan-dark/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-deewan-primary/0 via-deewan-primary/20 to-deewan-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
