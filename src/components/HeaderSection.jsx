import React from "react";

export default function HeaderSection() {
  return (
    <div className="bg-white shadow-md">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
      <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded opacity-90"></div>
                </div>
                <span className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  QuickAccounting
                </span>
              </div>

        {/* Spacer for Mobile */}
        <div className="my-4 md:hidden"></div>

        {/* Call Button */}
        <div className="flex items-center">
          <a
            href="tel:+18337832491"
            className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Call Us: +91-833-783-2491
          </a>
        </div>
      </div>
    </div>
  );
}``
