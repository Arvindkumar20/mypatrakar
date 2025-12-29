// import React, { useContext, useState } from "react";
// import loginImage from "./login.png";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
//   FaHome,
// } from "react-icons/fa";
// import LanguageSelector from "../../../NavigationBar/LanguageSelector";
// import { PreViewContext } from "../../../../context/PreViewContext";
// import FooterFaceBook from "./FooterFaceBook";
// import LoginCard from "./LoginCard";
// import { useTranslation } from "react-i18next";
// // Header Component
// const Header = ({ bgColor, color, logo, footerColor }) => {
//   const { webPreview } = useContext(PreViewContext);
//   const hoverColor = `hover:bg-[${footerColor}]`;
//   const { t } = useTranslation();

//   // console.log(footerColor);
//   return (
//     <header
//       className="w-full flex flex-col"
//       style={{
//         fontFamily: webPreview.font_top,
//       }}
//     >
//       {/* Top language/social bar */}
//       <div className=" px-4 py-1" style={{ background: bgColor, color: color }}>
//         <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
//           <LanguageSelector />
//           <button className="bg-white text-gray-950 py-2 px-2 rounded">
//             {" "}
//             {t("webPreview.header.advertise")}
//           </button>
//         </div>
//       </div>

//       {/* Main header content */}
//       <div className="flex-1 flex flex-col justify-start mt-2">
//         <div className="max-w-7xl mx-auto w-full px-4 flex flex-col items-center">
//           {/* Logo */}
//           <div className="w-full flex justify-center items-center gap-5">
//             {/* <div className=" text-2xl font-bold flex items-center justify-between">
//               <img
//                 src={logo}
//                 alt="Website logo"
//                 className="h-12 md:h-16 w-auto object-contain"
//               />
//             </div> */}

//             <div className="w-80 h-28 rounded overflow-hidden flex items-center justify-center bg-gray-200">
//               {webPreview.logo ? (
//                 // If logo uploaded → show image
//                 <img
//                   src={webPreview.logo}
//                   alt="Logo"
//                   className="w-full h-full object-contain"
//                 />
//               ) : (
//                 // Default → show text
//                 <span className="text-xs font-bold text-gray-700">LOGO</span>
//               )}
//             </div>

//             <div className="w-full h-28 bg-gray-100 flex items-center justify-center rounded-md border border-dashed border-gray-300">
//               <div className="text-gray-400"> {t("webPreview.mainContent.advertisement")}</div>
//             </div>
//           </div>
//         </div>
//         {/* Combined Navigation, Search and Video Button */}
//         <div
//           className="w-full flex  md:flex-row items-center justify-between px-2  mt-2 "
//           style={{
//             background: bgColor,
//             color: color,
//           }}
//         >
//           {/* Mobile Menu Button (hidden on desktop) */}
//           <div>
//             <FaHome
//               size={20}
//               className=" cursor-pointer"
//               style={{
//                 color: color,
//               }}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button className="sm:hidden p-2 rounded-md ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 18 18"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Navigation (hidden on mobile, shown on desktop) */}
//           <nav className="hidden sm:flex ">
//             <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
//               <div className={`cursor-pointer px-2 py-2 ${hoverColor} rounded`}>
//                 {t("webPreview.header.navigation.desh")}
//               </div>
//               <div className={`cursor-pointer px-2 py-2 ${hoverColor} rounded`}>
//                 {t("webPreview.header.navigation.news")}
//               </div>
//               <div className={`cursor-pointer px-2 py-2 ${hoverColor} rounded`}>
//                 {t("webPreview.header.navigation.uttar_pradesh")}
//               </div>
//               <div className={`cursor-pointer px-2 py-2 ${hoverColor} rounded`}>
//                 {t("webPreview.header.navigation.madhya_pradesh")}
//               </div>
//               <div className={`cursor-pointer px-2 py-2 ${hoverColor} rounded`}>
//                 {t("webPreview.header.navigation.entertainment")}
//               </div>
//               <div className={`cursor-pointer px-2 py-2 ${hoverColor} rounded`}>
//                 {t("webPreview.header.navigation.misc")}
//               </div>
//             </div>
//           </nav>

//           {/* Search Bar (takes remaining space) */}
//         </div>
//       </div>
//     </header>
//   );
// };

// // Skeleton card helper
// const Skeleton = ({ className }) => (
//   <div
//     className={`animate-pulse bg-gray-200 rounded-md ${className}`}
//     aria-hidden="true"
//   ></div>
// );

