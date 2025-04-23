
import React from "react";
import { Twitter, Linkedin, Facebook, Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogShareSection = () => (
  <div className="container mx-auto max-w-3xl px-4 mb-12">
    <div className="glass rounded-xl p-5 border border-gray-100">
      <h4 className="font-bold text-center text-deewan-dark/90 mb-3 flex items-center justify-center">
        <Share2 className="w-4 h-4 mr-2 text-deewan-primary" />
        Share This Article
      </h4>
      <div className="flex justify-center gap-3">
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-deewan-primary hover:text-white hover:bg-deewan-primary">
          <Twitter className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-blue-600 hover:text-white hover:bg-blue-600">
          <Facebook className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-blue-700 hover:text-white hover:bg-blue-700">
          <Linkedin className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon" className="w-10 h-10 rounded-full text-deewan-dark hover:text-white hover:bg-deewan-dark">
          <Mail className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

export default BlogShareSection;
