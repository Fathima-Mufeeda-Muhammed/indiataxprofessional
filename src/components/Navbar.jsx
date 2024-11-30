import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendar,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { services } from "../data.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed m-4 right-0 left-0 bg-gray-100 border border-gray-300 shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img
            src="/logo.png"
            className="h-12 w-28 p-2 bg-gray-100"
            alt="Logo"
            // style={{ mixBlendMode: "color-burn" }}
          />
        </div>
        <div className="hidden md:flex items-center text-sm font-medium relative">
          <Link
            to="/"
            className="px-5 text-gray-950 font-medium text-lg font-serif  hover:font-bold hover:text-blue-500"
          >
            Home
          </Link>
          <div
            className="px-4 relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="px-5 text-gray-950 font-medium text-lg font-serif  hover:font-bold hover:text-blue-500">
              Services
            </span>
            {showDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 px-4 w-96 z-10 max-h-80 overflow-y-auto">
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-2 py-1 text-gray-950 font-serif hover:font-semibold hover:text-blue-500 "
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="px-5 text-gray-950 font-medium text-lg font-serif  hover:font-bold hover:text-blue-500"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="px-5 text-gray-950 font-medium text-lg font-serif  hover:font-bold hover:text-blue-500"
          >
            Contact Us
          </Link>
        </div>
        <Link to="/consultant">
          <button className="hidden md:flex items-center gap-2 bg-blue-500 text-white border font-serif border-blue-500 rounded-lg px-6 py-2 hover:text-white hover:bg-blue-500  hover:border-blue-500 font-medium cursor-pointer transform transition duration-300 hover:scale-110">
            <FaCalendar className="text-lg" />
            <span>Appointment Book</span>
          </button>
        </Link>
        <div className="hidden md:flex items-center">
          <Link
            to="/register"
            className="px-5 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500  flex items-center"
          >
            <FaUserPlus className="text-base mr-2" />
            Register
          </Link>
          <span className="px-2 text-gray-950">|</span>
          <Link
            to="/login"
            className="px-5 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500  flex items-center"
          >
            <FaSignInAlt className="text-base mr-2" />
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${
              isOpen ? "hidden" : "block"
            } text-2xl`}
          >
            <FaBars />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${
              isOpen ? "block" : "hidden"
            } text-2xl`}
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-100 border border-gray-300 items-center py-4 space-y-4 shadow-lg">
          <Link
            to="/"
            className="px-4 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500"
          >
            Home
          </Link>
          <div
            className="px-4 relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="px-4 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500">
              Services
            </span>
            {showDropdown && (
              <div className="bg-white border rounded-md py-2 w-full z-10">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block text-gray-950 px-4 py-2 hover:font-semibold font-serif hover:text-blue-500 truncate"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="px-4 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="px-4 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500"
          >
            Contact Us
          </Link>
          <Link to="/consultant">
            <button className="flex items-center font-serif gap-2 bg-blue-500 text-white border border-blue-500 rounded-lg px-6 py-2 hover:text-white hover:bg-blue-500 hover:border-blue-500 font-semibold cursor-pointer transform transition duration-300 hover:scale-110">
              <FaCalendar className="text-lg" />
              <span>Appointment Book</span>
            </button>
          </Link>
          <div className="flex flex-col items-center">
            <Link
              to="/register"
              className="px-5 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="px-5 text-gray-950 font-medium text-lg font-serif hover:font-bold hover:text-blue-500"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
