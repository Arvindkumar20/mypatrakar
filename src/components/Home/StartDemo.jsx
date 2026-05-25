import React from "react";
import { Link } from "react-router-dom";

const StartDemo = () => {
  return (
    <div className="mt-20 font-sans text-[#111827] min-h-screen flex items-center justify-center">
      {/* Inline styles for custom animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }
          
          .custom-shadow {
            box-shadow: 0 30px 60px rgba(30, 58, 138, 0.1);
          }
          
          /* Floating animation for badge and elements */
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(2deg); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          @keyframes glow-pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes shine {
            0% { background-position: -100% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes ring-pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 5s ease-in-out infinite;
          }
          
          .animate-glow-pulse {
            animation: glow-pulse 3s ease-in-out infinite;
          }
          
          .animate-shine {
            background: linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 70%);
            background-size: 200% 100%;
            animation: shine 2s infinite;
          }
          
          .animate-ring-pulse {
            animation: ring-pulse 2s infinite;
          }
          
          .phone-mockup {
            transform-style: preserve-3d;
            transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          }
          
          .phone-mockup:hover {
            transform: translateY(-8px) rotate(2deg);
          }
          
          /* Glass morphism effect */
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(0px);
          }
          
          /* Custom scrollbar for app preview */
          .custom-scroll::-webkit-scrollbar {
            width: 2px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: #ef4444;
            border-radius: 10px;
          }
        `}
      </style>

      {/* Promo Section Container */}
      <section className="w-full max-w-7xl bg-white py-12 md:py-0 rounded-xl border border-gray-100 custom-shadow overflow-hidden relative">
        {/* Decorative Background Gradients */}
        <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-50 rounded-full -mr-32 -mt-32 md:-mr-64 md:-mt-64 opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-[300px] h-48 md:h-[300px] bg-red-50 rounded-full -ml-24 -mb-24 md:-ml-32 md:-mb-32 opacity-40 blur-3xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 lg:p-12">
          {/* Left Side: Content Area */}
          <div className="flex-1 space-y-4 md:space-y-2 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 text-[#ef4444] font-bold text-[10px] md:text-xs rounded-full tracking-widest uppercase">
              <span className="w-2 h-2 bg-[#ef4444] rounded-full animate-pulse"></span>
              Special Launch Offer
            </div>

            <h1 className="text-4xl md:text-3xl lg:text-7xl font-black leading-tight text-[#111827] tracking-tight">
              Start Your News Portal <br className="hidden md:block" />
              For Only <span className="text-[#ef4444]">₹99!</span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kickstart your digital news brand with a full-featured{" "}
              <span className="text-[#1e3a8a] font-bold">30-day demo</span>.
              Includes a professional website & Android app ready in just 48
              hours.
            </p>

            {/* Icon-based Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 p-3 rounded-2xl bg-gray-50 lg:bg-transparent">
                <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] flex items-center justify-center text-white shadow-lg shadow-blue-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-gray-700 text-sm">
                  Web Portal
                </span>
              </div>
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 p-3 rounded-2xl bg-gray-50 lg:bg-transparent">
                <div className="w-10 h-10 rounded-xl bg-[#ef4444] flex items-center justify-center text-white shadow-lg shadow-red-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-gray-700 text-sm">
                  Android App
                </span>
              </div>
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 p-3 rounded-2xl bg-gray-50 lg:bg-transparent">
                <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-gray-700 text-sm">
                  48h Delivery
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <Link
                to="/portal/createportal"
                className="w-full lg:w-auto min-w-full sm:min-w-[400px] bg-[#ef4444] hover:bg-red-600 hover:text-gray-50 hover:no-underline text-white font-black py-2 md:py-3 px-8 rounded-2xl md:rounded-[2rem] shadow-2xl shadow-red-200 transition-all duration-300 transform hover:-translate-y-2 text-lg md:text-xl flex items-center justify-center gap-2 group"
              >
                Start Demo at ₹99 Only
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
              <p className="mt-3 text-gray-400 font-medium text-xs md:text-sm">
                Cancel anytime. No hidden charges.
              </p>
            </div>
          </div>

          {/* Right Side: Enhanced Attractive Phone Mockup */}
          <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2 mockup-container pt-6 lg:pt-0">
            <div className="relative w-[300px] sm:w-[340px] md:w-[360px] lg:w-[340px]">
              {/* Main Phone Container with Enhanced 3D effect */}
              <div className="relative z-10 phone-mockup">
                {/* Outer glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-400/20 via-blue-400/20 to-red-400/20 rounded-[3rem] blur-xl animate-glow-pulse"></div>

                {/* Phone Frame with Premium Border Gradient */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[320px] lg:w-[300px] h-[540px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.2rem] p-[2px] shadow-2xl transform transition-all duration-500">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
                    {/* Dynamic Island Style Notch */}
                    <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      <div className="text-[6px] text-white font-semibold">
                        LIVE
                      </div>
                    </div>

                    {/* Status Bar with Modern Design */}
                    <div className="bg-white pt-4 pb-1 px-4 flex justify-between text-[10px] text-gray-700 font-semibold border-b border-gray-100">
                      <span className="font-bold">9:41</span>
                      <div className="flex gap-1">
                        <span>📶</span>
                        <span>📶</span>
                        <span>🔋 98%</span>
                      </div>
                    </div>

                    {/* App Header with News Branding */}
                    <div className="bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 flex items-center justify-between shadow-md">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z"></path>
                          </svg>
                        </div>
                        <span className="text-white font-bold text-sm">
                          NewsExpress
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <svg
                          className="w-5 h-5 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                        <svg
                          className="w-5 h-5 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* News Feed Content - Realistic Preview */}
                    <div className="flex-1 overflow-y-auto custom-scroll bg-gray-50">
                      {/* Breaking News Banner */}
                      <div className="bg-red-50 border-b border-red-100 px-3 py-2 flex items-center gap-2">
                        <span className="bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">
                          BREAKING
                        </span>
                        <span className="text-[10px] font-medium text-gray-700 truncate">
                          Election results 2024: Latest updates
                        </span>
                        <svg
                          className="w-3 h-3 text-red-500 ml-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>

                      {/* Featured News Card */}
                      <div className="m-2 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative flex items-center justify-center">
                          <div className="absolute inset-0 bg-black/20"></div>
                          <svg
                            className="w-10 h-10 text-white/80 relative z-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          <div className="absolute bottom-1 left-2 right-2">
                            <div className="text-white text-[8px] font-bold bg-black/50 inline-block px-1.5 py-0.5 rounded">
                              TOP STORY
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <h3 className="font-bold text-xs text-gray-800 line-clamp-2">
                            India's economy grows at 8.2% in Q3, beats estimates
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[8px] text-gray-500">
                              15 min ago
                            </span>
                            <span className="text-[8px] text-red-500 font-semibold">
                              🔥 Trending
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* News List Items */}
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="mx-2 mb-2 p-2 bg-white rounded-lg shadow-sm border border-gray-100 flex gap-2"
                        >
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                            <div
                              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${i === 1 ? "from-red-200 to-red-100" : i === 2 ? "from-blue-200 to-blue-100" : "from-green-200 to-green-100"} flex items-center justify-center`}
                            >
                              <svg
                                className="w-4 h-4 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-semibold text-red-500">
                                POLITICS
                              </span>
                              <span className="text-[8px] text-gray-400">
                                2h ago
                              </span>
                            </div>
                            <p className="text-[10px] font-medium text-gray-800 mt-0.5 line-clamp-2">
                              {i === 1
                                ? "Cabinet approves new semiconductor plant worth ₹25,000 crore"
                                : i === 2
                                  ? "RBI keeps repo rate unchanged at 6.5% for fifth time"
                                  : "Champions Trophy: India vs Pakistan match sold out in minutes"}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Live Update Badge */}
                      <div className="mx-2 mb-2 p-1.5 bg-red-50 rounded-lg border border-red-100 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                          <span className="text-[9px] font-bold text-red-600">
                            LIVE UPDATES
                          </span>
                        </div>
                        <span className="text-[8px] text-gray-500">
                          General Elections • Counting in progress
                        </span>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="bg-white border-t border-gray-100 py-1.5 px-4 flex justify-between items-center">
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                        </svg>
                        <span className="text-[8px] text-red-500 font-semibold">
                          Home
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="text-[8px] text-gray-500">News</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                        <span className="text-[8px] text-gray-500">Alerts</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span className="text-[8px] text-gray-500">
                          Profile
                        </span>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="w-32 h-1 bg-gray-300 rounded-full mx-auto mb-1.5"></div>
                  </div>
                </div>
              </div>

              {/* Premium Offer Badge - Enhanced 3D Style with Ring Animation */}
              <div className="absolute -top-5 -left-5 z-20 animate-float">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-400 rounded-full blur-md animate-ring-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white transform transition-all duration-300 hover:scale-105">
                    <span className="text-[8px] font-black text-white bg-black/30 px-1.5 py-0.5 rounded-full mb-0.5 flex items-center gap-1">
                      🔥 LIMITED
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-white text-[9px] line-through opacity-80">
                        ₹499
                      </span>
                      <span className="text-white text-2xl font-black tracking-tighter">
                        ₹99
                      </span>
                    </div>
                    <span className="text-[7px] font-bold text-white bg-red-800/80 px-1.5 py-0.5 rounded-full mt-0.5 flex items-center gap-1">
                      ⚡ 30 DAYS
                    </span>
                    <div className="absolute -top-2 -right-2 text-yellow-400 text-sm animate-bounce">
                      ✨
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 right-2 text-red-500 text-base animate-pulse">
                ✨
              </div>
              <div className="absolute bottom-20 -right-5 text-blue-500 text-sm animate-float-slow">
                <svg
                  className="w-6 h-6 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="absolute top-1/2 -right-3 text-red-400 text-xs animate-ping">
                💎
              </div>
              <div className="absolute bottom-32 -left-4 text-yellow-500 text-base animate-bounce">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartDemo;
