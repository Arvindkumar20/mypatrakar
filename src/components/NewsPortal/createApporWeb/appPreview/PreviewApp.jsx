// import React, { useContext, useState } from "react";
// import { Home, Search, Video, BarChart2, Megaphone } from "lucide-react";
// import { PreViewContext } from "../../../../context/PreViewContext";
// const navItems = [
//   { name: "Top Stories", icon: Home },
//   { name: "Explore", icon: Search },
//   { name: "Shorts", icon: Video },
//   { name: "Youtube", icon: BarChart2 },
//   { name: "Polls", icon: Megaphone },
// ];

// const PreviewApp = ({
//   backgroundColor = "#f3f4f6", // Default gray-100 as hex
//   headerColor = "#2563eb", // Default blue-600 as hex
//   textColor = "#ffffff", // Default white as hex
//   activeColor = "#2563eb", // Default blue-600 as hex
//   inactiveColor = "#9ca3af", // Default gray-400 as hex
//   logo,
//   font,
// }) => {
//   const [active, setActive] = useState("Top Stories");
//   const { appPreview } = useContext(PreViewContext);
//   // Helper function to determine if a value is a hex color
//   const isHexColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

//   // Helper function to get text color class based on background brightness
//   const getTextColorClass = (bgColor) => {
//     if (!isHexColor(bgColor)) return "text-white"; // fallback

//     // Convert hex to RGB
//     const hex = bgColor.replace("#", "");
//     const r = parseInt(
//       hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
//       16
//     );
//     const g = parseInt(
//       hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
//       16
//     );
//     const b = parseInt(
//       hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
//       16
//     );

//     // Calculate brightness
//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;

//     return brightness > 125 ? "text-gray-900" : "text-white";
//   };

//   return (
//     <div
//       className="min-w-[330px] max-w-lg mx-auto h-[630px] rounded-2xl shadow-lg overflow-hidden flex flex-col"
//       style={{
//         backgroundColor: isHexColor(backgroundColor) ? backgroundColor : "",
//         fontFamily:font
//       }}
//     >
//       {/* Header */}
//       <div
//         className="flex items-center px-4 py-4 gap-1"
//         style={{
//           backgroundColor: isHexColor(headerColor) ? headerColor : "",
//         }}
//       >
//         {/* <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
//           <img src={appPreview.logo} alt=""className="w-full h-full rounded-full object-center" />
//         </div> */}
//         <div className="flex-1 flex items-center justify-between">
//           <div className="flex items-center gap-0">
//             <div
//               className="text-xl font-extrabold mt-4 font-sans"
//               style={{ color: isHexColor(textColor) ? textColor : "" }}
//             >
//               Daily News Live
//             </div>
//           </div>
//           {/* <div className="flex items-center gap-4"> */}
//           {/* <div className="relative"> */}
//           {/* <div className="w-6 h-6 bg-white rounded-full" >
//                 <img src={appPreview.owner_profile_pic} alt="this is owner profile picture" className="rounded-full" />
//               </div> */}
//           {/* <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" /> */}
//           {/* </div> */}
//           {/* <div 
//               className="font-medium cursor-pointer"
//               style={{ color: isHexColor(textColor) ? textColor : '' }}
//             >
//               Menu
//             </div> */}
//           {/* </div> */}
//         </div>
//       </div>

