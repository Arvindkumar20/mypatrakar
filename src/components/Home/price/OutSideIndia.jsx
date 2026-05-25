import React from 'react';
import { 
  Check, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Star,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OutSideIndia = () => {
  const brandColors = {
    red: '#bc1623',
    navy: '#1b3160',
    black: '#010101'
  };

  const commonFeatures = [
    { text: "AI News Automation", isExtra: false },
    { text: "Unlimited Locations", isExtra: false },
    { text: "Election Poll System", isExtra: false },
    { text: "Live News Ticker", isExtra: false },
    { text: "Audio News Button", isExtra: false },
    { text: "Reporter Identity Cards", isExtra: false },
    { text: "Visiting Card System", isExtra: false },
    { text: "Appointment Letter System", isExtra: false },
    { text: "Unlimited Reporter Joining", isExtra: false },
    { text: "Font & Letter Resizing", isExtra: false },
    { text: "Images and Video Posts", isExtra: false },
    { text: "Category-wise Sections", isExtra: false },
    { text: "Astrology Updates", isExtra: false },
    { text: "Daily Panchang Updates", isExtra: false },
    { text: "Weather Updates", isExtra: false },
    { text: "Online Poll Facility", isExtra: false },
    { text: "SSL Certificate", isExtra: false },
    { text: "Social Media Sharing", isExtra: false },
    { text: "YouTube Embedding", isExtra: false },
    { text: "SEO Friendly Structure", isExtra: false },
    { text: "Ultra Responsive Layout", isExtra: false },
    { text: "Dark & Light Mode Support", isExtra: false }
  ];

  const plans = [
    {
      name: "Yearly Saver",
      mrp: 14.99,
      price: 4.99,
      billing: "Billed Yearly",
      isYearly: true,
      description: "Best for independent journalists on a budget.",
      icon: <Zap className="w-6 h-6" />,
      theme: brandColors.navy,
      features: [
        { text: "Subdomain (younewschanel.mypatrakar.com)", isExtra: true },
        ...commonFeatures,
        { text: "Standard Support", isExtra: false }
      ]
    },
    {
      name: "Monthly Flex",
      mrp: 9.99,
      price: 5.99,
      billing: "Billed Monthly",
      isYearly: false,
      description: "Flexible news portal with monthly commitment.",
      icon: <ShieldCheck className="w-6 h-6" />,
      theme: brandColors.black,
      features: [
        { text: "Billed Monthly (No Contract)", isExtra: true },
        { text: "Subdomain (younewschanel.mypatrakar.com)", isExtra: false },
        ...commonFeatures,
        { text: "Priority Email Support", isExtra: true }
      ]
    },
    {
      name: "Brand Plan",
      mrp: 19.99,
      price: 9.99,
      billing: "Billed Yearly",
      isYearly: true,
      description: "Professional setup with your own domain name.",
      icon: <Globe className="w-6 h-6" />,
      theme: brandColors.red,
      isPopular: true,
      features: [
        { text: "Custom Domain (younewschanel.com)", isExtra: true },
        { text: "Built-in Ad Designer", isExtra: true },
        { text: "Public Ad Submission Form", isExtra: true },
        { text: "Reporter Verification Panel", isExtra: true },
        { text: "Maximum Ads Space", isExtra: true },
        { text: "Multiple Admin Access", isExtra: true },
        { text: "Smart Popup Manager", isExtra: true },
        { text: "Google Analytics Setup", isExtra: true },
        ...commonFeatures
      ]
    },
    {
      name: "All-in-One Pro",
      mrp: 29.99,
      price: 14.99,
      billing: "Billed Yearly",
      isYearly: true,
      description: "The complete powerhouse: Web + Android App.",
      icon: <Smartphone className="w-6 h-6" />,
      theme: brandColors.black,
      isPremium: true,
      features: [
        { text: "Android Mobile App Included", isExtra: true },
        { text: "Google Search Console Setup", isExtra: true },
        { text: "Shorts News System (App)", isExtra: true },
        { text: "Smart Push Notifications", isExtra: true },
        { text: "Live Cricket Updates", isExtra: true },
        { text: "App with Indian Languages", isExtra: true },
        { text: "Advanced Content Filtering", isExtra: true },
        { text: "24/7 Dedicated Manager", isExtra: true },
        { text: "Custom Domain (younewschanel.com)", isExtra: false },
        ...commonFeatures
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-red-100 text-[#010101]">
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #cbd5e1;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => {
            const yearlyTotal = plan.price * 12;
            const discountPercentage = Math.round(((plan.mrp - plan.price) / plan.mrp) * 100);
            
            return (
              <div 
                key={index}
                className={`relative flex flex-col bg-white rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl overflow-hidden border ${
                  plan.isPopular ? 'border-[#bc1623] scale-[1.02] z-10 shadow-xl' : 'border-gray-100 shadow-lg'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#bc1623] text-white px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-white" /> Recommended
                  </div>
                )}

                {/* Header Part */}
                <div className="p-8 pb-6 border-b border-gray-50">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform hover:scale-110 duration-300 shadow-lg"
                    style={{ backgroundColor: plan.theme, color: 'white' }}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-1 leading-tight">{plan.name}</h3>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-tight mb-4">{plan.description}</p>
                  
                  <div className="flex flex-col">
                    {/* MRP with Strikethrough and Discount Tag */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400 line-through font-bold text-sm">${plan.mrp}</span>
                      <span className="bg-green-100 text-green-700 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                        {discountPercentage}% OFF
                      </span>
                    </div>

                    <div className="flex items-baseline">
                      <span className="text-xl font-bold">$</span>
                      <span className="text-5xl font-black tracking-tighter mx-1">{plan.price}</span>
                      <span className="text-gray-400 font-bold text-sm">/mo</span>
                    </div>
                    
                    {/* Yearly Calculation Display - Conditional based on isYearly */}
                    {plan.isYearly ? (
                      <div className="mt-1 text-sm font-bold text-gray-700">
                        ${yearlyTotal.toFixed(2)} <span className="text-[10px] font-medium text-gray-400">/year (Exc. Tax)</span>
                      </div>
                    ) : (
                      <div className="mt-1 text-sm font-bold text-gray-700">
                        Pay monthly <span className="text-[10px] font-medium text-gray-400">(Exc. Tax)</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-50 text-[10px] font-black uppercase tracking-widest border border-gray-100" style={{ color: plan.theme }}>
                    <Info className="w-3 h-3" /> {plan.billing}
                  </div>
                </div>

                {/* Scrollable Feature List Area */}
                <div className="flex-1 p-8 space-y-4 max-h-[520px] overflow-y-auto custom-scrollbar bg-gradient-to-b from-white to-gray-50/30">
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">Plan Details</div>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-0.5 shrink-0">
                          <Check className={`w-4 h-4 p-0.5 rounded-full font-bold ${feature.isExtra ? 'bg-[#bc1623] text-white shadow-sm' : 'bg-green-50 text-green-600'}`} />
                        </div>
                        <span className={`text-[13px] leading-snug transition-colors ${
                          feature.isExtra 
                          ? 'font-black text-[#010101] underline decoration-red-100 underline-offset-4' 
                          : 'font-semibold text-gray-500'
                        } group-hover:text-[#010101]`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Area */}
                <div className="p-8 pt-4 border-t border-gray-50 bg-white">
                  <Link  to="/portal/createportal"
                    className="w-full py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg group-hover:shadow-red-100"
                    style={{ 
                      backgroundColor: plan.isPopular || plan.isPremium ? brandColors.red : brandColors.navy,
                      color: 'white'
                    }}
                  >
                    Buy This Plan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="mt-4 text-center text-[10px] text-gray-400 font-bold uppercase">
                    {plan.isYearly ? "Calculated for annual subscription" : "Monthly renewal available"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OutSideIndia;