
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
    
    // Create animated flowing blobs
    const blobs: Array<{
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      color: string;
      speed: number;
      angle: number;
      phase: number;
      phaseSpeed: number;
      opacity: number;
    }> = [];
    
    // Brand colors with transparency
    const colors = [
      'rgba(53, 162, 107, 0.25)',  // Primary green
      'rgba(43, 108, 176, 0.25)',  // Secondary blue
      'rgba(246, 196, 58, 0.15)',  // Accent yellow
    ];
    
    // Create larger, flowing blobs
    for (let i = 0; i < 6; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 180 + 120,
        baseRadius: Math.random() * 180 + 120,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: (Math.random() - 0.5) * 0.3,
        angle: Math.random() * Math.PI * 2,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.0005 + Math.random() * 0.001,
        opacity: 0.2 + Math.random() * 0.3
      });
    }
    
    // Animation function for flowing, morphing effect
    const animate = () => {
      // Clear with slight fade for trailing effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and animate flowing blobs
      blobs.forEach(blob => {
        // Morph radius over time for organic movement
        const radiusVariation = Math.sin(blob.phase) * (blob.baseRadius * 0.2);
        const currentRadius = blob.baseRadius + radiusVariation;
        
        // Move blobs in flowing pattern
        blob.x += Math.cos(blob.angle) * blob.speed;
        blob.y += Math.sin(blob.angle) * blob.speed;
        
        // Slowly rotate direction
        blob.angle += Math.sin(blob.phase) * 0.01;
        
        // Update phase for radius pulsing
        blob.phase += blob.phaseSpeed;
        
        // Draw gradient blob
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, currentRadius
        );
        
        // Fix: Create proper RGBA colors with combined opacity
        // Extract the RGB part from the blob color
        const rgbMatch = blob.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
          const r = rgbMatch[1];
          const g = rgbMatch[2];
          const b = rgbMatch[3];
          
          // Calculate center and outer opacities
          const centerOpacity = Math.min(0.9, parseFloat(blob.color.split(',')[3] || '0.25') * blob.opacity);
          const outerOpacity = 0;
          
          // Create proper RGBA strings
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${centerOpacity})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${outerOpacity})`);
          
          ctx.beginPath();
          ctx.arc(blob.x, blob.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.filter = 'blur(40px)';
          ctx.fill();
          ctx.filter = 'none';
        }
        
        // Wrap around edges with smooth transition
        if (blob.x < -currentRadius) blob.x = canvas.width + currentRadius;
        if (blob.x > canvas.width + currentRadius) blob.x = -currentRadius;
        if (blob.y < -currentRadius) blob.y = canvas.height + currentRadius;
        if (blob.y > canvas.height + currentRadius) blob.y = -currentRadius;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
