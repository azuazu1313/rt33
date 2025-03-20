import React from 'react';
import { Star, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface VehicleCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  seats: number;
  suitcases: number;
  price: number;
  isSelected: boolean;
  onSelect: () => void;
  onLearnMore: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  id,
  name,
  image,
  rating,
  reviews,
  seats,
  suitcases,
  price,
  isSelected,
  onSelect,
  onLearnMore
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-md p-6 ${
        isSelected ? 'ring-2 ring-blue-600' : ''
      }`}
    >
      {/* Selected Indicator */}
      {isSelected && (
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            Selected
          </span>
        </div>
      )}

      {/* Vehicle Image */}
      <div className="relative aspect-[16/9] mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Vehicle Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{name}</h3>
          <button
            onClick={onLearnMore}
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* Capacity */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600">Seats</div>
            <div className="font-medium">{seats} people</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Suitcases</div>
            <div className="font-medium">{suitcases} medium</div>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="text-sm text-gray-600">From</div>
            <div className="text-2xl font-bold">€{price.toFixed(2)}</div>
          </div>
          <button
            onClick={onSelect}
            className={`px-6 py-2 rounded-md transition-colors ${
              isSelected
                ? 'bg-gray-100 text-gray-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSelected ? 'Selected' : 'Choose'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;