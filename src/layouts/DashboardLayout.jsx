import { Link, Outlet } from "react-router-dom";
import { Home as HomeIcon, Wallet as WalletIcon, BarChart2, Gift, User2 } from "lucide-react";
import { SunIcon, BellIcon } from '@heroicons/react/24/solid';

export default function DashboardLayout() {
  return (
    <div className="flex bg-[#1a1a1a] text-white">
      {/* Sidebar (static) */}
      <aside className="space-y-6 fixed top-0 left-0 h-screen w-64 bg-[#111111] flex flex-col p-4 shadow overflow-y-auto">        
        <a href="/" className="font-semibold hover:text-orange-400">Logo</a>
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-3"></div>
          <div className="flex flex-col">
            <div className="flex justify-between w-44"> <p className="font-semibold">Marcus Morris</p> <p className="text-sm text-green-400 bg-green-950">Verified</p> </div>
            <p className="text-gray-400">User: #781</p>
          </div>            
        </div>

        <nav className="space-y-4">
          <Link to="/home" className="flex items-center space-x-2 hover:text-yellow-500">
            <HomeIcon size={18} /> <span>Dashboard</span>
          </Link>
          <Link to="/trade" className="flex items-center space-x-2 hover:text-yellow-500">
            <BarChart2 size={18} /> <span>Trade</span>
          </Link>
          <Link to="/wallets" className="flex items-center space-x-2 hover:text-yellow-500">
            <WalletIcon size={18} /> <span>Wallets</span>
          </Link>
          <Link to="/gifts" className="flex items-center space-x-2 hover:text-yellow-500">
            <Gift size={18} /> <span>Gifts</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2 hover:text-yellow-500">
            <User2 size={18} /> <span>Profile</span>
          </Link>
        </nav>
      </aside>

      {/* Right side (dynamic content) */}
      <div className="ml-64 flex flex-1 flex-col">
        {/* Dummy Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 text-sm text-gray-300">
            <div className="flex items-center space-x-4">
              <Link to="#" className="hover:text-orange-400">
                <span>Market</span>
              </Link>
              <div className="w-px h-5 bg-gray-600" aria-hidden="true"></div>
              <Link to="#" className="hover:text-orange-400 flex items-center space-x-1">
              <span>Trade</span>
              <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              >
              <path d="M19 9l-7 7-7-7" />
              </svg>
              {/* Dropdown */}
              <div className="absolute hidden group-hover:block mt-2 bg-gray-800 text-gray-300 rounded shadow-lg w-32">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Spot</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Futures</a>
              </div>
            </Link>
            <div className="w-px h-6 bg-gray-600" aria-hidden="true"></div>
            <Link className="flex hover:text-orange-400">
              <span>Savings</span>
            </Link>
            </div>
            
            <div className="flex items-center space-x-4 p-0.5">
              <BellIcon className="w-5 h-5 hover:text-orange-400" />
              <div className="w-px h-6 bg-gray-600" aria-hidden="true"></div>
              <a href="#" className="hover:text-orange-400">English</a>
              <div className="w-px h-6 bg-gray-600" aria-hidden="true"></div>
              <SunIcon className="w-5 h-5 hover:text-orange-400" />
            </div>
          </nav>

        {/* Main Content (this changes when links are clicked) */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}