import { User, Home, IdCard, Camera } from "lucide-react";
import { Link } from "react-router-dom";

export default function SecurityChecks() {
  const checks = [
    { icon: <User className="w-5 h-5" />, text: "Add your personal details" },
    { icon: <Home className="w-5 h-5" />, text: "Add your address & job details" },
    { icon: <IdCard className="w-5 h-5" />, text: "Government-Issued ID Card" },
    { icon: <Camera className="w-5 h-5" />, text: "Snap a quick selfie" },
  ];

  return (
    <div className="w-full max-w-lg bg-transparent p-8 rounded-lg text-center">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-3">
        A few security checks to keep you safe
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        We need to do a few checks before you can buy cryptocurrency, it usually
        takes a few minutes your details, but can take longer
      </p>

      {/* Checklist */}
      <div className="space-y-4 text-left mb-10">
        {checks.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-200">
            <span className="p-2 rounded-full bg-transparent">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Continue button */}
      <Link to="/profile">
        <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
          Continue
        </button>
      </Link>
    </div>
  );
}
