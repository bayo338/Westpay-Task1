import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import OTP from "./pages/OTP";
import NewPassword from "./pages/NewPassword";
import Cap from "./components/cap";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-white">
      <Router>
        <Navbar />

        <div className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Cap />} />

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/new-password" element={<NewPassword />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
