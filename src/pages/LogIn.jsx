import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const QuickAccountLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "https://www.cakistockmarket.com/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, role: "user" }),
        }
      );

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
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
        localStorage.setItem("token", data.token || "");

        window.location.href = "https://main.drxzkqf5v2a2k.amplifyapp.com/";
        return;
      } else {
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6 mt-15">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            QuickAccount
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Sign in to your company account
          </p>
        </div>

        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded text-sm md:text-base ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

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
                className="w-full pl-10 pr-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Password with toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-sm md:text-base gap-2">
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

        <p className="text-center text-sm md:text-base text-gray-600 mt-6">
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
