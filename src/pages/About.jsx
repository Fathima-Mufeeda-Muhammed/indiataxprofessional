import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ourProfessionals } from "../data.js";

const About = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const teamRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

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
    <div className="bg-gray-100">
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
            About Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start space-y-4 py-8">
            <h3 className="text-3xl font-bold text-black mb-2 font-serif">
              BRQ ASSOCIATES
            </h3>
            <p className="text-md text-gray-800 text-justify leading-relaxed">
              Welcome to BRQ Associates, your trusted partner in navigating
              India's complex tax landscape. We specialize in offering expert
              tax advisory services for individuals and businesses, helping you
              stay compliant and minimize tax liabilities. Our team of skilled
              professionals provides personalized solutions tailored to your
              financial goals. Whether it's income tax filing, GST compliance,
              or strategic tax planning, we focus on delivering accurate,
              efficient, and transparent services that simplify your financial
              matters. At BRQ Associates, we are committed to excellence and
              empowering you to make informed financial decisions.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img src="about.gif" className="w-full h-auto" alt="About us" />
          </div>
        </div>

        <div
          ref={teamRef}
          className={`container mx-auto px-6 mt-8   ${
            isAnimated ? "slide-in" : ""
          }`}
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-950 font-serif">
            Our Team
          </h2>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-12 items-center scroll-smooth no-scrollbar"
          >
            {ourProfessionals.map((professional, index) => (
              <div
                key={index}
                className="flex items-center gap-6 min-w-[350px] w-[350px] h-[200px] cursor-pointer bg-white border border-gray-300 rounded-lg p-4 shadow-md"
              >
                <img
                  src={professional.image}
                  className="w-28 h-28 rounded-full border border-gray-300"
                  alt={professional.name}
                />
                <div className="flex flex-col">
                  <p className="text-sm italic text-gray-800 mb-3 leading-relaxed">
                    {professional.description}
                  </p>
                  <h2 className="text-xl font-bold text-gray-950">
                    {professional.name}
                  </h2>
                  <p className="text-sm font-medium text-gray-800">
                    {professional.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
          <img src="contact-us.gif" className="w-64 h-64 " alt="Contact" />
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .slide-in {
          animation: slideIn 1s ease-out forwards;
        }

        /* Staggering animations */
        .slide-in-1 {
          animation-delay: 0s;
        }

        .slide-in-2 {
          animation-delay: 0.2s;
        }

        .slide-in-3 {
          animation-delay: 0.4s;
        }

        .slide-in-4 {
          animation-delay: 0.6s;
        }

        .slide-in-5 {
          animation-delay: 0.8s;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default About;
