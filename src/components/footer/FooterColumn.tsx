import React from "react";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="backdrop-blur-sm bg-white/20 rounded-xl p-6 border border-white/30">
      <h3 className="text-deewan-dark font-semibold text-lg mb-6" id={`footer-column-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
      <ul className="space-y-4" aria-labelledby={`footer-column-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-gray-600 hover:text-deewan-primary transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1"
              {...(link.external ? { 
                target: "_blank", 
                rel: "noopener noreferrer",
                "aria-label": `${link.name} (opens in a new tab)`
              } : {})}
            >
              {link.name}
              {link.external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
