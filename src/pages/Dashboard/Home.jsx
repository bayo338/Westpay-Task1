import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Bitcoin, CircleDollarSign, Coins, DollarSign, Copy} from "lucide-react";



export default function Home() {
  // Chart data
  const data = [
    { name: "Ethereum", value: 1000, color: "#627EEA", percentage: "92.25%" },
    { name: "Bitcoin", value: 0.045, color: "#F7931A", percentage: "0.00%"  },
    { name: "USDT", value: 80, color: "#26A17B", percentage: "7.38%"  },
    { name: "Other", value: 4, color: "#AAAAAA", percentage: "0.37%"  },
  ];

  const wallets = [
    {
      category: "Local currency",
      items: [
        {
          name: "NGN",
          subName: "Nigerian Naira",
          icon: <CircleDollarSign className="text-yellow-500" />,
          balance: "NGN 1,020,000.63",
        },
      ],
    },
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
      ],
    },
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

    // Mock sparkline data
  const marketData = [
    { pair: "BNB/USDT", price: "102.63", change: "+1.41%", color: "text-green-500", chart: [100, 102, 101, 103, 102, 104] },
    { pair: "ETH/USDT", price: "3982.67", change: "+0.62%", color: "text-green-500", chart: [3900, 3920, 3960, 3980, 4000, 3983] },
    { pair: "XRP/USDT", price: "182.37", change: "-1.24%", color: "text-red-500", chart: [185, 183, 184, 182, 181, 182] },
    { pair: "FTM/USDT", price: "212.63", change: "+1.77%", color: "text-green-500", chart: [210, 211, 212, 213, 212, 213] },
    { pair: "DOT/USDT", price: "22.14", change: "-2.89%", color: "text-red-500", chart: [23, 22.5, 22.3, 22.1, 22, 21.9] },
        { pair: "ETH/USDT", price: "3982.67", change: "+0.62%", color: "text-green-500", chart: [3900, 3920, 3960, 3980, 4000, 3983] },
    { pair: "XRP/USDT", price: "182.37", change: "-1.24%", color: "text-red-500", chart: [185, 183, 184, 182, 181, 182] },
    { pair: "FTM/USDT", price: "212.63", change: "+1.77%", color: "text-green-500", chart: [210, 211, 212, 213, 212, 213] },
    { pair: "DOT/USDT", price: "22.14", change: "-2.89%", color: "text-red-500", chart: [23, 22.5, 22.3, 22.1, 22, 21.9] },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">  
        {/* Main + Aside wrapper */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content */}
          <main className="flex-1 px-6 py-4 space-y-6 overflow-y-auto">
            {/* Balance details */}
            <section className="bg-[#111111] p-6 rounded-xl shadow">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Balance details</h2>
                    <div className="flex space-x-2">
                      <button className="bg-yellow-500 text-black px-6 py-1 rounded-md font-medium hover:bg-yellow-600 transition">
                        Buy Crypto
                      </button>
                      <button className="bg-gray-700 text-white px-6 py-1 rounded-md font-medium hover:bg-gray-600 transition">
                        Deposit
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center space-x-12">
                    <div>
                      <p className="text-sm text-gray-400">Account balance:</p>
                      <p className="text-2xl font-bold mt-1">0.0003890811 BTC</p>
                      <p className="text-sm text-gray-400 mt-4">Estimated value:</p>
                      <p className="text-xl font-semibold mt-1">$900.56</p>
                    </div>
                    {/* Chart */}
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
                    <div>
                      {/* Breakdown */}
                      <ul className="mt-6 space-y-2 text-sm w-48">
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
                </section>

              {/*Grid Box*/}
              <section className="grid grid-cols-2 gap-5">
                {/* Wallets-Grid 1 */}
                <div className="bg-[#111111]  p-6 rounded-xl shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Wallets</h2>
                    <span className="text-gray-400 text-sm cursor-pointer hover:text-gray-200">
                      &gt;
                    </span>
                  </div>

                  {wallets.map((section, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="text-gray-400 text-xs uppercase mb-2">
                        {section.category}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((wallet, i) => (
                          <li
                            key={i}
                            className="flex justify-between items-center text-sm text-gray-200"
                          >
                            {/* Left Side */}
                            <div className="flex items-center space-x-2">
                              {wallet.icon}
                              <div>
                                <span>{wallet.name}</span>
                                <p className="text-xs text-gray-400">{wallet.subName}</p>
                              </div>
                            </div>

                            {/* Right Side */}
                            <div className="text-right">
                              <p className="font-medium">{wallet.balance}</p>
                              {wallet.subBalance && (
                                <p className="text-xs text-gray-400">{wallet.subBalance}</p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                  {/*Grid 2*/}
                  <div className="grid grid-cols-1 gap-6">
                      {/* Rewards */}
                      <div className="bg-[#111111] p-3 rounded-xl shadow flex text-center items-center justify-center">
                          <div className="flex flex-col items-center justify-center">
                              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mb-3">
                                  🎉
                              </div>
                              <p className="text-xs font-bold text-yellow-500 mb-4">Share your invite code</p>
                              <div className="flex justify-between gap-2">
                                <p className="text-2xl font-semibold text-white mb-4">2SG6ZM</p>
                                <p className="text-yellow-500 cursor-pointer"><Copy /></p>
                              </div>

                              <p className="text-gray-400 text-sm">Get NGN250 in Bitcoin for both you and your friend</p>
                          </div>
                      </div>
                      {/* Open Orders */}
                      <div className="bg-[#111111] p-6 rounded-xl shadow">
                        <div className="flex justify-between mb-4">
                          <h2 className="text-lg font-semibold mb-4">Open orders</h2>
                          <span className="text-gray-400 text-xl cursor-pointer hover:text-gray-200">
                            &gt;
                          </span>
                        </div>

                        
                        <div className="mb-3 ">
                          <div className="flex justify-between items-center text-sm font-medium mb-3">
                            <span>BTC/USDT</span>
                            <span className="text-gray-400">01-26 18:55:34</span>
                          </div>
                          <p className="text-gray-400 text-sm mt-1">
                            Stop Limit / <span className="text-green-500">Buy</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Price</span>
                            <span className="text-white font-medium">36511.87</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Amount</span>
                            <span className="text-white font-medium">3.459</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Filled</span>
                            <span className="text-white font-medium">0.00%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Total</span>
                            <span className="text-white font-medium">126294.55833000001</span>
                          </div>
                        </div>

                        <button className="mt-6 w-1/3 py-1 rounded bg-gray-700 text-white font-medium hover:bg-gray-600 transition">
                          Cancel
                        </button>
                      </div>                
                  </div>
            </section>
          </main>
          
          {/* Right Column (Market Prices) */}
          <aside className="w-72 space-y-6 shadow overflow-y-auto">
                {/* Market Tabs */}        
                <section className="bg-[#111111] p-4 rounded-xl shadow">
                  <div className="flex space-x-2 mb-4">
                    <button className="px-3 py-1 text-xs font-semibold bg-yellow-500 text-black rounded">
                      Hot
                    </button>
                    <button className="px-3 py-1 text-xs font-semibold bg-[#2a2a2a] text-gray-300 rounded hover:bg-[#333]">
                      Gainers
                    </button>
                    <button className="px-3 py-1 text-xs font-semibold bg-[#2a2a2a] text-gray-300 rounded hover:bg-[#333]">
                      Losers
                    </button>
                    <button className="px-3 py-1 text-xs font-semibold bg-[#2a2a2a] text-gray-300 rounded hover:bg-[#333]">
                      24h Vol
                    </button>
                  </div>

                  {/* Market List */}
                  <div className="text-sm">
                    <div className="flex justify-between text-gray-400 mb-2">
                      <span>Pair</span>
                      <span>Details</span>
                    </div>

                    <ul className="space-y-2">
                      {marketData.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-[#222] px-2 py-1 rounded"
                        >
                          {/* Pair */}
                          <span className="text-white w-20">{item.pair}</span>

                          {/* Sparkline */}
                          <div className="w-24 h-6">
                            <Sparklines data={item.chart} svgWidth={80} svgHeight={20}>
                              <SparklinesLine
                                color={item.color.includes("green") ? "limegreen" : "red"}
                                style={{ fill: "none" }}
                              />
                            </Sparklines>
                          </div>

                          {/* Price & Change */}
                          <span className={`${item.color} font-semibold text-right`}>
                            {item.price} {item.change}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>


                <section>
                  {/* Devices */}
                  <div className="bg-[#111111]  p-4 rounded-xl shadow">
                    
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-white">Devices</h2>
                      <span className="text-gray-400 text-xl cursor-pointer hover:text-gray-200">
                        &gt;
                      </span>
                    </div>

                    {/* Devices List */}
                    <ul className="divide-y divide-gray-700 text-sm text-gray-300">
                      {[
                        {
                          browser: "Chrome V103.0.0.0 (Mac OS)",
                          location: "Lagos, Nigeria",
                          ip: "102.89.43.116",
                          date: "2022-07-10 20:13:37",
                        },
                        {
                          browser: "Chrome V103.0.0.0 (Mac OS)",
                          location: "Lagos, Nigeria",
                          ip: "102.89.43.116",
                          date: "2022-07-10 20:13:37",
                        },
                        {
                          browser: "Chrome V103.0.0.0 (Mac OS)",
                          location: "Lagos, Nigeria",
                          ip: "102.89.43.116",
                          date: "2022-07-10 20:13:37",
                        },
                        {
                          browser: "Chrome V103.0.0.0 (Mac OS)",
                          location: "Lagos, Nigeria",
                          ip: "102.89.43.116",
                          date: "2022-07-10 20:13:37",
                        },
                        {
                          browser: "Chrome V103.0.0.0 (Mac OS)",
                          location: "Lagos, Nigeria",
                          ip: "102.89.43.116",
                          date: "2022-07-10 20:13:37",
                        },
                      ].map((device, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between py-3 hover:bg-[#2a2a2a] px-2 rounded transition"
                        >
                          <div>
                            <h3 className="font-semibold text-white">{device.browser}</h3>
                            <p className="text-xs text-gray-400">{device.location}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs">{device.ip}</p>
                            <p className="text-gray-400">{device.date}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
          </aside>
        </div>
    </div>
  );
}

