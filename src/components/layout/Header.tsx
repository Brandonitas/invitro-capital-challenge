import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-teal-500 font-bold text-2xl">Health<span className="text-blue-500">Care</span></span>
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/appointments" className="text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">
              My Appointments
            </Link>
            <Link 
              to="/" 
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <Button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-500 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              aria-label="Open main menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-between px-3">
                <Link to="/appointments" className="text-gray-700 hover:text-teal-500 block px-3 py-2 rounded-md text-base font-medium">
                  My Appointments
                </Link>
                <Link 
                  to="/" 
                  className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}; 