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
import { SunIcon, BellIcon } from '@heroicons/react/24/solid';
import { ChevronDown } from "lucide-react";



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
  const [side, setSide] = useState("Buy");
  const [orderType, setOrderType] = useState("Limit");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert(`${side} ${amount} @ ${price} (${orderType})`);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Top header small stats */}
      <header className="flex items-center justify-between bg-transparent text-white px-4 py-2">
        {/* Left Section: Pair Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center">
              <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs">E</span>
              <span className="-ml-2 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-xs border border-black">B</span>
            </div>
            <span className="text-sm font-semibold">ETH•BTC ▼</span>
          </div>
        </div>

        {/* Middle Section: Stats */}
        <div className="flex items-center gap-6 text-sm">
          <div>
            <span className="text-gray-400">Last price</span>{" "}
            <span className="ml-2">20,715.67 USD</span>{" "}
            <span className="text-red-500 ml-1">-1.98%</span>
          </div>
          <div>
            <span className="text-gray-400">24h High</span>{" "}
            <span className="ml-2">22,556.91 USD</span>
          </div>
          <div>
            <span className="text-gray-400">24h Low</span>{" "}
            <span className="ml-2">22,556.91 USD</span>
          </div>
          <div>
            <span className="text-gray-400">24h Vol(BTC)</span>{" "}
            <span className="ml-2">274,914,953.53 USD</span>
          </div>
          <div>
            <span className="text-gray-400">24h Vol(ETH)</span>{" "}
            <span className="ml-2">144,014,953.53 USD</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-0.5">
          <BellIcon className="w-5 h-5 hover:text-orange-400" />
          <div className="w-px h-6 bg-gray-600" aria-hidden="true"></div>
          <a href="#" className="hover:text-orange-400">English</a>
          <div className="w-px h-6 bg-gray-600" aria-hidden="true"></div>
          <SunIcon className="w-5 h-5 hover:text-orange-400" />
        </div>
      </header>

      {/* Grid layout */}
      <div className="grid grid-cols-12 gap-5 p-3">
        {/* Left: Chart */}
        <div className="col-span-6 grid grid-cols-1">
          <div className="bg-[#111214] p-4 rounded-xl shadow-sm">
          {/* Top Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Price chart</h3>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              {/* Timeframe Selector */}
              <div className="flex items-center gap-1">
                <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer">15M</span>
                <span className="px-2 py-1 cursor-pointer">1H</span>
                <span className="px-2 py-1 cursor-pointer">1D</span>
                <span className="px-2 py-1 cursor-pointer">1W</span>
              </div>
              {/* Indicators */}
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-purple-400">
                  MA(7): <strong>28,826.02</strong>
                </span>
                <span className="flex items-center gap-1 text-yellow-400">
                  MA(25): <strong>19,212.04</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChart}>
                <CartesianGrid stroke="#1f1f1f" vertical={false} />
                <XAxis dataKey="time" tick={{ fill: "#9aa0a6", fontSize: 10 }} />
                <YAxis
                  tick={{ fill: "#9aa0a6", fontSize: 10 }}
                  domain={["dataMin - 500", "dataMax + 500"]}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0b0b0b", border: "none" }}
                  labelStyle={{ color: "#9aa0a6" }}
                />
                <Line type="monotone" dataKey="price" stroke="#16a34a" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

          <div className="bg-[#0e0e0f] p-3 rounded mt-4">
            <h4 className="text-sm text-gray-300 mb-2">Orders</h4>
            <div className="flex gap-2">
              <button className="bg-yellow-500 text-black px-6 py-1 rounded-md font-medium hover:bg-yellow-600 transition">
                Open Orders
              </button>
              <button className="bg-gray-700 text-white px-6 py-1 rounded-md font-medium hover:bg-gray-600 transition">
                Order History
              </button>
            </div> 
            <div className="grid grid-cols-7 gap-3">
              <div>Date</div>
              <div>Past</div>
              <div>Time</div>
              <div>Price</div>
              <div>Date</div>
              <div>Date</div>
            </div>         
          </div>
        </div>

        {/* Middle: Order book */}
