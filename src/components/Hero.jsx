import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import { Calendar, BarChart3, Users, TrendingUp } from 'lucide-react';

const ERPDashboardHero = () => {
  const [activeUsers, setActiveUsers] = useState(1240);
  const [revenue, setRevenue] = useState(700);

  const revenueData = [
    { month: 'Jan', value: 200 },
    { month: 'Feb', value: 350 },
    { month: 'Mar', value: 280 },
    { month: 'Apr', value: 520 },
    { month: 'May', value: 700 }
  ];

  const pieData = [
    { name: 'Sales', value: 55, color: '#8B5CF6' },
    { name: 'Marketing', value: 28, color: '#F59E0B' },
    { name: 'Support', value: 17, color: '#EF4444' }
  ];

  const lineData = [
    { point: 500 }, { point: 400 }, { point: 600 }, { point: 750 }, 
    { point: 650 }, { point: 550 }, { point: 700 }, { point: 600 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10 - 5));
      setRevenue(prev => Math.max(600, prev + Math.floor(Math.random() * 20 - 10)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-28 sm:w-40 h-28 sm:h-40 bg-pink-300 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex flex-wrap items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-6 sm:mb-8 shadow-lg">
          <Calendar className="w-5 h-5 text-purple-600" />
          <span className="text-gray-700 text-sm sm:text-base font-medium">
            Unified solutions for enterprise control, clarity, and scalability.
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              One Platform to Run<br />
              Your Entire <span className="text-purple-600">Business</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed">
              Cloud-based ERP that unifies finance, operations, inventory, HR, and CRM — designed for growing teams and scaling companies.
            </p>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-gray-700 text-sm sm:text-base font-medium">
                Trusted by 5,000+ companies
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition border border-gray-200 w-full sm:w-auto">
                Book a Live Demo
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition w-full sm:w-auto">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative space-y-6">
            {/* Revenue */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl animate-float">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm text-gray-600 font-medium">Total Revenue</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">${revenue}k</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </div>
                <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600 p-1 bg-purple-100 rounded-lg" />
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Bar dataKey="value" fill="#8B5CF6" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Users */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm text-gray-600 font-medium">Active Users</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-indigo-600">{activeUsers.toLocaleString()}</span>
                    <span className="text-xs sm:text-sm text-green-600 font-medium">+4.5%</span>
                  </div>
                </div>
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600 p-1 bg-indigo-100 rounded-lg" />
              </div>
            </div>

            {/* Countries */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                {[
                  { flag: '🇬🇧', country: 'United Kingdom', value: '2,890' },
                  { flag: '🇮🇩', country: 'Indonesia', value: '1,970' },
                  { flag: '🇩🇪', country: 'Germany', value: '780' }
                ].map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-lg">{c.flag}</span>
                      <span className="text-gray-700 font-medium">{c.country}</span>
                    </div>
                    <span className="text-gray-900 font-bold">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie (position relative on mobile) */}
            <div className="sm:absolute sm:top-8 sm:right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <h4 className="text-xs sm:text-sm font-medium text-gray-600 text-center mb-2">Sales Performance</h4>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={30} outerRadius={60} dataKey="value">
                    {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 text-xs">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-full"></div><span>55%</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded-full"></div><span>28%</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div><span>17%</span></div>
              </div>
            </div>

            {/* Analytics Icon */}
            <div className="hidden sm:flex sm:absolute sm:bottom-32 sm:right-8 bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-xl shadow-lg animate-pulse">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Line Background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-64 opacity-20">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <Line type="monotone" dataKey="point" stroke="#8B5CF6" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ERPDashboardHero;
