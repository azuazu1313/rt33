import React, { useState } from 'react';
import { Crown } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isAboutPage?: boolean;
}

const Header = ({ isAboutPage = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCTAClick = () => {
    setIsMenuOpen(false); // Close menu when CTA is clicked
    if (isAboutPage) {
      navigate('/');
      setTimeout(() => {
        const bookingForm = document.getElementById('booking-form');
        if (bookingForm) {
          const isMobile = window.innerWidth < 768;
          const offset = 70;
          
          if (!isMobile) {
            smoothScrollTo(0, 1050);
            return;
          }

          const heroText = bookingForm.querySelector('h1');
          if (heroText) {
            const scrollPosition = heroText.getBoundingClientRect().bottom + window.scrollY - offset;
            smoothScrollTo(scrollPosition, 1050);
          }
        }
      }, 100);
    } else {
      const bookingForm = document.getElementById('booking-form');
      if (bookingForm) {
        const isMobile = window.innerWidth < 768;
        const offset = 70;
        
        if (!isMobile) {
          smoothScrollTo(0, 1050);
          return;
        }

        const heroText = bookingForm.querySelector('h1');
        if (heroText) {
          const scrollPosition = heroText.getBoundingClientRect().bottom + window.scrollY - offset;
          smoothScrollTo(scrollPosition, 1050);
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Hamburger Menu Button - Mobile Only */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-center justify-center">
              <span 
                className={`bg-gray-600 h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-[0.3rem] bg-gray-800' : ''
                } absolute`}
              />
              <span 
                className={`bg-gray-600 h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                } absolute`}
              />
              <span 
                className={`bg-gray-600 h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[0.3rem] bg-gray-800' : ''
                } absolute`}
              />
            </div>
          </button>

          <button 
            onClick={() => navigate('/')}
            className="flex items-center focus:outline-none h-[70px] py-[4px]"
          >
            <img
              src="https://i.imgur.com/991MInn.png"
              alt="Royal Transfer EU Logo"
              className="h-full w-auto object-contain"
            />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a 
              href="/" 
              className="relative py-2 text-gray-700 group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-active:bg-blue-700 transition-all duration-300 -translate-x-1/2"></span>
            </a>
            <a 
              href="/about" 
              className="relative py-2 text-gray-700 group"
            >
              About Us
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-active:bg-blue-700 transition-all duration-300 -translate-x-1/2"></span>
            </a>
            <a 
              href="/services" 
              className="relative py-2 text-gray-700 group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-active:bg-blue-700 transition-all duration-300 -translate-x-1/2"></span>
            </a>
            <a 
              href="/faq" 
              className="relative py-2 text-gray-700 group"
            >
              FAQs
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-active:bg-blue-700 transition-all duration-300 -translate-x-1/2"></span>
            </a>
            <a 
              href="/partners" 
              className="relative py-2 text-gray-700 group"
            >
              Partners
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-active:bg-blue-700 transition-all duration-300 -translate-x-1/2"></span>
            </a>
            <a 
              href="/rent" 
              className="relative py-2 text-gray-700 group"
            >
              Rent a Car
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-active:bg-blue-700 transition-all duration-300 -translate-x-1/2"></span>
            </a>
            <a 
              href="/contact" 
              className="relative py-2 text-gray-700 group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-active:bg-blue-700 transition-all duration-300 -translate-x-1/2"></span>
            </a>
          </nav>

          <button 
            onClick={handleCTAClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            {isAboutPage ? 'Book Now' : 'Book Now'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white z-40 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Logo Section */}
                <div className="p-4 border-b">
                  <img
                    src="https://i.imgur.com/991MInn.png"
                    alt="Royal Transfer EU Logo"
                    className="h-[62px] w-auto object-contain"
                  />
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {[
                      { href: '/', label: 'Home' },
                      { href: '/about', label: 'About Us' },
                      { href: '/services', label: 'Services' },
                      { href: '/faq', label: 'FAQs' },
                      { href: '/partners', label: 'Partners' },
                      { href: '/rent', label: 'Rent a Car' },
                      { href: '/contact', label: 'Contact' }
                    ].map((link) => (
                      <div key={link.href} className="inline-block">
                        <a
                          href={link.href}
                          className="relative py-2 text-gray-700 group inline-block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </div>
                    ))}
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="p-4 border-t">
                  <button 
                    onClick={handleCTAClick}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;