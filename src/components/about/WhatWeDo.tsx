
import React from 'react';
import { Building, Code, HeartHandshake, LineChart } from 'lucide-react';
import DepartmentSection from './DepartmentSection';

const WhatWeDo = () => {
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
        <DepartmentSection departments={departments} />
      </div>
    </section>
  );
};

export default WhatWeDo;
