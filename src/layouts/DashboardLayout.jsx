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

        {/* Main Content (this changes when links are clicked) */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}