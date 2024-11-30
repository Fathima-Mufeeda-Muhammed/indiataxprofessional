import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { services } from "../data.js";
import { FaArrowLeft } from "react-icons/fa";

const SubService = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === parseInt(serviceId));

  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/services");
  };

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
            Sub Services
          </h1>
        </div>
      </div>
      <div className="py-12 bg-gray-100">
        <h1 className="text-3xl font-bold text-center font-serif mb-2">
          {service.title}
        </h1>
        <div className="container mx-auto px-6 py-12">
          {service ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {service.subServices.map((subService) => (
                  <SubServiceCard key={subService.id} subService={subService} />
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-xl">Service not found</p>
          )}
        </div>
        <div className="flex justify-center mb-6">
          <button
            onClick={handleBackClick}
            className="w-72 px-4 py-2 bg-white text-blue-500 border border-blue-500 text-sm font-medium rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110 flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="text-base" />
            Back to Service
          </button>
        </div>
      </div>
    </div>
  );
};

const SubServiceCard = ({ subService }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110">
      <div className="h-24 w-24">
        <img
          src={subService.image}
          alt={subService.title}
          className="h-full w-full object-contain"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-950 mb-4 text-center">
        {subService.title}
      </h2>
      <div className="text-sm text-gray-800 text-justify">
        <p>
          {subService.description.length > 95
            ? `${subService.description.slice(0, 95)}...`
            : subService.description}
        </p>
        {subService.description.length > 95 && (
          <Link
            to={`/subservice/${subService.id}`}
            className="text-blue-700 hover:text-blue-800 text-sm font-medium"
          >
            <span> Learn More</span>
          </Link>
        )}
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

export default SubService;
