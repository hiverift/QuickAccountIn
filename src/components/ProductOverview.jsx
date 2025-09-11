import React from "react";
import { PieChart, Package, Users, Car, FileText, Settings } from "lucide-react";

const ProductOverview = () => {
  const features = [
    {
      icon: <PieChart className="w-8 h-8 text-purple-500" />,
      title: "Finance & Accounting",
      description:
        "Monitor stock levels, set alerts, manage warehouses, and optimize supply chains.",
      bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
    },
    {
      icon: <Package className="w-8 h-8 text-blue-500" />,
      title: "Inventory Management",
      description:
        "Monitor stock levels, set alerts, manage warehouses, and optimize supply chains.",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Human Resources (HR)",
      description:
        "Monitor stock levels, set alerts, manage warehouses, and optimize supply chains.",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
    },
    {
      icon: <Car className="w-8 h-8 text-purple-500" />,
      title: "Sales & CRM",
      description:
        "Monitor stock levels, set alerts, manage warehouses, and optimize supply chains.",
      bgColor: "bg-gradient-to-br from-gray-50 to-blue-50",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Purchasing & Procurement",
      description:
        "Monitor stock levels, set alerts, manage warehouses, and optimize supply chains.",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: "Business Intelligence & Reports",
      description:
        "Monitor stock levels, set alerts, manage warehouses, and optimize supply chains.",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm mb-4">
            Streamline Every Department in One Unified ERP Platform
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Product Overview
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Our cloud-based ERP system is modular, scalable, and built to grow with your business. 
            Whether you're managing finances, inventory, or people — everything is connected, in real-time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
