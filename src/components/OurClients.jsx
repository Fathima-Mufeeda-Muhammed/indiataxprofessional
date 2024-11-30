import React, { useEffect, useRef } from "react";
import { ourClients } from "../data.js";

const OurClients = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;

        if (container.scrollLeft + containerWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += containerWidth;
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-950 font-serif">
          WHAT OUR CLIENTS SAY
        </h2>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-0 items-center scroll-smooth no-scrollbar"
        >
          {ourClients.map((ourClient, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-full cursor-pointer bg-white border border-gray-300 shadow-md rounded-lg p-6 "
            >
              <img
                src={ourClient.image}
                className="w-28 h-28 rounded-full border border-gray-300"
                alt={ourClient.name}
              />
              <div className="flex flex-col ml-6">
                <p className="text-sm italic text-gray-800 mb-3 leading-relaxed">
                  {ourClient.description}
                </p>
                <h2 className="text-xl font-bold text-gray-950">
                  {ourClient.name}
                </h2>
                <p className="text-sm font-medium text-gray-800">
                  {ourClient.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scroll-smooth {
          scroll-behavior: smooth;
        }

        /* Optional: Apply smooth transitions for a smoother effect */
        .flex {
          transition: transform 1s ease-in-out;
        }
        `}
      </style>
    </div>
  );
};

export default OurClients;
