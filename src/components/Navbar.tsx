import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-bold">
            MM Projects Infra
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white">
              Portfolio
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-white"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-300 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center text-gray-300 hover:text-white"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">{/* Menu button and dropdown code */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
