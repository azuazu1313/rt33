import React from 'react';
import { Crown } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  isAboutPage?: boolean;
}

const Header = ({ isAboutPage = false }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCTAClick = () => {
    if (isAboutPage) {
      navigate('/');
      // Wait for navigation to complete before scrolling
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
    </header>
  );
};

export default Header;