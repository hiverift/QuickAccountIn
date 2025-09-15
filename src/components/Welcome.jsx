import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

// Dashboard Component
export default function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  // Check login on mount
  useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  console.log("Logged in user data:", loggedInUser);
  if (loggedInUser) {
    try {
      setUser(JSON.parse(loggedInUser));
    } catch (err) {
      console.error("Invalid user data in localStorage");
      navigate("/login");
    }
  } else {
    navigate("/login");
  }
}, [navigate]);


  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/SignIn");
  };

  if (!user) return null; // Wait until user data is loaded

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            {/* Logo */}
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              QuickAccountIn
            </div>

            {/* Right Menu */}
            <div className="flex items-center gap-4 relative">
              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
                >
                  Logout
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-gray-700 dark:text-gray-200"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Mobile Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-12 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 flex flex-col gap-2 md:hidden">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    <span className="text-sm dark:text-gray-200">Dark Mode</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-red-600 dark:text-red-400 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="pt-24 px-4 sm:px-6 lg:px-12">
          {/* Welcome */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Welcome, {user.name}!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Here is your profile and dashboard overview.
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 max-w-md mx-auto mb-8 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <img
                src={user.avatar || "https://i.pravatar.cc/150?img=3"}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </h2>
                <p className="text-gray-500 dark:text-gray-300">{user.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
              <h3 className="text-gray-500 dark:text-gray-300 font-medium">
                Projects
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                {user.stats?.projects || 0}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
              <h3 className="text-gray-500 dark:text-gray-300 font-medium">
                Tasks
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                {user.stats?.tasks || 0}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
              <h3 className="text-gray-500 dark:text-gray-300 font-medium">
                Revenue
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                {user.stats?.revenue || "$0"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
