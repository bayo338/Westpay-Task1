import { Link } from "react-router-dom";

export default function Cap() {
  return (
    <section className="w-full h-full flex items-center justify-center bg-transparent">
      <Link to="/login">
        <button className="bg-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
          Sign in
        </button>
      </Link>
    </section>
  );
}
