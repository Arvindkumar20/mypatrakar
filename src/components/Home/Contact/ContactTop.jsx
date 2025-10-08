import React from "react";
import contactImage from '../../../assets/MPContactImage.png';
// import { FcVideoCall } from "react-icons/fc";
import { IoMdVideocam } from "react-icons/io";
import { Link } from "react-router-dom";
import DemoCallCard from "../ScheduleDemo/DemoCallCard";
import { useTranslation } from "react-i18next";
export default function ContactTop() {
  const {t}=useTranslation();
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse  items-center md:items-center md:justify-center mt-20 ">
        <div className="w-full md:w-1/2 p-2 flex mt-0 md:justify-end justify-center ">
          <img
            src={contactImage}
            alt="MyPatrakar Contact"
            className="max-h-[500px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 md:float-left float-none">
          <h1 className="text-4xl font-semibold text-black font-sans mb-4 leading-relaxed">
            {t("contact.topHeading")}
          </h1>
          <p className="text-lg mb-8 mt-2">
            {t("contact.topHeadingDesc")}

          </p>
          <div className="flex flex-wrap gap-4">
            <button className=" md:w-auto bg-red-600 hover:bg-red-700 text-gray-200 py-1 px-6 rounded-lg shadow-xl flex items-center justify-center gap-2 font-medium">
              <IoMdVideocam className="w-5 h-5" />{" "}
              <span>
                <DemoCallCard />
              </span>
            </button>
            <Link to={"/resources-in-my-patrakar"}>
              <button className="w-full md:w-auto    bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded-lg shadow-xl">
               {t("contact.exploreBtn")}...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}




// import React from "react";
// import contactImage from '../../../assets/MPContactImage.png';
// import { IoMdVideocam } from "react-icons/io";
// import { Link } from "react-router-dom";
// import DemoCallCard from "../ScheduleDemo/DemoCallCard";
// import { useTranslation } from "react-i18next";

// export default function ContactTop() {
//   const { t } = useTranslation();
  
//   return (
//     <div className="relative overflow-hidden -z-10">
//       {/* Decorative elements */}
//       {/* <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
//       <div className="absolute -bottom-20 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div> */}
      
//       <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 lg:gap-16 py-12 px-4 sm:px-6 max-w-7xl mx-auto">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2 flex justify-center mt-10">
//           <div className="relative">
//             <div className="absolute -inset-5 bg-gradient-to-b from-red-500 to-red-600 rounded-2xl transform rotate-3 opacity-20 "></div>
//             <img
//               src={contactImage}
//               alt="MyPatrakar Contact"
//               className="relative z-10 max-h-[350px] md:max-h-[400px] w-auto object-contain rounded-xl shadow-xl border-4 border-white"
//               loading="lazy"
//             />
//           </div>
//         </div>
        
//         {/* Content Section */}
//         <div className="w-full md:w-1/2">
//           <div className="max-w-xl">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
//                 {t("contact.topHeading")}
//               </span>
//             </h1>
            
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               {t("contact.topHeadingDesc")}
//             </p>
            
//             <div className="flex flex-wrap gap-4">
//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
//                 <button className="relative bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-3 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 font-medium transform group-hover:-translate-y-1 transition-all duration-300">
//                   <IoMdVideocam className="w-6 h-6 text-white" />
//                   <DemoCallCard className="text-white font-medium" />
//                 </button>
//               </div>
              
//               <Link to={"/resources-in-my-patrakar"} className="group no-underline hover:no-underline">
//                 <button className="w-full bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-red-300 py-3 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 font-medium transform hover:-translate-y-1 transition-all duration-300">
//                   {t("contact.exploreBtn")}...
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }