import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
        <div className="w-full max-w-md bg-transparent p-8 rounded-lg">
          <h1 className="text-center text-2xl font-semibold mb-8">Sign in to Banxli</h1>
          
          <form className="space-y-6">           
            <div>
              <label className="block mb-2 text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=". . . . . . . . ."
                  className="w-full px-4 py-3 pr-10 rounded-md bg-black text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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

            <Link to="/home">
              <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-md mt-6 font-semibold hover:bg-yellow-600 transition"
            >
              Sign In
            </button>
            </Link>

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
