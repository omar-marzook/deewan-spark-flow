
import React from "react";

const FooterCopyright = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
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
  );
};

export default FooterCopyright;
