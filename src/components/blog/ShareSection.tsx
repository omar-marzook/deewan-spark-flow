import React from "react";
import { createLucideIcon, Linkedin, Mail, Facebook, Share2 } from "lucide-react";

interface ShareSectionProps {
  blogUrl: string;
  title?: string;
}

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

const ShareSection: React.FC<ShareSectionProps> = ({ blogUrl, title = "" }) => {
  // Encode the URL and title for sharing
  const encodedUrl = encodeURIComponent(blogUrl);
  const encodedTitle = encodeURIComponent(title || document.title);
  
  const socials = [
    {
      label: "X",
      icon: XIcon,
      url: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
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
    <div 
      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-12 mb-6 glass border border-white/30 rounded-xl py-4 px-6 shadow"
      role="region"
      aria-labelledby="share-heading"
    >
      <div className="flex items-center gap-2 text-deewan-dark font-semibold">
        <Share2 className="w-5 h-5 text-deewan-primary" aria-hidden="true" />
        <span id="share-heading">Share:</span>
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
            className="p-2 rounded-full hover:bg-deewan-primary/20 bg-gray-100 transition-colors text-deewan-primary focus:outline-none focus:ring-2 focus:ring-deewan-primary focus:ring-offset-2" 
            aria-label={`Share on ${label}`}
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareSection;