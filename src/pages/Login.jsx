import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dummyData = {
    username: "mufeeda",
    password: "mufeeda",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === dummyData.username && password === dummyData.password) {
      setErrorMessage("");
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex overflow-hidden mt-16 border border-gray-300 rounded-lg">
        <div className="flex items-center justify-center p-8">
          <img
            src="login.gif"
            className="w-full h-auto max-w-md"
            alt="Login Illustration"
          />
        </div>
        <div className="p-8 w-96">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" className="h-16 rounded-full" alt="Logo" />
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="Name"
                placeholder="Enter Your Username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  placeholder="Enter Your Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="text-gray-500" />
                  ) : (
                    <FaEyeSlash className="text-gray-500" />
                  )}
                </span>
              </div>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox h-4 w-4 text-blue-500 rounded"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <Link
                to="/forgotpassword"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-white font-bold text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white focus:ring-4 cursor-pointer transform transition duration-300 hover:scale-110 mt-6"
            >
              Login
            </button>

            <div className="text-center mt-5">
              <p className="text-sm text-gray-700">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:underline font-medium transform transition duration-300 hover:scale-110"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
