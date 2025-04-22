import React from "react";
import Newsletter from "./footer/Newsletter";
import FooterLinks from "./footer/FooterLinks";
import FooterCopyright from "./footer/FooterCopyright";
const Footer = () => {
  return <>
      {/* Newsletter subscription - Separated from footer */}
      <Newsletter />
      
      {/* Main footer with glassmorphism gradient background */}
      <footer className="relative pt-16 overflow-hidden">
        {/* Glassmorphism gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-100/80 to-gray-50/80 backdrop-blur-sm z-0"></div>
        
        {/* Gradient shapes for added depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
          {/* Primary green gradient blob */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-deewan-primary/40 to-deewan-primary/10 blur-2xl"></div>
          
          {/* Secondary blue gradient blob */}
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-deewan-secondary/40 to-deewan-secondary/10 blur-3xl"></div>
          
          {/* Accent yellow gradient blob */}
          <div className="absolute top-40 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-deewan-accent/30 to-deewan-accent/5 blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Main footer links - Now with 4 columns */}
          <FooterLinks />
          
          {/* Footer bottom with copyright and links */}
          <FooterCopyright />
        </div>
      </footer>
    </>;
};
export default Footer;