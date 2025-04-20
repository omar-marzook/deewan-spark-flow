import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Hero = () => {
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
    
    // Create floating circles
    const circles = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 100 + 50,
      color: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, 0.2)`,
      velocityX: (Math.random() - 0.5) * 0.5,
      velocityY: (Math.random() - 0.5) * 0.5,
      targetX: canvas.width / 2,
      targetY: canvas.height / 2
    }));
    
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Animation function
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      circles.forEach(circle => {
        // Update target position based on mouse
        circle.targetX += (mouseX - circle.targetX) * 0.02;
        circle.targetY += (mouseY - circle.targetY) * 0.02;
        
        // Move circles
        circle.x += (circle.targetX - circle.x) * 0.01 + circle.velocityX;
        circle.y += (circle.targetY - circle.y) * 0.01 + circle.velocityY;
        
        // Wrap around edges
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;
        
        // Draw circle with gradient
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        );
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.filter = 'blur(20px)';
        ctx.fill();
        ctx.filter = 'none';
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Canvas-based animated flowing background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full opacity-80 pointer-events-none"
      />
      
      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent z-0 pointer-events-none"></div>
      
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
    </section>
  );
};

export default Hero;