//       {/* menus  */}
//       {/* 🧭 Tabs - clean underline style */}
//       <div className="flex border-b text-[15px] font-medium text-gray-500 overflow-x-auto hide-scrollbar bg-white select-none">
//         {["Top News", "Shorts", "Trending", "Politics", "Sports"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActive(tab)}
//             className={`relative px-2 py-3 transition-all font-sans  whitespace-nowrap ${
//               active === tab
//                 ? `text-[${headerColor}] font-semibold`
//                 : `text-gray-600 hover:text-[${headerColor}]`
//             }`}
//             style={{
//               color:headerColor
//             }}
//           >
//             {tab}
//             {active === tab && (
//               <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[${headerColor}] rounded-full`} />
//             )}
//           </button>
//         ))}
//       </div>

    //   {/* Content */}
    //    <div className="flex-1 overflow-y-scroll hide-scrollbar px-4 py-3 space-y-4">
    //     <div className="w-full h-16 rounded-md bg-gray-200 animate-pulse" />
    //     <div className="w-full h-28 rounded-md bg-gray-200 animate-pulse" />
    //     <div className="w-3/5 h-4 rounded bg-gray-200 animate-pulse" />
    //     <div className="space-y-1">
    //       {Array.from({ length: 5 }).map((_, i) => (
    //         <div
    //           key={i}
    //           className="w-full h-3 rounded bg-gray-200 animate-pulse"
    //         />
    //       ))}
    //     </div>
    //     <div className="flex gap-4">
    //       <div className="w-16 h-16 rounded-md bg-gray-200 animate-pulse" />
    //       <div className="flex-1 space-y-1">
    //         <div className="w-4/5 h-3 rounded bg-gray-200 animate-pulse" />
    //         <div className="w-1/2 h-3 rounded bg-gray-200 animate-pulse" />
    //       </div>
    //     </div>
    //     <div className="flex gap-4">
    //       <div className="w-16 h-16 rounded-md bg-gray-200 animate-pulse" />
    //       <div className="flex-1 space-y-2">
    //         <div className="w-4/5 h-3 rounded bg-gray-200 animate-pulse" />
    //         <div className="w-1/2 h-3 rounded bg-gray-200 animate-pulse" />
    //       </div>
    //     </div>
    //   </div> 
    //   {/* 📰 News Card Skeleton */}
    // <div className="m">
    //     {[1, 2].map((_,i) => {
    //    return (
    //      <div key={i} className="bg-white w-[270px] rounded-2xl shadow-md mx-2   border my-1 border-gray-100 overflow-hidden p-2 space-y-3 animate-pulse">
    //       <div className="w-[250px] h-[150px] bg-gray-200 rounded-xl" />
    //       <div className="space-y-2">
    //         <div className="w-4/5 h-2 bg-gray-200 rounded-md" />
    //         <div className="w-2/3 h-2 bg-gray-200 rounded-md" />
    //       </div>
    //     </div>
    //    )
    //   })}
    // </div>

//       {/* Bottom Navigation */}
//       <div className="border-t bg-white flex justify-between items-center  py-3">
//         {navItems.map((it) => {
//           const Icon = it.icon;
//           const isActive = active === it.name;
//           return (
//             <div
//               key={it.name}
//               className="flex-1 flex flex-col items-center justify-center cursor-pointer select-none"
//               onClick={() => setActive(it.name)}
//             >
//               <Icon
//                 size={18}
//                 style={{
//                   color: isActive
//                     ? isHexColor(headerColor)
//                       ? headerColor
//                       : ""
//                     : isHexColor(inactiveColor)
//                     ? inactiveColor
//                     : "",
//                 }}
//               />
//               <div
//                 style={{
//                   color: isActive
//                     ? isHexColor(headerColor)
//                       ? headerColor
//                       : ""
//                     : isHexColor(inactiveColor)
//                     ? inactiveColor
//                     : "",
//                 }}
//                 className="text-xs mt-1 font-medium"
//               >
//                 {it.name}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PreviewApp;


// import React, { useContext, useState } from "react";
// import { Home, Search, Video, BarChart2, Megaphone } from "lucide-react";
// import { PreViewContext } from "../../../../context/PreViewContext";
// import { useTranslation } from "react-i18next";


// const navItems = [
//   { name: "Top Stories", icon: Home },
//   { name: "Explore", icon: Search },
//   { name: "Shorts", icon: Video },
//   { name: "Youtube", icon: BarChart2 },
//   { name: "Polls", icon: Megaphone },
// ];

// const PreviewApp = ({
//   backgroundColor = "#f3f4f6",
//   headerColor = "#2563eb", 
//   textColor = "#ffffff",
//   activeColor = "#2563eb",
//   inactiveColor = "#9ca3af",
//   logo,
//   font,
// }) => {
//   const [active, setActive] = useState("Top Stories");
//   const { appPreview } = useContext(PreViewContext);
//   const { t } = useTranslation();
//   // console.log(appPreview)
//   const isHexColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

