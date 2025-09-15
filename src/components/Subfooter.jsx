import React from 'react';
import { ArrowRight } from 'lucide-react';

const Subfooter = () => {
  const features = [
    {
      number: "01",
      title: "Cloud-Native by Design",
      description: "Erphoria isn't a legacy system forced into the cloud — it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.",
      color: "text-pink-300"
    },
    {
      number: "02", 
      title: "Modular & Scalable Architecture",
      description: "Erphoria isn't a legacy system forced into the cloud — it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.",
      color: "text-gray-300"
    },
    {
      number: "03",
      title: "Easy Integration", 
      description: "Erphoria isn't a legacy system forced into the cloud — it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.",
      color: "text-gray-300",
      hasImage: true
    },
    {
      number: "04",
      title: "Built with Security at the Core",
      description: "Erphoria isn't a legacy system forced into the cloud — it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.", 
      color: "text-gray-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Erphoria?
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            In a world of rigid, outdated ERP systems, Erphoria stands apart — built from the ground up to meet the 
            demands of modern business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Feature 01 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <span className="text-6xl font-bold text-pink-300">01</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {features[0].title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {features[0].description}
            </p>
          </div>

          {/* Feature 02 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-8xl font-bold text-gray-100 select-none">
              02
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-300">02</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {features[1].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Feature 03 with Image */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-8xl font-bold text-gray-100 select-none">
              03
            </div>
            <div className="relative z-10 mb-8">
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-300">03</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {features[2].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {features[2].description}
              </p>
            </div>
            {/* Mock Dashboard Image */}
            <div className="relative mt-8">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl p-6 shadow-xl">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-3 bg-gray-200 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="w-full h-2 bg-white/40 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-white/40 rounded"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="w-full h-2 bg-white/40 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-white/40 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-8xl font-bold text-gray-100 select-none">
              04
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-300">04</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {features[3].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Start your ERP journey today —{' '}
                <span className="text-blue-200">no credit card required.</span>
              </h2>
              <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                Whether you're exploring or ready to scale, 
                we're here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Talk to an Expert
                </button>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                {/* Revenue Chart */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Total Revenue</h4>
                    <div className="text-sm text-gray-500">📈</div>
                  </div>
                  <div className="flex items-end space-x-2 h-32">
                    <div className="bg-purple-500 w-8 h-16 rounded-t"></div>
                    <div className="bg-blue-400 w-8 h-20 rounded-t"></div>
                    <div className="bg-purple-300 w-8 h-12 rounded-t"></div>
                    <div className="bg-blue-500 w-8 h-24 rounded-t"></div>
                    <div className="bg-purple-500 w-8 h-28 rounded-t"></div>
                    <div className="bg-blue-600 w-8 h-32 rounded-t"></div>
                  </div>
                </div>

                {/* Active Users */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Active Users</span>
                    <span className="text-green-500 text-sm">+4.5%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1,240</div>
                </div>

                {/* Countries List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                      <span className="text-sm text-gray-700">United Kingdom</span>
                    </div>
                    <span className="text-sm font-medium">2,890</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                      <span className="text-sm text-gray-700">Indonesia</span>
                    </div>
                    <span className="text-sm font-medium">1,970</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
                      <span className="text-sm text-gray-700">Germany</span>
                    </div>
                    <span className="text-sm font-medium">780</span>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full border-8 border-orange-400" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)'}}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-purple-400" style={{clipPath: 'polygon(50% 50%, 100% 100%, 0 100%, 0 0, 70% 0)'}}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-pink-400" style={{clipPath: 'polygon(50% 50%, 0 0, 0 100%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;