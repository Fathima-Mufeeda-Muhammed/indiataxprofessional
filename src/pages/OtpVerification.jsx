import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const generateOtp = () => {
      const otp = Math.floor(100000 + Math.random() * 900000);
      setGeneratedOtp(otp);
      console.log("Generated OTP:", otp);
    };

    generateOtp();
  }, []);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp.toString()) {
      console.log("OTP verified successfully!");
      navigate("/resetpassword");
    } else {
      console.log("Invalid OTP!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex rounded-lg shadow-xl overflow-hidden w-full max-w-4xl mt-10 border border-gray-300">
        <div className="hidden md:block w-1/2 p-8">
          <img
            src="otp.gif"
            className="w-full h-auto max-w-md"
            alt="otp Illustration"
          />
        </div>
        <div className="p-8 w-full md:w-1/2">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" className="h-16 rounded-full" alt="Logo" />
          </div>
          <h2 className="text-center text-2xl font-bold font-serif text-gray-950 mb-3">
            OTP Verification
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                Enter OTP (Dummy OTP: {generatedOtp}){" "}
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter the OTP"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white font-bold text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white focus:ring-4 cursor-pointer transform transition duration-300 hover:scale-110 mt-6"
            >
              Verify OTP
            </button>
          </form>
          <div className="text-center mt-5">
            <p className="text-sm text-gray-700">
              Didn't receive the OTP?{" "}
              <Link
                to="/otpverification"
                className="text-blue-500 hover:underline font-medium transform transition duration-300 hover:scale-110"
              >
                Resend OTP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
