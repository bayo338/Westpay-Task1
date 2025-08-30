import { useState } from "react";
import { Check } from "lucide-react";


export default function OriginOfFunds() {
  const options = [
    "Monthly salary",
    "Hourly wages",
    "Savings",
    "Cryptocurrency trading profits",
    "Cryptocurrency from third parties",
    "Cryptocurrency mining",
    "Allowance",
    "Rental Income",
    "Loan(s)",
    "Pension",
  ];

  const [selected, setSelected] = useState([]);

  const toggleSelect = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="w-full max-w-md p-6 items-center justify-center bg-transparent text-white">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          Add the origin of your funds
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Select all that applies to you
        </p>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option) => (
            <div
              key={option}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSelect(option)}
            >
              <span>{option}</span>
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selected.includes(option)
                    ? "bg-yellow-500 border-yellow-500"
                    : "border-gray-500"
                }`}
              >

                {selected.includes(option) && (
                <Check className="w-4 h-4 text-black font-bold" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <button className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-8 font-semibold hover:bg-yellow-600 transition">
          Continue
        </button>
    </div>
  );
}
