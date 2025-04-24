
import React from 'react';
import { motion } from 'framer-motion';
import { CircleUser, Briefcase, Building, Code, HeartHandshake, LineChart, MessageSquareText } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';
import DepartmentSection from './DepartmentSection';

const OurTeam = () => {
  // const teamMembers = [{
  //   image: "https://avatar.iran.liara.run/public",
  //   name: "Ahmed Al-Saud",
  //   position: "Chief Executive Officer",
  //   description: "Leading Deewan's vision and strategy with over 15 years of experience in technology and communication."
  // }, {
  //   image: "https://avatar.iran.liara.run/public",
  //   name: "Sarah Al-Rashid",
  //   position: "Head of Product",
  //   description: "Driving product innovation and development with a focus on user experience and market needs."
  // }, {
  //   image: "https://avatar.iran.liara.run/public",
  //   name: "Mohammed Al-Qahtani",
  //   position: "Technical Director",
  //   description: "Overseeing technical infrastructure and ensuring robust, scalable solutions."
  // }];

  const departments = [{
    title: "Engineered to Deliver",
    icon: <Building className="text-deewan-primary" size={24} />,
    description: "Our engineers craft rock-solid, secure, and scalable communication infrastructure that powers real-world impact—so you can build with confidence."
  }, {
    title: "Designed for Humans",
    icon: <Code className="text-deewan-primary" size={24} />,
    description: "We create intuitive, frictionless communication experiences that feel second nature—fueling productivity and delight from first click to final message."
  }, {
    title: "Customer Success is Ours",
    icon: <HeartHandshake className="text-deewan-primary" size={24} />,
    description: "From onboarding to optimization, our success team is your strategic partner—making sure you get the most out of every interaction."
  }, {
    title: "Unlock Business Growth, One Message at a Time.",
    icon: <LineChart className="text-deewan-primary" size={24} />,
    description: "We help businesses turn conversations into conversions—tackling communication challenges with smart, scalable solutions."
  }];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* <motion.div 
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
        </motion.div> */}

        <DepartmentSection departments={departments} />
      </div>
    </section>
  );
};

export default OurTeam;
