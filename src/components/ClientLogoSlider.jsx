import React from "react";

export default function ClientLogoSlider() {
  const logos = [
    "https://services.markosis.com/wp-content/uploads/2025/06/logo12.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo11.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo10.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo9.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo8.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo7.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo6.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo5.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo4.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo3.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo2.webp",
    "https://services.markosis.com/wp-content/uploads/2025/06/logo1.webp",
  ];

  return (
    <section className="overflow-hidden bg-white py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex animate-scroll gap-8">
        {/* Repeat logos twice for infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Tailwind animation style */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
