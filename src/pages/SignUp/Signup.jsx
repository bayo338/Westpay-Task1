import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
        <div className="w-full max-w-lg bg-transparent p-8 rounded-lg">
          <h1 className="text-center text-2xl font-medium mb-8">Let's get you started</h1>
          
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
              <div className="mt-4 text-sm text-gray-400">
                Use at least 8 characters, 1 number, 1 uppercase letter
              </div>
            </div>

            <Link to="/mob-num">
              <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-6 font-semibold hover:bg-yellow-600 transition"
            >
              Sign Up
            </button>
            </Link>

          </form>

          <div className="my-6 text-center text-gray-400 text-sm px-1">
            By signing up I confirm that I have read, understood and accept <span className="text-gray-200">terms of use</span> and consent to the processing of my personal data including biometric data as stated in the <span className="text-gray-200">privacy policy</span>
          </div>

          <div className="my-10 text-center text-gray-400 text-sm">
            Already have an account? <a href="/login" className="text-orange-400">Sign In</a>
          </div>

          <div className="my-6 text-center text-gray-400 text-sm">
            or sign up with...
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
