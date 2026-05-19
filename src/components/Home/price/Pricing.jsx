// // import { useEffect, useState } from "react";
// // import React from "react";
// // import PriceInfoCard from "./PriceInfoCard";
// // import { GetPriceDetails } from "../../../api";
// // import { useTranslation } from "react-i18next";
// // import { Helmet } from "react-helmet-async";
// // import { useLocation } from "react-router-dom";

// // const Pricing = () => {
// //   const location = useLocation();
// //   const [region, setRegion] = useState(0);
// //   const [pricingDetails, setPricingDetails] = useState([]);
// //   const handleRegionClick = (region) => {
// //     setRegion(region);
// //   };

// //   const { t } = useTranslation();

// //   // api calling here
// //   const handlePricingDetails = async () => {
// //     try {
// //       const res = await GetPriceDetails();
// //       console.log(res.data.response);
// //       let data = res.data.response.filter((rgn) => rgn.region == region);
// //       setPricingDetails(data);
// //     } catch (error) {
// //       // console.log(error);
// //     }
// //   };
// //   useEffect(() => {
// //     handlePricingDetails();
// //   }, [region]);
// //   // end api calling
// //   return (
// //     <>
// //       {location.pathname == "/pricing-in-my-patrakar" && (
// //         <Helmet>
// //           <title>
// //             Pricing | MyPatrakar - Affordable News Portal Development
// //           </title>
// //           <meta
// //             name="description"
// //             content="Explore MyPatrakar's simple and economical pricing plans. Get your own news portal website and mobile app at an affordable cost with top-notch features."
// //           />
// //           <meta
// //             name="keywords"
// //             content="MyPatrakar pricing, news portal pricing, affordable news website, news app cost, MyPatrakar plans, news portal development cost"
// //           />
// //           <meta name="robots" content="index, follow" />
// //         </Helmet>
// //       )}
// //       <div className="lg:mx-auto sm:mx-10 mx-0 px-3 md:px-10 p-0 my-24 sm:my-20 md:my-20 lg:my-20 py-3 ">
// //         <h2 className="lg:w-2/3 md:w-2/3 sm:w-full w-full mt-4  sm:mb-6 md:mb-8 lg:mb-10  lg:mx-auto md:mx-auto sm:mx-auto mx-auto font-bold text-2xl lg:text-4xl py-4 text-center sm:text-center md:text-center lg:text-center xl:text-center tracking-wide font-sans">
// //           {t("pricing")}
// //         </h2>
// //         <div className="relative w-full my-5  md:w-1/2  mx-auto border rounded-full flex">
// //           {/* Active Highlight */}
// //           <div
// //             className={`absolute top-0  h-full w-1/2 bg-red-500 rounded-full shadow-md transform transition-transform duration-300 ${
// //               region === 0 ? "translate-x-0" : "translate-x-full"
// //             }`}
// //           ></div>

// //           {/* Buttons */}
// //           <button
// //             onClick={() => handleRegionClick(0)}
// //             className={`relative z-10 w-1/2 py-3  font-semibold text-center transition-colors duration-300 ${
// //               region === 0 ? "text-white" : "text-gray-800"
// //             }`}
// //           >
// //             India
// //           </button>

// //           <button
// //             onClick={() => handleRegionClick(1)}
// //             className={`relative z-10 w-1/2 py-3 text-center font-semibold transition-colors duration-300 ${
// //               region === 1 ? "text-white" : "text-gray-800"
// //             }`}
// //           >
// //             Outside of India
// //           </button>
// //         </div>

// //         <div className="md:flex md:flex-wrap flex-1 lg:space-y-0 space-y-4 items-start justify-center gap-4">
// //           {pricingDetails.length > 0 &&
// //             pricingDetails.map((pkg) => {
// //               return (
// //                 <div key={pkg.package_id}>
// //                   <PriceInfoCard
// //                     region={pkg.region == 0 ? "India" : "OutSide of India"}
// //                     realPrice={pkg.mrp}
// //                     payAble={pkg.payable}
// //                     discount={pkg.discount}
// //                     packageDesc={pkg.validity}
// //                     packageName={pkg.package_name}
// //                     // mrp={pkg.mrp}
// //                     atPriceFeatures={
// //                       pkg?.features?.length > 0 ? pkg.features : []
// //                     }
// //                   />
// //                 </div>
// //               );
// //             })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Pricing;

