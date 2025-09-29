import React from "react";

export default function ChooseConversionSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-10">
      
      {/* Image Section */}
      <div className="flex-1 min-w-[300px] max-w-lg flex justify-center">
        <img
          src="https://services.markosis.com/wp-content/uploads/2025/06/banner3.png"
          alt="QuickBooks Conversion"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 min-w-[300px] max-w-lg bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500 font-sans">
        <h2 className="text-2xl font-bold mb-4">
          Choose Qbsupervisor for QuickBooks Data Conversion
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Free Consultation</li>
          <li>Dedicated Experts</li>
          <li>Historical Data Clean up &amp; Repair</li>
          <li>Selecting Right QuickBooks Version</li>
          <li>Fast Response &amp; Deployment</li>
          <li>Post-migration Support</li>
        </ul>
        <a
          href="tel:+18337832491"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          📞 Call Now
        </a>
      </div>

    </section>
  );
}
