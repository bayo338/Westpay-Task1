import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileSetup() {
  return (
    <div className="w-full max-w-lg bg-transparent p-8 rounded-lg text-center">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Setup your profile</h1>
      <p className="text-gray-400 text-sm mb-8">
        We need to get to know you really well to set you up in{" "}
        <span className="text-yellow-500 font-medium">Nigeria</span>
      </p>

      {/* Form */}
      <form className="space-y-6 text-left">
        {/* First Name */}
        <div>
          <label className="block text-sm mb-1">First name</label>
          <input
            type="text"
            placeholder="e.g John"
            className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <p className="text-xs text-gray-500 mt-3">
            Names as they appear on your ID
          </p>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm mb-1">Last name</label>
          <input
            type="text"
            placeholder="e.g Doe"
            className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <p className="text-xs text-gray-500 mt-3">
            Names as they appear on your ID
          </p>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm mb-1">Date of Birth</label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g 01/01/1970"
              className="w-full bg-black text-white px-4 py-3 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Nigerian Citizen */}
        <div>
          <label className="block text-sm mb-1">Are you a Nigerian Citizen</label>
          <select
            className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Yes or No</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Continue Button */}
        <Link to="/funds">
          <button
            type="button"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-8 font-semibold hover:bg-yellow-600 transition"
          >
            Continue
          </button>
        </Link>
      </form>
    </div>
  );
}
