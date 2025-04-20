// Modal.jsx
import { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  // Handle backdrop click to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-white transition-opacity"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-auto my-6 p-1 md:p-2">
        <div className="relative flex flex-col w-full bg-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-gray-400 hover:text-gray-900 transition-colors rounded-lg"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 flex-1 overflow-y-auto">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="flex items-center justify-end p-4 border-t border-gray-200 rounded-b">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;