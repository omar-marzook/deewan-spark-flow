import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  return <>
      {/* Newsletter subscription - Separated from footer */}
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-white/50 p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col">
              <h3 className="text-deewan-dark font-semibold text-xl mb-2">Stay up to date</h3>
              <p className="text-gray-600 text-sm">Subscribe to our newsletter for updates</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto max-w-md">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <Input type="email" placeholder="Enter your email" className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-deewan-primary/20" />
              </div>
              <Button className="bg-deewan-primary hover:bg-deewan-primary/90 text-white flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <footer className="relative py-16 overflow-hidden">
        {/* Light gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 z-0"></div>
        
        {/* Animated background shapes (optional) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-deewan-primary/20 animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-deewan-secondary/20 animate-pulse-slow" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-40 right-1/4 w-40 h-40 rounded-full bg-deewan-accent/20 animate-pulse-slow" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Main footer links - Now with 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Logo and description column */}
            <div className="flex flex-col">
              <div className="mb-6">
                <img src="/logo.svg" alt="Deewan Logo" className="h-10" />
              </div>
              <p className="text-gray-600 mb-6">
                Deewan provides intelligent communication solutions prioritizing security and 
                scalability for businesses across Saudi Arabia and beyond.
              </p>
              
              {/* Social Media Links - Using design from contact section */}
              <div className="flex space-x-3">
                <a href="#" aria-label="Youtube" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-deewan-primary/10 text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
                  <Youtube size={18} />
                </a>
                <a href="#" aria-label="Facebook" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-deewan-primary/10 text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="Twitter" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-deewan-primary/10 text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
                  <Twitter size={18} />
                </a>
                <a href="#" aria-label="Instagram" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-deewan-primary/10 text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="LinkedIn" className={cn("inline-flex items-center justify-center rounded-full p-2.5", "bg-deewan-primary/10 text-deewan-primary", "hover:bg-deewan-primary/20 transition-colors")}>
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            {/* Products column */}
            <div>
              <h3 className="text-deewan-dark font-semibold text-lg mb-6">Products</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Deewan Campaigns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Omnichannel Chat</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Deewan Bots</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Deewan MFA</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Communication APIs</a></li>
              </ul>
            </div>
            
            {/* Resources column */}
            <div>
              <h3 className="text-deewan-dark font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Support</a></li>
              </ul>
            </div>
            
            {/* Company column */}
            <div>
              <h3 className="text-deewan-dark font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          {/* Footer bottom with copyright and links - kept as is */}
          <div className="border-t border-gray-200/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Deewan. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-deewan-primary text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-deewan-primary text-sm transition-colors">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>;
};
export default Footer;