// import React from "react";

// import operate from "../../assets/operate.svg";
// import support from "../../assets/support.svg";
// import price from "../../assets/price.svg";
// import vectorImage from "../../assets/vector (1).svg";
// import { useTranslation } from "react-i18next";
// export default function Instructions() {
//   const { t } = useTranslation();
//   const instruction = [
//     {
//       logo: operate,
//       heading: "operate",
//       para: "operateDesc",
//     },
//     {
//       logo: price,
//       heading: "pricing",
//       para: "pricingDesc",
//     },
//     {
//       logo: support,
//       heading: "support",
//       para: "supportDesc",
//     },
//   ];

//   return (
//     <div className="flex items-center justify-center max-w-6xl sm:mx-auto md:mx-auto lg:mx-auto  lg:h-96 h-auto ">
//       <div className="md:flex  sm:py-5 px-2 sm:px-1 md:px-11 lg:p-12 py-5  bg-red-50 rounded lg:justify-around gap-10 lg:mx-14 ms-20  md:mx-12 sm:mx-12 mx-3">
//         {/* Left Section */}
//         <section className="flex flex-col lg:w-1/2 w-full mb-10 lg:mb-0 ">
//           <h1 className="font-bold font-sans text-2xl lg:text-4xl p-3">
//             {t("instructions.mainHeading")}
//           </h1>
//           <p className="text-left ms-3 text-gray-600 lg:text-xs text-sm font-medium font-Poppins mt-2 tracking-wide ">
//             {t("instructions.mainHeadingDesc")}
//           </p>
//           <div className="flex gap-2 mt-4 items-start">
//             <div className="  mt-3">
//               <img src={vectorImage} alt="pc" className="w-24 h-12 " />
//             </div>
//             <div className="flex-col items-start">
//               <h2 className="text-left font-semibold text-lg font-sans lg:text-2xl py-2 lg:py-2 font-Poppins text-gray-800">
//                 {t("instructions.mainSubheading")}
//               </h2>
//               <p className="text-left  text-gray-600 lg:text-xs text-sm font-medium font-Poppins">
//                 <span className="text-md font-semibold tracking-wide ">MyPatrakar</span>{" "}
//                 {t("instructions.mainSubheadingDesc")}
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Right Section */}
//         <section className="flex flex-col lg:w-1/2 w-full gap-8 me-3">
//           {instruction.map((item, index) => (
//             <div key={index} className="flex gap-2 items-start">
//               <div className="  mt-3 ">
//                 <img src={item.logo} alt={item.heading} className="w-24 h-12" />
//               </div>
//               <div>
//                 <h2 className="text-left font-semibold text-lg font-sans lg:text-2xl py-2 lg:py-2 font-Poppins text-gray-800">
//                   {t(`instructions.instructionHeadings.${item.heading}`)}
//                 </h2>
//                 <p className="text-left  text-gray-600 lg:text-xs text-sm font-medium font-Poppins tracking-wide ">
//                 {t(`instructions.instructionHeadings.${item.para}`)}
                
//                 </p>
//               </div>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// }


import React from "react";
import operate from "../../assets/operate.svg";
import support from "../../assets/support.svg";
import price from "../../assets/price.svg";
import vectorImage from "../../assets/vector (1).svg";
import { useTranslation } from "react-i18next";

export default function Instructions() {
  const { t } = useTranslation();
  const instruction = [
    {
      logo: operate,
      heading: "operate",
      para: "operateDesc",
    },
    {
      logo: price,
      heading: "pricing",
      para: "pricingDesc",
    },
    {
      logo: support,
      heading: "support",
      para: "supportDesc",
    },
  ];

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex flex-col md:flex-row w-full bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg border border-red-100 p-6 md:p-8 lg:p-12 gap-8 md:gap-10 lg:gap-12 transition-all duration-300 hover:shadow-xl">
        
        {/* Left Section */}
        <section className="flex flex-col w-full md:w-1/2 space-y-5">
          <h1 className="font-bold font-sans text-3xl lg:text-4xl xl:text-5xl tracking-tight text-gray-900 leading-tight">
            {t("instructions.mainHeading")}
          </h1>
          <p className="text-gray-600 text-base md:text-lg font-medium font-Poppins leading-relaxed">
            {t("instructions.mainHeadingDesc")}
          </p>
          <div className="flex gap-5 items-start mt-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex-shrink-0">
              <img 
                src={vectorImage} 
                alt="pc" 
                className="w-20 sm:w-24 md:w-28 h-auto transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl font-Poppins text-gray-800 mb-1">
                {t("instructions.mainSubheading")}
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-medium font-Poppins leading-relaxed">
                <span className="font-semibold text-red-600">MyPatrakar</span>{" "}
                {t("instructions.mainSubheadingDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex flex-col w-full md:w-1/2 gap-6 md:gap-7">
          {instruction.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-5 items-start group p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md border border-transparent hover:border-red-100"
            >
              <div className="flex-shrink-0">
                <img 
                  src={item.logo} 
                  alt={item.heading} 
                  className="w-16 sm:w-20 md:w-24 h-auto transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl font-Poppins text-gray-800 mb-2">
                  {t(`instructions.instructionHeadings.${item.heading}`)}
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium font-Poppins leading-relaxed">
                  {t(`instructions.instructionHeadings.${item.para}`)}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}