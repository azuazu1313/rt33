import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Car, User } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Minimal Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center h-[50px]">
            <img
              src="https://i.imgur.com/991MInn.png"
              alt="Royal Transfer EU Logo"
              className="h-full w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-8">Select Login Type</h1>
            
            <div className="space-y-4">
              <Link
                to="/rider-login"
                className="block w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="font-semibold">Rider Login</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                to="/driver-login"
                className="block w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Car className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="font-semibold">Driver Login</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Back to Home Link */}
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>

          {/* Help Link */}
          <div className="text-center mt-6">
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Need Help? Contact Support
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;