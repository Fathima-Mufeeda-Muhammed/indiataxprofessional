import React, { useEffect, useState } from "react";
import { services } from "../data.js";
import { Link } from "react-router-dom";

const Services = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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
            Our Services
          </h1>
        </div>
      </div>
      <div className="py-9 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110"
              >
                <div className="h-24 w-24">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h2 className="text-lg font-bold text-gray-950 mb-4 text-center">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-800 text-justify">
                  {service.description}......
                  <Link
                    to={`/services/${service.id}`}
                    className="text-blue-700 hover:text-blue-800 text-sm font-medium"
                  >
                    <span> Read More</span>
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
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

export default Services;
