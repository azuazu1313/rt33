import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Sitemap = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-4">
          {/* Quick Links - Left on mobile, adjusted right on desktop */}
          <div className="flex flex-col md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-center md:ml-[50px]">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 pl-[100px]">
              <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="/faq" className="text-gray-600 hover:text-blue-600">FAQs</a>
              <a href="/partners" className="text-gray-600 hover:text-blue-600">Partners</a>
              <a href="/rent" className="text-gray-600 hover:text-blue-600">Rent a Car</a>
              <a href="/destinations" className="text-gray-600 hover:text-blue-600">Destinations</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>

          {/* Contact Information - Center on desktop, full width below on mobile */}
          <div className="flex flex-col col-span-2 md:col-span-4 order-last md:order-none md:text-center">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center md:justify-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">123 Transfer Street, EU 12345</span>
              </li>
              <li className="flex items-center md:justify-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">24/7: +39 351 748 22 44</span>
              </li>
              <li className="flex items-center md:justify-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">contact@royaltransfer.eu</span>
              </li>
            </ul>
          </div>

          {/* Get Help - Right on both mobile and desktop */}
          <div className="flex flex-col md:col-span-4 md:pl-32">
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="/booking-support" className="text-gray-600 hover:text-blue-600">Booking Support</a></li>
              <li><a href="/payment-info" className="text-gray-600 hover:text-blue-600">Payment Information</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 text-center">
          {/* Social Media */}
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="#" 
              className="p-3 bg-black rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.instagram.com/royaltransfer1991/" 
              className="p-3 bg-black rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://wa.me/3517482244" 
              className="p-3 bg-black rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">© 2025 Royal Transfer EU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Sitemap;