
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-deewan-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-deewan-secondary/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-deewan-primary/10 backdrop-blur-sm px-5 py-2 rounded-full text-deewan-primary font-medium text-sm mb-4">
            Feature Highlights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-6 font-display">
            Powerful Features to Enhance Your Communication
          </h2>
          <p className="text-lg text-deewan-gray">
            Explore the capabilities that make our solution stand out
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/60">
              <CardContent className="p-8">
                <div className="mb-6 bg-gradient-to-br from-deewan-primary/20 to-deewan-primary/5 p-4 rounded-xl inline-block">
                  <div className="w-10 h-10 flex items-center justify-center text-deewan-primary">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-deewan-dark group-hover:text-deewan-primary transition-colors font-display">
                  {feature.title}
                </h3>
                
                <p className="text-deewan-gray text-base leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
