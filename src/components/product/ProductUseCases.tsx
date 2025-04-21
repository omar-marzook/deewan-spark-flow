
import { ReactNode } from "react";

interface UseCase {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface ProductUseCasesProps {
  useCases: UseCase[];
}

const ProductUseCases: React.FC<ProductUseCasesProps> = ({ useCases }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white/80 to-gray-50/50 backdrop-blur-sm"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-deewan-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-deewan-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-deewan-secondary/10 backdrop-blur-sm px-5 py-2 rounded-full text-deewan-secondary font-medium text-sm mb-4">
            Use Cases
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-6 font-display">
            Solutions Tailored For Your Industry
          </h2>
          <p className="text-lg text-deewan-gray">
            See how our platform adapts to different business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="group relative">
              {/* Glassy card */}
              <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-8 transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/60 h-full flex flex-col">
                {/* Decorative circle */}
                <div className="absolute top-3 right-3 w-20 h-20 bg-gradient-to-br from-deewan-secondary/10 to-transparent rounded-full blur-xl"></div>
                
                {/* Icon */}
                <div className="mb-6 p-3 bg-white/80 rounded-xl w-16 h-16 flex items-center justify-center shadow-sm relative z-10">
                  <div className="text-deewan-secondary">
                    {useCase.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-deewan-dark group-hover:text-deewan-secondary transition-colors font-display">
                  {useCase.title}
                </h3>
                
                <p className="text-deewan-gray text-base leading-relaxed flex-grow">
                  {useCase.desc}
                </p>
                
                {/* Subtle arrow indicator */}
                <div className="w-7 h-7 rounded-full bg-deewan-secondary/10 flex items-center justify-center mt-6 transition-all duration-300 group-hover:bg-deewan-secondary/20">
                  <svg className="w-4 h-4 text-deewan-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductUseCases;
