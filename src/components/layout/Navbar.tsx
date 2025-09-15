import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/book', label: 'Reservations' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
     className={`fixed w-full z-50 transition-all duration-500 ${
  isScrolled
    ? 'bg-bgDark/90 backdrop-blur-lg shadow-lg py-2'   // scrolled → solid blue
    : 'bg-transparent py-4'          // default → transparent
}`}

    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo (Left) */}
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-parisienne text-gold hover:text-cream transition-colors duration-300 z-10"
          >
            Masala Tales
          </Link>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-montserrat font-medium text-sm tracking-wide transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-cream hover:text-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
                    isActive(link.path) ? 'w-full' : ''
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Book Now (Right) */}
          <div className="hidden lg:flex">
            <Link
              to="/book"
              className="bg-accent hover:bg-accentDark text-cream px-6 py-2.5 rounded-full font-montserrat font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/40 flex items-center gap-2 group"
            >
              <Calendar size={16} className="group-hover:scale-110 transition-transform" />
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cream hover:text-gold transition-colors duration-300 z-10 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-bgLight/95 backdrop-blur-lg rounded-xl mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-5 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-montserrat text-lg transition-colors duration-300 py-2 px-4 rounded-lg ${
                      isActive(link.path)
                        ? 'text-gold bg-bgDark/30'
                        : 'text-cream hover:text-gold hover:bg-bgDark/20'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/book"
                  onClick={() => setIsOpen(false)}
                  className="bg-accent hover:bg-accentDark text-cream px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2 mt-2"
                >
                  <Calendar size={18} />
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};