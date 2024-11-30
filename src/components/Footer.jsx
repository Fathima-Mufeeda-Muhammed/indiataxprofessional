import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold mb-4">India Tax Professional</h2>
          <p className="mb-4">
            If you want to adjust the tone or style, let me know! You could also
            add specifics like "for individuals" or "for businesses" depending
            on your target audience.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Lines</h4>
          <div className="flex flex-col mt-4 space-y-2">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-4">
            <FaFacebook size={24} className="text-red-500 hover:text-red-600" />
            <FaInstagram
              size={24}
              className="text-red-500 hover:text-red-600"
            />
            <FaTwitter size={24} className="text-red-500 hover:text-red-600" />
            <FaYoutube size={24} className="text-red-500 hover:text-red-600" />
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-700 pt-4">
        <p>&copy; 2024 India Tax Professional. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms & Condition</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
