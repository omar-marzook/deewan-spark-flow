
import React from "react";
import { Megaphone, Users, DollarSign } from "lucide-react";

const departmentsData = [{
  id: 1,
  name: "Marketing",
  description: "We empower marketing teams with real-time communication tools that streamline campaign coordination and boost customer engagement.",
  icon: <Megaphone className="h-10 w-10 text-deewan-primary" />,
  color: "bg-deewan-primary/10"
}, {
  id: 2,
  name: "Human Resources",
  description: "Our solutions help HR departments deliver timely updates, onboard employees efficiently, and maintain clear internal communications.",
  icon: <Users className="h-10 w-10 text-deewan-secondary" />,
  color: "bg-deewan-secondary/10"
}, {
  id: 3,
  name: "Finance",
  description: "We provide secure channels for finance teams to send confidential information, payment confirmations, and time-sensitive alerts.",
  icon: <DollarSign className="h-10 w-10 text-deewan-accent" />,
  color: "bg-deewan-accent/10"
}];

const DepartmentsWeServe = () => {
  return <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-4">
            Departments We <span className="text-deewan-primary">Serve</span>
          </h2>
          <p className="text-lg text-deewan-gray">
            Our communication solutions are tailored to meet the unique needs of various departments across your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {departmentsData.map(dept => <div key={dept.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
              <div className={`${dept.color} p-6 flex justify-center`}>
                <div className="bg-white rounded-full p-4 shadow-sm">
                  {dept.icon}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-deewan-dark">{dept.name}</h3>
                <p className="text-deewan-gray text-sm">{dept.description}</p>
              </div>
              <div className="p-6 pt-0">
                <a href="#" className="text-sm font-medium text-deewan-primary inline-flex items-center hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};

export default DepartmentsWeServe;
