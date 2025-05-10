
import React from "react";
import { Linkedin, createLucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

const SocialLinks = () => {
  return (
    <nav className="flex space-x-3" aria-label="Social Media Links">
      <a 
        href="https://x.com/DeewanKSA" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Follow Deewan on X (formerly Twitter)" 
        className={cn(
          "inline-flex items-center justify-center rounded-full p-2.5", 
          "bg-deewan-primary/10 backdrop-blur-sm text-deewan-primary", 
          "hover:bg-deewan-primary/20 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-deewan-primary/50"
        )}
      >
        <XIcon size={16} aria-hidden="true" />
      </a>
      <a 
        href="https://www.linkedin.com/company/deewanks" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Connect with Deewan on LinkedIn" 
        className={cn(
          "inline-flex items-center justify-center rounded-full p-2.5", 
          "bg-deewan-primary/10 backdrop-blur-sm text-deewan-primary", 
          "hover:bg-deewan-primary/20 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-deewan-primary/50"
        )}
      >
        <Linkedin size={18} aria-hidden="true" />
      </a>
    </nav>
  );
};

export default SocialLinks;
