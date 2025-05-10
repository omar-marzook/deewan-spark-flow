
import { motion, useReducedMotion } from "framer-motion";

interface HowItWorksVideoProps {
  videoUrl?: string;
}

const HowItWorksVideo = ({ videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }: HowItWorksVideoProps) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="how-it-works-video" className="py-24 relative overflow-hidden" aria-labelledby="how-it-works-video-heading">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deewan-secondary/5 via-transparent to-deewan-primary/5" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 id="how-it-works-video-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Experience <span className="text-deewan-primary">Deewan</span> in Motion
          </h2>
          <p className="text-lg text-deewan-gray max-w-2xl mx-auto">
            See how Deewan's platform streamlines your communication workflow
          </p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg p-4">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title="Deewan Platform Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-deewan-gray mb-4">
              Want to learn more about how Deewan can help your business?
            </p>
            <a
              href="#contact"
              className="text-deewan-primary hover:text-deewan-primary/80 focus:text-deewan-primary/80 font-medium inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded-md px-2 py-1"
            >
              Still have questions? Contact us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksVideo;
