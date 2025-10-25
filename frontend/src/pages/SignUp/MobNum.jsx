import { Link } from "react-router-dom";

export default function MobNum() {
  return (
    <div className="w-full max-w-lg bg-transparent p-8 rounded-lg text-center">
  
      <h1 className="text-2xl font-medium mb-8">What is your mobile number</h1>
      <p className="text-gray-400 mb-8 text-sm">
        We will use this to send you security alerts
      </p>

   
      <form className="space-y-6">
        <div className="text-left">
          <label className="block mb-2 text-sm text-gray-300">Mobile number</label>
          <div className="flex">
            <select
              className="px-3 py-3 bg-black text-white border border-gray-800 rounded-l-md focus:outline-none focus:ring-2"
              defaultValue="+234"
            >
              <option value="+234">+234</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
            </select>
            <input
              type="tel"
              placeholder="000 0000 000"
              className="flex-1 px-4 py-3 rounded-r-md bg-black text-white border border-gray-800 outline-none focus:ring-2"
              required
            />
          </div>
        </div>

        <Link to="/mob-sms">
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Continue
          </button>
        </Link>
      </form>
    </div>
  );
}
