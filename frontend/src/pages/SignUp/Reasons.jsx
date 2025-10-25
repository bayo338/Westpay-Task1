import { Link } from "react-router-dom";

export default function Reasons() {
  return (
    <div className="w-full flex items-center justify-center bg-[#121212] text-white">
      <div className="max-w-md w-full p-6 text-center">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-2">
          Tell us why you&apos;re using Banxil
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Help understand more about who you are and how you&apos;ll use our services
        </p>

        {/* Form */}
        <form className="space-y-6 text-left">
          {/* Reasons for using Banxil */}
          <div>
            <label className="block text-sm mb-2">Reasons for using Banxil</label>
            <select
              className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">e.g Trading</option>
              <option value="trading">Trading</option>
              <option value="investment">Investment</option>
              <option value="payments">Payments</option>
            </select>
          </div>

          {/* Employment Status */}
          <div>
            <label className="block text-sm mb-2">What is your employment status?</label>
            <select
              className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">e.g Self employed</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self Employed</option>
              <option value="student">Student</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm mb-2">What industry do you work in?</label>
            <select
              className="w-full bg-black text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">e.g Farming</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="farming">Farming</option>
              <option value="education">Education</option>
            </select>
          </div>

          {/* Compliance Text */}
          <p className="text-xs text-gray-500 leading-relaxed mt-4">
            We need this information to protect you, by ensuring that we are
            compliant with the highest standards of Know Your Customer (KYC) and
            Anti-Money Laundering (AML) regulation.
          </p>

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
    </div>
  );
}
