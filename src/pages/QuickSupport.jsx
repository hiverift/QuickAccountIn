import { useState } from "react";

export default function QuickSupport() {
  const faqs = [
    {
      question: "How to create an invoice?",
      answer:
        "Go to the 'Invoices' section, click 'Create New Invoice', fill in the details, and click 'Save'. You can also preview before sending.",
    },
    {
      question: "How to connect a bank account?",
      answer:
        "Go to 'Settings' → 'Bank Accounts', click 'Connect Account', choose your bank, and follow the authentication steps.",
    },
    {
      question: "How to file taxes?",
      answer:
        "Navigate to 'Taxes' in the dashboard, select the filing period, review the summary, and click 'File Now'. Make sure all transactions are reconciled.",
    },
    {
      question: "How to fix payment errors?",
      answer:
        "Check your payment logs under 'Transactions'. If there’s a failed payment, review the error message and retry. Contact support if needed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex justify-center py-10 mt-20">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 text-center">Quick Support</h1>
        <p className="text-gray-600 mb-8 text-center">
          Need help with your accounting? Find answers to common questions below.
        </p>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-4 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 hover:opacity-90 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-white p-6 rounded-lg shadow mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
          <p className="mb-4">
            Contact our support team for personalized assistance.
          </p>
          <button className="bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 text-indigo-800 font-semibold px-6 py-3 rounded-lg hover:opacity-90">
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
}
