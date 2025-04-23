import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Users, Bookmark, Phone, Mail, Star } from "lucide-react";

// Reuse the same features data for consistency
const features = [{
  icon: <Check className="w-7 h-7 text-deewan-primary" />,
  title: "Real-time Communications",
  description: "Deliver instant messages to customers through SMS, WhatsApp, or Voice with high reliability."
}, {
  icon: <Bookmark className="w-7 h-7 text-deewan-primary" />,
  title: "Centralized Management",
  description: "One dashboard to manage campaigns, user conversations, analytics, and reporting."
}, {
  icon: <Users className="w-7 h-7 text-deewan-primary" />,
  title: "AI-powered Automation",
  description: "Automate customer replies, authentication, and routine tasks with smart bots."
}, {
  icon: <Star className="w-7 h-7 text-deewan-primary" />,
  title: "Insightful Analytics",
  description: "Gain actionable insights from comprehensive analytics and reporting."
}, {
  icon: <Phone className="w-7 h-7 text-deewan-primary" />,
  title: "Omnichannel APIs",
  description: "APIs for SMS, WhatsApp, Voice, Verification and more, easily integrated with your applications."
}, {
  icon: <Mail className="w-7 h-7 text-deewan-primary" />,
  title: "Personalization",
  description: "Personalize messages at scale to improve engagement and conversion."
}];
const FeatureCard = ({
  feature,
  index
}: {
  feature: typeof features[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 20,
    filter: "blur(5px)"
  }} animate={isInView ? {
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  } : {
    opacity: 0,
    y: 20,
    filter: "blur(5px)"
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className="group relative">
      <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-deewan-primary/10 rounded-xl blur-xl transform group-hover:scale-110 transition-transform"></div>
          <div className="relative w-14 h-14 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/40">
            {feature.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 text-deewan-dark group-hover:text-deewan-primary transition-colors">
          {feature.title}
        </h3>

        <p className="text-deewan-dark/70 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>;
};
const CoreFeaturesStaggered = () => {
  return <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        easings: ["easeInOut"]
      }} className="absolute top-0 left-1/4 w-96 h-96 bg-deewan-primary/5 rounded-full blur-3xl" />
        <motion.div animate={{
        rotate: [360, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        easings: ["easeInOut"]
      }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-deewan-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-deewan-primary rounded-full mr-2"></span>
            <span className="text-sm font-medium text-deewan-dark/80">Alternative Design</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Core Features
          </h2>
          
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Discover how our intelligent solutions can transform your communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <FeatureCard key={index} feature={feature} index={index} />)}
        </div>
      </div>
    </section>;
};
export default CoreFeaturesStaggered;