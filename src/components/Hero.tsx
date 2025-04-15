
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-deewan-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-deewan-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow delay-700"></div>
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-deewan-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-6">
              <span className="gradient-text">Intelligent</span> Communication<br />
              Solutions
            </h1>
            <p className="text-xl mb-8 text-deewan-dark max-w-lg">
              Customizable and secure communication tools that scale with your business needs across Saudi Arabia and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-primary flex items-center justify-center gap-2">
                Explore Solutions
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center">
                Talk to an Expert
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="glass-card p-6 md:p-8 relative">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-deewan-secondary/20 rounded-full mix-blend-multiply filter blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-deewan-dark">9+ Billion</h3>
              <p className="text-deewan-dark mb-4">Annual transactions processed through our reliable communication platform</p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-4 text-center">
                  <h4 className="text-xl font-bold text-deewan-primary">300+</h4>
                  <p className="text-sm text-deewan-dark">Satisfied Customers</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <h4 className="text-xl font-bold text-deewan-secondary">6+</h4>
                  <p className="text-sm text-deewan-dark">Industries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