// // Main Content Placeholder
// const MainContent = () => {
//   const { t } = useTranslation();
//   return (
//     <main className="flex-1 bg-white py-2">
//       <div className="max-w-7xl mx-auto px-4 space-y-4">
//         {/* Advertisement Banner */}
//         <div className="w-full h-28 bg-gray-100 flex items-center justify-center rounded-md border border-dashed border-gray-300">
//           <div className="text-gray-400">
//             {t("webPreview.mainContent.advertisement")}
//           </div>
//         </div>

//         {/* Top big section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left large preview */}
//           <div className="lg:col-span-2 space-y-3">
//             <Skeleton className="w-full h-28" />
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <div key={i} className="flex gap-3">
//                   <Skeleton className="w-20 h-10 flex-shrink-0" />
//                   <div className="flex-1 space-y-1">
//                     <Skeleton className="w-3/4 h-2" />
//                     <Skeleton className="w-full h-2" />
//                     <Skeleton className="w-full h-2" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Right sidebar */}
//           <div className="space-y-6">
//             {Array.from({ length: 2 }).map((_, i) => (
//               <div key={i} className="space-y-2">
//                 <Skeleton className="w-full h-28 rounded-md" />
//                 <Skeleton className="w-5/6 h-2" />
//                 <Skeleton className="w-full h-2" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// // Footer with social links and navigation
// const Footer = ({ socialLinks = {}, footerColor, footerText, logo }) => {
//   const { webPreview } = useContext(PreViewContext);
//   const { t } = useTranslation();
//   // console.log(webPreview.font_bottom)
//   // console.log(socialLinks);
//   // console.log(footerText);
//   return (
//     <footer
//       className="bg-[#0f2347] mt-2 "
//       style={{
//         background: footerColor,
//         color: footerText,
//         fontFamily: webPreview.font_bottom,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-1 md:grid-cols-4  gap-3 sm:gap-12">
//         <div className="space-y-2">
//           <h3
//             className="font-semibold text-md "
//             style={{
//               fontFamily: webPreview.font_bottom,
//             }}
//           >
//             Navigation
//           </h3>
//           {[
//             t("webPreview.footer.navigation.home"),
//             t("webPreview.footer.navigation.about"),
//             t("webPreview.footer.navigation.terms"),
//             t("webPreview.footer.navigation.privacy"),
//             t("webPreview.footer.navigation.contact"),

//             // "About Us",
//             // "Terms & Condition",
//             // "Privacy & Policy",
//             // "Contact Us",
//           ].map((item, idx) => (
//             <div key={idx} className="text-sm">
//               <a
//                 href={item.href}
//                 className="hover:underline cursor-pointer "
//                 style={{
//                   fontFamily: webPreview.font_bottom,
//                   color: footerText,
//                 }}
//               >
//                 {item}
//               </a>
//             </div>
//           ))}
//         </div>
//         <div
//           className="hidden md:block"
//           style={{
//             fontFamily: webPreview.font_bottom,
//           }}
//         >
//           <FooterFaceBook url={socialLinks.fb_link} />
//         </div>
//         <div className="relative space-y-2 hidden md:block">
//           <div>
//             {/* Yellow connecting line */}

//             <h3
//               className="font-semibold text-md  relative"
//               style={{
//                 fontFamily: webPreview.font_bottom,
//               }}
//             >
//               #BS_EXCLUSIVE
//             </h3>

//             <ul
//               className="space-y-1 text-xs leading-snug "
//               style={{
//                 fontFamily: webPreview.font_bottom,
//               }}
//             >
//               <li className="relative group cursor-pointer">
//                 <div className="absolute group-hover:bg-yellow-300 -left-[12.4px] bottom- h-16 w-[1.5px] bg-gray-50"></div>
//                 <span className="absolute -left-4 bg-gray-50 group-hover:bg-yellow-400 h-2 w-2 rounded-full"></span>
//                 <span className="group-hover:">
//                   {" "}
//                   Russian President Vladimir Putin is confirmed to ...{" "}
//                 </span>
//               </li>
//               <li className="relative group cursor-pointer">
//                 <div className="absolute group-hover:bg-yellow-300 -left-[12.4px] bottom- h-12 w-[1.5px] bg-gray-50"></div>
//                 <span className="absolute -left-4 bg-gray-50 group-hover:bg-yellow-400 h-2 w-2 rounded-full"></span>
//                 <span className="group-hover:">
//                   In a milestone for indigenous defense two stealth ...{" "}
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex items-center  justify-center">
//           <LoginCard logo={logo} />
//         </div>
//       </div>
//       <div className="flex items-center justify-between px-2 border-t border-gray-700 text-center py-2 text-[10px]">
//         <div className="text-xs">
//           © {new Date().getFullYear()} {t("webPreview.footer.copyright")}
//         </div>
//         <div className="flex gap-2">
//           {socialLinks.fb_link && (
//             <a
//               aria-label="facebook"
//               href={socialLinks.fb_link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF
//                 size={18}
//                 className="text-pink-500 hover:text-pink-600"
//               />
//             </a>
//           )}
//           {socialLinks.twitter_link && (
//             <a
//               aria-label="twitter"
//               href={socialLinks.twitter_link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter size={18} />
//             </a>
//           )}
//           {socialLinks.linkedin_link && (
//             <a
//               aria-label="linkedin"
//               href={socialLinks.linkedin_link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedinIn size={18} />
//             </a>
//           )}
//           {socialLinks.insta_link && (
//             <a
//               aria-label="instagram"
//               href={socialLinks.insta_link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram
//                 size={18}
//                 className="text-pink-500 hover:text-pink-600"
//               />
//             </a>
//           )}
//           {socialLinks.youtube_link && (
//             <a
//               aria-label="youtube"
//               href={socialLinks.youtube_link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaYoutube size={18} />
//             </a>
//           )}
//         </div>
//         <div className="">{t("webPreview.footer.powered")}</div>
//       </div>
//     </footer>
//   );
// };

