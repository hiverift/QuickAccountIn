import React from 'react';

// Self-contained Hero Component
const PricingPlans = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-500 text-sm mb-4">Live Code & Industry Solutions</p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tailored ERP Solutions for{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Our ERP platform is a centralized and user-friendly system designed to 
              optimize manual work, improve efficiency and streamline your business 
              without slowing your processes.
            </p>
            <button 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              onClick={() => console.log('Contact Us clicked')}
            >
              Contact Us
            </button>
          </div>
          
          <div className="lg:flex lg:justify-end">
            <div className="text-right">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AO</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Arik Operations Lead</p>
                    <p className="text-gray-500 text-sm">PT. TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-left leading-relaxed">
                  "Live Code Production Planning, Inventory, CRM Management, Procurement, Solution Management, Cash Flow, HR, Payroll, 
                  Accounting and Financial performance drivers for SOX and validating that platform."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;