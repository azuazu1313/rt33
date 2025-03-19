import React, { useState } from 'react';
import Header from '../components/Header';
import Sitemap from '../components/Sitemap';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WEBHOOK_URL = 'https://hook.eu1.make.com/abc123xyz456';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      alert('Thank you for your message! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const openAIChat = () => {
    // @ts-ignore - voiceflow is added via script
    if (window.voiceflow && window.voiceflow.chat) {
      // @ts-ignore
      window.voiceflow.chat.open();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              We're here to help with any questions about our services.
            </p>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+39 351 748 22 44</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:contact@royaltransfer.eu" 
                  className="text-gray-600 hover:text-blue-600"
                >
                  contact@royaltransfer.eu
                </a>
                <p className="text-sm text-gray-500">Quick response guaranteed</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">123 Transfer Street</p>
                <p className="text-sm text-gray-500">EU 12345</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={openAIChat}
                  className="w-full bg-[#FFD166] text-white px-8 py-3 rounded-md hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Speak to us Instantly!
                </button>
              </div>
            </form>

            {/* FAQ Link */}
            <div className="mt-8 text-center">
              <Link
                to="/faq"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Looking for quick answers? Check our FAQs
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Sitemap />
    </div>
  );
};

export default Contact;