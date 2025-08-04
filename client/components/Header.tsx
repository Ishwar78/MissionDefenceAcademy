import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const serviceItems = [
    'Indian Army',
    'Indian Navy', 
    'Indian Air Force',
    'NDA',
    'Hostel',
    'Mess Facility'
  ];

  const academicItems = [
    'Army Special Batch',
    'Air Force Special Batch',
    'Navy Special Batch',
    'NDA Special Batch'
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo-removebg-preview.png"
                alt="Mission Defence Academy Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-gray-900 hidden sm:block">
                Mission Defence Academy
              </span>
              <span className="ml-2 text-sm font-bold text-gray-900 block sm:hidden">
                 Mission Defence Academy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>

            {/* Our Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item}
                      to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/gallery" 
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Gallery
            </Link>

            {/* Academics Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('academics')}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Academics
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'academics' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {academicItems.map((item) => (
                    <Link
                      key={item}
                      to={`/academics/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 text-sm font-medium"
                >
                  Our Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 pl-4 space-y-1">
                    {serviceItems.map((item) => (
                      <Link
                        key={item}
                        to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-1 text-sm text-gray-600 hover:text-red-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/gallery" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>

              {/* Mobile Academics */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleDropdown('mobile-academics')}
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 text-sm font-medium"
                >
                  Academics
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'mobile-academics' && (
                  <div className="mt-2 pl-4 space-y-1">
                    {academicItems.map((item) => (
                      <Link
                        key={item}
                        to={`/academics/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-1 text-sm text-gray-600 hover:text-red-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
