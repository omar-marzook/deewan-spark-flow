
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 glass shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Deewan Logo" className="h-10 mr-2" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/product" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Product</Link>
            <div className="relative group">
              <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">
                Solutions
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/products/messaging-api" className="block px-4 py-2 text-sm text-deewan-dark hover:bg-deewan-primary/10">
                  Messaging API
                </Link>
                <Link to="/products/voice-api" className="block px-4 py-2 text-sm text-deewan-dark hover:bg-deewan-primary/10">
                  Voice API
                </Link>
                {/* More product links can be added here */}
              </div>
            </div>
            <Link to="#apis" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">APIs</Link>
            <Link to="#industries" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Industries</Link>
            <Link to="#stats" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">About Us</Link>
            <Link to="#contact" className="btn-primary">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-deewan-dark focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden glass mt-4 p-4 rounded-lg flex flex-col space-y-4 animate-fade-in">
            <Link to="/product" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Product</Link>
            <Link to="/products/messaging-api" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors pl-4">- Messaging API</Link>
            <Link to="/products/voice-api" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors pl-4">- Voice API</Link>
            <Link to="#apis" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">APIs</Link>
            <Link to="#industries" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Industries</Link>
            <Link to="#stats" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">About Us</Link>
            <Link to="#contact" className="btn-primary text-center">Contact Us</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