// import { useEffect, useState } from "react";
// import React from "react";
// import PriceInfoCard from "./PriceInfoCard";
// import { GetPriceDetails } from "../../../api";
// import { useTranslation } from "react-i18next";
// import { Helmet } from "react-helmet-async";
// import { useLocation } from "react-router-dom";

// const Pricing = () => {
//   const location = useLocation();
//   const [region, setRegion] = useState(0);
//   const [packageType, setPackageType] = useState("live"); // 'live' or 'demo'
//   const [pricingDetails, setPricingDetails] = useState([]);
//   const [allPackages, setAllPackages] = useState([]); // Store all packages
//   const handleRegionClick = (region) => {
//     setRegion(region);
//   };

//   const { t } = useTranslation();

//   // api calling here
//   const handlePricingDetails = async () => {
//     try {
//       const res = await GetPriceDetails();
//       // console.log(res.data.response);
//       let data = res.data.response.filter((rgn) => rgn.region == region);
//       setAllPackages(data);

//       // Apply package type filter
//       filterPackagesByType(data, packageType);
//     } catch (error) {
//       // console.log(error);
//     }
//   };

//   // Filter packages based on demo/live
//   const filterPackagesByType = (packages, type) => {
//     let filteredData;
//     if (type === "demo") {
//       // Show only demo packages (is_demo == 1)
//       filteredData = packages.filter((pkg) => pkg.is_demo == 1);
//     } else {
//       // Show only live packages (is_demo == 0)
//       filteredData = packages.filter((pkg) => pkg.is_demo == 0);
//     }
//     setPricingDetails(filteredData);
//   };

//   // Handle package type click
//   const handlePackageTypeClick = (type) => {
//     setPackageType(type);
//     filterPackagesByType(allPackages, type);
//   };

//   useEffect(() => {
//     handlePricingDetails();
//   }, [region]);

//   // Re-apply filter when packageType changes (if allPackages is already loaded)
//   useEffect(() => {
//     if (allPackages.length > 0) {
//       filterPackagesByType(allPackages, packageType);
//     }
//   }, [packageType]);

//   // end api calling
//   return (
//     <>
//       {location.pathname == "/pricing-in-my-patrakar" && (
//         <Helmet>
//           <title>
//             Pricing | MyPatrakar - Affordable News Portal Development
//           </title>
//           <meta
//             name="description"
//             content="Explore MyPatrakar's simple and economical pricing plans. Get your own news portal website and mobile app at an affordable cost with top-notch features."
//           />
//           <meta
//             name="keywords"
//             content="MyPatrakar pricing, news portal pricing, affordable news website, news app cost, MyPatrakar plans, news portal development cost"
//           />
//           <meta name="robots" content="index, follow" />
//         </Helmet>
//       )}
//       <div className="lg:mx-auto sm:mx-10 mx-0 px-3 md:px-10 p-0 my-24 sm:my-20 md:my-20 lg:my-20 py-3 ">
//         <h2 className="lg:w-2/3 md:w-2/3 sm:w-full w-full mt-4  sm:mb-6 md:mb-8 lg:mb-10  lg:mx-auto md:mx-auto sm:mx-auto mx-auto font-bold text-2xl lg:text-4xl py-4 text-center sm:text-center md:text-center lg:text-center xl:text-center tracking-wide font-sans">
//           {t("pricing")}
//         </h2>

//         {/* Region Toggle */}
//         <div className="relative w-full my-5 md:w-1/2 mx-auto border rounded-full flex">
//           {/* Active Highlight */}
//           <div
//             className={`absolute top-0 h-full w-1/2 bg-red-500 rounded-full shadow-md transform transition-transform duration-300 ${
//               region === 0 ? "translate-x-0" : "translate-x-full"
//             }`}
//           ></div>

//           {/* Buttons */}
//           <button
//             onClick={() => handleRegionClick(0)}
//             className={`relative z-10 w-1/2 py-3 font-semibold text-center transition-colors duration-300 ${
//               region === 0 ? "text-white" : "text-gray-800"
//             }`}
//           >
//             India
//           </button>

