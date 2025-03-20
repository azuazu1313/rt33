import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../Header';
import Sitemap from '../Sitemap';
import Newsletter from '../Newsletter';
import BookingTopBar from './BookingTopBar';
import ProgressBar from './ProgressBar';

interface BookingLayoutProps {
  children: React.ReactNode;
  currentStep: 1 | 2 | 3;
  totalPrice: number;
  onBack?: () => void;
  onNext?: () => void;
  nextButtonText?: string;
  showNewsletter?: boolean;
}

const BookingLayout: React.FC<BookingLayoutProps> = ({
  children,
  currentStep,
  totalPrice,
  onBack,
  onNext,
  nextButtonText = 'Next Step',
  showNewsletter = true
}) => {
  const navigate = useNavigate();
  const { from, to, type, date } = useParams();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Top Booking Bar */}
        <BookingTopBar
          from={decodeURIComponent(from || '')}
          to={decodeURIComponent(to || '')}
          type={type === '2' ? 'round-trip' : 'one-way'}
          date={date || ''}
        />

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>

        {/* Newsletter Section */}
        {showNewsletter && (
          <div className="bg-white py-16">
            <Newsletter webhookUrl="https://hook.eu1.make.com/newsletter-signup" />
          </div>
        )}

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            <div className="flex items-center space-x-8">
              <div className="text-right">
                <div className="text-sm text-gray-600">Total Price</div>
                <div className="text-xl font-bold">€{totalPrice.toFixed(2)}</div>
              </div>

              {onNext && (
                <button
                  onClick={onNext}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  {nextButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Sitemap />
    </div>
  );
};

export default BookingLayout;