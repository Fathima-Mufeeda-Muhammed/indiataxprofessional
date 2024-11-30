import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Your account has been successfully created.",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      navigate("/login");
    });
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Oops! Registration was canceled.",
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 w-full max-w-4xl border border-gray-300 rounded-lg shadow-xl mt-14">
        <h1 className="text-4xl font-bold text-gray-950 mb-3 text-center font-serif">
          Become a Customer Today –<br /> Sign Up!{" "}
        </h1>
        <form className="p-8 w-full max-w-4xl " onSubmit={handleSubmit}>
          <div className="mb-6 animate-slide-left mt-3">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6 animate-slide-right">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6 animate-slide-left">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6 animate-slide-right">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6 animate-slide-left">
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="text"
              placeholder="Enter your mobile number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6 animate-slide-right">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                id="acceptTerms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                I accept to create my account
              </span>
            </label>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="py-3 px-4 w-44 bg-white text-blue-500 border border-blue-500 font-semibold rounded-lg shadow hover:bg-blue-500 hover:border-blue-500 hover:text-white  cursor-pointer transform transition duration-300 hover:scale-110"
            >
              Create My Account
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="py-3 px-4 w-44 bg-white text-red-500 border border-red-500 font-semibold rounded-lg shadow hover:bg-red-500 hover:border-red-500 hover:text-white  cursor-pointer transform transition duration-300 hover:scale-110"
            >
              Cancel
            </button>
          </div>
          <div className="text-center mt-5">
            <p className="text-lg text-gray-700">
              You have already an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:underline font-medium transform transition duration-300 hover:scale-110"
                style={{ cursor: "pointer" }}
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <style>
        {`
          @keyframes slideInLeft {
            0% {
              transform: translateX(-50%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            0% {
              transform: translateX(50%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slide-left {
            animation: slideInLeft 2.0s ease-in-out;
          }

          .animate-slide-right {
            animation: slideInRight 2.0s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Register;
