import React from "react";
import { BarChart3, Users, TrendingUp, Clock } from "lucide-react";

const ErphoriaDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-blue-400">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
            <span className="text-xl font-semibold text-gray-800">Erphoria</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
              </div>
              <span className="text-sm">
                Unified solutions for enterprise control, clarity, and scalability.
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                One Platform to Run<br />
                Your Entire{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Business
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Cloud-based ERP that unifies finance, operations, inventory, HR, and CRM —
                designed for growing teams and scaling companies.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="User 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face"
                  alt="User 2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                  alt="User 3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-gray-600 text-sm font-medium">
                Trusted by 5,000+ companies
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium shadow-sm border border-gray-200 transition-colors">
                Book a Live Demo
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="flex-1 relative space-y-6">
            {/* Total Revenue Chart */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-800 font-semibold">Total Revenue</h3>
                <TrendingUp className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex items-end justify-between h-32 space-x-2">
                <div className="bg-blue-200 h-16 w-6 rounded-t"></div>
                <div className="bg-blue-300 h-24 w-6 rounded-t"></div>
                <div className="bg-blue-400 h-20 w-6 rounded-t"></div>
                <div className="bg-blue-500 h-28 w-6 rounded-t"></div>
                <div className="bg-blue-600 h-32 w-6 rounded-t"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Jan</span>
                <span>Apr</span>
                <span>May</span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-gray-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">1,240</div>
                <div className="text-green-500 text-sm font-medium">+4.5%</div>
                <div className="text-gray-600 text-sm">Active Users</div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="w-5 h-5 text-gray-500" />
                </div>
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  35%
                </div>
                <div className="text-gray-600 text-sm">Sales Performance</div>
              </div>
            </div>

            {/* Country Stats */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-3 bg-blue-600 rounded-sm"></div>
                  <span className="text-sm text-gray-700">United Kingdom</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">2,890</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-3 bg-red-500 rounded-sm"></div>
                  <span className="text-sm text-gray-700">Indonesia</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">1,970</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-3 bg-yellow-500 rounded-sm"></div>
                  <span className="text-sm text-gray-700">Germany</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">780</span>
              </div>
            </div>

            {/* Time Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg absolute bottom-6 right-6 w-16 h-16 flex items-center justify-center">
              <Clock className="w-6 h-6 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Bottom Chart */}
        <div className="mt-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">$700K</div>
                <div className="text-3xl font-bold text-white/80 mb-2">$600K</div>
                <div className="text-2xl font-bold text-white/60">$500K</div>
              </div>
            </div>

            <div className="relative h-32">
              <svg className="w-full h-full" viewBox="0 0 800 120">
                <path
                  d="M0,60 Q100,40 200,50 T400,30 T600,45 T800,25"
                  stroke="rgba(147, 51, 234, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0,80 Q100,70 200,75 T400,60 T600,70 T800,55"
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErphoriaDashboard;
