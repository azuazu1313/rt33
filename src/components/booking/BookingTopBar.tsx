import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingTopBarProps {
  from: string;
  to: string;
  type: 'one-way' | 'round-trip';
  date: string;
}

const BookingTopBar: React.FC<BookingTopBarProps> = ({ from, to, type, date }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* From Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={from}
                readOnly={!isEditing}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
              />
            </div>

            {/* To Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={to}
                readOnly={!isEditing}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
              />
            </div>

            {/* Date */}
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={date}
                readOnly={!isEditing}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
              />
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(!isEditing)}
            className="mt-4 md:mt-0 md:ml-4 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isEditing}
          >
            {isEditing ? 'Update Route' : 'Edit Route'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BookingTopBar;