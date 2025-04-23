
import React from "react";
import { Twitter, Linkedin, Facebook, Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const BlogShareSection = ({ title = "Article" }) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(currentUrl);

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "text-deewan-primary hover:text-white hover:bg-deewan-primary"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "text-blue-600 hover:text-white hover:bg-blue-600"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "text-blue-700 hover:text-white hover:bg-blue-700"
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      url: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      color: "text-deewan-dark hover:text-white hover:bg-deewan-dark"
    }
  ];

  return (
    <div className="container mx-auto max-w-3xl px-4 mb-12">
      <div className="glass rounded-xl p-5 border border-gray-100">
        <h4 className="font-bold text-center text-deewan-dark/90 mb-3 flex items-center justify-center">
          <Share2 className="w-4 h-4 mr-2 text-deewan-primary" />
          Share This Article
        </h4>
        <div className="flex justify-center gap-3">
          {shareLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="icon"
              className={`w-10 h-10 rounded-full ${link.color} transition-colors duration-300`}
              asChild
              aria-label={`Share on ${link.name}`}
              title={`Share on ${link.name}`}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogShareSection;
