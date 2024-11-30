import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { consultantProfile } from "../data";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ConsultantProfile = () => {
  const { id } = useParams();
  const consultant = consultantProfile.find((c) => c.id === parseInt(id));

  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();

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

  if (!consultant) {
    return <div>Consultant not found!</div>;
  }

  return (
    <div className="py-12 bg-gray-100">
      <div
        className="relative h-44 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white transition-transform duration-700 ${
              isAnimated ? "animate-jump" : ""
            }`}
          >
            Hii I'am {consultant.name}
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-start bg-white border border-gray-300 shadow-lg rounded-lg p-6 mx-4 md:mx-auto max-w-4xl mt-7 ">
        <div className="flex-shrink-0 w-1/3">
          <img
            src={consultant.image}
            alt={consultant.name}
            className="w-32 h-32 rounded-full object-cover border border-gray-300 mx-auto"
          />
          <h2 className="text-2xl font-bold font-serif text-gray-950 text-center">
            {consultant.name}
          </h2>
          <p className="text-lg font-semibold text-gray-900 text-center ">
            {consultant.qualification}
          </p>
          <h3 className="text-lg font-medium text-gray-800 text-center">
            {consultant.service}
          </h3>
          <div className="flex flex-col items-center mt-1 ">
            <p className="text-sm font-medium text-gray-800 ">
              <FaPhone className="inline-block text-base" /> {consultant.phone}
            </p>
            <p className="text-sm font-medium text-gray-800">
              <FaEnvelope className="inline-block text-base" />{" "}
              {consultant.email}
            </p>
          </div>
        </div>

        <div className="flex-1 ml-6 mt-16 text-justify">
          <p className="text-md font-serif text-gray-900">
            {consultant.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {consultant.subServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md flex flex-col p-8 items-center"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-20 h-20 md:w-24 md:h-24 object-cover"
              />
              <h2 className="text-lg font-bold font-serif text-gray-950 text-center">
                {service.title}
              </h2>
              <p className="text-sm text-gray-800 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-6 mt-8">
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

export default ConsultantProfile;
