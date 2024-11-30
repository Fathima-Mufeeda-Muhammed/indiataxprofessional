import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

const Contact = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
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
            CONTACT US
          </h1>
        </div>
      </div>
      <div className="px-6 py-12">
        <h3 className="text-3xl font-semibold mb-2 text-center text-gray-950 font-serif">
          FOR ANY QUERY, CONTACT US!
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white border border-gray-300 container rounded-lg shadow-lg p-8">
            <form>
              <div className="mb-6">
                <label
                  className="block mb-2 font-medium text-gray-700"
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-600 rounded  "
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 font-medium text-gray-700"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-600 rounded  "
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 font-medium text-gray-700"
                  htmlFor="Message"
                >
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-600 rounded  "
                  placeholder="Write Your Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="submit"
                  className="w-44 py-3 font-semibold bg-white border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:border-blue-500 hover:text-white cursor-pointer transform transition duration-300 hover:scale-110"
                >
                  Send Your Enquiry
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="contact.gif"
              className="max-w-full h-auto"
              alt="Contact Illustration"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-2 font-serif">
          CONTACT INFORMATION
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center my-4  ">
          <div className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-110 group container rounded-lg shadow-lg bg-white border border-gray-300">
            <FaMapMarkerAlt className="text-gray-950 text-4xl  mt-3" />
            <h2 className="font-bold text-gray-950 text-lg mb-2 group-hover:text-blue-700">
              Our Corporate Address
            </h2>
            <p className="text-gray-800 italic">
              BRQ Associates, Second City Complex NH Road, Karandakkad,
              Kasaragod, Kerala, INDIA
            </p>
          </div>
          <div className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-110 group container rounded-lg shadow-lg bg-white border border-gray-300">
            <FaPhone className="text-gray-950  text-4xl mt-3" />
            <h2 className="font-bold text-gray-950 text-lg mb-2 group-hover:text-blue-700">
              Telephone Number
            </h2>
            <p className="text-gray-800 italic mb-3">
              Tel: Pharmacy: 00914972 706 800 <br />
              General Manager: 0091 9495617127 <br />
              Managing Director: 00919946906789 <br />
              (9:00 AM - 9:00 PM)
            </p>
          </div>
          <div className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-110 group container rounded-lg shadow-lg bg-white border border-gray-300">
            <FaEnvelope className="text-gray-950  text-4xl mt-3" />
            <h2 className="font-bold text-gray-950 text-lg mb-2 group-hover:text-blue-700">
              Official Email
            </h2>
            <p className="text-gray-800 italic">
              brq@gmail.com
              <br />
              taxbrq@gmail.com
              <br />
              brqassociates@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-110 group container rounded-lg shadow-lg bg-white border border-gray-300">
            <FaTelegramPlane className="text-gray-950  text-4xl mt-3" />
            <h2 className="font-bold text-gray-950 text-lg mb-2 group-hover:text-blue-700">
              24/7 Customer Care
            </h2>
            <p className="text-gray-800 italic">
              +1800 4256 000
              <br />
              +1800 4596 752
              <br />
              +1800 8562 444
            </p>
          </div>
          <div className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-110 group container rounded-lg shadow-lg bg-white border border-gray-300">
            <FaWhatsapp className="text-gray-950  text-4xl mt-3" />
            <h2 className="font-bold text-gray-950 text-lg mb-2 group-hover:text-blue-700">
              WhatsApp Number
            </h2>
            <p className="text-gray-800 italic mb-3">
              +91 9987457546
              <br />
              +91 7585651532 <br />
              +91 9465953215
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-3 font-serif">
          Visit Us on the Map
        </h3>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.000000!2d75.000000!3d12.500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x000000000000000!2sYour%20Location!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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

export default Contact;
