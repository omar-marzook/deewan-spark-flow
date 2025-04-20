import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Animated Background Gradient Elements */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-deewan-secondary rounded-full 
        mix-blend-multiply filter blur-3xl opacity-30 
        animate-[float_20s_ease-in-out_infinite] hover:opacity-40 transition-opacity"
      ></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-deewan-primary rounded-full 
        mix-blend-multiply filter blur-3xl opacity-30 
        animate-[float-delay_25s_ease-in-out_infinite] hover:opacity-40 transition-opacity"
      ></div>
      <div className="absolute bottom-40 left-1/3 w-72 h-72 rounded-full 
        mix-blend-multiply filter blur-3xl opacity-20 
        animate-[float-reverse_22s_ease-in-out_infinite] hover:opacity-30 transition-opacity 
        bg-[#e6f4f1]"
      ></div>
      
      {/* Keep existing content */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-6 text-deewan-dark">
              <span className="font-bold">Intelligent</span> Communication<br />
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
            <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
              {/* Space-themed visual */}
              <div className="absolute inset-0 bg-black">
                {/* Stars background */}
                <div className="absolute inset-0" style={{
                background: `radial-gradient(circle at center, #2b6cb0 0%, #2c2d2d 100%)`,
                opacity: 0.7
              }}></div>
                
                {/* Floating particles/stars */}
                <div className="absolute inset-0">
                  {Array.from({
                  length: 50
                }).map((_, i) => <div key={i} className="absolute rounded-full bg-white" style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                  animation: `pulse-slow ${Math.random() * 4 + 2}s infinite`
                }}></div>)}
                </div>
                
                {/* Orbiting circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                  <div className="absolute w-full h-full rounded-full border border-deewan-primary opacity-20 animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full border border-deewan-primary opacity-20 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 rounded-full border border-deewan-lightgray opacity-20 animate-[spin_10s_linear_infinite]"></div>
                </div>
                
                {/* Central element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-deewan-primary rounded-full opacity-80"></div>
                
                {/* Overlay text */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Intelligent Communication</h3>
                  <p className="text-sm text-deewan-lightgray">Connecting your business to the digital universe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
