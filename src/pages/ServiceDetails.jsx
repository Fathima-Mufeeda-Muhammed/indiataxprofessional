import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data.js";
import Swal from "sweetalert2";

import {
  FaArrowLeft,
  FaCalendar,
  FaComment,
  FaQuestion,
  FaRegistered,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { subServiceId } = useParams();
  const [subService, setSubService] = useState(null);
  const navigate = useNavigate();

  const [isAnimated, setIsAnimated] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    const service = services.find((s) =>
      s.subServices.find(
        (subService) => subService.id === parseInt(subServiceId)
      )
    );
    const foundSubService = service?.subServices.find(
      (subService) => subService.id === parseInt(subServiceId)
    );
    setSubService(foundSubService);
  }, [subServiceId]);

  if (!subService) {
    return <div className="text-center text-xl">Sub Service not found</div>;
  }

  return (
    <div className="py-12 bg-gray-100">
      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white transition-transform duration-700 ${
              isAnimated ? "animate-jump" : ""
            }`}
          >
            Service Details
          </h1>
        </div>
      </div>
      <h2 className="text-3xl font-serif text-gray-950 text-center mt-6 font-bold">
        {subService.title}
      </h2>
      <div className="flex flex-wrap items-center justify-between p-4 gap-3">
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-16">
          <img
            src="/service-details.gif"
            className="w-full h-auto max-w-xs md:max-w-sm mt-6"
            alt="Service Details"
          />
        </div>
        <div className="flex-1 text-center px-12 md:px-24 lg:px-6 ">
          <p className="text-sm text-gray-950 text-justify mb-5">
            {subService.description}
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center gap-2 mb-16 px-9">
          <Link to="/register">
            <button className="hidden md:flex items-center w-44 gap-2 bg-white text-blue-500 border border-blue-500 rounded-full px-6 py-2 hover:text-white hover:bg-blue-500 font-semibold cursor-pointer transform transition duration-300 hover:scale-110">
              <FaRegistered className="text-lg" />
              <span>Register</span>
            </button>
          </Link>
          <Link to="/consultant">
            <button className="hidden md:flex items-center gap-2 w-44 bg-white text-blue-500 border border-blue-500 rounded-full px-6 py-2 hover:text-white hover:bg-blue-500 font-semibold cursor-pointer transform transition duration-300 hover:scale-110">
              <FaCalendar className="text-lg" />
              <span>Appointment</span>
            </button>
          </Link>
          <button
            onClick={() => setIsEnquiryModalOpen(true)}
            className="hidden md:flex items-center gap-2 w-44 bg-white text-blue-500 border border-blue-500 rounded-full px-6 py-2 hover:text-white hover:bg-blue-500 font-semibold cursor-pointer transform transition duration-300 hover:scale-110"
          >
            <FaQuestion className="text-lg" />
            <span>Enquiry</span>
          </button>
          {/* <button
            onClick={() => setIsFeedbackModalOpen(true)}
            className="hidden md:flex items-center gap-2 w-44 bg-white text-blue-500 border border-blue-500 rounded-full px-6 py-2 hover:text-white hover:bg-blue-500 font-semibold cursor-pointer transform transition duration-300 hover:scale-110"
          >
            <FaComment className="text-lg" />
            <span>Feedback</span>
          </button> */}
        </div>

        <div className="flex items-center justify-between mt-14 bg-gray-50 p-4 w-full">
          <div className="flex flex-col justify-start">
            <h3 className="text-3xl font-bold mb-1 text-gray-950 font-serif">
              GET IN TOUCH WITH US TODAY!
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              Our team is ready to assist you and provide a quick, thorough
              response. We value your time and will ensure you're heard.
            </p>

            <Link to="/contact">
              <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 border border-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110">
                Contact Us
              </button>
            </Link>
          </div>
          <img
            src="../public/contact-us.gif"
            className="w-64 h-64 "
            alt="Contact"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="w-72 px-4 py-2 bg-white text-blue-500 border border-blue-500 text-sm font-medium rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110 flex items-center justify-center gap-2"
        >
          <FaArrowLeft className="text-base" />
          Go Back to Sub Service
        </button>
      </div>

      {/* enquiry modal open */}
      {isEnquiryModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-950"
              onClick={() => setIsEnquiryModalOpen(false)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold font-serif text-gray-950 text-center mb-2">
              Enquiry Form
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Swal.fire({
                  title:
                    "Thank you for reaching out! We'll get back to you soon.",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000,
                }).then(() => setIsEnquiryModalOpen(false));
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your message"
                  rows="4"
                />
              </div>
              <div className="flex justify-start gap-11">
                <button
                  type="button"
                  className="w-44 py-3 font-semibold bg-white border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
                  onClick={() => {
                    Swal.fire({
                      title: "Oops! We couldn't submit your enquiry.",
                      icon: "info",
                      showConfirmButton: false,
                      timer: 1500,
                    }).then(() => setIsEnquiryModalOpen(false));
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

      {/* feedback modal open */}
      {/* {isFeedbackModalOpen && (
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
                  className="w-44 py-3 font-semibold bg-white border border-gray-600 text-gray-700 rounded-lg hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
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
                  className="w-44 py-3 font-semibold bg-white border border-gray-600 text-gray-700 rounded-lg hover:bg-blue-500 hover:border-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}

      <style jsx>{`
        @keyframes jump {
          0% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(0);
          }
          70% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-jump {
          animation: jump 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetails;
