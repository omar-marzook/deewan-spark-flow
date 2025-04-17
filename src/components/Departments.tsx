
import { Users, Code, Briefcase, HeadphonesIcon } from 'lucide-react';
import { useRef, useEffect } from 'react';

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
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Draw soft flowing waves
    let offset = 0;
    
    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const colors = [
        'rgba(53, 162, 107, 0.05)',  // Primary
        'rgba(43, 108, 176, 0.05)',  // Secondary
        'rgba(246, 196, 58, 0.03)'   // Accent
      ];
      
      colors.forEach((color, i) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        
        let y = canvas.height * 0.5;
        ctx.moveTo(0, y);
        
        // Draw the wave path
        for (let x = 0; x < canvas.width; x += 20) {
          const scale = 30 + i * 10;
          const frequency = 0.02 - i * 0.005;
          y = (Math.sin((x + offset) * frequency) * scale) + canvas.height * 0.5;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      });
      
      offset += 1;
      requestAnimationFrame(drawWaves);
    };
    
    drawWaves();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background animation canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-deewan-primary/5 rounded-full filter blur-[80px] -z-5"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-deewan-secondary/5 rounded-full filter blur-[80px] -z-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="text-deewan-primary">Expert</span> Teams</h2>
          <p className="text-xl text-deewan-dark">
            Dedicated professionals working together to provide exceptional service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div 
              key={dept.id} 
              className="group backdrop-blur-md bg-white/30 border border-white/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6"
            >
              <div className={`${dept.color} p-4 rounded-xl mb-6 inline-flex items-center justify-center`}>
                {dept.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-deewan-dark">
                {dept.name}
              </h3>
              <p className="text-deewan-gray mb-4">
                {dept.description}
              </p>
              
              <div className="flex items-center mt-4">
                <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                  <Users size={16} className="text-deewan-dark/60" />
                  <span className="text-sm font-medium text-deewan-dark/80">{dept.members} Team Members</span>
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
