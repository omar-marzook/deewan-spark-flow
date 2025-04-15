
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
          <a href="#" className="flex items-center">
            <span className="text-2xl font-display font-bold text-deewan-primary">Deewan</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#products" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">Solutions</a>
            <a href="#apis" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">APIs</a>
            <a href="#industries" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">Industries</a>
            <a href="#stats" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">About Us</a>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-deewan-gray focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden glass mt-4 p-4 rounded-lg flex flex-col space-y-4 animate-fade-in">
            <a href="#products" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">Solutions</a>
            <a href="#apis" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">APIs</a>
            <a href="#industries" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">Industries</a>
            <a href="#stats" className="font-medium text-deewan-gray hover:text-deewan-primary transition-colors">About Us</a>
            <a href="#contact" className="btn-primary text-center">Contact Us</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
