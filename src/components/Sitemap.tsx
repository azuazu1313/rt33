import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Sitemap = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="/destinations" className="text-gray-600 hover:text-blue-600">Destinations</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-blue-600">FAQs</a></li>
              <li><a href="/partners" className="text-gray-600 hover:text-blue-600">Partners</a></li>
              <li><a href="/rent" className="text-gray-600 hover:text-blue-600">Rent a Car</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="/booking-support" className="text-gray-600 hover:text-blue-600">Booking Support</a></li>
              <li><a href="/payment-info" className="text-gray-600 hover:text-blue-600">Payment Information</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">123 Transfer Street, EU 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">24/7: +1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">contact@royaltransfer.eu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 text-center">
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
              href="#" 
              className="p-3 bg-black rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2025 Royal Transfer EU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Sitemap;