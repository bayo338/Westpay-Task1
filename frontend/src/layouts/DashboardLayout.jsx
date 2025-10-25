import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  Wallet as WalletIcon,
  BarChart2,
  Gift,
  User2,
  LogOut,
} from "lucide-react";
import { useEffect } from "react";

export default function DashboardLayout({ user, error, setUser}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user && window.location.pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };
  return (
    <div className="flex bg-[#1a1a1a] text-white min-h-screen">
      {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

      {/* If user is logged in */}
      {user ? (
        <>
          {/* Sidebar */}
          <aside className="space-y-6 fixed top-0 left-0 h-screen w-64 bg-[#111111] flex flex-col p-4 shadow overflow-y-auto">
            <a href="/" className="font-semibold hover:text-orange-400">
              Logo
            </a>

            <div className="flex space-x-2 items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-500 mr-3"></div>
              <div className="flex flex-col space-y-1 w-44">
                <div className="flex gap-2">
                  <p className="font-semibold text-sm">Marcus Morris</p>
                  <p className="text-sm text-green-400 bg-green-950 px-1 rounded">
                    Verified</p>
                </div>
                <p className="text-gray-400 text-xs">User: #781</p>
              </div>
            </div>

            <nav className="space-y-4">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `flex items-center space-x-2 hover:text-yellow-500 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
              >
                <HomeIcon size={18} /> <span>Dashboard</span>
              </NavLink>

              <NavLink
                to="/trade"
                className={({ isActive }) =>
                  `flex items-center space-x-2 hover:text-yellow-500 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
              >
                <BarChart2 size={18} /> <span>Trade</span>
              </NavLink>

              <NavLink
                to="/wallets"
                className={({ isActive }) =>
                  `flex items-center space-x-2 hover:text-yellow-500 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
              >
                <WalletIcon size={18} /> <span>Wallets</span>
              </NavLink>

              <NavLink
                to="/gifts"
                className={({ isActive }) =>
                  `flex items-center space-x-2 hover:text-yellow-500 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
              >
                <Gift size={18} /> <span>Gifts</span>
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center space-x-2 hover:text-yellow-500 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
              >
                <User2 size={18} /> <span>Profile</span>
              </NavLink>

              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-500 hover:text-yellow-500 w-full cursor-pointer"
              >
                <LogOut size={18} /> <span>Logout</span>
              </button>
            </nav>

          </aside>

          {/* Main content */}
          <div className="ml-64 flex flex-1 flex-col">
            {/* Optional Navbar */}

            {/* Routed content */}
            <main className="flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
        </>
      ) : (
        // If user is NOT logged in
        <div className="flex flex-col items-center justify-center flex-1 p-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Welcome!</h2>
          <p className="text-lg mb-6 text-gray-300">Please log in or register</p>
          <div className="flex flex-col space-y-4 w-60">
            <Link
              className="w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 font-medium"
              to="/login"
            >
              Sign In
            </Link>
            <Link
              className="w-full bg-neutral-600 text-white p-3 rounded-md hover:bg-gray-300 font-medium"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
