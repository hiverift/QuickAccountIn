import React, { useState } from 'react';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Jonathan Reyes",
      title: "Co-Founder & CEO",
      description: "A strategic thinker with a heart for product innovation, Jonathan leads Euphoria's vision and company growth. With over a decade in enterprise software, he's committed to building tools that empower teams, not overwhelm them.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face&ixlib=rb-4.0.3&q=80"
    },
    {
      name: "Sarah Johnson",
      title: "Co-Founder & CTO",
      description: "A visionary engineer passionate about scalable cloud solutions, Sarah drives Euphoria's technical innovation and ensures our platform stays ahead of the curve in modern business tech.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop&crop=face&ixlib=rb-4.0.3&q=80"
    }
  ];

  const [currentMember, setCurrentMember] = useState(0);
  const handleContact = () => setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  const current = teamMembers[currentMember];

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16 gap-6 lg:gap-0">
          <div className="bg-white shadow-sm rounded-lg p-2 sm:p-3 border border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500">works for modern companies.</p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-sm sm:text-base text-gray-500 mb-1 sm:mb-2 max-w-full lg:max-w-md">
              Behind Euphoria is a group of innovators, engineers, and leaders passionate about transforming how businesses operate.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">Meet the Team</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-between min-h-[400px]">
              <div>
                <p className="text-sm sm:text-base text-gray-500 mb-2 sm:mb-3">{current.title}</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-5">{current.name}</h2>
                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  {current.description}
                </p>
              </div>
              <button
                onClick={handleContact}
                className="bg-purple-100 hover:bg-purple-200 text-purple-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-colors flex items-center shadow-sm border border-purple-200 self-start"
              >
                Contact Us
                <span className="ml-2 sm:ml-3 text-pink-400 text-base sm:text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative w-full">
            <img 
              src={current.image} 
              alt={current.name}
              className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg" 
            />
            {/* Dots for navigation hint */}
            <div className="absolute top-3 sm:top-6 right-3 sm:right-6 flex space-x-2">
              {[0, 1].map((idx) => (
                <div
                  key={idx}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors ${
                    idx === currentMember ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
