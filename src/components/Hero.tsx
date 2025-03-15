import React from 'react';
import SearchForm from './SearchForm';

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
          <div className="text-white text-center md:text-right">
            <h1 className="text-6xl font-bold mb-4">
              The road is part of<br />the adventure
            </h1>
            <p className="text-[18px] mb-8">
              Enjoy the trip — we'll handle the rest.
            </p>
          </div>
          
          <div className="w-full md:max-w-xl lg:max-w-2xl">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;