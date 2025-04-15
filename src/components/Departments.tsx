
import { Users, Code, Briefcase, HeadphonesIcon } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: "Engineering",
      description: "Our engineering team builds robust, scalable communication solutions that power businesses across the region.",
      icon: <Code className="h-10 w-10 text-deewan-secondary" />,
      members: 45,
      color: "bg-deewan-secondary/10"
    },
    {
      id: 2,
      name: "Customer Success",
      description: "Our customer success team ensures you get the most value from our products with dedicated support.",
      icon: <HeadphonesIcon className="h-10 w-10 text-deewan-primary" />,
      members: 30,
      color: "bg-deewan-primary/10"
    },
    {
      id: 3,
      name: "Business Development",
      description: "Our business team works with partners and clients to create tailored communication strategies.",
      icon: <Briefcase className="h-10 w-10 text-deewan-accent" />,
      members: 25,
      color: "bg-deewan-accent/10"
    }
  ];

  return (
    <section id="departments" className="py-24 bg-deewan-lightgray/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Our <span className="text-deewan-primary">Teams</span></h2>
          <p className="text-xl text-deewan-dark/80">
            Meet the departments that make Deewan's magic happen
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {departments.map((dept) => (
            <div key={dept.id} className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className={`${dept.color} p-8 flex justify-center`}>
                <div className="bg-white rounded-full p-4">
                  {dept.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-deewan-dark">{dept.name}</h3>
                <p className="text-deewan-dark/70 mb-4">{dept.description}</p>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-deewan-dark/50 mr-2" />
                  <span className="text-sm text-deewan-dark/70">{dept.members} team members</span>
                </div>
                <div className="mt-6">
                  <a href="#" className="text-sm font-medium text-deewan-primary inline-flex items-center">
                    Meet the team
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
