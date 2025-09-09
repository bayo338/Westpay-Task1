import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Wallet,
  BarChart2,
  Settings,
  LogOut,
  Smartphone,
} from "lucide-react";


export default function Home() {
  // Chart data
  const data = [
    { name: "Ethereum", value: 400, color: "#627EEA" },
    { name: "Bitcoin", value: 300, color: "#F7931A" },
    { name: "USDT", value: 200, color: "#26A17B" },
    { name: "Other", value: 100, color: "#AAAAAA" },
  ];

  return (
    <div className="flex min-h-screen bg-[#111111] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] flex flex-col p-6">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-500 mr-3"></div>
          <div>
            <p className="font-semibold">Marcus Morris</p>
            <p className="text-sm text-green-400">Verified</p>
          </div>
        </div>
        <nav className="space-y-4">
        <Link className="flex items-center space-x-2 hover:text-yellow-500" to="#">
            <HomeIcon size={18} /> <span>Dashboard</span>
        </Link>

          <Link className="flex items-center space-x-2 hover:text-yellow-500" to="#">
            <BarChart2 size={18} /> <span>Trade</span>
          </Link>
          <Link className="flex items-center space-x-2 hover:text-yellow-500" to="#">
            <Wallet size={18} /> <span>Wallets</span>
          </Link>
          <Link className="flex items-center space-x-2 hover:text-yellow-500" to="#">
            <Settings size={18} /> <span>Settings</span>
          </Link>
          <Link className="flex items-center space-x-2 hover:text-red-500" to="#">
            <LogOut size={18} /> <span>Logout</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Balance details */}
        <section className="bg-[#1a1a1a] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Balance details</h2>
          <div className="flex items-center space-x-10">
            {/* Chart */}
            <div className="w-48 h-48">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Balance */}
            <div>
              <p className="text-2xl font-bold">0.003698011 BTC</p>
              <p className="text-gray-400">$900.56</p>
              <div className="flex space-x-2 mt-4">
                {data.map((item) => (
                  <span
                    key={item.name}
                    className="text-xs flex items-center space-x-1"
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ background: item.color }}
                    ></span>
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wallets & Rewards */}
        <section className="grid grid-cols-2 gap-6">
          {/* Wallets */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Wallets</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>BTC Wallet: 0.001234 BTC</li>
              <li>ETH Wallet: 2.45 ETH</li>
              <li>USDT Wallet: 1500 USDT</li>
              <li>LTC Wallet: 0.75 LTC</li>
            </ul>
          </div>
          {/* Rewards */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-semibold mb-4">Rewards</h2>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mb-3">
                🎉
              </div>
              <p className="text-2xl font-bold text-yellow-500">25642M</p>
              <p className="text-gray-400 text-sm">Total earned rewards</p>
            </div>
          </div>
        </section>

        {/* Quick Orders & Devices */}
        <section className="grid grid-cols-2 gap-6">
          {/* Quick Orders */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Quick orders</h2>
            <div className="space-y-3">
              <button className="w-full py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-600">
                Buy BTC
              </button>
              <button className="w-full py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-600">
                Sell BTC
              </button>
            </div>
          </div>
          {/* Devices */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Devices</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Smartphone size={16} /> <span>iPhone 12 - Lagos, NG</span>
              </li>
              <li className="flex items-center space-x-2">
                <Smartphone size={16} /> <span>MacBook Pro - Abuja, NG</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Right Column (Market Prices) */}
      <aside className="w-72 bg-[#1a1a1a] p-6 space-y-6">
        <h2 className="text-lg font-semibold mb-4">Markets</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>BTC/USDT</span>
            <span className="text-red-500">-2.34%</span>
          </li>
          <li className="flex justify-between">
            <span>ETH/USDT</span>
            <span className="text-green-500">+1.12%</span>
          </li>
          <li className="flex justify-between">
            <span>LTC/USDT</span>
            <span className="text-red-500">-0.89%</span>
          </li>
          <li className="flex justify-between">
            <span>XRP/USDT</span>
            <span className="text-green-500">+4.21%</span>
          </li>
        </ul>
      </aside>
    </div>
  );
}