//   return (
//     <div className="flex items-center justify-center h-auto sm:min-h-screen ">
//       {/* Simple Phone Frame */}
//       <div 
//         className="w-[330px] h-[630px] rounded-3xl shadow-xl overflow-hidden flex flex-col border-8 border-gray-800"
//         style={{
//           backgroundColor: isHexColor(backgroundColor) ? backgroundColor : "",
//           fontFamily: font
//         }}
//       >
//         {/* Header */}
//         <div
//           className="flex items-center px-4 py-4"
//           style={{
//             backgroundColor: isHexColor(headerColor) ? headerColor : "",
//           }}
//         >
//           {/* <div className="flex-1 flex items-center gap-3">
//             <div className="">
//               <div className="w-14 h-14 rounded-full  flex items-center justify-center text-xs font-bold" 
//                    style={{ color: isHexColor(headerColor) ? headerColor : "" }}>
//               <img src={appPreview.logo} alt="" className="w-full h-full object-contain rounded-full"/>
//               </div>
//             </div>
//             <div
//               className="text-xl font-bold"
//               style={{ color: isHexColor(textColor) ? textColor : "" }}
//             >
//               Daily News Live
//             </div>
//           </div> */}


// <div className="flex-1 flex items-center gap-3">

//   <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
//     {appPreview.logo ? (
//       // If logo uploaded → show image
//       <img
//         src={appPreview.logo}
//         alt="Logo"
//         className="w-full h-full object-cover"
//       />
//     ) : (
//       // Default → show text
//       <span className="text-xs font-bold text-gray-700">LOGO</span>
//     )}
//   </div>

//   <div
//     className="text-xl font-bold"
//     style={{ color: isHexColor(textColor) ? textColor : "" }}
//   >
//    {t("appPreview.dailyNewsLive")}
//   </div>
// </div>

//         </div>

//         {/* Top Tabs */}
//         <div className="flex px-2 py-2 text-sm font-medium overflow-x-auto bg-white border- hide-scrollbar">
//           {["Top News", "Shorts", "Trending", "Politics", "Sports"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActive(tab)}
//               className={`relative px-2 py-2 transition-all text-xs whitespace-nowrap mr- ${
//                 active === tab ? "font-semibold" : "text-gray-600"
//               }`}
//               style={{
//                 color: active === tab ? headerColor : ""
//               }}
//             >
//               {t(`appPreview.${tab}`)}
//               {active === tab && (
//                 <span 
//                   className="absolute left-0 top-[23px] w-full h-[3px] rounded-full"
//                   style={{ backgroundColor: headerColor }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//            {/* Content */}
//        {/* <div className="flex-1 overflow-y-scroll hide-scrollbar px-4 py-3 space-y-4">
//         <div className="w-full h-16 rounded-md bg-gray-200 animate-pulse" />
//         <div className="w-full h-28 rounded-md bg-gray-200 animate-pulse" />
//         <div className="w-3/5 h-4 rounded bg-gray-200 animate-pulse" />
//         <div className="space-y-1">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <div
//               key={i}
//               className="w-full h-3 rounded bg-gray-200 animate-pulse"
//             />
//           ))}
//         </div>
//         <div className="flex gap-4">
//           <div className="w-16 h-16 rounded-md bg-gray-200 animate-pulse" />
//           <div className="flex-1 space-y-1">
//             <div className="w-4/5 h-3 rounded bg-gray-200 animate-pulse" />
//             <div className="w-1/2 h-3 rounded bg-gray-200 animate-pulse" />
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <div className="w-16 h-16 rounded-md bg-gray-200 animate-pulse" />
//           <div className="flex-1 space-y-2">
//             <div className="w-4/5 h-3 rounded bg-gray-200 animate-pulse" />
//             <div className="w-1/2 h-3 rounded bg-gray-200 animate-pulse" />
//           </div>
//         </div>
//       </div>  */}
//       {/* 📰 News Card Skeleton */}
//     <div className="overflow-y-scroll gap-2">
//         {[1, 2,3,4].map((_,i) => {
//        return (
//          <div key={i} className="bg-white w-[295px] rounded-2xl shadow-md mx-auto   border my-2 border-gray-100 overflow-hidden p-2 space-y-3 animate-pulse">
//           <div className="w-[270px] h-[150px] bg-gray-200 rounded-xl" />
//           <div className="space-y-2">
//             <div className="w-4/5 h-1.5 bg-gray-200 rounded-md" />
//             <div className="w-2/3 h-1.5 bg-gray-200 rounded-md" />
//           </div>
//         </div>
//        )
//       })}
//     </div>

