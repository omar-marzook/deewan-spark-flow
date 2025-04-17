import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const Newsletter = () => {
  return <div className="py-12">
      <div className="container mx-auto px-4 md:px-6 w-full md:w-3/4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-deewan-primary/10 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-deewan-primary/5 max-w-5xl mx-auto">
          <div className="flex flex-col">
            <h3 className="text-deewan-dark font-semibold text-xl mb-2">Stay up to date</h3>
            <p className="text-gray-600 text-sm">Subscribe to our newsletter for updates</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto max-w-md">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <Input type="email" placeholder="Enter your email" className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/50 backdrop-blur-sm border border-white/50 focus:border-deewan-primary/30 focus:ring-deewan-primary/20" />
            </div>
            <Button className="bg-deewan-primary hover:bg-deewan-primary/90 text-white flex items-center justify-center gap-2 shadow-md shadow-deewan-primary/20">
              Subscribe
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Newsletter;