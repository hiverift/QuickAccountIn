import React from "react";

export default function HeroSection() {
  return (
    <section
      id="apply-sec-hero"
      className="bg-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://services.markosis.com/wp-content/uploads/2025/06/banner-shape.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">

        {/* Left Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-left">
            Seamlessly Migrate to QuickBooks from Any Accounting Platform
          </h2>
          <p className="text-gray-700 text-lg">
            Sign up and transition to QuickBooks Desktop or Online with ease.
            <br />
            Our dedicated experts at Qbsupervisor ensure fast and seamless data conversion.
          </p>

          {/* Call Now Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://services.markosis.com/wp-content/uploads/2025/06/banner1-1.png"
            alt="Accounting Migration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
