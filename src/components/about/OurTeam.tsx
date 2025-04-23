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
  return;
};
export default OurTeam;