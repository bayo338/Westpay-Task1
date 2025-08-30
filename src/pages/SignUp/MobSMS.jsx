import { Link } from "react-router-dom";

export default function MobSMS() {
  return (
      <div className="w-full max-w-lg p-8 bg-tranparent rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-4">
          We sent you an SMS
        </h1>
        
        <p className="text-center text-gray-400 mb-8 text-sm">
          Please enter the <span className="text-orange-500">4-digit</span> code
          that was sent to <span className="text-gray-200">+234 906 7690 1222</span>
        </p>

        {/* Code inputs */}
        <div className="flex justify-between mb-8">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              className="w-16 h-16 text-center text-3xl font-bold 
                         bg-black rounded-lg border-2 border-gray-700 
                         focus:outline-none focus:border-orange-500 transition-colors"
            />
          ))}
        </div>

        <Link to="/sec-chk">
        <button
          className="w-full py-4 text-sm font-semibold rounded-md 
          bg-yellow-500 hover:bg-yellow-600 transition"
        >
          Continue
        </button>
        </Link>
        

        {/* Resend link */}
        <div className="text-sm text-gray-400 mt-4 text-center">
          Didn’t receive any code?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Resend
          </a>
        </div>
      </div>
  );
}
