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
  return;
};
export default Departments;