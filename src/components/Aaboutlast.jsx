import React, { useState, useEffect } from 'react';
import { Users, MessageCircle, Eye, ArrowRight, BarChart3, PieChart, TrendingUp, MapPin, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aaboutlast = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: "Product Designer",
      location: "(hybrid - Jakarta)",
      type: "hybrid",
      tags: ["Flexible", "friendly teams", "Transparent communication"],
      gradient: "from-purple-400 to-pink-300"
    },
    {
      id: 2,
      title: "Frontend Engineer", 
      location: "(Remote)",
      type: "remote",
      tags: ["Flexible", "friendly teams", "Transparent communication"],
      gradient: "from-pink-400 via-purple-400 to-blue-500",
      featured: true
    },
    {
      id: 3,
      title: "Customer Specialist",
      location: "(Remote)",
      type: "remote", 
      tags: ["Flexible", "friendly teams", "Transparent communication"],
      gradient: "from-purple-400 to-pink-300"
    },
    {
      id: 4,
      title: "Customer Specialist",
      location: "(Remote)", 
      type: "remote",
      tags: ["Flexible", "friendly teams", "Transparent communication"],
      gradient: "from-purple-400 to-pink-300"
    }
  ];

  // Analytics data for the dashboard
  const analyticsData = {
    totalRevenue: "$200k",
    revenueData: [
      { month: 'Jan', value: 45000 },
      { month: 'Feb', value: 52000 },
      { month: 'Mar', value: 48000 },
      { month: 'Apr', value: 61000 },
      { month: 'May', value: 55000 },
      { month: 'Jun', value: 67000 }
    ],
    activeUsers: "1,240",
    growth: "+14%",
    countries: [
      { name: "United Kingdom", users: "2,890", flag: "🇬🇧" },
      { name: "Indonesia", users: "1,970", flag: "🇮🇩" },
      { name: "Germany", users: "780", flag: "🇩🇪" }
    ],
    pieChartData: [
      { label: "Desktop", value: 45, color: "#8B5CF6" },
      { label: "Mobile", value: 30, color: "#EC4899" },
      { label: "Tablet", value: 15, color: "#F59E0B" },
      { label: "Other", value: 10, color: "#10B981" }
    ]
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-2">Use Cases & Industry Solutions</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Tailored ERP Solutions for Every Industry
              </h1>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Our ERP platform is packed with powerful features designed to eliminate manual work, enhance accuracy, and help your business grow — without growing your overhead.
              </p>
        <Link to= "/Contact"> 
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
</Link>
            </div>
            
            {/* Testimonial Card */}
            <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm border">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "Julius Used: Production Planning, Inventory, BOM Management, Procurement, Solution: Track materials, manage shop-floor tasks, and reduce waste through real-time production data. We've reduced production delays by 40% since adopting the platform."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Ardi"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-sm text-gray-900">— Ardi, Operations Lead, PT. TechParts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Careers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-2">Join us in building the future of enterprise software</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Careers at Erphoria</h2>
          </div>

          {/* Job Listings */}
       <div className="space-y-4">
  {jobListings.map((job) => (
    <div 
      key={job.id}
      className={`relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg`}
    >
      <div
        className={`
          p-6 border border-gray-200 rounded-lg transition-all duration-300
          bg-white hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-indigo-500
        `}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">
                {job.title}
              </h3>
              <span className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                {job.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              {job.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 group-hover:bg-white/20 group-hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-6">
            <button className="px-6 py-2 rounded-lg font-medium transition-colors bg-pink-500 text-white hover:bg-white/30">
              Join →
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* CTA Section with Dashboard */}
      <section className="py-16 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start your ERP journey today —{' '}
                <span className="text-blue-200">no credit card required.</span>
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Whether you're planning or ready to scale, 
                we're here to help you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Talk to an Expert
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                {/* Total Revenue Chart */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Total Revenue
                  </h3>
                  <div className="h-48 bg-gradient-to-t from-blue-50 to-white rounded-lg p-4">
                    <div className="flex items-end space-x-2 h-full">
                      {analyticsData.revenueData.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className="bg-blue-500 rounded-t w-full transition-all duration-500 hover:bg-blue-600"
                            style={{ 
                              height: `${(data.value / Math.max(...analyticsData.revenueData.map(d => d.value))) * 100}%`,
                              minHeight: '10px'
                            }}
                          ></div>
                          <span className="text-xs text-gray-500 mt-2">{data.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Active Users</h4>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">{analyticsData.activeUsers}</span>
                      <span className="ml-2 text-sm text-green-600 font-medium">{analyticsData.growth}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Countries</h4>
                    <div className="space-y-2">
                      {analyticsData.countries.slice(0, 2).map((country, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="mr-2">{country.flag}</span>
                            <span className="text-sm text-gray-600">{country.name}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{country.users}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      {analyticsData.pieChartData.map((item, index) => {
                        const offset = analyticsData.pieChartData.slice(0, index).reduce((sum, item) => sum + item.value, 0);
                        const strokeDasharray = `${item.value * 2.51} ${251 - item.value * 2.51}`;
                        const strokeDashoffset = -offset * 2.51;
                        
                        return (
                          <circle
                            key={index}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke={item.color}
                            strokeWidth="8"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-300"
                          />
                        );
                      })}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">100%</div>
                        <div className="text-xs text-gray-500">Usage</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Icons */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="bg-blue-100 p-2 rounded">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-purple-100 p-2 rounded">
                    <PieChart className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">{selectedJob.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">{selectedJob.location}</p>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Job Description:</h4>
              <p className="text-gray-600 text-sm">
                Join our dynamic team and help build the future of enterprise software. 
                We're looking for passionate individuals who want to make a real impact.
              </p>
            </div>

            <div className="flex space-x-3">
              <button 
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  alert('Application submitted!');
                  closeModal();
                }}
              >
                Apply Now
              </button>
              <button 
                onClick={closeModal}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aaboutlast;