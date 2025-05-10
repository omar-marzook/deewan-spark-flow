
import { motion, useReducedMotion } from "framer-motion";

interface HowItWorksStepsProps {
  steps?: {
    number: string;
    title: string;
    description: string;
  }[];
}

const defaultSteps = [
  {
    number: "01",
    title: "Connect Your Channels",
    description: "Integrate WhatsApp, live chat, email, and more into one system."
  },
  {
    number: "02",
    title: "Automate and Route Chats",
    description: "Set up routing logic based on your teams, departments, and workflows."
  },
  {
    number: "03",
    title: "Manage Conversations Real-Time",
    description: "View, track, and respond to chats instantly inside the dashboard."
  },
  {
    number: "04",
    title: "Analyze and Improve",
    description: "Use real-time analytics to measure and enhance customer support."
  }
];

const HowItWorksSteps = ({ steps = defaultSteps }: HowItWorksStepsProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" aria-labelledby="how-it-works-heading">
      {/* Background decorative elements */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5" aria-hidden="true" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Get started in <span className="text-deewan-primary">3 simple steps!</span>
          </h2>
          <p className="text-base md:text-lg text-deewan-gray max-w-2xl mx-auto">
            Sign up for a free account on Deewan's communication platform and launched your first campaign in a few minutes.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto list-none p-0">
          {steps.map((step, index) => (
            <li key={step.number} className="h-full">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.5, 
                  delay: prefersReducedMotion ? 0 : index * 0.2 
                }}
                viewport={{ once: true }}
                className="relative group h-full"
              >
                <div 
                  className="p-8 h-full rounded-2xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl focus-within:translate-y-[-4px] focus-within:shadow-xl focus-within:ring-2 focus-within:ring-deewan-primary/50"
                  tabIndex={0}
                >
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-deewan-primary to-deewan-secondary bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-deewan-dark">
                  {step.title}
                </h3>
                <p className="text-deewan-gray">
                  {step.description}
                </p>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
