
import React from "react";

export default function AccountingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Address */}
              <div className="flex items-center space-x-3 md:mb-50">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded opacity-90"></div>
                </div>
                <span className="  text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  QuickAccounting
                </span>
              </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-blue-400">Terms and Conditions</a></li>
            <li><a href="/schedule-a-consultation" className="hover:text-blue-400">Schedule a Consultation</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/xero-to-quickbooks" className="hover:text-blue-400">Xero to QuickBooks</a></li>
            <li><a href="/netsuite-to-quickbooks" className="hover:text-blue-400">NetSuite to QuickBooks</a></li>
            <li><a href="/sap-business-one" className="hover:text-blue-400">SAP Business One</a></li>
            <li><a href="/quickbooks-online-to-desktop" className="hover:text-blue-400">QuickBooks Desktop to Desktop</a></li>
            <li><a href="/quickbooks-desktop-to-online" className="hover:text-blue-400">QuickBooks Online to Online</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Support</h3>
          <p className="text-sm">
            <a href="tel:+18337832491" className="hover:text-blue-400">+1-833-783-2491</a><br />
            <a href="mailto:support@qbsupervisor.com" className="hover:text-blue-400">support@qbsupervisor.com</a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2025 Qbsupervisor. All rights reserved.
      </div>
    </footer>
  );
}
