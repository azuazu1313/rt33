import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useNavigate, useLocation } from 'react-router-dom';

interface BookingTopBarProps {
  from: string;
  to: string;
  type: 'one-way' | 'round-trip';
  date: string;
  initialPassengers?: number;
  onRouteUpdate?: (newRoute: { from: string; to: string; type: string; date: string; passengers: number }) => void;
}

const BookingTopBar: React.FC<BookingTopBarProps> = ({ from, to, type, date, initialPassengers = 1, onRouteUpdate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    from,
    to,
    type,
    date,
    passengers: initialPassengers
  });

  // Reset form data when props change
  useEffect(() => {
    setFormData({
      from,
      to,
      type,
      date,
      passengers: initialPassengers
    });
  }, [from, to, type, date, initialPassengers]);

  const {
    ready: pickupReady,
    value: pickupValue,
    suggestions: { status: pickupStatus, data: pickupSuggestions },
    setValue: setPickupValue,
    clearSuggestions: clearPickupSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: ['it', 'fr', 'es', 'de'] } },
    debounce: 300,
    defaultValue: from
  });

  const {
    ready: dropoffReady,
    value: dropoffValue,
    suggestions: { status: dropoffStatus, data: dropoffSuggestions },
    setValue: setDropoffValue,
    clearSuggestions: clearDropoffSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: ['it', 'fr', 'es', 'de'] } },
    debounce: 300,
    defaultValue: to
  });

  useEffect(() => {
    setPickupValue(from, false);
    setDropoffValue(to, false);
  }, [from, to]);

  const handlePickupSelect = async (suggestion: google.maps.places.AutocompletePrediction) => {
    setPickupValue(suggestion.description, false);
    clearPickupSuggestions();
    setFormData(prev => ({ ...prev, from: suggestion.description }));

    try {
      const results = await getGeocode({ address: suggestion.description });
      const { lat, lng } = await getLatLng(results[0]);
      console.log('Pickup coordinates:', { lat, lng });
    } catch (error) {
      console.error('Error getting coordinates:', error);
    }
  };

  const handleDropoffSelect = async (suggestion: google.maps.places.AutocompletePrediction) => {
    setDropoffValue(suggestion.description, false);
    clearDropoffSuggestions();
    setFormData(prev => ({ ...prev, to: suggestion.description }));

    try {
      const results = await getGeocode({ address: suggestion.description });
      const { lat, lng } = await getLatLng(results[0]);
      console.log('Dropoff coordinates:', { lat, lng });
    } catch (error) {
      console.error('Error getting coordinates:', error);
    }
  };

  const handlePassengerChange = (increment: boolean) => {
    const newPassengers = increment ? formData.passengers + 1 : formData.passengers - 1;
    if (newPassengers >= 1 && newPassengers <= 8) {
      setFormData(prev => ({ ...prev, passengers: newPassengers }));
    }
  };

  const hasChanges = 
    formData.from !== from ||
    formData.to !== to ||
    formData.date !== date ||
    formData.passengers !== initialPassengers;

  const handlePickupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPickupValue(value);
    setFormData(prev => ({ ...prev, from: value }));
  };

  const handleDropoffChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDropoffValue(value);
    setFormData(prev => ({ ...prev, to: value }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, date: value }));
  };

  const handleUpdateRoute = () => {
    if (!hasChanges) return;

    const updatedFrom = encodeURIComponent(formData.from.toLowerCase().replace(/\s+/g, '-'));
    const updatedTo = encodeURIComponent(formData.to.toLowerCase().replace(/\s+/g, '-'));
    const updatedType = type;
    const updatedDate = formData.date;

    const newRoute = {
      from: formData.from,
      to: formData.to,
      type: updatedType,
      date: updatedDate,
      passengers: formData.passengers
    };

    // If we're on step 1, use the callback
    if (location.pathname.endsWith('/form') && onRouteUpdate) {
      onRouteUpdate(newRoute);
    } else {
      // For any route changes (including just passengers), navigate to step 1
      navigate(`/transfer/${updatedFrom}/${updatedTo}/${updatedType}/${updatedDate}/form`, { 
        replace: true,
        state: { passengers: formData.passengers }
      });
    }
  };

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1 w-full md:w-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* From Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={pickupValue}
                onChange={handlePickupChange}
                disabled={!pickupReady}
                className="w-full h-[42px] pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white disabled:bg-gray-50 disabled:opacity-75"
                placeholder="From"
              />
              {pickupStatus === "OK" && (
                <ul className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
                  {pickupSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.place_id}
                      onClick={() => handlePickupSelect(suggestion)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {suggestion.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* To Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={dropoffValue}
                onChange={handleDropoffChange}
                disabled={!dropoffReady}
                className="w-full h-[42px] pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white disabled:bg-gray-50 disabled:opacity-75"
                placeholder="To"
              />
              {dropoffStatus === "OK" && (
                <ul className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
                  {dropoffSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.place_id}
                      onClick={() => handleDropoffSelect(suggestion)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {suggestion.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Date */}
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={formData.date}
                onChange={handleDateChange}
                className="w-full h-[42px] pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white disabled:bg-gray-50 disabled:opacity-75"
                style={{
                  colorScheme: 'light',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none'
                }}
              />
            </div>

            {/* Passengers */}
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <div className="w-full h-[42px] pl-10 pr-4 border border-gray-200 rounded-lg bg-white flex justify-between items-center">
                <span className="text-gray-700">{formData.passengers} Passenger{formData.passengers !== 1 ? 's' : ''}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePassengerChange(false)}
                    className={`p-1 rounded-full transition-colors ${
                      formData.passengers > 1 ? 'text-blue-600 hover:bg-blue-50 active:bg-blue-100' : 'text-gray-300'
                    }`}
                    disabled={formData.passengers <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handlePassengerChange(true)}
                    className={`p-1 rounded-full transition-colors ${
                      formData.passengers < 8 ? 'text-blue-600 hover:bg-blue-50 active:bg-blue-100' : 'text-gray-300'
                    }`}
                    disabled={formData.passengers >= 8}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleUpdateRoute}
            className={`px-6 py-2 rounded-lg transition-all duration-300 min-w-[120px] ${
              hasChanges
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!hasChanges}
          >
            Update Route
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BookingTopBar;