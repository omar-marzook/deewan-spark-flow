import React from "react";
import Link from "next/link";

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-200/50 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {currentYear} Deewan. All rights reserved.
        </p>
        
        <nav aria-label="Legal links">
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/privacy-policy" 
                className="text-gray-500 hover:text-deewan-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/citc-regulations" 
                className="text-gray-500 hover:text-deewan-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1"
              >
                CITC Regulations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FooterCopyright;