//           <button
//             onClick={() => handleRegionClick(1)}
//             className={`relative z-10 w-1/2 py-3 text-center font-semibold transition-colors duration-300 ${
//               region === 1 ? "text-white" : "text-gray-800"
//             }`}
//           >
//             Outside of India
//           </button>
//         </div>

//         {/* Demo/Live Package Toggle Buttons */}
//         <div className="relative w-full my-5 md:w-1/3 mx-auto border rounded-full flex">
//           {/* Active Highlight */}
//           <div
//             className={`absolute top-0 h-full w-1/2 bg-red-500 rounded-full shadow-md transform transition-transform duration-300 ${
//               packageType === "live" ? "translate-x-0" : "translate-x-full"
//             }`}
//           ></div>

//           {/* Buttons */}
//           <button
//             onClick={() => handlePackageTypeClick("live")}
//             className={`relative z-10 w-1/2 py-3 font-semibold text-center transition-colors duration-300 ${
//               packageType === "live" ? "text-white" : "text-gray-800"
//             }`}
//           >
//             Live Packages
//           </button>

//           <button
//             onClick={() => handlePackageTypeClick("demo")}
//             className={`relative z-10 w-1/2 py-3 text-center font-semibold transition-colors duration-300 ${
//               packageType === "demo" ? "text-white" : "text-gray-800"
//             }`}
//           >
//             Demo Packages
//           </button>
//         </div>

//         <div className="md:flex md:flex-wrap flex-1 lg:space-y-0 space-y-4 items-start justify-center gap-4">
//           {pricingDetails.length > 0 ? (
//             pricingDetails.map((pkg) => {
//               return (
//                 <div key={pkg.package_id}>
//                   <PriceInfoCard
//                     region={pkg.region == 0 ? "India" : "OutSide of India"}
//                     realPrice={pkg.mrp}
//                     payAble={pkg.payable}
//                     discount={pkg.discount}
//                     packageDesc={pkg.validity}
//                     packageName={pkg.package_name}
//                     atPriceFeatures={
//                       pkg?.features?.length > 0 ? pkg.features : []
//                     }
//                   />
//                 </div>
//               );
//             })
//           ) : (
//             <div className="text-center text-gray-500 py-10 w-full">
//               No {packageType === "demo" ? "demo" : "live"} packages available for this region
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pricing;

