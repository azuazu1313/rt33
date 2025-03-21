import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const SearchForm = () => {
  const navigate = useNavigate();
  const [isReturn, setIsReturn] = useState(true);
  const [passengers, setPassengers] = useState(1);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    departureDate: '',
  });

  const {
    ready: pickupReady,
    value: pickupValue,
    suggestions: { status: pickupStatus, data: pickupSuggestions },
    setValue: setPickupValue,
    clearSuggestions: clearPickupSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: ['it', 'fr', 'es', 'de'] } },
    debounce: 300,
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
  });

  const handlePickupSelect = async (suggestion: google.maps.places.AutocompletePrediction) => {
    setPickupValue(suggestion.description, false);
    clearPickupSuggestions();
    setFormData(prev => ({ ...prev, pickup: suggestion.description }));

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
    setFormData(prev => ({ ...prev, dropoff: suggestion.description }));

    try {
      const results = await getGeocode({ address: suggestion.description });
      const { lat, lng } = await getLatLng(results[0]);
      console.log('Dropoff coordinates:', { lat, lng });
    } catch (error) {
      console.error('Error getting coordinates:', error);
    }
  };

  const handlePassengerChange = (increment: boolean) => {
    if (increment && passengers < 8) {
      setPassengers(passengers + 1);
    } else if (!increment && passengers > 1) {
      setPassengers(passengers - 1);
    }
  };

  const handleSubmit = () => {
    // Allow direct input if Places API is not available
    const pickup = pickupValue || formData.pickup;
    const dropoff = dropoffValue || formData.dropoff;
    
    if (!pickup || !dropoff || !formData.departureDate) {
      alert('Please fill in all required fields');
      return;
    }

    const from = encodeURIComponent(pickup.toLowerCase().replace(/\s+/g, '-'));
    const to = encodeURIComponent(dropoff.toLowerCase().replace(/\s+/g, '-'));
    const type = isReturn ? '2' : '1';

    // Updated navigation to include passengers in URL
    navigate(`/transfer/${from}/${to}/${type}/${formData.departureDate}/${passengers}/form`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'pickup') {
      setPickupValue(value);
    } else if (name === 'dropoff') {
      setDropoffValue(value);
    }
    setFormData(prev => ({ ...prev, [name]: value }));
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
          {/* Pickup Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Pickup location"
              name="pickup"
              value={pickupValue}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
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

          {/* Dropoff Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Dropoff location"
              name="dropoff"
              value={dropoffValue}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
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

          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={(e) => setFormData(prev => ({ ...prev, departureDate: e.target.value }))}
              className="w-full pl-10 pr-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
              style={{
                colorScheme: 'light',
                WebkitAppearance: 'none',
                MozAppearance: 'none'
              }}
            />
          </div>

          <div className="relative">
            <Calendar className={`absolute left-3 top-3 h-5 w-5 ${isReturn ? 'text-gray-400' : 'text-gray-300'}`} />
            <input
              type="date"
              disabled={!isReturn}
              className={`w-full pl-10 pr-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none ${
                !isReturn ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''
              }`}
              style={{
                colorScheme: 'light',
                WebkitAppearance: 'none',
                MozAppearance: 'none'
              }}
            />
          </div>

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

        <button 
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          onClick={handleSubmit}
        >
          <span>See Prices</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;