import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

const QuickAccountLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // {type: 'success'|'error', text: '...'}

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "https://www.cakistockmarket.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, role: "user" }),
        }
      );

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        // Success
        setMessage({
          type: "success",
          text: "Login successful! Redirecting...",
        });
        const loggedInUser = data?.result?.user || {
          name: "Mh Shahbaz",
          email: "shahbaz@example.com",
          role: "Administrator",
          avatar: "https://i.pravatar.cc/150?img=3",
          stats: { projects: 12, tasks: 34, revenue: "$8,500" },
        };

        localStorage.setItem("user", JSON.stringify(loggedInUser));
        localStorage.setItem("token", data.token || ""); // token optional

        // Redirect after 1.5s
        setTimeout(() => {
          window.location.href = "/Welcome"; // ya Dashboard page
        }, 1500);
      } else {
        // Error from API
        setMessage({
          type: "error",
          text: data.message || "Invalid credentials",
        });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error. Please try again." });
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">QuickAccount</h1>
          <p className="text-gray-600 mt-2">Sign in to your company account</p>
        </div>

        {/* Toast Message */}
        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded text-purple-600" />
              Remember me
            </label>
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            Create one
          </a>
        </p>
      </div>
    </section>
  );
};

export default QuickAccountLogin;
