import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation(); // for active route
  const [openDropdown, setOpenDropdown] = useState(false); // Desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);     // Mobile menu
  const [pagesOpen, setPagesOpen] = useState(false);       // Mobile "Pages" dropdown

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <span className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            QuickAccounting
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-lg font-medium text-gray-700 relative">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/about" className="hover:text-gray-900">About</Link>
          <Link to="/features" className="hover:text-gray-900">Features</Link>
          <Link to="/finance" className="hover:text-gray-900">Finance</Link>

          {/* Pages Dropdown */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center gap-1 hover:text-gray-900"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Our Services <ChevronDown size={18} />
            </button>

            {openDropdown && (
              <div className="absolute top-full left-0 mt-3 w-80 bg-white text-gray-800 rounded-xl shadow-lg p-6 z-50">
                <ul className="space-y-3 text-base font-medium">
                  {[
                    { name: "Inventory & Supply Chain", path: "/comingsoon" },
                    { name: "HR & Payroll", path: "/comingsoon" },
                    { name: "CRM & Sales", path: "/comingsoon" },
                    { name: "Integrations", path: "/comingsoon" },
                    { name: "Pricing & Plans", path: "/comingsoon" },
                    { name: "Contact us", path: "/Contact" },
                    { name: "QuickSupport", path: "/QuickSupport" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        onClick={() => setOpenDropdown(false)}
                        className="w-full block py-2 px-2 rounded hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex gap-4 items-center text-lg">
          <Link
            to="/signin"
            className={`px-4 py-2 rounded font-medium transition ${
              location.pathname === "/signin"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            SignUp
          </Link>
          <Link
            to="/login"
            className={`px-4 py-2 rounded font-medium transition ${
              location.pathname === "/login"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
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
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 text-base font-medium text-gray-700 flex flex-col h-[calc(100vh-64px)]">
          {/* Scrollable Links */}
          <div className="space-y-2 overflow-y-auto pr-2 flex flex-col">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 transition">Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 transition">About</Link>
            <Link to="/features" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 transition">Features</Link>
            <Link to="/finance" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 transition">Finance</Link>

            {/* Pages Dropdown */}
            <div className="pt-2 border-t border-gray-200">
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex items-center justify-between w-full text-left text-gray-700 font-medium px-3 py-2 rounded hover:bg-gray-100 transition"
              >
                <span>Pages</span>
                <ChevronDown size={18} className={`transition-transform ${pagesOpen ? "rotate-180" : ""}`} />
              </button>

              {pagesOpen && (
                <ul className="mt-2 space-y-2 pl-4">
                  {[
                    "Inventory & Supply Chain",
                    "HR & Payroll",
                    "CRM & Sales",
                    "Integrations",
                    "Pricing & Plans",
                    "Contact & Demo",
                    "404",
                    "Coming Soon"
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link to="/comingsoon" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100 transition">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Fixed Bottom Buttons - Mobile */}
          <div className="mt-auto border-t pt-4 space-y-3">
            <Link
              to="/signin"
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded font-medium transition ${
                location.pathname === "/signin"
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Sign in
            </Link>

            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2 rounded text-center font-medium transition ${
                location.pathname === "/login"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
