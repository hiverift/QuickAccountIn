import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500 text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">To Soon</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Something Great is Coming Soon
        </h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
          We’re working hard behind the scenes to bring you an exciting new
          experience. Stay tuned — this page will be launching very soon.  
          Thank you for your patience!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
          >
            Try It Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
