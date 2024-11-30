import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otpverification");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex rounded-lg shadow-xl overflow-hidden w-full max-w-4xl mt-10 border border-gray-300">
        <div className="hidden md:block w-1/2 p-8">
          <img
            src="forgot-password.gif"
            className="w-full h-auto max-w-md"
            alt="Forgot Password Illustration"
          />
        </div>
        <div className="p-8 w-full md:w-1/2">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" className="h-16 rounded-full" alt="Logo" />
          </div>
          <h2 className="text-center text-2xl font-bold font-serif text-gray-950 mb-3">
            Forgot Your Password?
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white font-bold text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white focus:ring-4 cursor-pointer transform transition duration-300 hover:scale-110 mt-6"
            >
              Reset Password
            </button>
          </form>
          <div className="text-center mt-5">
            <p className="text-sm text-gray-700">
              Back to
              <Link
                to="/login"
                className="text-blue-500 ml-1 hover:underline font-medium transform transition duration-300 hover:scale-110"
              >
                Login?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
