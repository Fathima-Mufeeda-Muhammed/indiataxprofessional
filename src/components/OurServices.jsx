import React from "react";
import { ourServices } from "../data.js";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="py-9 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-950 font-serif">
          OUR SERVICES
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ourServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <div className="h-24 w-24 ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-contain  "
                />
              </div>
              <h2 className="text-lg font-bold text-gray-950 mb-3 text-center">
                {service.title}
              </h2>
              <p className="text-sm text-gray-800 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <Link to="/services">
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 bg-white text-blue-500 border border-blue-500 font-semibold rounded-3xl shadow-md  hover:bg-blue-500   hover:text-white cursor-pointer transform transition duration-300 hover:scale-110">
              More Services
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
