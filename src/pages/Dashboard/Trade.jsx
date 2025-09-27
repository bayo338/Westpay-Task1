// Trading.jsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import { Sparklines, SparklinesLine } from "react-sparklines";

const mockChart = Array.from({ length: 40 }, (_, i) => {
  const base = 30000 + Math.sin(i / 3) * 800 + Math.random() * 400;
  return {
    time: `T${i}`,
    price: Number(base.toFixed(2)),
  };
});

const mockOrderBook = {
  bids: [
    { price: "29,502.00", amount: "0.43", total: "12.65" },
    { price: "29,499.50", amount: "1.02", total: "13.67" },
    { price: "29,495.12", amount: "0.25", total: "13.93" },
    { price: "29,490.00", amount: "2.1", total: "16.03" },
    { price: "29,485.50", amount: "0.55", total: "16.30" },
  ],
  asks: [
    { price: "29,550.00", amount: "0.12", total: "3.54" },
    { price: "29,555.50", amount: "0.8", total: "4.58" },
    { price: "29,560.00", amount: "0.45", total: "5.03" },
    { price: "29,565.12", amount: "0.3", total: "5.34" },
    { price: "29,570.00", amount: "1.0", total: "6.34" },
  ],
};

const mockPriceHistory = Array.from({ length: 8 }, (_, i) => ({
  time: `${i + 1}m`,
  price: (30000 + Math.round(Math.sin(i) * 300 + Math.random() * 200)).toFixed(2),
  change: (Math.random() > 0.5 ? "+" : "-") + (Math.random() * 2).toFixed(2) + "%",
}));

const openOrders = [
  { pair: "BTC/USDT", type: "Limit", side: "Buy", price: "29,200.00", amount: "0.5", filled: "0%" },
  { pair: "BTC/USDT", type: "Stop Limit", side: "Sell", price: "30,000.00", amount: "0.12", filled: "20%" },
];

