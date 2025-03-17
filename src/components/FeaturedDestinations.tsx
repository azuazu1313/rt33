import React from 'react';
import { Star, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Destination {
  city: string;
  country: string;
  imageUrl: string;
  rating: number;
  reviews: string;
  flag: string;
}

const destinations: Destination[] = [
  {
    city: 'Rome',
    country: 'Italy',
    imageUrl: 'https://wallpapercat.com/w/full/0/7/b/293465-1920x1080-desktop-1080p-rome-background.jpg',
    rating: 4.9,
    reviews: '1.7k',
    flag: '🇮🇹'
  },
  {
    city: 'Paris',
    country: 'France',
    imageUrl: 'https://wallpapercat.com/w/full/b/f/3/30528-3840x2160-desktop-4k-eiffel-tower-background-image.jpg',
    rating: 4.8,
    reviews: '2.2k',
    flag: '🇫🇷'
  },
  {
    city: 'Barcelona',
    country: 'Spain',
    imageUrl: 'https://wallpapers.com/images/hd/barcelona-1920-x-1080-picture-y19qwj8its708dty.jpg',
    rating: 4.9,
    reviews: '1.2k',
    flag: '🇪🇸'
  },
  {
    city: 'Milan',
    country: 'Italy',
    imageUrl: 'https://img.travelnaut.com/web/db/photose/location/eu/it/milan/28ed6358c8d39fb9ad74d343877d94f8.jpeg',
    rating: 4.7,
    reviews: '2.3k',
    flag: '🇮🇹'
  }
];

const FeaturedDestinations = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400 fill-current"
        />
      );
    }

    // Partial star
    if (hasPartialStar) {
      const percentage = (rating % 1) * 100;
      stars.push(
        <div key="partial" className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-gray-300" />
          <div className="absolute overflow-hidden" style={{ width: `${percentage}%` }}>
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600">
            Go Beyond Regular Service when Travelling with Royal Transfer EU
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Link 
              key={index}
              to={`/blogs/${destination.city.toLowerCase()}`}
              className="group relative block"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden rounded-lg">
                {/* Dark overlay - now properly visible on hover */}
                <div 
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"
                  aria-hidden="true"
                />
                <img
                  src={destination.imageUrl}
                  alt={`Scenic view of ${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="text-white text-3xl font-bold">{destination.city}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="mt-4">
                <h4 className="text-xl font-semibold mb-2">{destination.city}</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-lg">{destination.flag}</span>
                    <span className="text-gray-600">{destination.country}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {renderStars(destination.rating)}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {destination.rating} ({destination.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;