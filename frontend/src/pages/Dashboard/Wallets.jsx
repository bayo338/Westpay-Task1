import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { FaCreditCard, FaPaperPlane, FaArrowDownLong } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { Bitcoin, CircleDollarSign, Coins, DollarSign, Copy} from "lucide-react";
import { SunIcon, BellIcon } from '@heroicons/react/24/solid';


// Slide-in drawer component
function SavingDrawer({ saving, onClose }) {
  if (!saving) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
      </div>
      
      {/* Drawer */}
      <div className="relative w-96 bg-[#111111] p-3 h-full shadow-lg animate-slideInLeft">
        <div className="text-right">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>
        
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 mb-4">
          {crypto.icon}
          <div className="text-center gap-2">
            <h2 className="text-xl font-bold">{saving.balance}</h2>
            <p className="text-gray-400">{saving.subName}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-2 mb-6">
          <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-1 text-xs rounded font-medium hover:bg-yellow-600 transition">
            <FaCreditCard /> Buy
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 text-xs rounded font-medium hover:bg-gray-600 transition">
            <MdSell /> Sell
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 text-xs rounded font-medium hover:bg-gray-600 transition">
            <FaPaperPlane /> Send
          </button>
        </div>

        {/* Example balances */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-400">Balance</p>
            <p>BTC 0.0451112</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Available</p>
            <p>BTC 0.0451112</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Pending</p>
            <p>BTC 0.0000001</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Pending</h3>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex justify-between">
              <span className="text-green-500">✔ BTC +0.0009</span>
              <span>23 January</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-500">✘ BTC -0.0011</span>
              <span>21 January</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-500">✔ BTC +0.0500</span>
              <span>20 January</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CryptoDrawer({ crypto, onClose }) {
  if (!crypto) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
      </div>
      
      {/* Drawer */}
      <div className="relative w-96 bg-[#111111] p-3 h-full shadow-lg animate-slideInLeft">
        <div className="text-right">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>
        
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 mb-4">
          {crypto.icon}
          <div className="text-center gap-2">
            <h2 className="text-xl font-bold">{crypto.balance}</h2>
            <p className="text-gray-400">{crypto.subName}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-2 mb-6">
          <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-1 text-xs rounded font-medium hover:bg-yellow-600 transition">
            <FaCreditCard /> Buy
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 text-xs rounded font-medium hover:bg-gray-600 transition">
            <MdSell /> Sell
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 text-xs rounded font-medium hover:bg-gray-600 transition">
            <FaPaperPlane /> Send
          </button>
        </div>

        {/* Example balances */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-400">Balance</p>
            <p>BTC 0.0451112</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Available</p>
            <p>BTC 0.0451112</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Pending</p>
            <p>BTC 0.0000001</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Pending</h3>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex justify-between">
              <span className="text-green-500">✔ BTC +0.0009</span>
              <span>23 January</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-500">✘ BTC -0.0011</span>
              <span>21 January</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-500">✔ BTC +0.0500</span>
              <span>20 January</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function LocalDrawer({ local, onClose }) {
  if (!local) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
      </div>
      
      {/* Drawer */}
      <div className="relative w-96 bg-[#111111] p-3 h-full shadow-lg animate-slideInLeft">
        <div className="text-right">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>
        
        {/* Header */}
        <div className="flex flex-col items-center space-y-3 mb-4">
          {local.icon}
          <div className="text-center gap-2">
            <h2 className="text-xl font-bold">{local.balance}</h2>
            <p className="text-gray-400">{local.subName}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-2 mb-6">
          <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-1 text-xs rounded font-medium hover:bg-yellow-600 transition">
            <FaCreditCard /> Buy
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 text-xs rounded font-medium hover:bg-gray-600 transition">
            <MdSell /> Sell
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 text-xs rounded font-medium hover:bg-gray-600 transition">
            <FaPaperPlane /> Send
          </button>
        </div>

        {/* Example balances */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-400">Balance</p>
            <p>BTC 0.0451112</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Available</p>
            <p>BTC 0.0451112</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Pending</p>
            <p>BTC 0.0000001</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Pending</h3>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex justify-between">
              <span className="text-green-500">✔ BTC +0.0009</span>
              <span>23 January</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-500">✘ BTC -0.0011</span>
              <span>21 January</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-500">✔ BTC +0.0500</span>
              <span>20 January</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}






export default function Wallets() {

  const [selectedSavings, setSelectedSavings] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [selectedLocal, setSelectedLocal] = useState(null);

  // Chart data
  const data = [
    { name: "Local currency", value: 1000, color: "#f59e0b", percentage: "92.25%" },  // Orange
    { name: "Cryptocurrency", value: 1000, color: "#3b82f6", percentage: "92.25%"}, // Blue
    { name: "Savings", value: 1000, color: "#ec4899", percentage: "92.25%"},        // Pink
  ];

  const savings = [
    {
      category: "Savings",
      items: [
        {
          name: "BTC Savings Wallet",
          subName: "Bitcoin",
          icon: <Bitcoin className="text-yellow-500" />,
          balance: "BTC 102.63",
          subBalance: "NGN 80,000.39",
        },
        {
          name: "ETH Savings Wallet",
          subName: "Etherum",
          icon: <Coins className="text-blue-400" />,
          balance: "ETH 4.278899",
          subBalance: "NGN 321,888.53",
        },
        {
          name: "ETH Savings Wallet",
          subName: "Etherum",
          icon: <Coins className="text-blue-400" />,
          balance: "ETH 4.278899",
          subBalance: "NGN 321,888.53",
        },
        {
          name: "ETH Savings Wallet",
          subName: "Etherum",
          icon: <Coins className="text-blue-400" />,
          balance: "ETH 4.278899",
          subBalance: "NGN 321,888.53",
        },
        {
          name: "ETH Savings Wallet",
          subName: "Etherum",
          icon: <Coins className="text-blue-400" />,
          balance: "ETH 4.278899",
          subBalance: "NGN 321,888.53",
        },
      ],
    },
  ];

  const cryptocurrency = [
    {
      category: "Cryptocurrency",
      items: [
        {
          name: "BTC",
          subName: "Bitcoin",
          icon: <Bitcoin className="text-yellow-500" />,
          balance: "BTC 102.63",
          subBalance: "NGN 89,000.39",
        },
        {
          name: "ETH",
          subName: "Etherum",
          icon: <Coins className="text-blue-400" />,
          balance: "ETH 4.278899",
          subBalance: "NGN 5,271.88",
        },
        {
          name: "LTC",
          subName: "Litecoin",
          icon: <DollarSign className="text-gray-300" />,
          balance: "LTC 5.762489",
          subBalance: "NGN 211,088.35",
        },
        {
          name: "XRP",
          subName: "Ripple",
          icon: <CircleDollarSign className="text-sky-400" />,
          balance: "XRP 5000.00",
          subBalance: "NGN 5,000.53",
        },
        {
          name: "USDT",
          subName: "Tether",
          icon: <Coins className="text-green-400" />,
          balance: "USDT 5000.00",
          subBalance: "NGN 5,000.63",
        },
        {
          name: "BCH",
          subName: "Bitcoin Cash",
          icon: <DollarSign className="text-orange-400" />,
          balance: "BCH 0.020598",
          subBalance: "NGN 0.00",
        },
      ],
    },
  ];

  const localcurrency = [
    {
      category: "Currency",
      items: [
        {
          name: "NGN",
          subName: "Nigerian Naira",
          icon: <CircleDollarSign className="text-yellow-500" />,
          balance: "NGN 1,020,000.63",
        },
        {
          name: "NGN",
          subName: "Nigerian Naira",
          icon: <CircleDollarSign className="text-yellow-500" />,
          balance: "NGN 1,020,000.63",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
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
        {/* Main + Aside wrapper */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content */}
          <main className="flex-1 px-6 py-4 space-y-6 overflow-y-auto">
            {/* Balance details */}
            <section className="bg-[#111111] p-6 rounded-xl shadow">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Wallets Overview</h2>
                    <div className="flex space-x-2">
                      <button className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-1 rounded font-medium hover:bg-yellow-600 transition">
                        <FaCreditCard /> Buy
                      </button>
                      <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 rounded font-medium hover:bg-gray-600 transition">
                        <MdSell /> Sell
                      </button>
                      <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 rounded font-medium hover:bg-gray-600 transition">
                        <FaPaperPlane /> Send
                      </button>
                      <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-1 rounded font-medium hover:bg-gray-600 transition">
                        <FaArrowDownLong /> Receive
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex justify-between items-center space-x-12">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Combined Wallet Value:</p>
                      <p className="text-2xl font-bold mb-6">$9.0003.11</p>

                      <button className="border border-dashed border-yellow-800 px-24 py-2 rounded-md text-yellow-600 font-medium hover:bg-yellow-500 drop-shadow-xl bg-[#1a1a1a] hover:text-black transition">
                        Add a wallet
                        <p className="text-yellow-800 text-xs mt-1">Expand your portfolio</p>
                      </button>
                    </div>

                    {/* Chart + Label*/}
                    <div className="flex space-x-4">
                      <div className="w-56 h-56">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={data}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={3}
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

                      {/* Balance Info */}
                      <div class>
                        {/* Breakdown */}
                        <ul className="mt-6 space-y-2 text-sm w-50">
                          {data.map((item) => (
                            <li
                              key={item.name}
                              className="flex justify-between items-center"
                            >
                              <span className="flex items-center space-x-2">
                                <span
                                  className="inline-block w-3 h-3 rounded-full"
                                  style={{ background: item.color }}></span>
                                <span>{item.name}</span>
                                <span className="text-gray-400">
                                  {item.value} |
                                </span>
                                <span className="text-gray-400">
                                  {item.percentage}
                                </span>

                              </span>
                              
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </section>

              {/*Grid Box*/}
              <section className="grid grid-cols-3 gap-5">
                {/* Wallets-Grid 1 */}
                <div className="bg-[#111111]  p-6 rounded-xl shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Wallets</h2>
                  </div>

                  {savings.map((section, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="text-gray-400 text-xs mb-2 flex justify-between">
                        {section.category}
                        <p>Balance</p>
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((saving, i) => (
                          <li
                            key={i}
                            onClick={() => setSelectedSavings(saving)}
                            className="flex justify-between items-center text-sm text-gray-200 cursor-pointer hover:bg-gray-800 p-2 rounded"
                          >
                            {/* Left Side */}
                            <div className="flex items-center space-x-2">
                              {saving.icon}
                              <div>
                                <span>{saving.name}</span>
                                <p className="text-xs text-gray-400">{saving.subName}</p>
                              </div>
                            </div>

                            {/* Right Side */}
                            <div className="text-right">
                              <p className="font-medium">{saving.balance}</p>
                              {saving.subBalance && (
                                <p className="text-xs text-gray-400">{saving.subBalance}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                  {/*Grid 2*/}
                <div className="bg-[#111111]  p-6 rounded-xl shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Wallets</h2>
                  </div>

                  {cryptocurrency.map((section, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="text-gray-400 text-xs mb-2 flex justify-between">
                        {section.category}
                        <p>Balance</p>
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((crypto, i) => (
                          <li
                            key={i}
                            onClick={() => setSelectedCrypto(crypto)}
                            className="flex justify-between items-center text-sm text-gray-200 cursor-pointer hover:bg-gray-800 p-2 rounded"
                          >
                            {/* Left Side */}
                            <div className="flex items-center space-x-2">
                              {crypto.icon}
                              <div>
                                <span>{crypto.name}</span>
                                <p className="text-xs text-gray-400">{crypto.subName}</p>
                              </div>                    
                            </div>

                            {/* Right Side */}
                            <div className="text-right">
                              <p className="font-medium">{crypto.balance}</p>
                              {crypto.subBalance && (
                                <p className="text-xs text-gray-400">{crypto.subBalance}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/*Grid 3*/}
                <div className="bg-[#111111]  p-6 rounded-xl shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Wallets</h2>
                  </div>

                  {localcurrency.map((section, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="text-gray-400 text-xs mb-2 flex justify-between">
                        {section.category}
                        <p>Balance</p>
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((local, i) => (
                          <li
                            key={i}
                            onClick={() => setSelectedLocal(local)}   
                            className="flex justify-between items-center text-sm text-gray-200 cursor-pointer hover:bg-gray-800 p-2 rounded"
                            >
                            {/* Left Side */}
                            <div className="flex items-center space-x-2">
                              {local.icon}
                              <div>
                                <span>{local.name}</span>
                                <p className="text-xs text-gray-400">{local.subName}</p>
                              </div>
                            </div>

                            {/* Right Side */}
                            <div className="text-right">
                              <p className="font-medium">{local.balance}</p>
                              {local.subBalance && (
                                <p className="text-xs text-gray-400">{local.subBalance}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
            </section>
          </main>

           {/* Drawer */}
        <CryptoDrawer crypto={selectedCrypto} onClose={() => setSelectedCrypto(null)} />
        <SavingDrawer saving={selectedSavings} onClose={() => setSelectedSavings(null)} />
        <LocalDrawer local={selectedLocal} onClose={() => setSelectedLocal(null)} />   
        </div>
    </div>
  );
}