export default function TradingPage() {
  const [side, setSide] = useState("Buy"); // Buy or Sell
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // placeholder — wire to your submit logic
    alert(`${side} order: ${amount} @ ${price}`);
  };

  return (
    <div className="min-h-screen p-6 bg-[#0f0f10] text-white">
      {/* Top header small stats */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">B</div>
            <div>
              <div className="text-sm text-gray-300">BTC / USDT</div>
              <div className="text-lg font-semibold">29,502.00 <span className="text-gray-400 text-sm ml-2">-1.1%</span></div>
            </div>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-4">
            <div>24h High <span className="text-gray-200 ml-2">30,100</span></div>
            <div>24h Low <span className="text-gray-200 ml-2">29,200</span></div>
            <div>24h Vol <span className="text-gray-200 ml-2">1,234 BTC</span></div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-xs bg-gray-800 px-3 py-1 rounded">Limit</button>
          <button className="text-xs bg-gray-800 px-3 py-1 rounded">Market</button>
          <button className="text-xs bg-gray-800 px-3 py-1 rounded">Stop</button>
        </div>
      </header>

      {/* Grid layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left: Chart */}
        <div className="col-span-7 bg-[#111214] p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Price chart</h3>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-1"><span className="px-2 py-1 bg-gray-800 rounded">1m</span><span className="px-2 py-1">5m</span></div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-green-400"><ArrowUpRight size={14}/> <strong>29,502</strong></span>
                <span className="text-gray-500">MA(20)</span>
              </div>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChart}>
                <CartesianGrid stroke="#1f1f1f" vertical={false} />
                <XAxis dataKey="time" tick={{ fill: "#9aa0a6", fontSize: 10 }} />
                <YAxis tick={{ fill: "#9aa0a6", fontSize: 10 }} domain={["dataMin - 500", "dataMax + 500"]} />
                <Tooltip contentStyle={{ backgroundColor: "#0b0b0b", border: "none" }} />
                <Line type="monotone" dataKey="price" stroke="#f97316" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Orders / trades below chart */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-[#0e0e0f] p-3 rounded">
              <h4 className="text-sm text-gray-300 mb-2">Orders</h4>
              <div className="text-xs text-gray-400">No active orders</div>
            </div>
            <div className="bg-[#0e0e0f] p-3 rounded">
              <h4 className="text-sm text-gray-300 mb-2">Recent trades</h4>
              <ul className="text-xs space-y-2 text-gray-300">
                <li className="flex justify-between"><span className="text-green-400">Buy 0.01 BTC</span><span>29,501</span></li>
                <li className="flex justify-between"><span className="text-red-400">Sell 0.05 BTC</span><span>29,520</span></li>
                <li className="flex justify-between"><span className="text-green-400">Buy 0.005 BTC</span><span>29,490</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle: Order book */}
        <div className="col-span-3 bg-[#111214] p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Order Book</h3>
            <div className="text-xs text-gray-400">Depth <span className="ml-2">10</span></div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-right text-gray-400">Price / Amount / Total</div>

            <div className="divide-y divide-[#1f1f1f]">
              {/* Asks (red) */}
              {mockOrderBook.asks.map((a, idx) => (
                <div key={`ask-${idx}`} className="flex justify-between py-2 text-red-400">
                  <div className="w-1/2 text-right">{a.price}</div>
                  <div className="w-1/4 text-center">{a.amount}</div>
                  <div className="w-1/4 text-right text-gray-400">{a.total}</div>
                </div>
              ))}

              {/* Mid line */}
              <div className="py-2 border-t border-b border-[#222] text-center text-gray-300">29,502.00</div>

              {/* Bids (green) */}
              {mockOrderBook.bids.map((b, idx) => (
                <div key={`bid-${idx}`} className="flex justify-between py-2 text-green-400">
                  <div className="w-1/2 text-right">{b.price}</div>
                  <div className="w-1/4 text-center">{b.amount}</div>
                  <div className="w-1/4 text-right text-gray-400">{b.total}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Buy / Sell panel + Price history */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Buy/Sell panel */}
          <div className="bg-[#111214] p-4 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSide("Buy")}
                  className={`px-3 py-1 rounded ${side === "Buy" ? "bg-green-400 text-black" : "bg-gray-800 text-gray-300"}`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setSide("Sell")}
                  className={`px-3 py-1 rounded ${side === "Sell" ? "bg-red-400 text-black" : "bg-gray-800 text-gray-300"}`}
                >
                  Sell
                </button>
              </div>
              <div className="text-xs text-gray-400">Available: 0.0451 BTC</div>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-3">
              <div>
                <label className="text-xs text-gray-400">Price</label>
                <input value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full mt-1 p-2 bg-[#0b0b0c] rounded text-sm" placeholder="29,502.00" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Amount</label>
                <input value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-full mt-1 p-2 bg-[#0b0b0c] rounded text-sm" placeholder="0.01" />
              </div>

              <div className="flex gap-2">
                <button type="submit" className={`flex-1 py-2 rounded font-semibold ${side==="Buy"?"bg-green-400 text-black":"bg-red-400 text-black"}`}>
                  {side} {amount || "0.00"}
                </button>
                <button type="button" className="w-10 bg-gray-800 rounded flex items-center justify-center">25%</button>
                <button type="button" className="w-10 bg-gray-800 rounded flex items-center justify-center">50%</button>
              </div>
            </form>
          </div>

          {/* Price history / small orders */}
          <div className="bg-[#111214] p-4 rounded-xl shadow-sm flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-sm">Price history</h4>
              <div className="text-xs text-gray-400 flex items-center gap-2"><FaRegClock /> Live</div>
            </div>

            <div className="flex-1 overflow-auto">
              <table className="w-full text-xs">
                <thead className="text-gray-400">
                  <tr>
                    <th className="text-left pb-2">Time</th>
                    <th className="text-right pb-2">Price</th>
                    <th className="text-right pb-2">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPriceHistory.map((row, idx) => (
                    <tr key={idx} className="border-t border-[#151515]">
                      <td className="py-2 text-gray-300">{row.time}</td>
                      <td className="py-2 text-right">{row.price}</td>
                      <td className={`py-2 text-right ${row.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 text-xs text-gray-400">Last 24 hours · aggregated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