import React from "react";
import {
  Check,
  ArrowRight,
  Globe,
  Smartphone,
  Zap,
  ShieldCheck,
  Star,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const brandColors = {
    red: "#bc1623",
    navy: "#1b3160",
    black: "#010101",
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
    { text: "Dark & Light Mode Support", isExtra: false },
  ];

  const plans = [
    {
      name: "Yearly Saver",
      mrp: 999,
      price: 249,
      billing: "Billed Yearly",
      isYearly: true,
      description: "Best for independent journalists on a budget.",
      icon: <Zap className="w-6 h-6" />,
      theme: brandColors.navy,
      features: [
        { text: "Subdomain (xyz.mypatrakar.com)", isExtra: true },
        ...commonFeatures,
        { text: "Standard Support", isExtra: false },
      ],
    },
    {
      name: "Monthly Flex",
      mrp: 499,
      price: 249,
      billing: "Billed Monthly",
      isYearly: false,
      description: "Flexible news portal with monthly commitment.",
      icon: <ShieldCheck className="w-6 h-6" />,
      theme: brandColors.black,
      features: [
        { text: "Billed Monthly (No Contract)", isExtra: true },
        { text: "Subdomain (xyz.mypatrakar.com)", isExtra: false },
        ...commonFeatures,
        { text: "Priority Email Support", isExtra: true },
      ],
    },
    {
      name: "Brand Plan",
      mrp: 1499,
      price: 499,
      billing: "Billed Yearly",
      isYearly: true,
      description: "Professional setup with your own domain name.",
      icon: <Globe className="w-6 h-6" />,
      theme: brandColors.red,
      isPopular: true,
      features: [
        { text: "Custom Domain (yourname.com)", isExtra: true },
        { text: "Built-in Ad Designer", isExtra: true },
        { text: "Public Ad Submission Form", isExtra: true },
        { text: "Reporter Verification Panel", isExtra: true },
        { text: "Maximum Ads Space", isExtra: true },
        { text: "Multiple Admin Access", isExtra: true },
        { text: "Smart Popup Manager", isExtra: true },
        { text: "Google Analytics Setup", isExtra: true },
        ...commonFeatures,
      ],
    },
    {
      name: "All-in-One Pro",
      mrp: 2499,
      price: 799,
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
        { text: "Custom Domain (yourname.com)", isExtra: false },
        ...commonFeatures,
      ],
    },
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

      <div className="max-w-7xl mx-auto mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => {
            const yearlyTotal = plan.price * 12;
            const discountPercentage = Math.round(
              ((plan.mrp - plan.price) / plan.mrp) * 100,
            );

            return (
              <div
                key={index}
                className={`relative flex flex-col bg-white rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl overflow-hidden border ${
                  plan.isPopular
                    ? "border-[#bc1623] scale-[1.02] z-10 shadow-xl"
                    : "border-gray-100 shadow-lg"
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
                    style={{ backgroundColor: plan.theme, color: "white" }}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-1 leading-tight">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-tight mb-4">
                    {plan.description}
                  </p>

                  <div className="flex flex-col">
                    {/* MRP with Strikethrough and Discount Tag */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400 line-through font-bold text-sm">
                        ₹{plan.mrp}
                      </span>
                      <span className="bg-green-100 text-green-700 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                        {discountPercentage}% OFF
                      </span>
                    </div>

                    <div className="flex items-baseline">
                      <span className="text-xl font-bold">₹</span>
                      <span className="text-5xl font-black tracking-tighter mx-1">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 font-bold text-sm">
                        /mo
                      </span>
                    </div>

                    {/* Yearly Calculation Display - Conditional based on isYearly */}
                    {plan.isYearly ? (
                      <div className="mt-1 text-sm font-bold text-gray-700">
                        ₹{yearlyTotal.toLocaleString()}{" "}
                        <span className="text-[10px] font-medium text-gray-400">
                          /year (Exc. GST)
                        </span>
                      </div>
                    ) : (
                      <div className="mt-1 text-sm font-bold text-gray-700">
                        Pay monthly{" "}
                        <span className="text-[10px] font-medium text-gray-400">
                          (Exc. GST)
                        </span>
                      </div>
                    )}
                  </div>

                  <div
                    className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-50 text-[10px] font-black uppercase tracking-widest border border-gray-100"
                    style={{ color: plan.theme }}
                  >
                    <Info className="w-3 h-3" /> {plan.billing}
                  </div>
                </div>

                {/* Scrollable Feature List Area */}
                <div className="flex-1 p-8 space-y-4 max-h-[520px] overflow-y-auto custom-scrollbar bg-gradient-to-b from-white to-gray-50/30">
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">
                    Plan Details
                  </div>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-0.5 shrink-0">
                          <Check
                            className={`w-4 h-4 p-0.5 rounded-full font-bold ${feature.isExtra ? "bg-[#bc1623] text-white shadow-sm" : "bg-green-50 text-green-600"}`}
                          />
                        </div>
                        <span
                          className={`text-[13px] leading-snug transition-colors ${
                            feature.isExtra
                              ? "font-black text-[#010101] underline decoration-red-100 underline-offset-4"
                              : "font-semibold text-gray-500"
                          } group-hover:text-[#010101]`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Area */}
                <div className="p-8 pt-4 border-t border-gray-50 bg-white">
                  <Link
                    to="/portal/createportal"
                    className="w-full py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg group-hover:shadow-red-100"
                    style={{
                      backgroundColor:
                        plan.isPopular || plan.isPremium
                          ? brandColors.red
                          : brandColors.navy,
                      color: "white",
                    }}
                  >
                    Buy This Plan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="mt-4 text-center text-[10px] text-gray-400 font-bold uppercase">
                    {plan.isYearly
                      ? "Calculated for annual subscription"
                      : "Monthly renewal available"}
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

export default Pricing;
