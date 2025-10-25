import axios from "axios";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function SignUp({ setUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/signup", formData);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      setUser(res.data);

      setSuccessMessage("User created successfully!");
      setTimeout(() => setSuccessMessage(""), 4000); // hide after 4s

      setTimeout(() => navigate("/login"), 1500); // redirect after a short delay
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-transparent p-4 rounded-lg">
          <h1 className="text-center text-xl font-semi-bold font-medium mb-8">Let's get you started</h1>
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}          
          <form onSubmit={handleSubmit} className="">           
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="w-full text-xs p-3 rounded-md bg-black text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                autoComplete="off"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=". . . . . . . . ."
                  className="w-full text-xs p-3 pr-10 rounded-md bg-black text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="mt-4 text-xs text-gray-400">
                Use at least 8 characters, 1 number, 1 uppercase letter
              </div>
            </div>

            <button
            className="w-full bg-yellow-500 text-black p-3 rounded-lg mt-4 font-semibold hover:bg-yellow-600 text-sm transition cursor-pointer">
              Sign Up
            </button>

          </form>

          <div className="my-6 text-center text-gray-400 text-xs px-1">
            By signing up I confirm that I have read, understood and accept <span className="text-gray-200">terms of use</span> and consent to the processing of my personal data including biometric data as stated in the <span className="text-gray-200">privacy policy</span>
          </div>

          <div className="my-3 text-center text-gray-400 text-xs">
            Already have an account? <a href="/login" className="text-orange-400">Sign In</a>
          </div>

          <div className="my-4 text-center text-gray-400 text-xs">
            or sign up with...
          </div>

          <div className="flex justify-center space-x-6">
            <button className="px-6 py-1 rounded-md border border-gray-600 hover:bg-gray-800 transition">
              <img src="https://www.svgrepo.com/svg/503173/apple-logo" alt="apple" className="w-6 h-6" />
            </button>
            <button className="px-6 py-1 rounded-md border border-gray-600 hover:bg-gray-800 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
            </button>
            <button className="px-6 py-1 rounded-md border border-gray-600 hover:bg-gray-800 transition">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="facebook" className="w-5 h-5 rounded-full" />
            </button>
          </div>
        </div>
        {/* Slide-in success message */}
        {successMessage && (
          <div
            className={`fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transform transition-all duration-500 ease-in-out ${
              successMessage ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {successMessage}
          </div>
        )}
      </div>
  );
}
