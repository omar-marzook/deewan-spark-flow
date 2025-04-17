
import { Users, Code, Briefcase, HeadphonesIcon } from 'lucide-react';

const Departments = () => {
  const departments = [{
    id: 1,
    name: "Engineering",
    description: "Our engineering team builds robust, scalable communication solutions that power businesses across the region.",
    icon: <Code className="h-10 w-10 text-deewan-secondary" />,
    members: 45,
    color: "bg-deewan-secondary/10"
  }, {
    id: 2,
    name: "Customer Success",
    description: "Our customer success team ensures you get the most value from our products with dedicated support.",
    icon: <HeadphonesIcon className="h-10 w-10 text-deewan-primary" />,
    members: 30,
    color: "bg-deewan-primary/10"
  }, {
    id: 3,
    name: "Business Development",
    description: "Our business team works with partners and clients to create tailored communication strategies.",
    icon: <Briefcase className="h-10 w-10 text-deewan-accent" />,
    members: 25,
    color: "bg-deewan-accent/10"
  }];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-4">
            Our <span className="text-deewan-primary">Department</span> Expertise
          </h2>
          <p className="text-lg text-deewan-gray">
            Specialized teams working together to deliver exceptional communication products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {departments.map(dept => (
            <div key={dept.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className={`${dept.color} p-6 flex justify-center`}>
                <div className="bg-white rounded-full p-4 shadow-sm">
                  {dept.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-deewan-dark">{dept.name}</h3>
                <p className="text-deewan-gray text-sm mb-4">{dept.description}</p>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-deewan-primary mr-2" />
                  <span className="text-sm text-deewan-dark">{dept.members} team members</span>
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
