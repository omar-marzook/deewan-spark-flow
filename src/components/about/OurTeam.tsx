
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

  const departments = [
    {
      title: "Executive",
      icon: <Building className="text-deewan-primary" size={24} />,
      roles: ["Chief Executive Officer", "Chief Financial Officer", "Chief Operating Officer"]
    },
    {
      title: "Product Development",
      icon: <Code className="text-deewan-primary" size={24} />,
      roles: ["Software Engineers", "UX/UI Designers", "Product Managers"]
    },
    {
      title: "Customer Success",
      icon: <HeartHandshake className="text-deewan-primary" size={24} />,
      roles: ["Account Managers", "Support Specialists", "Solution Architects"]
    },
    {
      title: "Sales & Marketing",
      icon: <LineChart className="text-deewan-primary" size={24} />,
      roles: ["Business Development", "Marketing Specialists", "Market Analysts"]
    },
    {
      title: "Communications",
      icon: <MessageSquareText className="text-deewan-primary" size={24} />,
      roles: ["Communication Strategists", "Content Creators", "Media Relations"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-deewan-gray max-w-3xl mx-auto">
              Meet the dedicated professionals building the future of communication technology at Deewan.
            </p>
          </motion.div>
        </div>
        
        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Departments */}
        <DepartmentSection departments={departments} />
      </div>
    </section>
  );
};

export default OurTeam;
