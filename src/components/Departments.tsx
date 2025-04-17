
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
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-deewan-dark mb-4">Our Departments</h2>
        <p className="text-deewan-gray max-w-2xl mx-auto">Meet the talented teams driving innovation and customer success at Deewan</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <div 
            key={dept.id} 
            className={`${dept.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex items-center mb-4">
              {dept.icon}
              <h3 className="text-xl font-semibold ml-4 text-deewan-dark">{dept.name}</h3>
            </div>
            <p className="text-deewan-gray">{dept.description}</p>
            <div className="mt-4 flex items-center text-deewan-primary">
              <Users className="h-5 w-5 mr-2" />
              <span>{dept.members} Team Members</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
