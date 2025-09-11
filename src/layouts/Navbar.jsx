import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [message, setMessage] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (label) => {
    setMessage(`${label} — Coming Soon`);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          QuickAccountIn
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-lg font-medium text-gray-700 relative">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/about" className="hover:text-gray-900">About</Link>
          <Link to="/features" className="hover:text-gray-900">Features</Link>
          <Link to="/finance" className="hover:text-gray-900">Finance</Link>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-900">
              Pages <ChevronDown size={18} />
            </button>

            {openDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-lg shadow-lg p-4 z-50">
                <ul className="space-y-2 text-base font-medium">
                  <li><button onClick={() => handleClick("Inventory & Supply Chain")} className="w-full text-left hover:underline">Inventory & Supply Chain</button></li>
                  <li><button onClick={() => handleClick("HR & Payroll")} className="w-full text-left hover:underline">HR & Payroll</button></li>
                  <li><button onClick={() => handleClick("CRM & Sales")} className="w-full text-left hover:underline">CRM & Sales</button></li>
                  <li><button onClick={() => handleClick("Integrations")} className="w-full text-left hover:underline">Integrations</button></li>
                  <li><button onClick={() => handleClick("Pricing & Plans")} className="w-full text-left hover:underline">Pricing & Plans</button></li>
                  <li><button onClick={() => handleClick("Contact & Demo")} className="w-full text-left hover:underline">Contact & Demo</button></li>
                  <li><button onClick={() => handleClick("404")} className="w-full text-left hover:underline">404</button></li>
                  <li><button onClick={() => handleClick("Coming Soon")} className="w-full text-left hover:underline">Coming Soon</button></li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center text-lg">
          <Link to="/signin" className="text-gray-700 hover:text-gray-900">Sign in</Link>
          <Link to="/login" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 text-base font-medium text-gray-700 space-y-3">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/features" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link to="/finance" onClick={() => setMobileOpen(false)}>Finance</Link>
          <div className="pt-2 border-t border-gray-200">
            <p className="text-gray-500 mb-2">Pages</p>
            <ul className="space-y-2">
              <li><button onClick={() => handleClick("Inventory & Supply Chain")} className="w-full text-left hover:underline">Inventory & Supply Chain</button></li>
              <li><button onClick={() => handleClick("HR & Payroll")} className="w-full text-left hover:underline">HR & Payroll</button></li>
              <li><button onClick={() => handleClick("CRM & Sales")} className="w-full text-left hover:underline">CRM & Sales</button></li>
              <li><button onClick={() => handleClick("Integrations")} className="w-full text-left hover:underline">Integrations</button></li>
              <li><button onClick={() => handleClick("Pricing & Plans")} className="w-full text-left hover:underline">Pricing & Plans</button></li>
              <li><button onClick={() => handleClick("Contact & Demo")} className="w-full text-left hover:underline">Contact & Demo</button></li>
              <li><button onClick={() => handleClick("404")} className="w-full text-left hover:underline">404</button></li>
              <li><button onClick={() => handleClick("Coming Soon")} className="w-full text-left hover:underline">Coming Soon</button></li>
            </ul>
          </div>
          <Link to="/signin" onClick={() => setMobileOpen(false)}>Sign in</Link>
          <Link to="/login" className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded" onClick={() => setMobileOpen(false)}>Login</Link>
        </div>
      )}

      {/* Message Popup */}
      {message && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-[999] text-sm">
          {message}
        </div>
      )}
    </header>
  );
}
