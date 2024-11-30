import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    Swal.fire({
      title: "Your password has been reset successfully.",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex rounded-lg shadow-xl overflow-hidden w-full max-w-4xl mt-10 border border-gray-300">
        <div className="hidden md:block w-1/2 p-8">
          <img
            src="reset-password.gif"
            className="w-full h-auto max-w-md"
            alt="Reset Illustration"
          />
        </div>
        <div className="p-8 w-full md:w-1/2">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" className="h-16 rounded-full" alt="Logo" />
          </div>
          <h2 className="text-center text-2xl font-bold font-serif text-gray-950 mb-3">
            Reset Your Password Here!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="ConfirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-white font-bold text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white focus:ring-4 cursor-pointer transform transition duration-300 hover:scale-110 mt-6"
            >
              Reset Password
            </button>
          </form>

          <div className="text-center mt-5">
            <p className="text-sm text-gray-700">
              Remember your password?
              <Link
                to="/login"
                className="text-blue-500 ml-1 hover:underline font-medium transform transition duration-300 hover:scale-110"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
