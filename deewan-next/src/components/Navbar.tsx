'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ProductsMegaMenu from './navbar/ProductsMegaMenu';
import MobileProductsAccordion from './navbar/MobileProductsAccordion';
import { useClickOutside } from '@/hooks/useClickOutside';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTriggerRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useClickOutside([megaMenuRef as React.RefObject<HTMLElement>, megaMenuTriggerRef as React.RefObject<HTMLElement>], () => {
    setIsMegaMenuOpen(false);
  });

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false);
        setIsMenuOpen(false);
        megaMenuTriggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

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

  const handleNavigation = (path: string) => {
    setIsMegaMenuOpen(false);
    setIsMenuOpen(false);
    router.push(path);
  };

  // Close mega menu when clicking other nav items
  const handleNavClick = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
    }`} role="banner">
      <div className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-deewan-primary">
        <a href="#main-content" className="focus:outline-none">Skip to main content</a>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded" aria-label="Deewan Home">
            <img 
              alt="" 
              src="/deewan-logo.svg" 
              className="h-5 lg:h-7 mr-2" 
              aria-hidden="true"
            />
            <span className="sr-only">Deewan Home</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-8 items-center" aria-label="Main Navigation">
            <div 
              ref={megaMenuTriggerRef}
              className="relative"
            >
              <button 
                className="flex items-center gap-1 font-medium text-deewan-dark hover:text-deewan-primary transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                aria-expanded={isMegaMenuOpen}
                aria-controls="products-mega-menu"
                aria-haspopup="true"
              >
                Products
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMegaMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div 
                ref={megaMenuRef} 
                id="products-mega-menu"
                className={isMegaMenuOpen ? "" : "hidden"}
                role="region"
                aria-label="Products menu"
              >
                {isMegaMenuOpen && <ProductsMegaMenu onSelect={handleNavigation} />}
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1" 
              onClick={handleNavClick}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1" 
              onClick={handleNavClick}
            >
              Blog
            </Link>
            <a 
              href="https://console.deewan.sa/"
              className="px-5 py-2.5 bg-deewan-white text-deewan-dark font-medium border border-deewan-secondary/20 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              Login
            </a>
            <Link 
              href="/contact" 
              className="px-5 py-2.5 bg-deewan-primary text-white font-medium rounded-md shadow-md hover:bg-deewan-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50" 
              onClick={handleNavClick}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="xl:hidden text-deewan-dark focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded p-1"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-haspopup="true"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav 
          id="mobile-menu"
          className={`xl:hidden bg-white/90 backdrop-blur-md mt-4 p-5 rounded-xl shadow-lg border border-white/30 flex flex-col space-y-4 animate-fade-in ${isMenuOpen ? "" : "hidden"}`}
          aria-label="Mobile Navigation"
          role="navigation"
        >
          {isMenuOpen && (
            <>
              <MobileProductsAccordion onSelect={handleNavigation} />
              <Link 
                href="/about" 
                className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/blog" 
                className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors focus:outline-none focus:ring-2 focus:ring-deewan-primary/50 rounded px-2 py-1" 
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="https://console.deewan.sa/"
                className="px-5 py-2.5 bg-deewan-white text-deewan-dark font-medium border border-deewan-secondary/20 rounded-md shadow-md text-center hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <Link 
                href="/contact" 
                className="px-5 py-2.5 bg-deewan-primary text-white font-medium rounded-md shadow-md text-center hover:bg-deewan-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deewan-primary/50" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
