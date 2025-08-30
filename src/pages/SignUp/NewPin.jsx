import { Link } from "react-router-dom";

export default function NewPin() {
  return (
      <div className="w-full max-w-md p-8 bg-tranparent rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Create a new PIN
        </h1>
        
        <p className="text-center text-gray-400 mb-8 text-sm">
          You will use this PIN to perform secure actions
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

        <Link to="/new-pin">
        <button
          className="w-full py-4 text-sm font-semibold rounded-md 
                     bg-yellow-500 hover:bg-yellow-600 transition"
        >
          Continue
        </button>
        </Link>
      </div>
  );
}
