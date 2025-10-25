import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import Trade from "./pages/Dashboard/Trade";
import Wallets from "./pages/Dashboard/Wallets";
import Gifts from "./pages/Dashboard/Gifts";
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
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("/api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (err) {
          setError("Failed to fetch user data");
          localStorage.removeItem("token");
        }
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Routes that use MainLayout (with Navbar + Footer) */}
        <Route path="/signup" element={<MainLayout><SignUp setUser={setUser} /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login setUser={setUser} /></MainLayout>} />
        <Route path="/forgot-password" element={<MainLayout><ForgotPassword /></MainLayout>} />
        <Route path="/otp" element={<MainLayout><OTP /></MainLayout>} />
        <Route path="/new-password" element={<MainLayout><NewPassword /></MainLayout>} />
        <Route path="/new-pin" element={<MainLayout><NewPin /></MainLayout>} />
        <Route path="/mob-num" element={<MainLayout><MobNum /></MainLayout>} />
        <Route path="/mob-sms" element={<MainLayout><MobSMS /></MainLayout>} />
        <Route path="/sec-chk" element={<MainLayout><SecurityChecks /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><ProfileSetup /></MainLayout>} />
        <Route path="/funds" element={<MainLayout><OriginOfFunds /></MainLayout>} />
        <Route path="/reasons" element={<MainLayout><Reasons /></MainLayout>} />
        <Route path="/details" element={<MainLayout><ChkDetails /></MainLayout>} />
        <Route path="*" element={<NotFound />} />

        {/* Dashboard (with static sidebar + dynamic content) */}
        <Route path="/" element={<DashboardLayout user={user} error={error} />}>
          <Route path="home" element={<Home />} />
          {/* You can add more dynamic pages here */}
          <Route path="trade" element={<Trade />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="wallets" element={<Wallets />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
