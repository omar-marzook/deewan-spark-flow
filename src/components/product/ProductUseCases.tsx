
import { ReactNode } from "react";

interface UseCase {
  title: string;
  desc: string;
  icon: ReactNode;
}
interface ProductUseCasesProps {
  useCases: UseCase[];
}

const ProductUseCases: React.FC<ProductUseCasesProps> = ({ useCases }) => (
  <section className="w-full bg-gradient-to-br from-deewan-primary/5 to-deewan-secondary/10 py-16">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-deewan-dark font-display">Tailored For Your Business</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        {useCases.map((u) => (
          <div key={u.title} className="rounded-2xl bg-white shadow-md flex-1 p-8 flex flex-col items-center hover:bg-deewan-primary/10 transition-colors duration-200 animate-fade-in font-sans">
            <div className="mb-4">{u.icon}</div>
            <div className="font-bold text-lg text-deewan-dark mb-1 font-display">{u.title}</div>
            <div className="text-deewan-gray text-center">{u.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductUseCases;
