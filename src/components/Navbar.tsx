import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const productCategories = {
    messaging: [
      {
        name: "SMS API",
        description: "Send and receive text messages globally with our reliable SMS API",
        path: "/products/sms-api"
      },
      {
        name: "WhatsApp Business",
        description: "Connect with customers through WhatsApp's business platform",
        path: "/products/whatsapp-business"
      },
      {
        name: "Bulk SMS",
        description: "Send messages to multiple recipients efficiently",
        path: "/products/bulk-sms"
      },
      {
        name: "RCS Business",
        description: "Rich messaging features for enhanced customer engagement",
        path: "/products/rcs-business"
      },
      {
        name: "Chat API",
        description: "Integrate real-time chat functionality into your applications",
        path: "/products/chat-api"
      }
    ],
    voice: [
      {
        name: "Voice API",
        description: "Build voice-enabled applications with programmable calling",
        path: "/products/voice-api"
      },
      {
        name: "Number Masking",
        description: "Protect user privacy with virtual phone numbers",
        path: "/products/number-masking"
      },
      {
        name: "Call Tracking",
        description: "Track and analyze call performance metrics",
        path: "/products/call-tracking"
      },
      {
        name: "Voice Broadcasting",
        description: "Send voice messages to multiple recipients",
        path: "/products/voice-broadcasting"
      },
      {
        name: "IVR Solutions",
        description: "Create interactive voice response systems",
        path: "/products/ivr-solutions"
      }
    ]
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt="Deewan Logo" src="/lovable-uploads/c80ff29e-8abe-499f-9535-050008919d86.png" className="h-7 mr-2" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-deewan-dark hover:text-deewan-primary transition-colors">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-8 p-6 w-[800px] bg-white">
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-deewan-primary">Messaging Solutions</h3>
                        <div className="space-y-4">
                          {productCategories.messaging.map((product) => (
                            <Link
                              key={product.name}
                              to={product.path}
                              className="block group"
                            >
                              <div className="p-3 rounded-lg hover:bg-deewan-primary/5 transition-colors">
                                <h4 className="font-medium text-deewan-dark group-hover:text-deewan-primary">{product.name}</h4>
                                <p className="text-sm text-gray-600">{product.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-deewan-primary">Voice Solutions</h3>
                        <div className="space-y-4">
                          {productCategories.voice.map((product) => (
                            <Link
                              key={product.name}
                              to={product.path}
                              className="block group"
                            >
                              <div className="p-3 rounded-lg hover:bg-deewan-primary/5 transition-colors">
                                <h4 className="font-medium text-deewan-dark group-hover:text-deewan-primary">{product.name}</h4>
                                <p className="text-sm text-gray-600">{product.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <div className="pl-4 space-y-4">
              <div>
                <h3 className="font-medium text-deewan-primary mb-2">Messaging Solutions</h3>
                {productCategories.messaging.map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className="block py-2 text-deewan-dark hover:text-deewan-primary transition-colors"
                  >
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </Link>
                ))}
              </div>
              <div>
                <h3 className="font-medium text-deewan-primary mb-2">Voice Solutions</h3>
                {productCategories.voice.map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className="block py-2 text-deewan-dark hover:text-deewan-primary transition-colors"
                  >
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.description}</p>
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
