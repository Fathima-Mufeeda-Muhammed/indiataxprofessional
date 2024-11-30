import React, { useEffect, useState } from "react";
import { consultant } from "../data.js";
import { useNavigate } from "react-router-dom";

const Consultant = () => {
  const navigate = useNavigate();

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookAppointment = (consultantName, consultantService) => {
    navigate("/appointment", {
      state: {
        consultantName,
        consultantService,
      },
    });
  };

  const handleAboutConsultant = (consultantId) => {
    navigate(`/consultant-profile/${consultantId}`);
  };

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
            Book Your Appointment with Our Consultants
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 ">
        {consultant.map((consultant) => (
          <div
            key={consultant.id}
            className="bg-white shadow-xl rounded-lg w-72 p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-300"
          >
            <div className="flex flex-col items-center ">
              <img
                src={consultant.image}
                alt={consultant.name}
                className="w-24 h-24 rounded-full border border-gray-300"
              />
            </div>
            <h2 className="text-xl text-center font-bold tex-gray-950">
              {consultant.name}
            </h2>
            <div className="text-center mb-4">
              <p className="text-sm font-medium text-gray-800">
                {consultant.qualification}
              </p>
              <p className="text-sm font-medium text-gray-800">
                {consultant.service}
              </p>
            </div>
            <div className="flex flex-col space-y-3 w-full">
              <button
                onClick={() => handleAboutConsultant(consultant.id)}
                className="px-6 py-2 bg-white text-blue-500 border border-blue-500 font-semibold rounded-3xl shadow-md  hover:bg-blue-500   hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
              >
                About {consultant.name}
              </button>
              <button
                onClick={() =>
                  handleBookAppointment(consultant.name, consultant.service)
                }
                className="px-6 py-2 bg-white text-blue-500 border border-blue-500 font-semibold rounded-3xl shadow-md  hover:bg-blue-500   hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        ))}
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

export default Consultant;
