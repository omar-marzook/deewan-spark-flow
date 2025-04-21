
import { Variants } from 'framer-motion';

export const useValueAnimations = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  const hoverAnimation = {
    y: -10,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  };

  return {
    containerVariants,
    itemVariants,
    hoverAnimation
  };
};
