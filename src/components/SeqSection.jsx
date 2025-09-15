import React from 'react';

const SecuritySection = () => {
  const SecurityIcon = ({ type, className = "" }) => {
    const baseClasses = "w-8 h-8 text-blue-500";
    switch(type) {
      case 'shield':
        return <svg className={`${baseClasses} ${className}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.1 15.1,18 14,18H10C8.9,18 8,17.1 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,8.7 10.2,10V11.5H13.8V10C13.8,8.7 12.8,8.2 12,8.2Z"/></svg>;
      case 'database':
        return <svg className={`${baseClasses} ${className}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/></svg>;
      case 'lock':
        return <svg className={`${baseClasses} ${className}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/></svg>;
      default:
        return <svg className={`${baseClasses} ${className}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/></svg>;
    }
  };

  const SecurityCard = ({ icon, delay = 0 }) => (
    <div 
      className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mx-1 animate-float"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out'
      }}
    >
      <SecurityIcon type={icon} />
    </div>
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <style jsx>{`
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-6px) rotate(1deg);} }
        @keyframes slideLeft {0%{transform:translateX(0);}100%{transform:translateX(-100%);}}
        @keyframes slideRight {0%{transform:translateX(-100%);}100%{transform:translateX(0);}}
        .animate-float{animation:float 3s ease-in-out infinite;}
        .animate-slide-left{animation:slideLeft 20s linear infinite;}
        .animate-slide-right{animation:slideRight 25s linear infinite;}
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-4">See the Platform in Action — No Signup Needed</p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900">
            Enterprise-Grade Security You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Animated Icon Cards */}
<div className="relative h-64 sm:h-80 overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 sm:p-8 flex items-center justify-center">
  <div className="grid grid-rows-3 gap-4 animate-carousel">
    {/* Row 1 */}
    <div className="flex gap-4">
      <SecurityCard icon="shield" />
      <SecurityCard icon="database" delay={0.5} />
      <SecurityCard icon="lock" delay={1} />
    </div>

    {/* Row 2 */}
    <div className="flex gap-4">
      <SecurityCard icon="shield" delay={1.5} />
      <SecurityCard icon="database" delay={2} />
      <SecurityCard icon="lock" delay={2.5} />
    </div>

    {/* Row 3 */}
    <div className="flex gap-4">
      <SecurityCard icon="lock" delay={0.3} />
      <SecurityCard icon="shield" delay={0.8} />
      <SecurityCard icon="database" delay={1.3} />
    </div>
  </div>

  <style jsx>{`
    @keyframes carousel {
      0% { transform: translateX(0); }
      50% { transform: translateX(-20%); }
      100% { transform: translateX(0); }
    }
    .animate-carousel {
      animation: carousel 8s ease-in-out infinite;
    }
  `}</style>
</div>


          {/* Right side - Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Display as logo grid or badge list
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Stay on top of your business with live dashboards, custom reports, and instant insights.
              </p>
            </div>

            {/* Security Features List */}
            <div className="space-y-3">
              {['ISO 27001 - Information Security Management','SOC 2 Type II – Secure handling of customer data','GDPR Compliant – Full compliance with European data protection laws','HIPAA Ready – Optional for healthcare-focused deployments','Data Residency Controls – Choose where your data is stored (US, EU, APAC)'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-medium">{item}</span></p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm">
              View Full Security Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
