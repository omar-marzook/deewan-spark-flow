import { CheckCircle, Users, Briefcase, BarChart } from 'lucide-react';
const AlternativeStats = () => {
  return <section id="alternative-stats" className="py-24">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4"><span className="text-deewan-primary">Deewan</span> in Numbers</h2>
          <p className="text-xl text-deewan-dark/80">
            Real impact. Measurable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          <div className="relative border-r border-t border-b border-deewan-primary/10 p-10 first:border-l first:rounded-l-lg last:rounded-r-lg last:border-r bg-gradient-to-b from-white to-deewan-primary/5">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-deewan-primary/20">
              <BarChart className="h-6 w-6 text-deewan-primary" />
            </div>
            <div className="text-center pt-4">
              <h3 className="text-4xl font-bold mb-2 text-deewan-primary">9+ Billion</h3>
              <p className="text-deewan-dark/70">Annual Transactions</p>
            </div>
          </div>
          
          <div className="relative border-r border-t border-b border-deewan-primary/10 p-10 first:border-l first:rounded-l-lg last:rounded-r-lg last:border-r bg-gradient-to-b from-white to-deewan-primary/5">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-deewan-primary/20">
              <Users className="h-6 w-6 text-deewan-primary" />
            </div>
            <div className="text-center pt-4">
              <h3 className="text-4xl font-bold mb-2 text-deewan-primary">300+</h3>
              <p className="text-deewan-dark/70">Satisfied Customers</p>
            </div>
          </div>
          
          <div className="relative border-r border-t border-b border-deewan-primary/10 p-10 first:border-l first:rounded-l-lg last:rounded-r-lg last:border-r bg-gradient-to-b from-white to-deewan-primary/5">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-deewan-primary/20">
              <Briefcase className="h-6 w-6 text-deewan-primary" />
            </div>
            <div className="text-center pt-4">
              <h3 className="text-4xl font-bold mb-2 text-deewan-primary">6+</h3>
              <p className="text-deewan-dark/70">Industries Served</p>
            </div>
          </div>
          
          <div className="relative border-r border-t border-b border-deewan-primary/10 p-10 first:border-l first:rounded-l-lg last:rounded-r-lg last:border-r bg-gradient-to-b from-white to-deewan-primary/5">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-deewan-primary/20">
              <CheckCircle className="h-6 w-6 text-deewan-primary" />
            </div>
            <div className="text-center pt-4">
              <h3 className="text-4xl font-bold mb-2 text-deewan-primary">99.9%</h3>
              <p className="text-deewan-dark/70">Uptime Reliability</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white shadow-md rounded-lg p-6 border border-deewan-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-deewan-primary/10 p-3 rounded-full mr-4">
                <BarChart className="h-6 w-6 text-deewan-primary" />
              </div>
              <h3 className="text-xl font-bold text-deewan-dark">Fast Growth</h3>
            </div>
            <p className="text-deewan-dark/80">35% year-over-year growth in message volume — our platform keeps scaling with you</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border border-deewan-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-deewan-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-deewan-primary" />
              </div>
              <h3 className="text-xl font-bold text-deewan-dark">High Delivery</h3>
            </div>
            <p className="text-deewan-dark/80">98.5% average delivery rate — ensuring your messages land where they matter, every time</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border border-deewan-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="bg-deewan-primary/10 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-deewan-primary" />
              </div>
              <h3 className="text-xl font-bold text-deewan-dark">Global Reach</h3>
            </div>
            <p className="text-deewan-dark/80">Connecting you to over 230 countries and territories — wherever your customers are, we’re there</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AlternativeStats;