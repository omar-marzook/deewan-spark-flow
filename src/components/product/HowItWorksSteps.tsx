
import { motion } from "framer-motion";

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
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deewan-primary/5 via-transparent to-deewan-secondary/5" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are you ready to <span className="text-deewan-primary">connect?</span>
          </h2>
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Get started with Deewan's communication platform in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-8 h-full rounded-2xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-deewan-primary to-deewan-secondary bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-deewan-dark">
                  {step.title}
                </h3>
                <p className="text-deewan-dark/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
