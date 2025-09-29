import React from "react";

export default function TrustedBy() {
  return (

    <div className="bg-[#1b9c85]">
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center gap-6 text-white">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold ">
          Choice of thousands of CPAs, CFOs, and Bookkeepers
        </h2>

        {/* Description */}
        <p className=" max-w-2xl">
          Many businesses have trusted our expert QuickBooks data conversion services, benefiting from end-to-end solutions that save time and ensure a smooth, hassle-free transition.
        </p>

        {/* Call Button */}
        <a
          href="tel:+19999999999"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
        >
          Call Us: +1-999-999-9999
        </a>

      </div>
    </section>
    </div>
  );
}
