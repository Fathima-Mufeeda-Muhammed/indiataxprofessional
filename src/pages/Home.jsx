import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OurServices from "../components/OurServices";
import OurProfessionals from "../components/OurProfessionals";
import OurClients from "../components/OurClients";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/home.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1
              className={`text-4xl md:text-6xl font-bold text-white transition-transform duration-700 font-serif ${
                isAnimated ? "animate-slide-in-left" : ""
              }`}
            >
              Your Income Tax Partner
            </h1>
            <h2
              className={`text-2xl md:text-2xl text-white mb-3 transition-transform duration-700 font-semibold font-serif ${
                isAnimated ? "animate-slide-in-right" : ""
              }`}
            >
              Expert guidance for your income tax needs.
            </h2>
            <Link to="/services">
              <button
                className={`border border-blue-950 hover:border-blue-500 text-white px-6 py-2 font-semibold rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105 ${
                  isAnimated ? "animate-slide-in-up" : ""
                }`}
              >
                Explore Tax Services
              </button>
            </Link>
          </div>
        </div>
        <OurServices />
        <OurProfessionals />
        <OurClients />
        <div className="flex items-center justify-between mt-14 bg-gray-50 p-4 w-full">
          <div className="flex flex-col justify-start">
            <h3 className="text-3xl font-bold mb-1 text-gray-950 font-serif">
              GET IN TOUCH WITH US TODAY!
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              Our team is ready to assist you and provide a quick, thorough
              response.
              <br /> We value your time and will ensure you're heard.
            </p>

            <Link to="/contact">
              <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 border border-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110">
                Contact Us
              </button>
            </Link>
          </div>
          <img src="contact-us.gif" className="w-64 h-64 " alt="Contact" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          0% {
            transform: translateY(30px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 2s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 2s ease-out;
        }

        .animate-slide-in-up {
          animation: slideInUp 2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Home;
