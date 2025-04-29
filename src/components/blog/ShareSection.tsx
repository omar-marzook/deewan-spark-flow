import React from "react";
import { Twitter, Linkedin, Mail, Facebook, Share2 } from "lucide-react";

interface ShareSectionProps {
  blogUrl: string;
  title?: string;
}

const ShareSection: React.FC<ShareSectionProps> = ({ blogUrl, title = "" }) => {
  // Encode the URL and title for sharing
  const encodedUrl = encodeURIComponent(blogUrl);
  const encodedTitle = encodeURIComponent(title);
  
  const socials = [
    {
      label: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      url: `http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
    },
    {
      label: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      label: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-12 mb-6 glass border border-white/30 rounded-xl py-4 px-6 shadow">
      <div className="flex items-center gap-2 text-deewan-dark font-semibold">
        <Share2 className="w-5 h-5 text-deewan-primary" />
        <span>Share:</span>
      </div>
      <div className="flex gap-2 ml-2">
        {socials.map(({
          label,
          icon: Icon,
          url
        }) => (
          <a 
            key={label} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-deewan-primary/20 bg-gray-100 transition-colors text-deewan-primary" 
            aria-label={`Share on ${label}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareSection;