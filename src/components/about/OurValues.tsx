
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Types
interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// Custom hook for value animations
const useValueAnimations = (ref: React.RefObject<HTMLElement>) => {
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { isInView, controls };
};

// ValueCard component
const ValueCard: React.FC<{
  value: Value;
  index: number;
}> = ({ value, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { controls } = useValueAnimations(cardRef);

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="group relative bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
    >
      {/* Gradient background that appears on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon */}
      <div className={`relative p-4 mb-5 inline-flex rounded-lg ${value.color}`}>
        {value.icon}
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold mb-3 text-gray-800 group-hover:text-deewan-primary transition-colors duration-300">
        {value.title}
      </h3>
      <p className="relative text-gray-600 leading-relaxed">{value.description}</p>

      {/* Hover indicator line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-deewan-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </motion.div>
  );
};

// ValuesHeader component
const ValuesHeader: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { controls } = useValueAnimations(headerRef);

  return (
    <div className="text-center mb-12">
      <motion.div
        ref={headerRef}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deewan-dark">
          Our Core Values
        </h2>
        <p className="text-lg text-deewan-gray max-w-3xl mx-auto">
          These principles guide everything we do and define who we are as a company
        </p>
      </motion.div>
    </div>
  );
};

// Main OurValues component
const OurValues: React.FC = () => {
  const values: Value[] = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "We are honest, transparent, and committed to doing what's best for our customers and our company.",
      color: "bg-blue-100/70 text-blue-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We pursue continuous improvement and innovation in our products and services to meet the evolving needs of our customers.",
      color: "bg-green-100/70 text-green-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, open communication, and partnership with our clients to achieve great results.",
      color: "bg-purple-100/70 text-purple-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Reliability",
      description:
        "We deliver on our promises, providing consistent, high-quality service and support that our customers can depend on.",
      color: "bg-yellow-100/70 text-yellow-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Customer Focus",
      description:
        "We are dedicated to understanding and meeting the needs of our customers, providing solutions that create value and satisfaction.",
      color: "bg-red-100/70 text-red-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65"
          />
        </svg>
      ),
      title: "Growth Mindset",
      description:
        "We embrace challenges, persist in the face of setbacks, and view failure as an opportunity for growth.",
      color: "bg-teal-100/70 text-teal-600",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-deewan-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-deewan-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ValuesHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <ValueCard 
              key={index} 
              value={value} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
