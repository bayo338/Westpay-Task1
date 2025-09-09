import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Dashboard/Home";
import Login from "./pages/SignIn/Login";
import ForgotPassword from "./pages/SignIn/ForgotPassword";
import OTP from "./pages/SignIn/OTP";
import NewPassword from "./pages/SignIn/NewPassword";
import SignUp from "./pages/SignUp/Signup";
import NewPin from "./pages/SignUp/NewPin";
import MobNum from "./pages/SignUp/MobNum";
import MobSMS from "./pages/SignUp/MobSMS";
import SecurityChecks from "./pages/SignUp/SecChk";
import ProfileSetup from "./pages/SignUp/ProfileSetup";
import OriginOfFunds from "./pages/SignUp/Funds";
import Reasons from "./pages/SignUp/Reasons";
import ChkDetails from "./pages/SignUp/ChkDetails";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-white">
      <Router>
        <Navbar />

        <div className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<SignUp />} />

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/new-pin" element={<NewPin />} />
            <Route path="/mob-num" element={<MobNum />} />
            <Route path="/mob-sms" element={<MobSMS />} />
            <Route path="/sec-chk" element={<SecurityChecks />} />
            <Route path="/profile" element={<ProfileSetup />} />
            <Route path="/funds" element={<OriginOfFunds />} />
            <Route path="/reasons" element={<Reasons />} />
            <Route path="/details" element={<ChkDetails />} />
            <Route path="/home" element={<Home />} />
             

          </Routes> 
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
