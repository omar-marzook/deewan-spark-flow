import React from 'react';
import { motion } from 'framer-motion';
import { CircleUser, Briefcase, Building, Code, HeartHandshake, LineChart, MessageSquareText } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';
import DepartmentSection from './DepartmentSection';

const OurTeam = () => {
  const teamMembers = [
    {
      image: "https://avatar.iran.liara.run/public",
      name: "Ahmed Al-Saud",
      position: "Chief Executive Officer",
      description: "Leading Deewan's vision and strategy with over 15 years of experience in technology and communication."
    },
    {
      image: "https://avatar.iran.liara.run/public",
      name: "Sarah Al-Rashid",
      position: "Head of Product",
      description: "Driving product innovation and development with a focus on user experience and market needs."
    },
    {
      image: "https://avatar.iran.liara.run/public",
      name: "Mohammed Al-Qahtani",
      position: "Technical Director",
      description: "Overseeing technical infrastructure and ensuring robust, scalable solutions."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6"
          >
            <CircleUser className="text-deewan-primary h-5 w-5 mr-2" />
            <span className="text-sm font-medium text-deewan-dark/80">Our People</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-6 text-deewan-dark"
          >
            The Team Behind <span className="text-deewan-primary">Deewan</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-deewan-dark/70"
          >
            We're a diverse team of communication experts, engineers, designers, and problem-solvers 
            united by a shared mission: to transform how organizations connect with their audiences.
          </motion.p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
        
        {/* Departments Section */}
        <DepartmentSection />
      </div>
    </section>
  );
};

export default OurTeam;
