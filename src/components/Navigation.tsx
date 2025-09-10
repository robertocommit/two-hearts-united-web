import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Ceremony & Reception TwoRings SVG icon (used as logo)
const TwoRings = () => (
  <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-0">
    <circle cx="12" cy="18" r="8" stroke="#D4AF37" strokeWidth="2.5" />
    <circle cx="24" cy="18" r="8" stroke="#D4AF37" strokeWidth="2.5" />
    <ellipse cx="18" cy="18" rx="2.5" ry="2.5" fill="#D4AF37" fillOpacity="0.7" />
  </svg>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Details', href: '#details' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Wedding Photos', href: '#wedding-photos' },
    { name: 'RSVP', href: 'https://wa.me/?text=I%20would%20like%20to%20RSVP%20for%20Trang%20and%20Roberto%27s%20wedding!' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Replace logo with two rings icon */}
          <div className="flex items-center">
            <TwoRings />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.name === 'RSVP') {
                    window.open(item.href, '_blank');
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.name === 'RSVP') {
                      window.open(item.href, '_blank');
                    } else {
                      scrollToSection(item.href);
                    }
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-wedding-blush transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
