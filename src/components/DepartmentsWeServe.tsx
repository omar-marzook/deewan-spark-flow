import React, { useRef, useEffect } from "react";
import { Megaphone, Headset, UserRoundCog } from "lucide-react";

const departmentsData = [{
  id: 1,
  name: "Marketing and Sales",
  description: [
    "Marketing and promotions",
    "Product catalogs"
  ],
  icon: <Megaphone className="h-10 w-10 text-deewan-primary" />,
  color: "bg-deewan-primary/10"
}, {
  id: 2,
  name: "Customer Service",
  description: [
    "Surveys and questionnaires",
    "Follow ups and reminders",
    "Feedback and support"
  ],
  icon: <Headset className="h-10 w-10 text-deewan-secondary" />,
  color: "bg-deewan-secondary/10"
}, {
  id: 3,
  name: "Administration",
  description: [
    "Authentications",
    "Transaction confirmation",
    "Account updates",
    "Onboarding"
  ],
  icon: <UserRoundCog className="h-10 w-10 text-deewan-accent" />,
  color: "bg-deewan-accent/10"
}];

const DepartmentsWeServe = () => {
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
    
    // Draw soft flowing waves with brand colors
    let offset = 0;
    
    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Using brand colors for the waves
      const colors = [
        'rgba(53, 162, 107, 0.05)',  // Primary (green)
        'rgba(43, 108, 176, 0.05)',  // Secondary (blue)
        'rgba(246, 196, 58, 0.03)'   // Accent (yellow)
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
          <h2 className="mb-4 text-deewan-dark"><span className="text-deewan-primary">Supporting</span> primary business functions</h2>
          <p className="text-xl text-deewan-dark">
            Our communication solutions are tailored to meet the unique needs of various departments across your organization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departmentsData.map((dept) => (
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
              
              <ul className="text-deewan-gray mb-4 space-y-2">
                {dept.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-deewan-primary mt-2 mr-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsWeServe;
