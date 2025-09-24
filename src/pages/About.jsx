import React from 'react';
import { BarChart3, Users, TrendingUp, PieChart, MoreHorizontal } from 'lucide-react';
import TeamMembers from '../components/TeamMember';

import Aaboutlast from '../components/Aaboutlast';

// import { motion } from "framer-motion";
import SeqSection from '../components/seqSection';


const ErphoriaLanding = () => {


  // const logos = [
  //   "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
  //   "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  //   "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
  //   "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  // ];

  // const items = [
  //   "Advanced encryption with end-to-end security",
  //   "GDPR, HIPAA, and SOC-2 compliant systems",
  //   "24/7 monitoring with proactive alerts",
  //   "Automatic backups and secure cloud hosting",
  // ];


 const decorativeImages = [
    {
      src: "https://kit.createbigsupply.com/erphoria/wp-content/uploads/sites/73/2025/08/Frame-2.png",
      rotate: "-10deg",
      size: "w-16 h-16",
    },
    {
      src: "https://kit.createbigsupply.com/erphoria/wp-content/uploads/sites/73/2025/08/Frame-1321315206.png",
      rotate: "18deg",
      size: "w-16 h-16",
    },
    {
      src: "https://kit.createbigsupply.com/erphoria/wp-content/uploads/sites/73/2025/08/Frame-1321315207.png",
      rotate: "-6deg",
      size: "w-12 h-12",
    },
  ];
  const cardData = [
    {
      number: '01',
      title: 'Cloud-Native by Design',
      description: "Euphoria isn't a legacy system forced into the cloud – it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.",
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&crop=entropy&ixlib=rb-4.0.3&q=80'
    },
    {
      number: '02',
      title: 'Modular & Scalable Architecture',
      description: "Euphoria isn't a legacy system forced into the cloud – it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.",
      image: ''
    },
    {
      number: '03',
      title: 'Easy Integration',
      description: "Euphoria isn't a legacy system forced into the cloud – it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.",
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&ixlib=rb-4.0.3&q=80'
    },
    {
      number: '04',
      title: 'Built with Security at the Core',
      description: "Euphoria isn't a legacy system forced into the cloud – it was born in the cloud. Enjoy always-on access, automatic updates, and high availability without the overhead of on-premise infrastructure.",
      image: ''
    }
  ];
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 overflow-hidden mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 relative">
        {/* Trust Bar */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-400 to-pink-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"></div>
          </div>
          <span className="text-gray-600 font-medium">Trusted by 5,000+ companies</span>
        </div>

        {/* Main Headlines */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-2 leading-tight">
            Powering the Future of
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-8 leading-tight">
            Business Operations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Erphoria, we're redefining how enterprises manage, connect, and scale their operations — all in one secure, intelligent ERP platform built for agility and growth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Talk to Our Team
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            Explore Our Platform
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="relative h-96 mt-10 px-30 sm:px-5 md:px-0  ">
          {/* Sales Performance Chart */}
          <div className="absolute left-12 top-12 w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Sales Performance Line Chart</h3>
              <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
            <div className="relative h-32">
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-32 h-16 bg-gradient-to-t from-purple-500/30 to-purple-500/10 rounded-full"></div>
              </div>
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                + 35%
              </div>
              <svg className="w-full h-full" viewBox="0 0 200 80">
                <path 
                  d="M20,60 Q60,30 100,35 T180,25" 
                  stroke="#8b5cf6" 
                  strokeWidth="2" 
                  fill="none"
                  className="opacity-80"
                />
              </svg>
            </div>
          </div>

          {/* Country Statistics */}
          <div className="absolute right-24 top-32 w-72 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-4 rounded-sm bg-gradient-to-r from-blue-600 via-white to-red-600"></div>
                  <span className="font-medium text-gray-800">United Kingdom</span>
                </div>
                <span className="font-bold text-gray-900">2,650</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-4 rounded-sm bg-gradient-to-b from-red-500 to-white"></div>
                  <span className="font-medium text-gray-800">Indonesia</span>
                </div>
                <span className="font-bold text-gray-900">1,970</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-4 rounded-sm bg-gradient-to-b from-black via-red-500 to-yellow-400"></div>
                  <span className="font-medium text-gray-800">Germany</span>
                </div>
                <span className="font-bold text-gray-900">780</span>
              </div>
            </div>
            <div className="mt-4 p-2 bg-orange-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-orange-500" />
            </div>
          </div>

          {/* Active Users Card */}
          <div className="absolute left-1/2 top-8 -translate-x-1/2 w-72 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">Active Users</span>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1,240</div>
            <div className="text-green-500 font-semibold text-sm mb-4">↑ 4.5%</div>
            
            {/* Mini Bar Chart */}
            <div className="flex items-end justify-between h-16 gap-1">
              <div className="bg-blue-400 rounded-t w-4 h-8"></div>
              <div className="bg-blue-500 rounded-t w-4 h-12"></div>
              <div className="bg-blue-400 rounded-t w-4 h-6"></div>
              <div className="bg-blue-300 rounded-t w-4 h-4"></div>
              <div className="bg-blue-600 rounded-t w-4 h-16"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
            
            {/* Additional Stats */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">United Kingdom</span>
                <span className="font-semibold">2,300</span>
              </div>
            </div>
          </div>

          {/* Total Revenue Chart */}
          <div className="absolute right-12 bottom-0 w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-gray-800">Total Revenue</span>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            
            {/* Revenue Chart */}
            <div className="flex items-end justify-between h-20 mb-4">
              <div className="w-8 h-16 bg-purple-500 rounded-t"></div>
              <div className="w-8 h-12 bg-blue-400 rounded-t"></div>
              <div className="w-8 h-8 bg-purple-400 rounded-t"></div>
              <div className="w-8 h-20 bg-blue-500 rounded-t"></div>
            </div>
            
            {/* Pie Chart */}
            <div className="flex items-center justify-between">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeDasharray="47, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    strokeDasharray="17, 100"
                    strokeDashoffset="-47"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="36, 100"
                    strokeDashoffset="-64"
                  />
                </svg>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$700k</div>
                <div className="text-sm text-gray-500">$600k</div>
              </div>
            </div>
            
            <div className="flex justify-between text-xs mt-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>47%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>36%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>17%</span>
              </div>
            </div>
          </div>

          {/* Bottom briefcase icon */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
          </div>
        </div>
      </div>



        <div className="bg-white">
 {/* Our Story Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Small Icon + Title */}
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
        <svg
          className="w-6 h-6 text-purple-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-purple-600">Our Story</h3>
    </div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      {/* Left Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl lg:text-3xl leading-relaxed text-gray-900 mb-0">
          Erphoria began with a simple but powerful realization: traditional ERP systems were no longer keeping up with the pace of modern business.
          Bloated interfaces, rigid workflows,
          <span className="text-gray-500 font-normal">
            and outdated infrastructure left growing companies stuck with tools that slowed them down instead of helping them scale.
          </span>
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Our mission is to build ERP solutions that are sleek, intuitive, and tailored to today’s fast-paced business environment.
          We focus on simplicity, speed, and efficiency so you can focus on growth.
        </p>
      </div>

      {/* Right Side - Hero Image */}
      <div className="relative flex items-center justify-center">
        <div
          className="rounded-3xl overflow-hidden w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 relative"
          style={{
            background:
              "linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #581c87 100%)",
            minHeight: "500px", // Equal height
          }}
        >
          {/* Overlay pattern for texture */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>

          {/* Simulated workspace scene */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            {/* Left side - Desk/workspace simulation */}
            <div className="absolute left-0 bottom-0 w-3/5 h-3/5">
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-800 to-blue-700 opacity-60 transform skew-y-1"></div>
              <div className="absolute bottom-16 left-8 w-32 h-20 bg-gray-800 rounded-lg">
                <div className="w-full h-16 bg-gradient-to-br from-blue-400 to-purple-300 rounded-t-lg p-2">
                  <div className="space-y-1">
                    <div className="h-2 bg-white bg-opacity-40 rounded w-3/4"></div>
                    <div className="h-1 bg-white bg-opacity-30 rounded w-1/2"></div>
                    <div className="flex gap-1 mt-2">
                      <div className="w-4 h-4 bg-white bg-opacity-50 rounded"></div>
                      <div className="w-4 h-4 bg-white bg-opacity-50 rounded"></div>
                      <div className="w-4 h-4 bg-white bg-opacity-50 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="h-4 bg-gray-700 rounded-b-lg"></div>
              </div>

              {/* Laptop */}
              <div className="absolute bottom-8 right-4 w-24 h-16 bg-gray-700 rounded-lg transform -rotate-12">
                <div className="w-full h-12 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-t-lg p-1">
                  <div className="space-y-0.5">
                    <div className="h-1 bg-white bg-opacity-50 rounded w-4/5"></div>
                    <div className="h-1 bg-white bg-opacity-40 rounded w-3/5"></div>
                    <div className="flex gap-0.5 mt-1">
                      <div className="w-2 h-2 bg-white bg-opacity-60 rounded-sm"></div>
                      <div className="w-2 h-2 bg-white bg-opacity-60 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="absolute bottom-20 left-16 w-16 h-12 bg-white bg-opacity-20 rounded transform rotate-6"></div>
              <div className="absolute bottom-22 left-18 w-14 h-10 bg-white bg-opacity-15 rounded transform -rotate-3"></div>
            </div>

            {/* Right side - Person silhouette */}
            <div className="absolute right-8 bottom-0 w-2/5 h-4/5">
              <div className="absolute bottom-0 right-8 w-20 h-40">
                <div className="absolute top-0 right-6 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute top-6 right-2 w-16 h-24 bg-white bg-opacity-15 rounded-t-3xl"></div>
                <div className="absolute top-12 right-0 w-6 h-16 bg-white bg-opacity-15 rounded-full transform rotate-12"></div>
                <div className="absolute top-12 right-14 w-6 h-12 bg-white bg-opacity-15 rounded-full transform -rotate-45"></div>
              </div>

              {/* Chair */}
              <div className="absolute bottom-0 right-4 w-16 h-20">
                <div className="absolute bottom-0 w-full h-8 bg-gray-800 bg-opacity-40 rounded-lg"></div>
                <div className="absolute bottom-6 left-2 w-12 h-16 bg-gray-800 bg-opacity-30 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-white bg-opacity-10 rounded-2xl animate-pulse"></div>
          <div
            className="absolute bottom-12 left-8 w-12 h-12 bg-yellow-400 bg-opacity-30 rounded-xl animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-16 w-8 h-8 bg-white bg-opacity-15 rounded-lg animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Our Mission Section */}
    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Side - Vision */}
      <div>
        {/* Small Icon + Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8zM9 11.586l-2.293-2.293-1.414 1.414L9 14.414l6.707-6.707-1.414-1.414L9 11.586z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-blue-600">Our Vision</h3>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          To lead the next generation of ERP innovation
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Building a future where enterprise management is effortless,
          intelligent, and fully connected — enabling organizations worldwide
          to operate with agility, precision, and clarity at any scale.
        </p>
      </div>

      {/* Right Side - Mission */}
      <div>
        {/* Small Icon + Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-purple-600">Our Mission</h3>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          To empower businesses worldwide
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          By providing a smart, secure, and scalable ERP platform that
          simplifies operations, enhances collaboration, and drives real-time
          decision-making — all in one unified digital workspace.
        </p>
      </div>
    </div>
  </div>
</section>






<div className="py-20 bg-gray-50">


<div className="bg-gray-50 py-12 px-4 container mx-auto">
      <div className="o">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-sm text-gray-500">
              At Morina, we build a modern, cloud-native ERP platform designed to streamline every critical aspect of your business — all in one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Finance Management */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Finance Management</h3>
            <p className="text-sm text-gray-600">
              Gain full control over budgeting, forecasting, and compliance with automated financial workflows.
            </p>
          </div>

          {/* Human Resources */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Human Resources</h3>
            <p className="text-sm text-gray-600">
              Gain full control over budgeting, forecasting, and compliance with automated financial workflows.
            </p>
          </div>

          {/* Inventory & Supply Chain */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory & Supply Chain</h3>
            <p className="text-sm text-gray-600">
              Gain full control over budgeting, forecasting, and compliance with automated financial workflows.
            </p>
          </div>

          {/* Customer Relationship Management (CRM) */}
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Relationship Management (CRM)</h3>
            <p className="text-sm text-gray-600 mb-2">
              Gain full control over budgeting, forecasting, and compliance with automated financial workflows.
            </p>
            <p className="text-sm text-gray-600">
              Monitor stock levels, set alerts, manage warehouses, and optimize supply chains.
            </p>
            <div className="flex justify-center mt-4">
              <div className="relative w-24 h-24">
                <div className="absolute w-full h-full border-4 border-gray-200 rounded-full"></div>
                <div className="absolute w-full h-full border-4 border-orange-400 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">35%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Intelligence & Reporting */}
          <div className="md:col-span-2 lg:col-span-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Intelligence & Reporting</h3>
            <p className="text-sm text-gray-600">
              Gain full control over budgeting, forecasting, and compliance with automated financial workflows.
            </p>
          </div>
        </div>
      </div>
    </div>

</div>





    </div>


    {/* why urop  */}

    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Why Euphoria?</h1>
        <p className="text-center text-gray-600 mb-12">
          In a world of rigid, outdated ERP systems, Euphoria stands apart – built from the ground up to meet the demands of modern business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-6 flex flex-col ${
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-pink-300 mr-3">{card.number}</span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
                  </div>
                </div>
                {index === 1 && (
                  <span className="text-3xl font-bold text-pink-300">02</span>
                )}
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>



<TeamMembers />

{/* <div className="min-h-screen bg-white flex flex-col items-center pt-12">
      <button className="mb-2 px-5 py-1 text-sm bg-gray-100 rounded-xl shadow font-medium text-gray-700 hover:bg-gray-50 transition">
        See the Platform in Action — No Signup Needed
      </button>
      <h1 className="text-4xl font-bold mb-4 text-black text-center">
        Enterprise-Grade Security You Can Trust
      </h1>
      <div className="flex flex-col lg:flex-row bg-gray-100 rounded-2xl shadow-lg max-w-6xl w-full mt-6 p-0 overflow-hidden">
        <div className="flex-1 flex items-center justify-center py-12 px-8">
          <div className="grid grid-cols-3 grid-rows-3 gap-8">
            {logos.map((src, i) => (
              <div key={i} className="bg-white rounded-lg shadow flex items-center justify-center w-28 h-24">
                <img src={src} alt={"Logo "+(i+1)} className="h-10 max-w-[60%]" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 py-12 px-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-1 text-black">
            Display as logo grid or badge list
          </h2>
          <p className="text-gray-600 mb-4">
            Stay on top of your business with live dashboards, custom reports, and instant insights.
          </p>
          <div className="bg-white rounded-xl shadow p-8 mb-4">
            <ul className="space-y-4">
              {items.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-lg leading-tight">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-1 text-indigo-500 flex-shrink-0">
                    <path d="M9 17l-5-5 1.41-1.41L9 14.17l7.59-7.59L18 8l-9 9z" fill="currentColor"/>
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded font-semibold text-base shadow-lg transition self-start">
            View Full Security Whitepaper
          </button>
        </div>
      </div>
    </div> */}

  <SeqSection />

    <Aaboutlast />
    </div>
  );
};

export default ErphoriaLanding;