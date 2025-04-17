
import React, { useRef, useEffect } from "react";
import { Megaphone, Users, DollarSign } from "lucide-react";

const departmentsData = [{
  id: 1,
  name: "Marketing",
  description: "We empower marketing teams with real-time communication tools that streamline campaign coordination and boost customer engagement.",
  icon: <Megaphone className="h-10 w-10 text-white" />,
  color: "from-deewan-primary to-deewan-primary/80"
}, {
  id: 2,
  name: "Human Resources",
  description: "Our solutions help HR departments deliver timely updates, onboard employees efficiently, and maintain clear internal communications.",
  icon: <Users className="h-10 w-10 text-white" />,
  color: "from-deewan-secondary to-deewan-secondary/80"
}, {
  id: 3,
  name: "Finance",
  description: "We provide secure channels for finance teams to send confidential information, payment confirmations, and time-sensitive alerts.",
  icon: <DollarSign className="h-10 w-10 text-white" />,
  color: "from-deewan-accent to-deewan-accent/80"
}];

const DepartmentsOption = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  
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
    
    // Create animated floating particles with brand colors
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];
    
    const colors = [
      'rgba(53, 162, 107, 0.3)',  // Primary (green)
      'rgba(43, 108, 176, 0.3)',  // Secondary (blue)
      'rgba(246, 196, 58, 0.2)'   // Accent (yellow)
    ];
    
    // Create particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw animated blurry blobs
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.opacity})`);
        ctx.filter = 'blur(15px)';
        ctx.fill();
        ctx.closePath();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Canvas background for animated blobs */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10" 
      />
      
      {/* Fixed gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-deewan-primary/10 rounded-full filter blur-[100px] -z-5"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-deewan-secondary/10 rounded-full filter blur-[100px] -z-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-deewan-accent/5 rounded-full filter blur-[120px] -z-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deewan-dark mb-4">
            Departments We <span className="text-deewan-primary">Serve</span>
            <span className="text-sm ml-2 text-deewan-secondary">(Alternate Style)</span>
          </h2>
          <p className="text-lg text-deewan-gray">
            Our communication solutions are tailored to meet the unique needs of various departments across your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {departmentsData.map(dept => (
            <div 
              key={dept.id} 
              onMouseEnter={() => setHoveredCard(dept.id)} 
              onMouseLeave={() => setHoveredCard(null)} 
              className="relative group overflow-hidden backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg"
            >
              <div className={`h-full flex flex-col p-6 transition-all duration-500 
                            ${hoveredCard === dept.id ? 'transform scale-[1.02]' : ''}`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-90 
                                transition-opacity duration-500 rounded-lg -z-10`}></div>
                
                {/* Icon with circle background */}
                <div className="relative mb-6 z-10">
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center
                                backdrop-blur-md bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-500`}>
                    {dept.icon}
                  </div>
                </div>
                
                {/* Text content */}
                <h3 className="text-xl font-bold mb-3 text-deewan-dark group-hover:text-white transition-colors duration-500">
                  {dept.name}
                </h3>
                <p className="text-deewan-gray group-hover:text-white/90 flex-grow mb-4 transition-colors duration-500">
                  {dept.description}
                </p>
                
                {/* Action button */}
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-deewan-primary font-medium group-hover:text-white transition-colors duration-500">
                    View Solutions
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default DepartmentsOption;
