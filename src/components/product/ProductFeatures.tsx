import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  CheckCircle, 
  Database, 
  Bot, 
  UserCog, 
  Shield, 
  CheckSquare 
} from 'lucide-react';

interface CapabilityItem {
  icon: React.ElementType;
  title: string;
}

interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  capabilities?: CapabilityItem[];
  features?: ProductFeature[];
  title?: string;
  subtitle?: string;
}

const defaultCapabilities: CapabilityItem[] = [
  { icon: CheckCircle, title: 'Verified Account' },
  { icon: Database, title: 'Database Management' },
  { icon: Bot, title: 'Chatbot Integration' },
  { icon: UserCog, title: 'Account Management' },
  { icon: Shield, title: 'Data Encryption' },
  { icon: CheckSquare, title: 'Opt-In Requirement' }
];

const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  capabilities,
  features,
  title = "Powerful WhatsApp Business capabilities in one API from Deewan",
  subtitle
}) => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2
  });

  // Determine if we're rendering capabilities or features
  const isCapabilitiesMode = capabilities !== undefined;

  return (
    <section 
      ref={sectionRef} 
      id="product-features"
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="product-features-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[70%] h-[50%] bg-deewan-primary/5 rounded-full blur-[120px] transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-deewan-secondary/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(33, 161, 124, 0.15) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(53, 101, 178, 0.1) 0%, transparent 70%)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
        >
          <h2 id="product-features-heading" className="text-2xl md:text-4xl font-bold text-deewan-dark" dangerouslySetInnerHTML={{ __html: title }}></h2>
          {subtitle && (
            <p className="mt-4 text-lg text-deewan-gray max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isCapabilitiesMode ? (
            // Render capabilities (WhatsApp features)
            (capabilities || defaultCapabilities).map((capability, index) => (
              <CapabilityCard 
                key={index} 
                capability={capability} 
                index={index} 
                isInView={isInView} 
              />
            ))
          ) : (
            // Render product features
            features?.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                index={index} 
                isInView={isInView} 
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

// Card for WhatsApp capabilities
interface CapabilityCardProps {
  capability: CapabilityItem;
  index: number;
  isInView: boolean;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ capability, index, isInView }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.5, 
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: "easeOut" 
      }}
      className={cn(
        "flex items-center p-4 md:p-6 rounded-xl",
        "backdrop-blur bg-white/10 shadow-md border border-white/10",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg focus-within:ring-2 focus-within:ring-deewan-primary/50"
      )}
      tabIndex={0}
    >
      {/* Icon Container */}
      <div className="flex-shrink-0 mr-4 md:mr-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg  bg-gradient-to-br from-deewan-primary to-deewan-primary/70 flex items-center justify-center">
          {React.createElement(capability.icon, {
            className: "w-6 h-6 md:w-8 md:h-8 text-white",
            "aria-hidden": "true"
          })}
        </div>
      </div>

      {/* Title */}
      <div className="flex-grow">
        <h3 className="text-lg md:text-xl font-medium text-deewan-dark">
          {capability.title}
        </h3>
      </div>
    </motion.div>
  );
};

// Card for product features
interface FeatureCardProps {
  feature: ProductFeature;
  index: number;
  isInView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, isInView }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.5, 
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={prefersReducedMotion ? {} : { 
        y: -4,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" 
      }}
      className={cn(
        "flex flex-col p-6 rounded-xl",
        "backdrop-blur bg-white/10 shadow-md border border-white/10",
        "transition-all duration-300 focus-within:ring-2 focus-within:ring-deewan-primary/50 focus-within:translate-y-[-4px]"
      )}
      tabIndex={0}
    >
      {/* Icon */}
      <div className="mb-4" aria-hidden="true">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-medium text-deewan-dark mb-2">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-deewan-gray">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default ProductFeatures;