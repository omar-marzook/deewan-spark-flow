
import { CheckCircle, Users, Briefcase, BarChart } from 'lucide-react';

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-deewan-primary to-deewan-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-white">Our <span className="text-deewan-accent">Impact</span></h2>
          <p className="text-xl text-white/90">
            Delivering reliable communication solutions with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">9+ Billion</h3>
            <p className="text-white/80">Annual Transactions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">300+</h3>
            <p className="text-white/80">Satisfied Customers</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">6+</h3>
            <p className="text-white/80">Industries Served</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2">99.9%</h3>
            <p className="text-white/80">Uptime Reliability</p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full filter blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-center">Trusted by Leading Organizations</h3>
              <p className="text-center text-white/80 mb-8">
                Deewan is the preferred communication partner for organizations across Saudi Arabia and beyond
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="bg-white/20 h-16 w-40 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">LOGO 1</span>
                </div>
                <div className="bg-white/20 h-16 w-40 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">LOGO 2</span>
                </div>
                <div className="bg-white/20 h-16 w-40 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">LOGO 3</span>
                </div>
                <div className="bg-white/20 h-16 w-40 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">LOGO 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
