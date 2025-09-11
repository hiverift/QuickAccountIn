import React from 'react';

const LiveDemoSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-lg">
            <p className="text-gray-600 text-sm mb-4">
              See the Platform in Action — No Signup Needed
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Live Demo & Interactive Preview
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md text-right">
              Our ERP platform is packed with powerful features designed to eliminate manual work, 
              enhance accuracy, and help your business grow — without growing your overhead.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Schedule a Free 1:1 Demo
            </button>
          </div>
        </div>

        {/* Main Demo Image Section */}
        <div className="relative">
          {/* Gradient overlays to simulate the layered effect */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-r from-orange-200 to-pink-200 rounded-3xl opacity-60 z-10"></div>
          <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-r from-purple-300 to-blue-300 rounded-3xl opacity-70 z-20"></div>
          
          {/* Main image container */}
          <div className="relative z-30 bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96 lg:h-[500px]">
              {/* Professional business image */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&crop=face"
                alt="Professional businessman presenting ERP platform demo" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
              
              {/* Demo interface elements overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12l-2 5H9l-2-5z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Interactive Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Experience real-time analytics and intuitive controls
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                      Try Demo Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements for visual interest */}
          <div className="absolute top-8 right-8 z-40">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Demo Active</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 z-40">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-600">Companies Trust Us</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom features row */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">No Setup Required</h4>
            <p className="text-gray-600 text-sm">Jump right in and explore all features instantly</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Real Data Examples</h4>
            <p className="text-gray-600 text-sm">See how it works with actual business scenarios</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Guidance</h4>
            <p className="text-gray-600 text-sm">Get personalized recommendations during your demo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemoSection;