
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialLinks = () => {
  return (
    <div className="flex space-x-3">
      <a href="#" aria-label="Youtube" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-white/50 backdrop-blur-sm text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
        <Youtube size={18} />
      </a>
      <a href="#" aria-label="Facebook" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-white/50 backdrop-blur-sm text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
        <Facebook size={18} />
      </a>
      <a href="#" aria-label="Twitter" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-white/50 backdrop-blur-sm text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
        <Twitter size={18} />
      </a>
      <a href="#" aria-label="Instagram" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-white/50 backdrop-blur-sm text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
        <Instagram size={18} />
      </a>
      <a href="#" aria-label="LinkedIn" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-white/50 backdrop-blur-sm text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
        <Linkedin size={18} />
      </a>
    </div>
  );
};

export default SocialLinks;
