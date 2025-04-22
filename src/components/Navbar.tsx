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
  return <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt="Deewan Logo" className="h-10 mr-2" src="/lovable-uploads/c80ff29e-8abe-499f-9535-050008919d86.png" />
            
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">
                Products
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white/90 backdrop-blur-md rounded-xl shadow-lg py-3 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/30">
                <Link to="/products/messaging-api" className="block px-4 py-2 text-sm text-deewan-dark hover:bg-deewan-primary/10 rounded-lg">
                  Messaging API
                </Link>
                <Link to="/products/voice-api" className="block px-4 py-2 text-sm text-deewan-dark hover:bg-deewan-primary/10 rounded-lg">
                  Voice API
                </Link>
                {/* More product links can be added here */}
              </div>
            </div>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">APIs</Link>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Industries</Link>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">About Us</Link>
            <Link to="#contact" className="px-5 py-2.5 bg-deewan-primary text-white font-medium rounded-lg shadow-md hover:bg-deewan-primary/90 transition-all duration-300">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-deewan-dark focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <nav className="md:hidden bg-white/90 backdrop-blur-md mt-4 p-5 rounded-xl shadow-lg border border-white/30 flex flex-col space-y-4 animate-fade-in">
            <div className="font-medium text-deewan-dark">Products</div>
            <Link to="/products/messaging-api" className="pl-4 text-deewan-dark hover:text-deewan-primary transition-colors">- Messaging API</Link>
            <Link to="/products/voice-api" className="pl-4 text-deewan-dark hover:text-deewan-primary transition-colors">- Voice API</Link>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">APIs</Link>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Industries</Link>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">About Us</Link>
            <Link to="#contact" className="px-5 py-2.5 bg-deewan-primary text-white font-medium rounded-lg shadow-md text-center hover:bg-deewan-primary/90 transition-all duration-300">Contact Us</Link>
          </nav>}
      </div>
    </header>;
};
export default Navbar;