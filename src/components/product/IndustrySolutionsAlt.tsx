
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import IndustryCard from "./industry-solutions/IndustryCard";
import IndustryImage from "./industry-solutions/IndustryImage";
import { industries } from "./industry-solutions/industryData";

const IndustrySolutionsAlt = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const industryRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  if (industryRefs.current.length !== industries.length) {
    industryRefs.current = Array(industries.length).fill(null);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-industry-id");
            if (id) setActiveIndustry(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.5
      }
    );

    industryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      industryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-500/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Industry Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our communication platform adapts to the unique needs of your industry, delivering secure and efficient messaging solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column - Industry cards */}
          <div className="w-full lg:w-1/2 space-y-8 lg:max-h-[650px] lg:overflow-y-auto lg:pr-6 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {industries.map((industry, index) => (
                <div key={industry.id} ref={el => industryRefs.current[index] = el}>
                  <IndustryCard
                    industry={industry}
                    isActive={activeIndustry === industry.id}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Fixed position images */}
          <div className="w-full lg:w-1/2 sticky top-0 lg:h-[600px] flex items-center justify-center px-4">
            <div className="relative w-full h-[350px] lg:h-[500px]">
              {industries.map((industry) => (
                <IndustryImage
                  key={industry.id}
                  industry={industry}
                  isActive={activeIndustry === industry.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsAlt;
