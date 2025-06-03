import React from "react";
import { ArrowUpRight, CircleDot, Circle, CircleCheck } from "lucide-react";

/**
 * LazyHeroIcons component that contains the floating icons for the hero section
 * This is lazy-loaded to not block the LCP
 */
const LazyHeroIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <CircleDot
        className="absolute text-deewan-secondary/60 w-8 h-8"
        style={{
          top: '15%',
          right: '22%',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <Circle
        className="absolute text-deewan-secondary/40 w-5 h-5"
        style={{
          top: '40%',
          left: '18%',
          animation: 'float 12s ease-in-out infinite 1s'
        }}
      />
      <CircleCheck
        className="absolute text-deewan-secondary/50 w-6 h-6"
        style={{
          bottom: '25%',
          right: '30%',
          animation: 'float 10s ease-in-out infinite 2s'
        }}
      />
      <ArrowUpRight
        className="absolute text-deewan-secondary/50 w-6 h-6"
        style={{
          top: '25%',
          left: '25%',
          animation: 'float 15s ease-in-out infinite 0.5s'
        }}
      />
    </div>
  );
};

export default LazyHeroIcons;