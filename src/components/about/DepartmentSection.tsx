import React from 'react';
import { motion } from 'framer-motion';
import { Code, MessageSquareText, HeartHandshake, LineChart } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
const departments = [{
  icon: <Code className="h-10 w-10 text-deewan-primary" />,
  title: "Engineering",
  description: "We build reliable, secure, and scalable communication solutions that solve real-world problems."
}, {
  icon: <MessageSquareText className="h-10 w-10 text-deewan-primary" />,
  title: "Product Design",
  description: "We design intuitive communication experiences that feel natural and enhance productivity."
}, {
  icon: <HeartHandshake className="h-10 w-10 text-deewan-primary" />,
  title: "Customer Success",
  description: "We ensure our clients get maximum value from our products through personalized support."
}, {
  icon: <LineChart className="h-10 w-10 text-deewan-primary" />,
  title: "Business Growth",
  description: "We help organizations leverage our solutions to meet their communication challenges."
}];
const DepartmentSection = () => {
  return <div className="max-w-6xl mx-auto">
      <motion.h3 initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-100px"
    }} transition={{
      duration: 0.5
    }} className="text-3xl md:text-4xl font-bold mb-6 text-deewan-dark">
        What We Do
      </motion.h3>
      
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {departments.map((department, index) => <motion.div key={index} variants={itemVariants} className="glass p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="p-4 bg-white/80 rounded-xl shadow-sm flex items-center justify-center">
                {department.icon}
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-3 text-deewan-dark">{department.title}</h4>
                <p className="text-deewan-dark/70">{department.description}</p>
              </div>
            </div>
          </motion.div>)}
      </motion.div>
    </div>;
};
export default DepartmentSection;