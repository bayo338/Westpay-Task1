import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


export default function Login({ setUser }) {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/login", formData);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      setUser(res.data);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
      <div className="w-full max-w-md bg-transparent p-8 rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-8">Sign in to Banxli</h1>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}        
        <form onSubmit={handleSubmit}>        
          <div className="mb-4" >
            <label className="block mb-1 text-sm text-gray-300 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="w-full px-4 py-3 rounded-md bg-black text-white text-xs border border-gray-800 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-meduim text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=". . . . . . . . ."
                className="w-full px-4 py-3 pr-10 rounded-md bg-black text-white text-xs border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
            <div className="text-right mt-2">
              <a href="/forgot-password" className="text-sm text-orange-400 hover:underline">Forgot Password?</a>
            </div>
          </div>

          <button className="w-full bg-yellow-500 text-black text-sm py-3 rounded-lg mt-6 font-semibold hover:bg-yellow-600 transition cursor-pointer">
            Sign In
          </button>
        </form>

        <div className="my-6 text-center text-gray-400 text-sm">
          or sign in with...
        </div>

        <div className="flex justify-center space-x-6">
          <button className="px-6 py-2 rounded-md border border-gray-600 hover:bg-gray-800 transition">
            <img src="https://www.svgrepo.com/svg/503173/apple-logo" alt="apple" className="w-6 h-6" />
          </button>
          <button className="px-6 py-2 rounded-md border border-gray-600 hover:bg-gray-800 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-6 h-6" />
          </button>
          <button className="px-6 py-2 rounded-md border border-gray-600 hover:bg-gray-800 transition">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="facebook" className="w-6 h-6 rounded-full" />
          </button>
        </div>
      </div>
  );
}
