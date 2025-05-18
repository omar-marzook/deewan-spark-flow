import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import OptimizedImage from "@/components/ui/optimized-image";

interface ProductHeroProps {
  name: string;
  tagline: string;
  heroImage?: string;
  onContactClick: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  name,
  tagline,
  heroImage,
  onContactClick
}) => {
  return <section className="relative xl:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5" aria-labelledby="product-hero-heading">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-deewan-primary/10 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
      <div className="absolute w-[400px] h-[400px] top-1/2 -left-48 bg-deewan-secondary/10 rounded-full blur-3xl animate-[pulse_20s_ease-in-out_infinite]"></div>
    </div>

    {/* Grid pattern overlay */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px',
      opacity: 0.3
    }} aria-hidden="true">
    </div>

    <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-12 xl:pd-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="max-w-2xl">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 id="product-hero-heading" className="text-4xl lg:text-5xl font-bold mb-6 font-display">
            {name}
          </h1>

          <p className="text-lg md:text-xl text-deewan-dark/80 mb-8 leading-relaxed max-w-xl">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href="#contact"
              size="lg"
              aria-label={`Get started with ${name}`}
              onClick={onContactClick}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        {/* 3D Visual Element */}
        <div className="relative h-80 md:h-96 xl:h-[600px]" aria-hidden="true">
          <div className="absolute top-0 left-0 transform w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg rotate-12 animate-[float_6s_ease-in-out_infinite]">
            {/* Decorative elements */}
            {heroImage && (
              <OptimizedImage
                src={heroImage}
                alt={`${name} product illustration`}
                className="w-full h-full object-contain rounded-lg"
                priority={true} // Don't lazy load hero images
              />
            )}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-deewan-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-deewan-secondary/10 rounded-full blur-2xl"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute -z-10 -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-deewan-primary/5 to-transparent rounded-xl border border-white/5 backdrop-blur-sm rotate-45 animate-[float_8s_ease-in-out_infinite_1s]"></div>
          <div className="absolute -z-10 -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-deewan-secondary/5 to-transparent rounded-xl border border-white/5 backdrop-blur-sm -rotate-12 animate-[float_7s_ease-in-out_infinite_0.5s]"></div>
        </div>
      </div>
    </div>
  </section>;
};

export default ProductHero;