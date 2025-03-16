import React from 'react';
import { X, MessageCircle, Mail, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/3517482244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-gray-600">+393517482244</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/royaltransfer1991/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-purple-600 mr-3" />
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm text-gray-600">@RoyalTransfer1991</div>
                  </div>
                </a>

                <a
                  href="mailto:support@royaltransfer.eu"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-gray-600">support@royaltransfer.eu</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactDialog;