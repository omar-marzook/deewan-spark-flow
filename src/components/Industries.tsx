import { Building2, GraduationCap, Stethoscope, ShoppingBag, Landmark, Truck } from 'lucide-react';
const Industries = () => {
  const industries = [{
    id: 1,
    name: "Government",
    description: "Secure communication solutions for government agencies with high compliance standards.",
    icon: <Building2 className="h-12 w-12 text-deewan-primary" />,
    applications: ["Citizen notifications", "Service updates", "Emergency alerts"]
  }, {
    id: 2,
    name: "Education",
    description: "Enhance student and parent communication for better educational outcomes.",
    icon: <GraduationCap className="h-12 w-12 text-deewan-secondary" />,
    applications: ["Parent notifications", "Student engagement", "Campus alerts"]
  }, {
    id: 3,
    name: "Healthcare",
    description: "HIPAA-compliant communication tools for healthcare providers and patients.",
    icon: <Stethoscope className="h-12 w-12 text-deewan-accent" />,
    applications: ["Appointment reminders", "Patient follow-ups", "Medication alerts"]
  }, {
    id: 4,
    name: "E-commerce",
    description: "Drive sales and improve customer experience with omnichannel messaging.",
    icon: <ShoppingBag className="h-12 w-12 text-deewan-primary" />,
    applications: ["Order confirmations", "Shipping updates", "Abandoned cart recovery"]
  }, {
    id: 5,
    name: "Banking",
    description: "Secure, reliable communication solutions for financial institutions.",
    icon: <Landmark className="h-12 w-12 text-deewan-secondary" />,
    applications: ["Transaction alerts", "Fraud notifications", "Account updates"]
  }, {
    id: 6,
    name: "Logistics",
    description: "Streamline operations with real-time communication and tracking updates.",
    icon: <Truck className="h-12 w-12 text-deewan-accent" />,
    applications: ["Delivery notifications", "Shipment tracking", "Fleet coordination"]
  }];
  return <section id="industries" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-deewan-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-deewan-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Industries We <span className="gradient-text">Serve</span></h2>
          <p className="text-xl text-deewan-gray">
            Tailored communication solutions for various industries with unique requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map(industry => <div key={industry.id} className="glass-card p-6 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6 p-4 bg-white/50 rounded-lg inline-block">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
              <p className="text-deewan-gray mb-4">{industry.description}</p>
              <div className="mt-auto">
                <h4 className="font-medium text-deewan-primary mb-2 text-base">Key Applications:</h4>
                <ul className="space-y-2">
                  {industry.applications.map((app, index) => <li key={index} className="flex items-center text-sm text-deewan-gray">
                      <svg className="w-4 h-4 mr-2 text-deewan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {app}
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Industries;