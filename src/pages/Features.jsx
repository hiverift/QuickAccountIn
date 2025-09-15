import React, { useState } from 'react';
import { 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Code, 
  Settings, 
  Layers,
  GitBranch,
  Package,
  Server,
  Cloud,
  Monitor,
  Smartphone,
  Wifi,
  Lock,
  Activity,
  Globe,
  Hexagon
} from 'lucide-react';
import ChartsSection from '../components/ChartsSection';
import ProductOverview from '../components/ProductOverview'
// import PricingPlans from '../components/PricingPlans'
import CTA from '../components/CTA'

const ErphoriaHero = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Company logos/icons data - representing various tech companies and tools
  const companyIcons = [
    // Row 1
    [
      { icon: <Database className="w-8 h-8 text-blue-600" />, color: "bg-blue-50" },
      { icon: <Shield className="w-8 h-8 text-indigo-600" />, color: "bg-indigo-50" },
      { icon: <Zap className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
      { icon: <BarChart3 className="w-8 h-8 text-cyan-600" />, color: "bg-cyan-50" },
      { icon: <Users className="w-8 h-8 text-sky-600" />, color: "bg-sky-50" },
      { icon: <Code className="w-8 h-8 text-teal-600" />, color: "bg-teal-50" },
      { icon: <Settings className="w-8 h-8 text-blue-600" />, color: "bg-blue-50" },
      { icon: <Layers className="w-8 h-8 text-blue-700" />, color: "bg-blue-50" },
      { icon: <GitBranch className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
      { icon: <Package className="w-8 h-8 text-indigo-600" />, color: "bg-indigo-50" }
    ],
    // Row 2
    [
      { icon: <Server className="w-8 h-8 text-blue-600" />, color: "bg-blue-50" },
      { icon: <Cloud className="w-8 h-8 text-blue-700" />, color: "bg-blue-50" },
      { icon: <Monitor className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
      { icon: <Smartphone className="w-8 h-8 text-teal-600" />, color: "bg-teal-50" },
      { icon: <Wifi className="w-8 h-8 text-sky-600" />, color: "bg-sky-50" },
      { icon: <Lock className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" },
      { icon: <Activity className="w-8 h-8 text-blue-600" />, color: "bg-blue-50" },
      { icon: <Globe className="w-8 h-8 text-indigo-600" />, color: "bg-indigo-50" },
      { icon: <Hexagon className="w-8 h-8 text-blue-500" />, color: "bg-blue-50" }
    ]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300 overflow-hiddenm pt-10 ">
      <div className="relative flex flex-col justify-center pt-24 sm:pt-28 md:pt-30 lg:pt-36">
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
            <Database className="w-5 h-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">
              Unified solutions for enterprise control, clarity, and scalability.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Powering the Future of
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-600 mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Business Operations
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            At Erphoria, we're redefining how enterprises manage, connect, and scale their operations — all in one 
            secure, intelligent ERP platform built for agility and growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 pt-30">
            <button 
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard('talk')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              Talk to Our Team
            </button>
            <button 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard('explore')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              Explore Our Platform
            </button>
          </div>
        </div>

        {/* Animated Company Icons */}
        <div className="absolute bottom-0 left-0 right-0 pb-16 container mx-auto">
          <div className="space-y-8">
            {/* First Row - Moving Right */}
            <div className="relative overflow-hidden">
              <div className="flex space-x-6 animate-slide-right">
                {[...companyIcons[0], ...companyIcons[0]].map((company, index) => (
                  <div
                    key={`row1-${index}`}
                    className={`flex-shrink-0 w-20 h-20 ${company.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 cursor-pointer`}
                    onMouseEnter={() => setHoveredCard(`company-1-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {company.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="relative overflow-hidden">
              <div className="flex space-x-6 animate-slide-left">
                {[...companyIcons[1], ...companyIcons[1]].map((company, index) => (
                  <div
                    key={`row2-${index}`}
                    className={`flex-shrink-0 w-20 h-20 ${company.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 cursor-pointer`}
                    onMouseEnter={() => setHoveredCard(`company-2-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {company.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-300/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-300/20 rounded-full animate-float-delayed"></div>
        </div>

        {/* Tooltip for hovered elements */}
        {hoveredCard && (
          <div className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded-lg text-sm z-50 animate-fade-in">
            {hoveredCard.includes('talk') && 'Schedule a consultation'}
            {hoveredCard.includes('explore') && 'Try our platform'}
            {hoveredCard.includes('company') && 'Enterprise Integration'}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>



      <ChartsSection />
      <ProductOverview />
      {/* <PricingPlans /> */}
      <CTA />
    </div>
  );
};

export default ErphoriaHero;