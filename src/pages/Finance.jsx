import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import ProductOverview from '../components/ProductOverview';
import ChartsSection from '../components/ChartsSection';
import SeqSection from '../components/seqSection';
import CTA from '../components/CTA';

const CompleteERPLanding = () => {
  const [activeUsers, setActiveUsers] = useState(1240);

  // Chart data
  const heroChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 700 },
    { name: 'May', value: 650 },
    { name: 'Jun', value: 800 }
  ];

  // Animate active users
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 shadow-lg text-sm sm:text-base">
              <span className="text-gray-700 font-medium">GET UNLIMITED ACCESS WITH OUR PRO PLAN</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-snug sm:leading-tight lg:leading-tight">
                Streamline Your Financial<br />
                Operations <span className="text-purple-600">with Confidence</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                Our comprehensive platform integrates all your financial processes, from accounting to reporting, ensuring accuracy, efficiency, and peace of mind for your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                  Get a demo
                </button>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition-all w-full sm:w-auto">
                  Start free
                </button>
              </div>
            </div>

            {/* Right Chart */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl w-full h-56 sm:h-64 md:h-72">
                <div className="flex justify-between text-gray-500 text-xs sm:text-sm mb-4 px-1">
                  <span>$700k</span>
                  <span>$600k</span>
                  <span>$500k</span>
                </div>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart data={heroChartData}>
                    <XAxis axisLine={false} tickLine={false} tick={false} />
                    <YAxis hide />
                    <Bar dataKey="value" fill="#8B5CF6" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <ChartsSection />
      <ProductOverview />
      <SeqSection />
      <CTA />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CompleteERPLanding;
