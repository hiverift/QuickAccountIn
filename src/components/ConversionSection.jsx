import React from "react";

export default function ConversionSection() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-14 flex flex-wrap justify-center gap-10 bg-gray-50">
      {/* Text Section */}
      <div className="flex-1 min-w-[300px] max-w-xl bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500 font-sans">
        <h2 className="text-2xl font-bold mb-4">Convert and Transfer Data to QuickBooks</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Sign up and easily convert data with Qbsupervisor's data conversion services that are faster, accurate, and reliable. Choose your destination and we’ll help you make a move:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Migrate from any accounting software to QuickBooks</li>
          <li>Migrate from QuickBooks Desktop to QuickBooks Online</li>
          <li>Migrate from QuickBooks Online to QuickBooks Desktop</li>
          <li>Migrate within QuickBooks Desktop Variants (Pro, Premier, Enterprise, Accountant)</li>
        </ul>
        <a
          href="tel:+18337832491"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          📞 Call Now
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 min-w-[300px] max-w-xl flex justify-center items-center">
        <img
          src="https://services.markosis.com/wp-content/uploads/2025/06/banner2.jpg"
          alt="QuickBooks Conversion"
          className="rounded-lg object-cover max-w-full h-auto"
        />
      </div>
    </section>
  );
}
