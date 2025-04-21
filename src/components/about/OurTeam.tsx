import React from 'react';
import { motion } from 'framer-motion';
import { CircleUser, Briefcase, Building, Code, HeartHandshake, LineChart, MessageSquareText } from 'lucide-react';
const OurTeam = () => {
  // Team departments data
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
  return <section className="py-24 relative overflow-hidden">
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div initial={{
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
        }} className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
            <CircleUser className="text-deewan-primary h-5 w-5 mr-2" />
            <span className="text-sm font-medium text-deewan-dark/80">Our People</span>
          </motion.div>
          
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-4xl font-bold mb-6 text-deewan-dark">
            The Team Behind <span className="text-deewan-primary">Deewan</span>
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-lg text-deewan-dark/70">
            We're a diverse team of communication experts, engineers, designers, and problem-solvers 
            united by a shared mission: to transform how organizations connect with their audiences.
          </motion.p>
        </div>
        
        {/* Team circles visualization */}
        <div className="mb-20 relative h-72 max-w-4xl mx-auto">
          {/* Center circle */}
          
          
          {/* Orbiting circles */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 1,
          delay: 0.3
        }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
            <div className="absolute inset-0 rounded-full border border-dashed border-deewan-primary/30 animate-[spin_40s_linear_infinite]"></div>
            
            {/* Circle 1 */}
            <motion.div initial={{
            y: -30,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center">
              <Code className="text-deewan-primary h-8 w-8" />
            </motion.div>
            
            {/* Circle 2 */}
            <motion.div initial={{
            y: 30,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center">
              <LineChart className="text-deewan-secondary h-8 w-8" />
            </motion.div>
            
            {/* Circle 3 */}
            <motion.div initial={{
            x: -30,
            opacity: 0
          }} whileInView={{
            x: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center">
              <MessageSquareText className="text-deewan-primary h-8 w-8" />
            </motion.div>
            
            {/* Circle 4 */}
            <motion.div initial={{
            x: 30,
            opacity: 0
          }} whileInView={{
            x: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 1
          }} className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center">
              <HeartHandshake className="text-deewan-accent h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Departments */}
        <div className="max-w-6xl mx-auto">
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
        }} className="text-2xl font-bold mb-12 text-center text-deewan-dark">
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
        </div>
      </div>
    </section>;
};
export default OurTeam;