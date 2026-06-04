import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "mypatrakar_popup_last_closed";

const OfferPopup = ({setIsNav}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  // Check localStorage and decide whether to show the popup
  useEffect(() => {
    const lastClosed = localStorage.getItem(STORAGE_KEY);
    if (!lastClosed) {
      setIsNav(false);
      setIsOpen(true);
      return;
    }

    const lastClosedTime = parseInt(lastClosed, 10);
    const oneHour = 1000; // 1 hour in milliseconds
    const now = Date.now();

    if (now - lastClosedTime >= oneHour) {
      setIsOpen(true);
      setIsNav(false);
    }
  }, []);

  // Block body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden h-[100vh]";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close popup with animation + store timestamp
  const closePopup = useCallback(() => {
    setIsClosing(true);
    setIsNav(true)
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }, 300);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        closePopup();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, closePopup]);

  // Handle click on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Action when user clicks "Start Demo" button
  const handleStartDemo = () => {
    closePopup();
    navigate("/portal/createportal");
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
        isClosing
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)",
        backdropFilter: "blur(12px)",
        zIndex:'1'
      }}
      onClick={handleBackdropClick}
    >
      {/* Main Popup Card */}
      <div
        className={`relative w-full max-w-[380px] md:max-w-[680px] transition-all duration-500 ease-out ${
          isClosing
            ? "scale-95 translate-y-8 opacity-0"
            : "scale-100 translate-y-0 opacity-100"
        }`}
      >
        <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300 hover:scale-110"
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row">
            {/* Left Section - Content */}
            <div className="flex-1 p-5 md:p-6 lg:p-7">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-1.5 bg-red-50 rounded-full px-3 py-1 mb-3 border border-red-200">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-wider text-red-600">
                  Exclusive Launch Offer
                </span>
                <span className="text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                  HOT
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.15] tracking-tight mb-3">
                <span className="text-slate-900">
                  Launch Your
                  <br />
                  News Portal
                </span>
                <br />
                <span className="text-red-600">For Only ₹99!</span>
              </h2>

              {/* Subheadline */}
              <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed border-l-3 border-red-500 pl-3">
                Kickstart your digital news brand with a{" "}
                <strong className="text-slate-800 font-bold">
                  full-featured 30-day demo
                </strong>
                . Complete web portal + Android app ready in 48 hours.
              </p>

              {/* Feature Icons */}
              <div className="flex gap-3 md:gap-4 mb-5">
                {/* Web Portal - Blue */}
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700">
                    Web Portal
                  </span>
                  <span className="text-[8px] text-gray-500">
                    CMS + Frontend
                  </span>
                </div>

                {/* Android App - Red */}
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700">
                    Android App
                  </span>
                  <span className="text-[8px] text-gray-500">
                    Play Store Ready
                  </span>
                </div>

                {/* 48h Delivery - Blue */}
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700">
                    48h Delivery
                  </span>
                  <span className="text-[8px] text-gray-500">Fast Launch</span>
                </div>
              </div>

              {/* CTA Button - Red */}
              <button
                onClick={handleStartDemo}
                className="group relative w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 mb-3 overflow-hidden text-sm"
              >
                <span className="relative flex items-center gap-2">
                  Start Demo at ₹99
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>

              {/* Footer Note */}
              <p className="text-[9px] text-gray-500 font-medium flex items-center gap-1">
                <svg
                  className="w-2.5 h-2.5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Reliable Service. Transparent Pricing. Expert Support.
              </p>
            </div>

            {/* Right Section - Premium Visual */}
            <div className="hidden md:flex md:w-[40%] bg-blue-50 rounded-r-[2rem] relative overflow-hidden items-center justify-center p-4">
              {/* Phone Mockup Container */}
              <div className="relative z-10">
                {/* 3D Phone Mockup */}
                <div className="relative w-[160px] h-[280px] bg-slate-800 rounded-[2rem] p-1.5 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-white rounded-[1.6rem] overflow-hidden flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-red-600 h-0.5 w-full"></div>
                    <div className="p-2 flex justify-between text-[8px] text-gray-600 font-semibold">
                      <span>9:41</span>
                      <span>📶 🔋 100%</span>
                    </div>

                    {/* App Screenshot Preview */}
                    <div className="flex-1 bg-gray-50 m-1.5 rounded-lg overflow-hidden">
                      <div className="h-16 bg-blue-600 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                      <div className="p-2 space-y-1.5">
                        <div className="h-1.5 bg-red-200 rounded-full w-3/4"></div>
                        <div className="h-1.5 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-1.5 bg-blue-200 rounded-full w-5/6"></div>
                        <div className="flex gap-1.5 pt-1">
                          <div className="h-1.5 bg-red-200 rounded-full w-1/3"></div>
                          <div className="h-1.5 bg-blue-200 rounded-full w-1/3"></div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="p-1.5 flex justify-around border-t border-gray-100">
                      <div className="w-6 h-6 bg-red-100 rounded-lg"></div>
                      <div className="w-6 h-6 bg-blue-100 rounded-lg"></div>
                      <div className="w-6 h-6 bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Premium Offer Badge */}
                <div className="absolute -top-6 -left-6 z-20 animate-float">
                  <div className="relative">
                    {/* Main Badge - Red */}
                    <div className="relative w-20 h-20 bg-red-600 rounded-full flex flex-col items-center justify-center shadow-xl border-3 border-white">
                      <span className="text-[7px] font-black text-white bg-black/40 px-1.5 py-0.5 rounded-full mb-0.5">
                        LIMITED
                      </span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-white text-[8px] line-through opacity-80">
                          ₹499
                        </span>
                        <span className="text-white text-xl font-black">
                          ₹99
                        </span>
                      </div>
                      <span className="text-[6px] font-bold text-white bg-red-800/80 px-1.5 py-0.5 rounded-full mt-0.5">
                        30 DAYS
                      </span>
                      <div className="absolute -top-1.5 -right-1.5 text-yellow-400 text-xs animate-bounce"></div>
                    </div>
                  </div>
                </div>

                {/* Sparkle Decorations */}
                <div className="absolute -top-3 right-0 text-red-500 text-base animate-pulse">
                  ✨
                </div>
                <div className="absolute bottom-8 -right-4 text-blue-500 text-sm animate-bounce-slow">
                  ⭐
                </div>
                <div className="absolute top-1/2 -right-2 text-red-400 text-xs animate-ping">
                  💎
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OfferPopup;
