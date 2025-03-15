import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Sitemap = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="/booking-support" className="text-gray-600 hover:text-blue-600">Booking Support</a></li>
              <li><a href="/payment-info" className="text-gray-600 hover:text-blue-600">Payment Information</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>

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

          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
              <a href="https://www.instagram.com/royaltransfer1991/" className="text-gray-600 hover:text-blue-600">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-500">2025 Royal Transfer EU. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Sitemap;