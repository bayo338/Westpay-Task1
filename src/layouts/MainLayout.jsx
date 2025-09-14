import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-white">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
