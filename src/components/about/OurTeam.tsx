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
  return <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
      
      
    </section>;
};
export default OurTeam;