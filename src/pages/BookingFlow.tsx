import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingLayout from '../components/booking/BookingLayout';
import VehicleCard from '../components/booking/VehicleCard';
import VehicleModal from '../components/booking/VehicleModal';

// Import all the content from the individual step components
import { vehicles } from '../data/vehicles';
import { extras } from '../data/extras';

interface BookingState {
  step: 1 | 2 | 3;
  selectedVehicle: typeof vehicles[0];
  personalDetails: {
    title: 'mr' | 'ms';
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phone: string;
    selectedExtras: Set<string>;
  };
  paymentDetails: {
    method: 'card' | 'cash';
    cardNumber?: string;
    expiryDate?: string;
    cvc?: string;
  };
}

const BookingFlow = () => {
  const navigate = useNavigate();
  const { from, to, type, date, returnDate, passengers } = useParams();
  const [modalVehicle, setModalVehicle] = useState<typeof vehicles[0] | null>(null);
  
  const [bookingState, setBookingState] = useState<BookingState>({
    step: 1,
    selectedVehicle: vehicles[0],
    personalDetails: {
      title: 'mr',
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      phone: '',
      selectedExtras: new Set()
    },
    paymentDetails: {
      method: 'card'
    }
  });

  const handleNext = () => {
    if (bookingState.step < 3) {
      setBookingState(prev => ({ ...prev, step: (prev.step + 1) as 1 | 2 | 3 }));
    } else {
      // Handle booking completion
      console.log('Booking completed', bookingState);
    }
  };

  const handleBack = () => {
    if (bookingState.step > 1) {
      setBookingState(prev => ({ ...prev, step: (prev.step - 1) as 1 | 2 | 3 }));
    } else {
      navigate(-1);
    }
  };

  const calculateTotal = () => {
    let total = bookingState.selectedVehicle.price;
    
    // Add extras
    if (bookingState.step >= 2) {
      bookingState.personalDetails.selectedExtras.forEach(extraId => {
        const extra = extras.find(e => e.id === extraId);
        if (extra) {
          total += extra.price;
        }
      });
    }

    return total;
  };

  const renderStep = () => {
    switch (bookingState.step) {
      case 1:
        return (
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Choose Your Vehicle</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  {...vehicle}
                  isSelected={bookingState.selectedVehicle.id === vehicle.id}
                  onSelect={() => setBookingState(prev => ({ ...prev, selectedVehicle: vehicle }))}
                  onLearnMore={() => setModalVehicle(vehicle)}
                />
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Transfer & Personal Details</h1>
            
            {/* Equipment & Extras */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Equipment & Extras</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extras.map((extra) => (
                  <label
                    key={extra.id}
                    className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={bookingState.personalDetails.selectedExtras.has(extra.id)}
                      onChange={() => {
                        const newExtras = new Set(bookingState.personalDetails.selectedExtras);
                        if (newExtras.has(extra.id)) {
                          newExtras.delete(extra.id);
                        } else {
                          newExtras.add(extra.id);
                        }
                        setBookingState(prev => ({
                          ...prev,
                          personalDetails: {
                            ...prev.personalDetails,
                            selectedExtras: newExtras
                          }
                        }));
                      }}
                      className="h-5 w-5 text-blue-600 rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{extra.name}</div>
                      <div className="text-sm text-gray-500">
                        {extra.price > 0 ? `€${extra.price.toFixed(2)}` : 'Free'}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* Personal Details Form */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
              {/* Add your personal details form fields here */}
            </section>
          </div>
        );

      case 3:
        return (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
            {/* Add your payment form fields here */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <BookingLayout
      currentStep={bookingState.step}
      totalPrice={calculateTotal()}
      onNext={handleNext}
      onBack={handleBack}
      nextButtonText={bookingState.step === 3 ? 'Complete Booking' : 'Next Step'}
    >
      {renderStep()}
      
      {modalVehicle && (
        <VehicleModal
          isOpen={!!modalVehicle}
          onClose={() => setModalVehicle(null)}
          onSelect={() => {
            setBookingState(prev => ({ ...prev, selectedVehicle: modalVehicle }));
            setModalVehicle(null);
          }}
          vehicle={modalVehicle}
        />
      )}
    </BookingLayout>
  );
};

export default BookingFlow;