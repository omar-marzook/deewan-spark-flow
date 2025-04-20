
import React, { useRef, useEffect } from "react";
import { Megaphone, Users, DollarSign } from "lucide-react";

const departmentsData = [
  {
    id: 1,
    name: "Marketing",
    description: "We empower marketing teams with real-time communication tools that streamline campaign coordination and boost customer engagement.",
    icon: <Megaphone className="h-10 w-10 text-white" />,
    color: "from-deewan-primary to-deewan-primary/80"
  }, 
  {
    id: 2,
    name: "Human Resources",
    description: "Our solutions help HR departments deliver timely updates, onboard employees efficiently, and maintain clear internal communications.",
    icon: <Users className="h-10 w-10 text-white" />,
    color: "from-deewan-secondary to-deewan-secondary/80"
  }, 
  {
    id: 3,
    name: "Finance",
    description: "We provide secure channels for finance teams to send confidential information, payment confirmations, and time-sensitive alerts.",
    icon: <DollarSign className="h-10 w-10 text-white" />,
    color: "from-deewan-accent to-deewan-accent/80"
  }
];

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
      'rgba(53, 162, 107, 0.3)', // Primary (green)
      'rgba(43, 108, 176, 0.3)', // Secondary (blue)
      'rgba(246, 196, 58, 0.2)'  // Accent (yellow)
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

  // Return JSX for the component
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Solutions for <span className="text-deewan-primary">Every Department</span></h2>
          <p className="text-xl text-deewan-dark/80">
            Our specialized communication tools adapt to the unique needs of every department
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departmentsData.map((dept) => (
            <div 
              key={dept.id}
              className={`relative overflow-hidden rounded-xl p-8 shadow-lg transition-all duration-300 bg-gradient-to-br ${dept.color} hover:shadow-xl`}
              onMouseEnter={() => setHoveredCard(dept.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-6 p-4 bg-white/20 rounded-full inline-block backdrop-blur-sm">
                {dept.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{dept.name}</h3>
              <p className="text-white/90">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsOption;
