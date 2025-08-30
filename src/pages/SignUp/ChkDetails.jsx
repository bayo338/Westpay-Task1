import { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChkDetails() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="w-full max-w-md p-6 text-center items-center justify-center bg-[#121212] text-white">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-2">Are your details correct?</h1>
        <p className="text-gray-400 text-sm mb-8">
          You cannot edit this later and incorrect details will cause delays
        </p>

        {/* Details Summary */}
        <div className="space-y-4 text-left mb-8">
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">First and middle names:</span>
            <span className="font-medium">John</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Last name:</span>
            <span className="font-medium">Doe</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Date of Birth:</span>
            <span className="font-semibold">01/01/1970</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Are you a Nigerian?</span>
            <span className="font-medium">Yes</span>
          </div>
        </div>

        {/* Checkbox agreement */}
        <div
          className="flex items-start gap-3 text-sm text-left mb-6 cursor-pointer"
          onClick={() => setAgreed(!agreed)}
        >
          <span
            className={`w-5 h-5 flex items-center justify-center rounded-full  border ${
              agreed ? "bg-yellow-500 border-yellow-500" : "border-gray-500"
            }`}
          >
            {agreed && <Check className="w-4 h-4 text-black" />}
          </span>
          <span className="text-gray-400 leading-relaxed">
            All my details are correct and I acknowledge I have read and understood
            Banxil&apos;s <span className="underline cursor-pointer">Terms of Use</span>
          </span>
        </div>

        {/* Continue button */}
        <Link to="/reasons">
          <button
            disabled={!agreed}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              agreed
                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </Link>

        {/* Edit Info link */}
        <Link to="/profile">
          <button className="mt-6 text-sm text-gray-400 hover:text-yellow-500 transition">
          Edit info
        </button>
        </Link>

      </div>
  );
}