// // Full Page Wrapper
// const WebPreview = ({
//   bgColor,
//   color,
//   footerColor,
//   footerText,
//   fontTop,
//   fontBottom,
// }) => {
//   const { webPreview, appPreview } = useContext(PreViewContext);
//   // console.log(webPreview)
//   // console.log(webPreview.socialMedia);
//   return (
//     <div className="flex flex-col ">
//       <Header
//         logo={webPreview.logo}
//         bgColor={webPreview.backgroundColor || bgColor}
//         color={webPreview.color || color}
//         fontTop={fontTop}
//         footerColor={footerColor}
//       />
//       <MainContent />
//       <Footer
//         fontBottom={fontBottom}
//         socialLinks={webPreview.socialMedia}
//         footerColor={footerColor}
//         color={webPreview.color || color}
//         logo={appPreview.logo}
//         footerText={footerText}
//       />
//     </div>
//   );
// };

// export default WebPreview;






import React, { useContext, useMemo, memo } from "react";
import loginImage from "./login.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import LanguageSelector from "../../../NavigationBar/LanguageSelector";
import { PreViewContext } from "../../../../context/PreViewContext";
import FooterFaceBook from "./FooterFaceBook";
import LoginCard from "./LoginCard";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";
import { Footer } from "./Footer";



// Skeleton card helper - memoized
const Skeleton = memo(({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 rounded-md ${className}`}
    aria-hidden="true"
  ></div>
));

Skeleton.displayName = "Skeleton";

// Main Content Placeholder - memoized
const MainContent = memo(() => {
  const { t } = useTranslation();

  const skeletonItems = useMemo(() => Array.from({ length: 6 }), []);
  const sidebarItems = useMemo(() => Array.from({ length: 2 }), []);

  return (
    <main className="flex-1 bg-white py-2">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        {/* Advertisement Banner */}
        <div className="w-full h-28 bg-gray-100 flex items-center justify-center rounded-md border border-dashed border-gray-300">
          <div className="text-gray-400">
            {t("webPreview.mainContent.advertisement")}
          </div>
        </div>

        {/* Top big section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left large preview */}
          <div className="lg:col-span-2 space-y-3">
            <Skeleton className="w-full h-28" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skeletonItems.map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="w-20 h-10 flex-shrink-0" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="w-3/4 h-2" />
                    <Skeleton className="w-full h-2" />
                    <Skeleton className="w-full h-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right sidebar */}
          <div className="space-y-6">
            {sidebarItems.map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="w-full h-28 rounded-md" />
                <Skeleton className="w-5/6 h-2" />
                <Skeleton className="w-full h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
});

MainContent.displayName = "MainContent";

// Full Page Wrapper - memoized
const WebPreview = memo(({
  bgColor,
  color,
  footerColor,
  footerText,
  fontTop,
  fontBottom
}) => {
  const { webPreview, appPreview } = useContext(PreViewContext);

  // Memoize computed values
  const computedBgColor = useMemo(() => webPreview.backgroundColor || bgColor, [webPreview.backgroundColor, bgColor]);
  const computedColor = useMemo(() => webPreview.color || color, [webPreview.color, color]);

  return (
    <div className="flex flex-col">
      <Header
        logo={webPreview.logo}
        bgColor={computedBgColor}
        color={computedColor}
        fontTop={fontTop}
        footerColor={footerColor}
      />
      <MainContent />
      <Footer
        fontBottom={fontBottom}
        socialLinks={webPreview.socialMedia || {}}
        footerColor={footerColor}
        color={computedColor}
        logo={appPreview.logo}
        footerText={footerText}
      />
    </div>
  );
});

WebPreview.displayName = "WebPreview";

export default WebPreview;