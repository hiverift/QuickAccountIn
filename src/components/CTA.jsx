import React from "react";
import {
  Database,
  BarChart3,
  Triangle,
  Layers,
  Workflow,
  GitBranch,
  Network,
} from "lucide-react";

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
      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-2xl py-16 px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-4">
            See the Platform in Action — No Signup Needed
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Connect Your ERP to the Tools You
            <br />
            Already Use
          </h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
            View API Documentation
          </button>
        </div>

        {/* Animated Icons Grid */}
        <div className="space-y-6">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="flex flex-wrap justify-center gap-4 overflow-hidden"
            >
              {Array(7)
                .fill(0)
                .map((_, index) => {
                  const IconArray = [
                    Database,
                    BarChart3,
                    BarChart3,
                    Triangle,
                    Layers,
                    Workflow,
                    GitBranch,
                  ];
                  const colors = [
                    "bg-blue-600",
                    "bg-blue-500",
                    "bg-blue-400",
                    "bg-blue-700",
                    "bg-teal-500",
                    "bg-cyan-400",
                    "bg-blue-600",
                  ];
                  const Icon = IconArray[index];
                  return (
                    <div
                      key={index}
                      className={`w-16 h-16 ${colors[index]} rounded-xl shadow-lg flex items-center justify-center animate-float hover:shadow-xl transition-shadow duration-200`}
                      style={{
                        animationDelay: `${0.5 * index}s`,
                        animationDuration: "4s",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
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
              Whether you're just getting started or managing a complex operation, choose a plan that fits your business needs — and scale up anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="relative bg-gradient-to-br from-indigo-400 via-purple-400 to-indigo-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    plan.popular
                      ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
                      : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                  }`}
                >
                  {plan.buttonText}
                </button>
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

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateX(0px);
          }
          25% {
            transform: translateX(10px);
          }
          50% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(8px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float:hover {
          animation-play-state: paused;
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default CTA;
