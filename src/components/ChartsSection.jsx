import React from "react";

const ChartsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-gray-600 text-sm mb-4">Key Features & Benefits</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Work Smarter, Scale Faster
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Our ERP platform is packed with powerful features designed to
              eliminate manual work, enhance accuracy, and help your business
              grow — without growing your overhead.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Real-Time Reporting Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            {/* Line Chart */}
            <div className="h-56 sm:h-64 mb-8 relative">
              <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">
                <path
                  d="M50,150 L80,120 L120,80 L160,140 L200,90 L240,110 L280,70 L320,130 L360,85 L420,95 L460,75"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Data points */}
                {[{x:50,y:150},{x:80,y:120},{x:120,y:80},{x:160,y:140},{x:200,y:90},{x:240,y:110},{x:280,y:70},{x:320,y:130},{x:360,y:85},{x:420,y:95},{x:460,y:75}].map((p,i)=>(
                  <circle key={i} cx={p.x} cy={p.y} r="4" fill="#8b5cf6" />
                ))}
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Real-Time Reporting & Analytics
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay on top of your business with live dashboards, custom reports,
              and instant insights.
            </p>
          </div>

          {/* Process Automation Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            {/* Donut Chart */}
            <div className="h-56 sm:h-64 mb-8 flex items-center justify-center relative">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" stroke="#f3f4f6" strokeWidth="20" fill="none"/>
                  <circle cx="100" cy="100" r="80" stroke="#8b5cf6" strokeWidth="20" fill="none"
                    strokeDasharray={`${36 * 5.03} 502.3`} strokeDashoffset="0" strokeLinecap="round"/>
                  <circle cx="100" cy="100" r="80" stroke="#f97316" strokeWidth="20" fill="none"
                    strokeDasharray={`${47 * 5.03} 502.3`} strokeDashoffset={`-${36 * 5.03}`} strokeLinecap="round"/>
                  <circle cx="100" cy="100" r="80" stroke="#ec4899" strokeWidth="20" fill="none"
                    strokeDasharray={`${17 * 5.03} 502.3`} strokeDashoffset={`-${(36 + 47) * 5.03}`} strokeLinecap="round"/>
                </svg>
                {/* Percentage labels */}
                <div className="absolute top-4 right-6 text-xs sm:text-sm text-gray-500">36%</div>
                <div className="absolute bottom-16 left-2 sm:left-4 text-xs sm:text-sm text-gray-500">47%</div>
                <div className="absolute bottom-6 right-8 sm:right-12 text-xs sm:text-sm text-gray-500">17%</div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Process Automation
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Automate repetitive tasks across finance, HR, sales, and inventory.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Multi-Location Support */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-6">
                Simplify global operations, avoid manual reconciliations, and reduce errors.
              </p>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  {color:"bg-blue-600",label:"United Kingdom",width:"85%",val:"2,8"},
                  {color:"bg-red-500",label:"Indonesia",width:"65%",val:"1,9"},
                  {color:"bg-yellow-500",label:"Germany",width:"45%",val:"78"},
                  {color:"bg-red-600",label:"Monaco",width:"25%",val:"58"},
                ].map((item,i)=>(
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center min-w-[140px]">
                      <div className={`w-6 h-4 ${item.color} rounded-sm mr-2`}></div>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full" style={{width:item.width}}></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Multi-Location & Multi-Currency Support
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay on top of your business with live dashboards, custom reports, and instant insights.
            </p>
          </div>

          {/* Role-Based Access */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            {/* Bar Chart */}
            <div className="h-56 sm:h-64 mb-8 flex items-end justify-center space-x-2 sm:space-x-3">
              {[
                {h:"h-32",label:"may",color:"bg-blue-500"},
                {h:"h-20",label:"jan",color:"bg-blue-400"},
                {h:"h-28",label:"feb",color:"bg-blue-500"},
                {h:"h-24",label:"mar",color:"bg-blue-400"},
                {h:"h-36",label:"apr",color:"bg-blue-500"},
                {h:"h-40",label:"may",color:"bg-blue-600"},
                {h:"h-26",label:"jun",color:"bg-blue-400"},
              ].map((bar,i)=>(
                <div key={i} className="flex flex-col items-center">
                  <div className={`${bar.color} w-6 sm:w-8 ${bar.h} rounded-t mb-1 sm:mb-2`}></div>
                  <span className="text-[10px] sm:text-xs text-gray-500">{bar.label}</span>
                </div>
              ))}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
              Role-Based Access & Permissions
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay on top of your business with live dashboards, custom reports,
              and instant insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
