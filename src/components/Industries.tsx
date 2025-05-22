import { Building2, GraduationCap, Stethoscope, ShoppingBag, Landmark, Truck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Industries = () => {
  const prefersReducedMotion = useReducedMotion();
  const industries = [{
    id: 1,
    name: "Government",
    description: "Secure communication solutions for government agencies with high compliance standards.",
    icon: <Building2 className="h-12 w-12 text-deewan-primary" aria-hidden="true" />,
    applications: ["Citizen notifications", "Service updates", "Emergency alerts"]
  }, {
    id: 2,
    name: "Education",
    description: "Empower schools and universities to streamline communication with students, parents, and staff—boosting engagement, performance, and operations.",
    icon: <GraduationCap className="h-12 w-12 text-deewan-secondary" aria-hidden="true" />,
    applications: ["Parent notifications", "Student engagement", "Campus alerts"]
  }, {
    id: 3,
    name: "Healthcare",
    description: "HIPAA-compliant communication tools for healthcare providers and patients.",
    icon: <Stethoscope className="h-12 w-12 text-deewan-accent" aria-hidden="true" />,
    applications: ["Appointment reminders", "Patient follow-ups", "Medication alerts"]
  }, {
    id: 4,
    name: "E-commerce",
    description: "Drive sales and improve customer experience with omnichannel messaging.",
    icon: <ShoppingBag className="h-12 w-12 text-deewan-primary" aria-hidden="true" />,
    applications: ["Order confirmations", "Shipping updates", "Abandoned cart recovery"]
  }, {
    id: 5,
    name: "Banking",
    description: "Secure, reliable communication solutions for financial institutions.",
    icon: <Landmark className="h-12 w-12 text-deewan-secondary" aria-hidden="true" />,
    applications: ["Transaction alerts", "Fraud notifications", "Account updates"]
  }, {
    id: 6,
    name: "Logistics",
    description: "Streamline operations with real-time communication and tracking updates.",
    icon: <Truck className="h-12 w-12 text-deewan-accent" aria-hidden="true" />,
    applications: ["Delivery notifications", "Shipment tracking", "Fleet coordination"]
  }];
  return <section id="industries" aria-labelledby="industries-heading" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-deewan-primary/10 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-deewan-secondary/10 rounded-full filter blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="industries-heading" className="mb-4"><span className="text-deewan-primary">Industries</span> We Serve</h2>
          <p className="text-xl text-deewan-gray">
            Tailored communication solutions for various industries with unique requirements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.id} 
              className="glass-card p-6 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300"
              tabIndex={0}
              role="article"
              aria-labelledby={`industry-${industry.id}-heading`}
              aria-describedby={`industry-${industry.id}-description`}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.5, 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
            >
              <div className="mb-6 p-4 bg-white/50 rounded-lg inline-block">
                {industry.icon}
              </div>
              <h3 id={`industry-${industry.id}-heading`} className="text-xl font-bold mb-3">{industry.name}</h3>
              <p id={`industry-${industry.id}-description`} className="text-deewan-gray mb-4">{industry.description}</p>
              <div className="mt-auto">
                <h4 id={`industry-${industry.id}-applications-heading`} className="font-medium text-deewan-primary mb-2 text-base">Key Applications:</h4>
                <ul 
                  className="space-y-2" 
                  aria-labelledby={`industry-${industry.id}-applications-heading`}
                >
                  {industry.applications.map((app, index) => (
                    <li key={index} className="flex items-center text-sm text-deewan-gray">
                      <svg className="w-4 h-4 mr-2 text-deewan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
};
export default Industries;