import { ReactNode } from "react";
interface UseCase {
  title: string;
  desc: string;
  icon: ReactNode;
}
interface ProductUseCasesProps {
  useCases: UseCase[];
}
const ProductUseCases: React.FC<ProductUseCasesProps> = ({
  useCases
}) => {
  return <section className="relative py-24 overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5">
        
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-deewan-secondary rounded-full mr-2"></span>
            <span className="text-sm font-medium text-deewan-dark/80">Use Cases</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Industry Solutions
          </h2>
          
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Discover how our platform adapts to different business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => <div key={index} className="group relative perspective-1000">
              {/* Card with 3D hover effect */}
              <div className="relative h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-10">
                <div className="p-8 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg h-full transform-style-3d">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-deewan-secondary/20 to-transparent rounded-xl backdrop-blur-sm">
                      <div className="text-deewan-secondary">
                        {useCase.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-deewan-dark group-hover:text-deewan-secondary transition-colors">
                    {useCase.title}
                  </h3>

                  <p className="text-deewan-dark/70 leading-relaxed">
                    {useCase.desc}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-deewan-secondary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-deewan-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-px bg-gradient-to-r from-deewan-primary/20 to-deewan-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductUseCases;