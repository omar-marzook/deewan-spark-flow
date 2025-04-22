
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Hospital, Landmark, University, Globe } from "lucide-react";

// Industry data with images
const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Secure patient communication and appointment reminders for healthcare providers. HIPAA-compliant messaging solutions for modern medical facilities.",
    icon: <Hospital className="h-8 w-8 text-purple-500" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "finance",
    name: "Financial Services",
    description: "Secure transaction alerts, authentication, and customer service messaging for banks and financial institutions. Enhance security with timely notifications.",
    icon: <Landmark className="h-8 w-8 text-purple-500" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "education",
    name: "Education",
    description: "Campus alerts, student notifications, and parent communication solutions for educational institutions. Keep your community connected and informed.",
    icon: <University className="h-8 w-8 text-purple-500" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "technology",
    name: "Technology",
    description: "API integrations and developer-friendly messaging solutions for tech companies. Add powerful communication capabilities to your applications.",
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Order notifications, shipping updates, and promotional campaigns for retail businesses. Improve customer experience with timely communications.",
    icon: <Building className="h-8 w-8 text-purple-500" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
  }
];

// Custom colors for this section
const colors = {
  neutralGray: "#8E9196",
  primaryPurple: "#9b87f5",
  secondaryPurple: "#7E69AB", 
  tertiaryPurple: "#6E59A5",
  darkPurple: "#1A1F2C",
  lightPurple: "#D6BCFA"
};

const IndustrySolutionsAlt = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const industryRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  if (industryRefs.current.length !== industries.length) {
    industryRefs.current = Array(industries.length).fill(null);
  }

  // Check which industry is in view
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
        rootMargin: "-40% 0px -40% 0px", // Adjust these values to change when the switch happens
        threshold: 0.5
      }
    );

    // Observe all industry blocks
    industryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      industryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

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
          {/* Left column - Industry cards with staggered animation */}
          <div 
            ref={containerRef}
            className="w-full lg:w-1/2 space-y-8 lg:max-h-[650px] lg:overflow-y-auto lg:pr-6 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  ref={el => industryRefs.current[index] = el}
                  data-industry-id={industry.id}
                  className={`glass p-8 rounded-xl mb-8 border border-purple-100 transition-all duration-300 ${
                    activeIndustry === industry.id 
                      ? "bg-white/80 backdrop-blur-md shadow-lg border-purple-200 transform -translate-x-2"
                      : "bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-x-1"
                  }`}
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-lg ${
                      activeIndustry === industry.id 
                        ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white" 
                        : "bg-purple-100 text-purple-500"
                    }`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{industry.name}</h3>
                  </div>
                  <p className="text-slate-600 pl-16">{industry.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Fixed position images */}
          <div className="w-full lg:w-1/2 sticky top-0 lg:h-[600px] flex items-center justify-center px-4">
            <div className="relative w-full h-[350px] lg:h-[500px]">
              {industries.map((industry) => (
                <motion.div
                  key={industry.id}
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-purple-100 shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeIndustry === industry.id ? 1 : 0,
                    scale: activeIndustry === industry.id ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    zIndex: activeIndustry === industry.id ? 1 : 0
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent z-10"></div>
                  
                  {/* Background image */}
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-purple-900/70 to-transparent z-20">
                    <h3 className="text-white text-xl font-bold">{industry.name}</h3>
                    <p className="text-purple-50 text-sm mt-1">Communication solutions for {industry.name.toLowerCase()}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsAlt;
