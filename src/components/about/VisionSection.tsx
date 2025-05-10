
import { motion, useReducedMotion } from "framer-motion";

const VisionSection = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="vision-section" className="py-24 relative overflow-hidden" aria-labelledby="vision-heading">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating orbs with glassmorphism */}
        <div className={`absolute top-0 -left-32 w-96 h-96 bg-deewan-primary/20 rounded-full mix-blend-multiply filter blur-3xl ${prefersReducedMotion ? '' : 'animate-float-slow'}`}></div>
        <div className={`absolute bottom-0 -right-32 w-96 h-96 bg-deewan-secondary/20 rounded-full mix-blend-multiply filter blur-3xl ${prefersReducedMotion ? '' : 'animate-float-slow delay-500'}`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-deewan-accent/10 rounded-full mix-blend-multiply filter blur-3xl ${prefersReducedMotion ? '' : 'animate-float-slow delay-1000'}`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto backdrop-blur-xl bg-white/30 p-8 md:p-12 rounded-2xl border border-white/20 shadow-lg"
        >
          <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold mb-6 text-deewan-dark">
            Transforming Digital <span className="text-deewan-primary">Communication</span>
          </h2>
          
          <div className="space-y-6 text-deewan-dark/80">
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              At Deewan, we're pioneering the future of business communication in Saudi Arabia and beyond. Our vision is to transform how businesses connect with their customers, making every interaction more meaningful and efficient.
            </motion.p>
            
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Through innovative technology and unwavering commitment to excellence, we're building communication solutions that empower businesses to grow and succeed in the digital age.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
