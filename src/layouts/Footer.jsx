import React, { useState } from 'react';
import { Search, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const ErphoriaFooter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Documentation', 'Download'],
    Company: ['About Us', 'Blog', 'Careers', 'Customers', 'Brand Assets'],
    Resources: ['Community', 'Contact', 'System Status', 'Terms of Service'],
  };

  const bottomLinks = ['Terms of Service', 'API', 'Data Processing Agreement'];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: 'https://www.facebook.com/profile.php?id=61581041226443',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/quickaccountin/',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: '#',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: '#',
    },
    {
      name: 'YouTube',
      icon: <Youtube size={20} />,
      url: '#',
    },
  ];

  return (
    <div className="w-full bg-gray-50 relative overflow-hidden overflow-x-hidden">
      <footer className="relative bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 mx-auto max-w-7xl">
        {/* Large Background ERP Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-gray-200 font-bold text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] xl:text-[500px] select-none opacity-50 tracking-wider">
            ERP
          </div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 sm:mb-20">
            {/* Left Section - Brand and Search */}
            <div className="space-y-8">
              {/* Brand */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded opacity-90"></div>
                </div>
                <span className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  QuickAccountIn
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg max-w-md sm:max-w-lg leading-relaxed">
                We are proud to offer a wide range of templates for websites, all designed to help you achieve your goals.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md sm:max-w-lg">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 pr-12 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm"
                />
                <button className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-purple-600 transition-colors">
                  <Search size={20} />
                </button>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                {socialLinks.map(({ name, icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors text-sm sm:text-base"
                  >
                    {icon}
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 sm:mb-8">{category}</h3>
                  <ul className="space-y-3 sm:space-y-5">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200/60 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              {/* Copyright */}
              <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
                Copyright © 2025 Erphoria - Enterprise Resource Planning (ERP)
              </p>

              {/* Bottom Links */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
                {bottomLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ErphoriaFooter;
