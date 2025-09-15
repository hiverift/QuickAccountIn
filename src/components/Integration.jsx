import React from 'react';

const LiveDemoSection = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8 lg:gap-0">
          <div className="max-w-full lg:max-w-lg">
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              See the Platform in Action — No Signup Needed
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Live Demo & Interactive Preview
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4 lg:gap-6">
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-left lg:text-right max-w-full lg:max-w-md">
              Our ERP platform is packed with powerful features designed to eliminate manual work, 
              enhance accuracy, and help your business grow — without growing your overhead.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors">
              Schedule a Free 1:1 Demo
            </button>
          </div>
        </div>

        {/* Main Demo Image Section */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-r from-orange-200 to-pink-200 rounded-3xl opacity-50 z-10"></div>
          <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-r from-purple-300 to-blue-300 rounded-3xl opacity-60 z-20"></div>

          {/* Main image container */}
          <div className="relative z-30 bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-64 sm:h-80 lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&crop=face"
                alt="Professional businessman presenting ERP platform demo" 
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>

              {/* Demo interface overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl max-w-sm w-full">
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12l-2 5H9l-2-5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Interactive Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      Experience real-time analytics and intuitive controls
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors">
                      Try Demo Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-40">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-4 shadow-lg flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Live Demo Active</span>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-40">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-4 shadow-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-gray-900">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Companies Trust Us</div>
            </div>
          </div>
        </div>

        {/* Bottom features row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">No Setup Required</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Jump right in and explore all features instantly</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Real Data Examples</h4>
            <p className="text-gray-600 text-xs sm:text-sm">See how it works with actual business scenarios</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Expert Guidance</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Get personalized recommendations during your demo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemoSection;
