import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Minus, Plus } from 'lucide-react';

const SearchForm = () => {
  const [isReturn, setIsReturn] = useState(true);
  const [passengers, setPassengers] = useState(1);

  const handlePassengerChange = (increment: boolean) => {
    if (increment && passengers < 8) {
      setPassengers(passengers + 1);
    } else if (!increment && passengers > 1) {
      setPassengers(passengers - 1);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full">
      <div className="flex flex-col space-y-6">
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button
            className={`flex-1 py-2 text-center rounded-lg transition-colors ${
              isReturn ? 'bg-blue-600 text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsReturn(true)}
          >
            Round Trip
          </button>
          <button
            className={`flex-1 py-2 text-center rounded-lg transition-colors ${
              !isReturn ? 'bg-blue-600 text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsReturn(false)}
          >
            One Way
          </button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="From"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="To"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
              style={{
                colorScheme: 'light',
                WebkitAppearance: 'none',
                MozAppearance: 'none'
              }}
            />
          </div>

          {isReturn && (
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                style={{
                  colorScheme: 'light',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none'
                }}
              />
            </div>
          )}

          <div className="relative flex items-center">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <div className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md flex justify-between items-center">
              <span className="text-gray-700">{passengers} Passenger{passengers !== 1 ? 's' : ''}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePassengerChange(false)}
                  className={`p-1 rounded-full transition-colors ${
                    passengers > 1 ? 'text-blue-600 hover:bg-blue-50 active:bg-blue-100' : 'text-gray-300'
                  }`}
                  disabled={passengers <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handlePassengerChange(true)}
                  className={`p-1 rounded-full transition-colors ${
                    passengers < 8 ? 'text-blue-600 hover:bg-blue-50 active:bg-blue-100' : 'text-gray-300'
                  }`}
                  disabled={passengers >= 8}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
          <span>See Prices</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;