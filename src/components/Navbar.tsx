
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductsMegaMenu from './navbar/ProductsMegaMenu';
import { products } from './navbar/products-data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

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
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt="Deewan Logo" src="/lovable-uploads/c80ff29e-8abe-499f-9535-050008919d86.png" className="h-7 mr-2" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <div className="relative group"
                 onMouseEnter={() => setIsMegaMenuOpen(true)}
                 onMouseLeave={() => setIsMegaMenuOpen(false)}>
              <button className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">
                Products
              </button>
              {isMegaMenuOpen && <ProductsMegaMenu />}
            </div>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">APIs</Link>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Industries</Link>
            <Link to="/about" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">About Us</Link>
            <Link to="/blog" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Blog</Link>
            <Link to="#contact" className="px-5 py-2.5 bg-deewan-primary text-white font-medium rounded-lg shadow-md hover:bg-deewan-primary/90 transition-all duration-300">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-deewan-dark focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white/90 backdrop-blur-md mt-4 p-5 rounded-xl shadow-lg border border-white/30 flex flex-col space-y-4 animate-fade-in">
            <div className="font-medium text-deewan-dark">Products</div>
            {/* Mobile Products Menu */}
            <div className="pl-4 space-y-2">
              <div className="mb-3">
                <div className="font-medium text-sm text-deewan-dark/70">Applications</div>
                {products.applications.map((product) => (
                  <Link 
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="block py-2 text-deewan-dark hover:text-deewan-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="font-medium text-sm text-deewan-dark/70">Communication APIs</div>
                {products.communicationAPIs.map((product) => (
                  <Link 
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="block py-2 text-deewan-dark hover:text-deewan-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">APIs</Link>
            <Link to="#" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Industries</Link>
            <Link to="/about" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">About Us</Link>
            <Link to="/blog" className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">Blog</Link>
            <Link to="#contact" className="px-5 py-2.5 bg-deewan-primary text-white font-medium rounded-lg shadow-md text-center hover:bg-deewan-primary/90 transition-all duration-300">Contact Us</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
