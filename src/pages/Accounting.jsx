import React from "react";
import HeroSection from "../components/HeroSection";

export default function Accounting() {
  return (
    <div>
      <HeroSection />
      {/* Baaki Accounting page ka content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Accounting Page Content</h1>
        <p className="text-gray-600">Yaha tum apne accounting ka flow, table ya chart add kar sakte ho.</p>
      </div>
    </div>
  );
}
