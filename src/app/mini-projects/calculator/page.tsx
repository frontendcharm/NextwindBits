"use client";
import { useState, useEffect } from "react";

export default function SaaSCalculator() {
  const [seats, setSeats] = useState(1);
  const [usage, setUsage] = useState(1000);
  const [discount, setDiscount] = useState("0");
  const [total, setTotal] = useState(0);
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);

  const BASE_PRICE = 10;
  const USAGE_PRICE = 0.01;

  useEffect(() => {
    const baseTotal = seats * BASE_PRICE;
    const usageTotal = usage * USAGE_PRICE;
    const subtotal = baseTotal + usageTotal;
    const discountAmount = subtotal * (parseInt(discount) / 100);
    const finalTotal = subtotal - discountAmount;
    setTotal(finalTotal);
  }, [seats, usage, discount]);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">
            SaaS Pricing Calculator
          </h2>
          <p className="text-sm text-gray-400">
            Calculate your monthly subscription cost
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Seats Input */}
          <div className="space-y-2">
            <label
              htmlFor="seats"
              className="block text-sm font-medium text-gray-300"
            >
              Number of Seats
            </label>
            <input
              id="seats"
              type="number"
              value={seats}
              onChange={(e) => setSeats(Math.max(1, parseInt(e.target.value)))}
              min="1"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Usage Slider */}
          <div className="space-y-2">
            <label
              htmlFor="usage"
              className="block text-sm font-medium text-gray-300"
            >
              Monthly Usage (in units)
            </label>
            <input
              type="range"
              id="usage"
              min="0"
              max="10000"
              step="100"
              value={usage}
              onChange={(e) => setUsage(Number(e.target.value))}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-sm text-gray-400">
              {usage.toLocaleString()} units
            </div>
          </div>

          {/* Discount Dropdown */}
          <div className="space-y-2">
            <label
              htmlFor="discount"
              className="block text-sm font-medium text-gray-300"
            >
              Discount Tier
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDiscountOpen(!isDiscountOpen)}
                className="w-full px-3 py-2 text-left border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {discount === "0" ? "No Discount" : `${discount}% Off`}
              </button>
              {isDiscountOpen && (
                <div className="absolute z-10 w-full mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg">
                  <div className="py-1">
                    {["0", "10", "20", "30"].map((value) => (
                      <button
                        key={value}
                        onClick={() => {
                          setDiscount(value);
                          setIsDiscountOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left text-gray-300 hover:bg-gray-600"
                      >
                        {value === "0" ? "No Discount" : `${value}% Off`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-900">
          {/* Price Breakdown */}
          <div className="space-y-4">
            <div className="pt-4 border-t border-gray-700">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">
                  Base Price (${BASE_PRICE}/seat):
                </span>
                <span className="text-gray-300">
                  ${(seats * BASE_PRICE).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">
                  Usage Price (${USAGE_PRICE}/unit):
                </span>
                <span className="text-gray-300">
                  ${(usage * USAGE_PRICE).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Discount ({discount}%):</span>
                <span className="text-gray-300">
                  -$
                  {(
                    (seats * BASE_PRICE + usage * USAGE_PRICE) *
                    (parseInt(discount) / 100)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            {/* Total */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-100">
                  Total Monthly Cost:
                </span>
                <span className="text-2xl font-bold text-blue-500">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