<div className="col-span-3 bg-[#111214] p-4 rounded-xl shadow-sm w-full max-w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-200">Order book</h3>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 text-xs text-gray-500 mb-2 px-2">
        <div className="text-right">Price (USD)</div>
        <div className="text-center">Amount (ETH)</div>
        <div className="text-right">Amount (BTC)</div>
      </div>

      {/* Scrollable Book */}
      <div className="h-[400px] overflow-y-auto space-y-0.5">
        {/* Asks */}
        {mockOrderBook.asks.map((ask, i) => (
          <div
            key={`ask-${i}`}
            className="relative grid grid-cols-3 text-xs py-1 px-2 text-red-400"
          >
            <div
              className="absolute inset-0 bg-red-500/10 -z-10 rounded-r"
              style={{ width: `${ask.depth}%` }}
            ></div>
            <div className="text-right">{ask.price}</div>
            <div className="text-center">{ask.amount}</div>
            <div className="text-right text-gray-400">{ask.total}</div>
          </div>
        ))}

        {/* Mid Line */}
        <div className="py-2 text-center text-sm font-semibold text-gray-300 border-y border-[#222] my-1 flex justify justify-between text-xs">
          <div>22,245.99</div>
          <div>22,245.99 USD</div>
          <div>22,245.99</div>
        </div>

        {/* Bids */}
        {mockOrderBook.bids.map((bid, i) => (
          <div
            key={`bid-${i}`}
            className="relative grid grid-cols-3 text-xs py-1 px-2 text-green-400"
          >
            <div
              className="absolute inset-0 bg-green-500/10 -z-10 rounded-r"
              style={{ width: `${bid.depth}%` }}
            ></div>
            <div className="text-right">{bid.price}</div>
            <div className="text-center">{bid.amount}</div>
            <div className="text-right text-gray-400">{bid.total}</div>
          </div>
        ))}
      </div>
    </div>

        {/* Right: Buy / Sell panel + Price history */}
        <div className="col-span-3 flex flex-col gap-6">
          {/* Buy/Sell panel */}
          <div className="bg-[#111214] p-4 rounded-xl shadow-sm w-full max-w-sm">
                {/* Buy / Sell Toggle */}
                <div className="flex rounded-lg overflow-hidden mb-4">
                  <button
                    onClick={() => setSide("Buy")}
                    className={`flex-1 py-2 text-sm font-semibold ${
                      side === "Buy" ? "bg-green-500 text-black" : "bg-gray-800 text-gray-300"
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setSide("Sell")}
                    className={`flex-1 py-2 text-sm font-semibold ${
                      side === "Sell" ? "bg-red-500 text-black" : "bg-gray-800 text-gray-300"
                    }`}
                  >
                    Sell
                  </button>
                </div>

                {/* Order Type Tabs */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 border-b border-[#1f1f1f] pb-2">
                  {["Limit", "Market", "Stop limit"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`${
                        orderType === type
                          ? "text-yellow-400 border-b-2 border-yellow-400"
                          : "hover:text-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                  <ChevronDown size={16} className="ml-auto text-gray-500" />
                </div>

                {/* Order Form */}
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  {/* Price */}
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Price</label>
                    <div className="flex items-center bg-[#0b0b0c] rounded px-3 py-2">
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="4"
                        className="bg-transparent flex-1 text-sm text-gray-200 outline-none"
                      />
                      <span className="text-xs text-gray-500">ETH</span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Amount</label>
                    <div className="flex items-center bg-[#0b0b0c] rounded px-3 py-2">
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="1"
                        className="bg-transparent flex-1 text-sm text-gray-200 outline-none"
                      />
                      <span className="text-xs text-gray-500">BTC</span>
                    </div>
                  </div>

                  {/* % Selector */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    {["25%", "50%", "75%", "100%"].map((p) => (
                      <button
                        key={p}
                        type="button"
                        className="px-2 py-1 hover:text-yellow-400 transition-colors"
                        onClick={() => setAmount(p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  {/* Total */}
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Total</label>
                    <div className="flex items-center bg-[#0b0b0c] rounded px-3 py-2">
                      <input
                        type="text"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        placeholder="1"
                        className="bg-transparent flex-1 text-sm text-gray-200 outline-none"
                      />
                      <span className="text-xs text-gray-500">BTC</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`w-full py-2 rounded-lg font-semibold text-black ${
                      side === "Buy" ? "bg-green-500 hover:bg-green-400" : "bg-red-500 hover:bg-red-400"
                    }`}
                  >
                    {side}
                  </button>
                </form>
              </div>

          {/* Price history / small orders */}
          <div className="bg-[#111214] p-4 rounded-xl shadow-sm flex flex-col w-full max-h-[500px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-sm text-gray-200">Price history</h4>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <FaRegClock size={12} /> Live
                  </div>
                </div>

                {/* Scrollable Table */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  <table className="w-full text-xs">
                    <thead className="text-gray-400 border-b border-[#1f1f1f] sticky top-0 bg-[#111214]">
                      <tr>
                        <th className="text-left pb-2">Price (ETH)</th>
                        <th className="text-right pb-2">Amount (BTC)</th>
                        <th className="text-right pb-2">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockPriceHistory.map((row, idx) => (
                        <tr key={idx} className="border-b border-[#1a1a1a] hover:bg-[#1a1b1e] transition">
                          <td className="py-2 text-green-400">{row.price}</td>
                          <td className="py-2 text-right text-gray-300">{row.amount}</td>
                          <td className="py-2 text-right text-gray-400">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer */}
                <div className="mt-3 text-xs text-gray-500">
                  Last 24 hours · aggregated
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}
