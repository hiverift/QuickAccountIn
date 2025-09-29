import React from "react";

export default function ConversionPhases() {
  return (

    <div className="bg-gray-300">
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-black mb-12">
        Precise & Efficient QuickBooks Data Conversion Process
      </h2>

      {/* Phase Wrapper */}
      <div className="flex flex-wrap gap-6 justify-between">
        
        {/* Phase Item */}
        <div className="phase bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg shadow flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-2">Phase 1: Assessing the Right Fit</h3>
          <p className="text-gray-700">
            We evaluate your current accounting system and determine whether QuickBooks Desktop or Online suits your business needs best.
          </p>
        </div>

        <div className="phase bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg shadow flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-2">Phase 2: Preparing Data for Conversion</h3>
          <p className="text-gray-700">
            We clean and organize your existing financial data to ensure a smooth and accurate migration process.
          </p>
        </div>

        <div className="phase bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg shadow flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-2">Phase 3: Making the Right Choice</h3>
          <p className="text-gray-700">
            Based on your goals, we help finalize the best version of QuickBooks tailored to your workflows and business type.
          </p>
        </div>

        <div className="phase bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg shadow flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-2">Phase 4: Data Mapping</h3>
          <p className="text-gray-700">
            We map your chart of accounts, transactions, and custom fields from the old system to QuickBooks structure for consistency and clarity.
          </p>
        </div>

        <div className="phase bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg shadow flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-2">Phase 5: Conversion, Verification & Testing</h3>
          <p className="text-gray-700">
            Your data is converted and rigorously tested to ensure everything is intact, accurate, and functioning as expected.
          </p>
        </div>

        <div className="phase bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg shadow flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-2">Phase 6: Training and Follow-Up</h3>
          <p className="text-gray-700">
            We guide your team on using QuickBooks efficiently and offer ongoing support to ensure long-term success.
          </p>
        </div>

      </div>


    </section>


<div className="flex justify-center items-center p-10 ">
      <a href="#" class=" text-white px-15 py-3 rounded-lg font-semibold text-2xl  transition bg-[#1b9c85]">
    Call Now
  </a>
</div>

    </div>
  );
}
