import React, { useState } from "react";
import { Building2, Mail, Phone, Lock } from "lucide-react";

const QuickAccountSignUp = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "http://69.62.78.239:4000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.companyName,
            email: formData.email,
            mobile: formData.phone,
            password: formData.password,
          }),
        }
      );

      console.log("Response status:", res.status);

      const text = await res.text(); // Safe parsing ke liye raw text
      console.log("Raw response text:", text);

      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (err) {
        console.error("Invalid JSON:", err);
        setMessage("Server response is not valid JSON");
        return;
      }

      if (res.ok) {
        setMessage(data.message || "Registration successful");

        // Token save
        if (data.result?.accessToken) {
          localStorage.setItem("accessToken", data.result.accessToken);
        }

        console.log("API Response:", data);
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-4 sm:px-6 lg:px-12 py-12 overflow-x-hidden pt-20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            QuickAccount
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Create your company account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none text-sm sm:text-base"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 text-sm sm:text-base"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center text-sm sm:text-base text-red-500 mt-4">
            {message}
          </p>
        )}

        {/* Footer */}
        <p className="text-center text-sm sm:text-base text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
};

export default QuickAccountSignUp;
