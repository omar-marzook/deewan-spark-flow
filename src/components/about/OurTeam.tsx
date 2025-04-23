
import React from 'react';
import { motion } from 'framer-motion';
import { CircleUser, Briefcase, Building, Code, HeartHandshake, LineChart, MessageSquareText } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';
import DepartmentSection from './DepartmentSection';

const OurTeam = () => {
  const teamMembers = [{
    image: "https://avatar.iran.liara.run/public",
    name: "Ahmed Al-Saud",
    position: "Chief Executive Officer",
    description: "Leading Deewan's vision and strategy with over 15 years of experience in technology and communication."
  }, {
    image: "https://avatar.iran.liara.run/public",
    name: "Sarah Al-Rashid",
    position: "Head of Product",
    description: "Driving product innovation and development with a focus on user experience and market needs."
  }, {
    image: "https://avatar.iran.liara.run/public",
    name: "Mohammed Al-Qahtani",
    position: "Technical Director",
    description: "Overseeing technical infrastructure and ensuring robust, scalable solutions."
  }];

  const departments = [{
    title: "Executive",
    icon: <Building className="text-deewan-primary" size={24} />,
    roles: ["Chief Executive Officer", "Chief Financial Officer", "Chief Operating Officer"]
  }, {
    title: "Product Development",
    icon: <Code className="text-deewan-primary" size={24} />,
    roles: ["Software Engineers", "UX/UI Designers", "Product Managers"]
  }, {
    title: "Customer Success",
    icon: <HeartHandshake className="text-deewan-primary" size={24} />,
    roles: ["Account Managers", "Support Specialists", "Solution Architects"]
  }, {
    title: "Sales & Marketing",
    icon: <LineChart className="text-deewan-primary" size={24} />,
    roles: ["Business Development", "Marketing Specialists", "Market Analysts"]
  }, {
    title: "Communications",
    icon: <MessageSquareText className="text-deewan-primary" size={24} />,
    roles: ["Communication Strategists", "Content Creators", "Media Relations"]
  }];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-deewan-dark mb-4">Our Leadership Team</h2>
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Meet the talented individuals who drive our vision forward and ensure excellence in everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-deewan-dark mb-4">Our Departments</h2>
          <p className="text-lg text-deewan-dark/70 max-w-2xl mx-auto">
            Specialized teams working together to deliver comprehensive communication solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <DepartmentSection key={index} department={department} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
