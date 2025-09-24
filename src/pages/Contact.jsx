import React from "react";

export default function QuickContactHub() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

        {/* Left Column: Headings + Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 animate-fadeInUp">Quick Contact Hub</h2>
          <h3 className="text-2xl font-semibold text-gray-700 animate-fadeInUp delay-100">
            We’re Here to Help — Anytime, Anywhere
          </h3>
          <p className="text-gray-600 animate-fadeInUp delay-200">
            Got a question about our ERP platform or need technical assistance? Our support team is ready to respond quickly, so you can keep your business running smoothly without delays.
          </p>

          {/* Contact Info */}
          <ul className="space-y-4 animate-fadeInUp delay-300">
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 512 512">
                <path d="M502.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <span className="text-gray-700 font-medium">0838-5567-1235</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 384 512">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <span className="text-gray-700 font-medium">Gunungparang, Kota Sukabumi, Jawa Barat</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 512 512">
                <path d="M502.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <span className="text-gray-700 font-medium">Erphoria@gmail</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeInUp delay-200">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" placeholder="First Name" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" placeholder="Last Name" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" placeholder="Email" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telephone</label>
              <input type="tel" id="phone" placeholder="Telephone" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Select</label>
              <select id="subject" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 text-gray-800 font-semibold p-3 rounded-lg hover:opacity-90 transition">
              Start Your Free Trial
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
