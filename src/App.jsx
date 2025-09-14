import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that use MainLayout (with Navbar + Footer) */}
        <Route path="/" element={<MainLayout><SignUp /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
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

        {/* Dashboard routes (no Navbar + Footer) */}
        <Route path="/home" element={<DashboardLayout><Home /></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