//         {/* Bottom Navigation */}
//         <div className="border-t bg-white py-3 flex justify-between items-center px-2">
//           {navItems.map((it) => {
//             const Icon = it.icon;
//             const isActive = active === it.name;
//             return (
//               <div
//                 key={it.name}
//                 className="flex flex-col items-center justify-center cursor-pointer select-none py-1 px-2 rounded-lg"
//                 onClick={() => setActive(it.name)}
//               >
//                 <Icon
//                   size={20}
//                   style={{
//                     color: isActive
//                       ? isHexColor(headerColor)
//                         ? headerColor
//                         : ""
//                       : isHexColor(inactiveColor)
//                       ? inactiveColor
//                       : "",
//                   }}
//                 />
//                 <div
//                   style={{
//                     color: isActive
//                       ? isHexColor(headerColor)
//                         ? headerColor
//                         : ""
//                       : isHexColor(inactiveColor)
//                       ? inactiveColor
//                       : "",
//                   }}
//                   className="text-xs mt-1 font-medium"
//                 >
//                   {it.name}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreviewApp;




import React, { useContext, useState } from "react";
import { Home, Search, Video, BarChart2, Megaphone } from "lucide-react";
import { PreViewContext } from "../../../../context/PreViewContext";
import { useTranslation } from "react-i18next";

const navItems = [
  { name: "topStories", icon: Home },
  { name: "explore", icon: Search },
  { name: "shorts", icon: Video },
  { name: "youtube", icon: BarChart2 },
  { name: "polls", icon: Megaphone },
];

const topTabs = ["topNews", "shorts", "trending", "politics", "sports"];

const PreviewApp = ({
  backgroundColor = "#f3f4f6",
  headerColor = "#2563eb", 
  textColor = "#ffffff",
  activeColor = "#2563eb",
  inactiveColor = "#9ca3af",
  logo,
  font,
}) => {
  const [active, setActive] = useState("topNews");
  const { appPreview } = useContext(PreViewContext);
  const { t } = useTranslation();

  const isHexColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  return (
    <div className="flex items-center justify-center h-auto sm:min-h-screen">
      <div 
        className="w-[330px] h-[630px] rounded-3xl shadow-xl overflow-hidden flex flex-col border-8 border-gray-800"
        style={{
          backgroundColor: isHexColor(backgroundColor) ? backgroundColor : "",
          fontFamily: font
        }}
      >
        {/* Header */}
        <div
          className="flex items-center px-4 py-4"
          style={{
            backgroundColor: isHexColor(headerColor) ? headerColor : "",
          }}
        >
          <div className="flex-1 flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
              {appPreview.logo ? (
                <img src={appPreview.logo} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs font-bold text-gray-700">LOGO</span>
              )}
            </div>

            <div
              className="text-xl font-bold"
              style={{ color: isHexColor(textColor) ? textColor : "" }}
            >
              {t("appPreview.dailyNewsLive")}
            </div>
          </div>
        </div>

        {/* Top Tabs */}
        <div className="flex px-2 py-2 text-sm font-medium overflow-x-auto bg-white border hide-scrollbar">
          {topTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-3 py-2 transition-all text-xs whitespace-nowrap ${
                active === tab ? "font-semibold" : "text-gray-600"
              }`}
              style={{
                color: active === tab ? headerColor : ""
              }}
            >
              {t(`appPreview.${tab}`)}

              {active === tab && (
                <span 
                  className="absolute left-0 top-[23px] w-full h-[3px] rounded-full"
                  style={{ backgroundColor: headerColor }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content skeleton */}
        <div className="overflow-y-scroll gap-2">
          {[1,2,3,4].map((i) => (
            <div
              key={i}
              className="bg-white w-[295px] rounded-2xl shadow-md mx-auto border my-2 border-gray-100 overflow-hidden p-2 space-y-3 animate-pulse"
            >
              <div className="w-[270px] h-[150px] bg-gray-200 rounded-xl" />
              <div className="space-y-2">
                <div className="w-4/5 h-1.5 bg-gray-200 rounded-md" />
                <div className="w-2/3 h-1.5 bg-gray-200 rounded-md" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="border-t bg-white py-3 flex justify-between items-center px-2">
          {navItems.map((it) => {
            const Icon = it.icon;
            const isActive = active === it.name;
            return (
              <div
                key={it.name}
                className="flex flex-col items-center justify-center cursor-pointer py-1 px-2 rounded-lg"
                onClick={() => setActive(it.name)}
              >
                <Icon
                  size={20}
                  style={{
                    color: isActive
                      ? headerColor
                      : inactiveColor,
                  }}
                />
                <div
                  style={{
                    color: isActive
                      ? headerColor
                      : inactiveColor,
                  }}
                  className="text-xs mt-1 font-medium"
                >
                  {t(`appPreview.${it.name}`)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PreviewApp;
