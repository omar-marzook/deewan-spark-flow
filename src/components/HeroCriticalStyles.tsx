import React, { useEffect } from 'react';

/**
 * Component that injects critical CSS for the hero heading
 * This helps improve LCP by ensuring styles are available immediately
 * 
 * Note: This component is used both on the server and client side
 * and ensures consistent rendering between them
 */
const HeroCriticalStyles: React.FC = () => {
  // The critical CSS for the hero heading
  const criticalCss = `
    /* Critical styles for hero heading to improve LCP */
    #hero-heading {
      font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 700;
      font-display: swap;
      text-rendering: optimizeSpeed;
      will-change: auto;
      contain: content;
      color: #222A32; /* text-deewan-dark */
      font-size: 2.25rem; /* text-4xl */
      line-height: 1; /* leading-tight */
      margin-bottom: 1.5rem; /* mb-6 */
    }
    
    @media (min-width: 768px) {
      #hero-heading {
        font-size: 3rem; /* text-5xl */
      }
    }
    
    @media (min-width: 1024px) {
      #hero-heading {
        font-size: 3.75rem; /* text-6xl */
      }
    }
  `;

  return (
    <style id="hero-critical-styles" dangerouslySetInnerHTML={{ __html: criticalCss }} />
  );
};

export default HeroCriticalStyles;