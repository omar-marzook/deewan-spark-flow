import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { ProductData } from '@/components/ProductTemplate';
import productsData from '@/data/products-data';

interface BenefitItem {
  title: string;
  description: string;
}

interface ConversionApiBenefitsProps {
  isConversionApi: boolean;
  productSlug?: string;
}

// Default benefits if none are provided in the product data
const defaultBenefits: BenefitItem[] = [
  {
    title: "Convenient Customer Support",
    description: "Enabling your customers to submit requests and get information on their preferred chat app will improve experience, loyalty and retention."
  },
  {
    title: "Secure Data and Communications",
    description: "With WhatsApp Business API you will be utilizing proven security standards and encryption methods trusted by the whole world."
  },
  {
    title: "Easy Promotions and Fast Conversions",
    description: "Using your brand to send personalized promotions to your customers will significantly boost your conversion rates and ROI."
  }
];

const ConversionApiBenefits: React.FC<ConversionApiBenefitsProps> = ({ isConversionApi, productSlug }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2
  });

  // Find the product data based on the slug or use the first conversion API product
  const getProductData = () => {
    if (productSlug && productsData[productSlug]) {
      return productsData[productSlug];
    }
    
    // If no specific product slug is provided, find the first product with isConversionApi: true
    const conversionApiProduct = Object.values(productsData).find(
      product => product.isConversionApi === true
    );
    
    return conversionApiProduct || null;
  };
  
  const productData = getProductData();
  
  // Don't render if not a conversion API or if no product data is found
  if (!isConversionApi || !productData) {
    return null;
  }
  
  // Get the benefits from the product data or use default benefits
  const benefits = productData.conversionBenefits || defaultBenefits;

  return (
    <section 
      ref={sectionRef} 
      className="relative py-16 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-deewan-primary/80 to-deewan-secondary/70"
    >
      <div className="container mx-auto relative z-10">
        {/* Glassy container */}
        <div className="rounded-3xl backdrop-blur bg-white/5 border border-white/10 shadow-md overflow-hidden">
          <div className="relative p-8 md:p-12">
            {/* Background gradient elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[70%] h-[50%] bg-deewan-primary/5 rounded-full blur-[120px] transform translate-x-1/4 -translate-y-1/4"></div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-deewan-secondary/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4"></div>
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(33, 161, 124, 0.15) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(53, 101, 178, 0.1) 0%, transparent 70%)'
              }}></div>
            </div>

            {/* Section Title */}
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-4xl text-white">
                Offer utilities, services, information and account functions on WhatsApp with one API
              </h2>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                The benefits of {productData.name} by Deewan will transform your business.
              </p>
            </motion.div>

            {/* Benefits Cards - Vertical Layout */}
            <div className="space-y-6 md:space-y-8">
              {benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index} 
                  benefit={benefit} 
                  index={index} 
                  isInView={isInView} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  benefit: BenefitItem;
  index: number;
  isInView: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.2 + (index * 0.15),
        ease: "easeOut" 
      }}
      className={cn(
        "p-6 md:p-8 rounded-xl",
        "backdrop-blur bg-white/5 shadow-md border border-white/10",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      )}
    >
      <div className="flex items-start">
        {/* Check Icon */}
        <div className="flex-shrink-0 mr-4 md:mr-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2">
            {benefit.title}
          </h3>
          <p className="text-base leading-relaxed text-white/95">
            {benefit.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ConversionApiBenefits;