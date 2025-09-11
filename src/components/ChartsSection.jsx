import React from 'react';

const ChartsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-lg">
            <p className="text-gray-600 text-sm mb-4">
              Key Features & Benefits
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Work Smarter, Scale Faster
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 leading-relaxed">
              Our ERP platform is packed with powerful features designed to eliminate manual work, 
              enhance accuracy, and help your business grow — without growing your overhead.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Real-Time Reporting Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            {/* Line Chart */}
            <div className="h-64 mb-8 relative">
              <svg className="w-full h-full" viewBox="0 0 500 200">
                <path
                  d="M50,150 L80,120 L120,80 L160,140 L200,90 L240,110 L280,70 L320,130 L360,85 L420,95 L460,75"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Data points */}
                <circle cx="50" cy="150" r="4" fill="#8b5cf6" />
                <circle cx="80" cy="120" r="4" fill="#8b5cf6" />
                <circle cx="120" cy="80" r="4" fill="#8b5cf6" />
                <circle cx="160" cy="140" r="4" fill="#8b5cf6" />
                <circle cx="200" cy="90" r="4" fill="#8b5cf6" />
                <circle cx="240" cy="110" r="4" fill="#8b5cf6" />
                <circle cx="280" cy="70" r="4" fill="#8b5cf6" />
                <circle cx="320" cy="130" r="4" fill="#8b5cf6" />
                <circle cx="360" cy="85" r="4" fill="#8b5cf6" />
                <circle cx="420" cy="95" r="4" fill="#8b5cf6" />
                <circle cx="460" cy="75" r="4" fill="#8b5cf6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Real-Time Reporting & Analytics
            </h3>
            <p className="text-gray-600">
              Stay on top of your business with live dashboards, custom reports, and instant insights.
            </p>
          </div>

          {/* Process Automation Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            {/* Donut Chart */}
            <div className="h-64 mb-8 flex items-center justify-center relative">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {/* Background circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#f3f4f6"
                    strokeWidth="20"
                    fill="none"
                  />
                  {/* Blue segment (36%) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#8b5cf6"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={`${36 * 5.03} 502.3`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                  {/* Orange segment (47%) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#f97316"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={`${47 * 5.03} 502.3`}
                    strokeDashoffset={`-${36 * 5.03}`}
                    strokeLinecap="round"
                  />
                  {/* Pink segment (17%) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#ec4899"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={`${17 * 5.03} 502.3`}
                    strokeDashoffset={`-${(36 + 47) * 5.03}`}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Percentage labels */}
                <div className="absolute top-4 right-8 text-sm text-gray-500">36%</div>
                <div className="absolute bottom-20 left-4 text-sm text-gray-500">47%</div>
                <div className="absolute bottom-8 right-12 text-sm text-gray-500">17%</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Process Automation
            </h3>
            <p className="text-gray-600">
              Automate repetitive tasks across finance, HR, sales, and inventory.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Multi-Location Support Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-6">
                Simplify global operations, avoid manual reconciliations, and reduce errors.
              </p>
              
              {/* Country Progress Bars */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center w-40">
                    <div className="w-6 h-4 bg-blue-600 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">United Kingdom</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-800 w-8">2,8</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center w-40">
                    <div className="w-6 h-4 bg-red-500 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Indonesia</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-800 w-8">1,9</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center w-40">
                    <div className="w-6 h-4 bg-yellow-500 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Germany</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-800 w-8">78</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center w-40">
                    <div className="w-6 h-4 bg-red-600 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Monaco</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-800 w-8">58</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Multi-Location & Multi-Currency Support
            </h3>
            <p className="text-gray-600">
              Stay on top of your business with live dashboards, custom reports, and instant insights.
            </p>
          </div>

          {/* Role-Based Access Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            {/* Bar Chart */}
            <div className="h-64 mb-8 flex items-end justify-center space-x-3">
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 w-8 h-32 rounded-t mb-2"></div>
                <span className="text-xs text-gray-500">may</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-400 w-8 h-20 rounded-t mb-2"></div>
                <span className="text-xs text-gray-500">jan</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 w-8 h-28 rounded-t mb-2"></div>
                <span className="text-xs text-gray-500">feb</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-400 w-8 h-24 rounded-t mb-2"></div>
                <span className="text-xs text-gray-500">mar</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 w-8 h-36 rounded-t mb-2"></div>
                <span className="text-xs text-gray-500">apr</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 w-8 h-40 rounded-t mb-2"></div>
                <span className="text-xs text-gray-500">may</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-400 w-8 h-26 rounded-t mb-2"></div>
                <span className="text-xs text-gray-500">jun</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Role-Based Access & Permissions
            </h3>
            <p className="text-gray-600">
              Stay on top of your business with live dashboards, custom reports, and instant insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;