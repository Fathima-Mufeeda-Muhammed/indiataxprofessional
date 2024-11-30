import React, { useEffect, useRef } from "react";
import { ourProfessionals } from "../data.js";

const OurProfessionals = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += 1;
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-950 font-serif">
          OUR PROFESSIONALS
        </h2>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 items-center scroll-smooth no-scrollbar"
        >
          {ourProfessionals.map((professional, index) => (
            <div
              key={index}
              className="flex items-center gap-6 min-w-[350px] w-[350px] h-[200px] cursor-pointer bg-white border border-gray-300 rounded-lg p-4 shadow-md"
            >
              <img
                src={professional.image}
                className="w-20 h-20 rounded-full border border-gray-300"
                alt={professional.name}
              />
              <div className="flex flex-col justify-between">
                <p className="text-sm italic text-gray-800 leading-relaxed line-clamp-3">
                  {professional.description}
                </p>
                <div>
                  <h2 className="text-lg font-bold text-gray-950">
                    {professional.name}
                  </h2>
                  <p className="text-sm font-medium text-gray-600">
                    {professional.title}
                  </p>
                </div>
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
        `}
      </style>
    </div>
  );
};

export default OurProfessionals;
