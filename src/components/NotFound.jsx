import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function NotFound() {
  const location = useLocation();
  // Agar path A se start hota hai
const isAStartPath = /^\/A/.test(location.pathname); // case-sensitive ✅

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-white/10"></div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white animate-bounce">404</h1>
        <h2 className="text-2xl md:text-3xl text-white mb-4 animate-pulse">
          Page Not Found
        </h2>
        <p className="text-white mb-2">
          Sorry, we couldn't find the page you were looking for.
        </p>
        {/* Show the wrong path */}
        <p className="text-yellow-200 mb-6">
        </p>
        {/* Sticker Icons */}
        {/* <div className="flex justify-center gap-6 mb-8">
          <span className="animate-spin text-white text-3xl">:rocket:</span>
          <span className="animate-bounce text-white text-3xl">:flying_saucer:</span>
          <span className="animate-pulse text-white text-3xl">:ringed_planet:</span>
        </div> */}
        {/* Conditional Button */}
        {isAStartPath ? (
          <Link
            to="/Accounting"
            className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Go to Accounting
          </Link>
        ) : (
          <Link
            to="/"
            className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Go Home
          </Link>
        )}
      </div>
    </div>
  );
}









