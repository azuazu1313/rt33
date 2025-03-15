import React from 'react';
import SearchForm from './SearchForm';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div id="booking-form" className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.imgur.com/Y7GtfwS.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              The road is part of the adventure
            </h1>
            <p className="text-xl mb-8">
              Enjoy the trip — we'll handle the rest.
            </p>
          </div>
          
          <div className="w-full md:max-w-xl lg:max-w-2xl md:justify-self-end">
            <SearchForm />
          </div>
        </div>

        {/* Bouncing Arrow */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;