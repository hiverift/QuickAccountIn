import React from "react";
import account from "../assets/account.png";
import { Link } from "react-router-dom";

const CTA = () => {
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "1",
      description:
        "Advanced features and unlimited users at an affordable price.",
      features: [
        "Free to use",
        "Unlimited users",
        "Basic features",
        "No risk",
        "Quick and easy to get started",
      ],
      buttonText: "Contact Us",
    },
    {
      id: 2,
      name: "Plus",
      price: "5",
      description:
        "Advanced features and unlimited users at an affordable price.",
      features: [
        "Free to use",
        "Unlimited users",
        "Basic features",
        "No risk",
        "Quick and easy to get started",
      ],
      buttonText: "Contact Us",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "25",
      description:
        "Advanced features and unlimited users at an affordable price.",
      features: [
        "Free to use",
        "Unlimited users",
        "Basic features",
        "No risk",
        "Quick and easy to get started",
      ],
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div
        className="relative rounded-2xl h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${account})` }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative text-center max-w-2xl px-6">
          <p className="text-white/80 text-sm mb-4">
            See the Platform in Action — No Signup Needed
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Connect Your ERP to the Tools You
            <br />
            Already Use
          </h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            View API Documentation
          </button>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="text-center lg:text-left py-5">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                Pricing Plans
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto lg:mx-0">
                Flexible Plans for Every Stage of Growth
              </h1>
            </div>
            <p className="text-gray-600 text-lg text-center lg:text-right lg:max-w-md">
              Whether you're just getting started or managing a complex
              operation, choose a plan that fits your business needs — and scale
              up anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="relative bg-gradient-to-br from-indigo-400 via-purple-400 to-indigo-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-white mb-8">
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-indigo-100 mb-8 leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-xl text-indigo-100 ml-2">
                      /Month
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-3 text-indigo-200 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/Contact">
                  <button
                    className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white hover:opacity-90"
                  >
                    {plan.buttonText}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg">
              Need a custom solution? Our enterprise team is here to help you
              find the perfect fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
