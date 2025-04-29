
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-200/50 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {currentYear} Deewan. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          <Link to="/privacy-policy" className="text-gray-500 hover:text-deewan-primary text-sm transition-colors">
            Privacy Policy
          </Link>
          <Link to="/citc-regulations" className="text-gray-500 hover:text-deewan-primary text-sm transition-colors">
            CITC Regulations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
