import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookingLayout from '../../components/booking/BookingLayout';
import VehicleCard from '../../components/booking/VehicleCard';
import VehicleModal from '../../components/booking/VehicleModal';

const vehicles = [
  {
    id: 'economy-sedan',
    name: 'Economy Sedan',
    image: 'https://www.pngplay.com/wp-content/uploads/13/Volkswagen-Passat-Transparent-PNG.png',
    rating: 4.9,
    reviews: 161,
    seats: 4,
    suitcases: 4,
    price: 999.79,
    description: 'Economy sedan category is a perfect choice for comfortable and cost-effective travel.',
    sampleVehicles: [
      'Volkswagen Passat',
      'Skoda Superb',
      'Toyota Camry',
      'Similar 4-door sedan'
    ],
    features: [
      {
        icon: 'https://i.imgur.com/icon1.png',
        title: 'Professional Driver',
        description: 'Suit & tie, experienced chauffeur'
      },
      {
        icon: 'https://i.imgur.com/icon2.png',
        title: 'Flight Tracking',
        description: 'Free wait time for delays'
      },
      {
        icon: 'https://i.imgur.com/icon3.png',
        title: 'Door-to-Door',
        description: 'Direct transfer service'
      }
    ]
  },
  {
    id: 'premium-sedan',
    name: 'Premium Sedan',
    image: 'https://alcf.s3.us-west-1.amazonaws.com/_custom/2024/mercedes-benz/s-class/images.png',
    rating: 4.8,
    reviews: 143,
    seats: 4,
    suitcases: 4,
    price: 1299.99,
    description: 'Premium sedan offers an elevated travel experience with luxury vehicles.',
    sampleVehicles: [
      'Mercedes-Benz S-Class',
      'BMW 7 Series',
      'Audi A8',
      'Similar luxury sedan'
    ],
    features: [
      {
        icon: 'https://i.imgur.com/icon1.png',
        title: 'VIP Service',
        description: 'Premium chauffeur service'
      },
      {
        icon: 'https://i.imgur.com/icon2.png',
        title: 'Priority Pickup',
        description: 'Premium waiting area'
      },
      {
        icon: 'https://i.imgur.com/icon3.png',
        title: 'Luxury Comfort',
        description: 'Premium amenities included'
      }
    ]
  },
  {
    id: 'premium-van',
    name: 'Premium Van',
    image: 'https://i.imgur.com/Qy6srO7.png',
    rating: 4.9,
    reviews: 98,
    seats: 7,
    suitcases: 7,
    price: 1499.99,
    description: 'Spacious premium van perfect for groups and families with extra luggage.',
    sampleVehicles: [
      'Mercedes-Benz V-Class',
      'Volkswagen Multivan',
      'Similar luxury van'
    ],
    features: [
      {
        icon: 'https://i.imgur.com/icon1.png',
        title: 'Group Comfort',
        description: 'Spacious seating arrangement'
      },
      {
        icon: 'https://i.imgur.com/icon2.png',
        title: 'Extra Luggage',
        description: 'Abundant storage space'
      },
      {
        icon: 'https://i.imgur.com/icon3.png',
        title: 'Family Friendly',
        description: 'Child seats available'
      }
    ]
  }
];

const Step1Vehicle = () => {
  const navigate = useNavigate();
  const { from, to, type, date, returnDate, passengers } = useParams();
  
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [modalVehicle, setModalVehicle] = useState<typeof vehicles[0] | null>(null);

  const handleNext = () => {
    const basePath = `/transfer/${from}/${to}/${type}/${date}`;
    const fullPath = returnDate
      ? `${basePath}/${returnDate}/${passengers}/details`
      : `${basePath}/${passengers}/details`;
    navigate(fullPath);
  };

  const handleRouteUpdate = (newRoute: { from: string; to: string; type: string; date: string; returnDate?: string; passengers: number }) => {
    const updatedFrom = encodeURIComponent(newRoute.from.toLowerCase().replace(/\s+/g, '-'));
    const updatedTo = encodeURIComponent(newRoute.to.toLowerCase().replace(/\s+/g, '-'));
    
    const basePath = `/transfer/${updatedFrom}/${updatedTo}/${newRoute.type}/${newRoute.date}`;
    const fullPath = newRoute.returnDate
      ? `${basePath}/${newRoute.returnDate}/${newRoute.passengers}/form`
      : `${basePath}/${newRoute.passengers}/form`;

    navigate(fullPath, { replace: true });
  };

  return (
    <BookingLayout
      currentStep={1}
      totalPrice={selectedVehicle.price}
      onNext={handleNext}
      nextButtonText="Next: Personal Details"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Choose Your Vehicle</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              {...vehicle}
              isSelected={selectedVehicle.id === vehicle.id}
              onSelect={() => setSelectedVehicle(vehicle)}
              onLearnMore={() => setModalVehicle(vehicle)}
            />
          ))}
        </div>
      </div>

      {modalVehicle && (
        <VehicleModal
          isOpen={!!modalVehicle}
          onClose={() => setModalVehicle(null)}
          onSelect={() => setSelectedVehicle(modalVehicle)}
          vehicle={modalVehicle}
        />
      )}
    </BookingLayout>
  );
};

export default Step1Vehicle;