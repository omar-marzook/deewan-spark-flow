
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f9fc] py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter subscription */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Deewan Logo" className="h-8" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-2 md:items-center w-full md:w-auto">
            <div className="relative flex-grow max-w-md">
              <input
                type="email"
                placeholder="Enter your email and subscribe to fresh updates"
                className="w-full py-2.5 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-deewan-primary/20"
              />
            </div>
            <button className="bg-deewan-primary text-white py-2.5 px-6 rounded-lg font-medium hover:bg-deewan-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Main footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {/* For applicant column */}
          <div>
            <h3 className="text-deewan-dark font-semibold text-lg mb-4">For Clients</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Search for services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Upload your requirements</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Create a request</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Our client portal</a></li>
            </ul>
          </div>
          
          {/* For employer column */}
          <div>
            <h3 className="text-deewan-dark font-semibold text-lg mb-4">For Partners</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Create a partnership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Resource center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Our services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Partner portal</a></li>
            </ul>
          </div>
          
          {/* Company column */}
          <div>
            <h3 className="text-deewan-dark font-semibold text-lg mb-4">Deewan</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">About the company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Contacts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">Site Map</a></li>
              <li><a href="#" className="text-gray-600 hover:text-deewan-primary transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          {/* Download column */}
          <div>
            <h3 className="text-deewan-dark font-semibold text-lg mb-4">Download the application</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="inline-block">
                <img src="https://download.logo.wine/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.png" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="inline-block">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-10" />
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-3">
              <a href="#" aria-label="Youtube" className="inline-flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                <Youtube size={18} className="text-gray-600" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                <Facebook size={18} className="text-gray-600" />
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                <Twitter size={18} className="text-gray-600" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                <Instagram size={18} className="text-gray-600" />
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                <Linkedin size={18} className="text-gray-600" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer bottom with copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm">
            Deewan &copy; {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
