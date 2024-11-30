import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTimes } from "react-icons/fa";

const Appointment = () => {
  const [animate, setAnimate] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const location = useLocation();
  const { consultantName = "Unknown", consultantService = "Unknown" } =
    location.state || {};

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    consultant: consultantName,
    firstName: "",
    lastName: "",
    mobilenumber: "",
    email: "",
    date: "",
    time: "",
    services: consultantService,
    gender: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Appointment Booked!",
      text: `Your appointment booked successfully`,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      setIsFeedbackModalOpen(true);
    });

    setFormData({
      consultant: consultantName,
      firstName: "",
      lastName: "",
      mobilenumber: "",
      email: "",
      date: "",
      time: "",
      services: consultantService,
      gender: "",
    });

    console.log("Appointment details:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 w-full max-w-4xl border border-gray-300 rounded-lg shadow-xl mt-14">
        <h1 className="text-4xl font-bold text-gray-950 mb-3 text-center font-serif">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 animate-slide-left mt-5">
            <label htmlFor="consultant" className="block text-sm font-semibold">
              Consultant
            </label>
            <input
              id="consultant"
              type="text"
              value={formData.consultant}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 animate-slide-right mt-5">
            <label htmlFor="services" className="block text-sm font-semibold">
              Service
            </label>
            <input
              id="services"
              type="text"
              value={formData.services}
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="animate-slide-left mt-5">
              <label htmlFor="date" className="block text-sm font-semibold">
                Date
              </label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="animate-slide-right mt-5">
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                id="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mb-4 animate-slide-left mt-5">
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
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 animate-slide-right">
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
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 animate-slide-left mt-5">
            <label
              htmlFor="mobilenumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              id="mobilenumber"
              type="text"
              placeholder="Enter your mobile number"
              value={formData.mobilenumber}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 animate-slide-right mt-5">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mt-6 text-end">
            <button
              type="submit"
              className="px-6 py-2  bg-white text-blue-500 border border-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>

      {/* feedback modal open */}
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-[90%] max-w-md mt-10 mb-10 relative">
            <button
              className="absolute top-4 right-4 text-gray-950"
              onClick={() => setIsFeedbackModalOpen(false)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold font-serif text-gray-950 text-center mb-2">
              Feedback
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Swal.fire({
                  title: "Thank you for your valuable feedback!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                }).then(() => setIsFeedbackModalOpen(false));
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">Select Rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comments
                </label>
                <textarea
                  id="comments"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your comments"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="suggestions"
                  className="block text-sm font-medium text-gray-700"
                >
                  Suggestions for Improvement (Optional)
                </label>
                <textarea
                  id="suggestions"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your suggestions"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-start gap-11">
                <button
                  type="button"
                  className="w-44 py-3 font-semibold bg-white border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
                  onClick={() => {
                    Swal.fire({
                      title:
                        "Oops! Something went wrong, and your feedback wasn't submitted.",
                      icon: "info",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(() => setIsFeedbackModalOpen(false));
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-44 py-3 font-semibold bg-white border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:border-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
        animation: slideInLeft 0.8s ease-out;
      }

      .animate-slide-right {
        animation: slideInRight 0.8s ease-out;
      }
    `}
      </style>
    </div>
  );
};

export default Appointment;
