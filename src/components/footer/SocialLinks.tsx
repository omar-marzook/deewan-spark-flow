
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialLinks = () => {
  return (
    <div className="flex space-x-3">
      <a href="https://x.com/DeewanKSA" target="_blank" aria-label="X" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-deewan-primary/10 backdrop-blur-sm text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
        <Twitter size={18} />
      </a>
      <a href="https://www.linkedin.com/company/deewanks" target="_blank" aria-label="LinkedIn" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-deewan-primary/10 backdrop-blur-sm text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
        <Linkedin size={18} />
      </a>
    </div>
  );
};

export default SocialLinks;
