import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: 1 | 2 | 3;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Select Vehicle' },
    { number: 2, label: 'Personal Details' },
    { number: 3, label: 'Payment' }
  ];

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Steps */}
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col items-center ${
                  index === 0 ? 'text-left' : index === steps.length - 1 ? 'text-right' : 'text-center'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                    step.number <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.number}
                </div>
                <div className="text-sm font-medium text-gray-600">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;