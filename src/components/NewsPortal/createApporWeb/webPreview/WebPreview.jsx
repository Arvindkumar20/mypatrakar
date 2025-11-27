import React, { useContext, useState } from "react";
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

// Header Component
const Header = ({ bgColor, color, logo }) => {
  // console.log(bgColor,color)
  return (
    <header className="w-full flex flex-col">
      {/* Top language/social bar */}
      <div className=" px-4 py-1" style={{ background: bgColor, color: color }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
          <LanguageSelector />
          <button className="bg-white text-gray-950 py-2 px-3 rounded">
            {" "}
            Advertise with us
          </button>
        </div>
      </div>

      {/* Main header content */}
      <div className="flex-1 flex flex-col justify-start mt-2">
        <div className="max-w-7xl mx-auto w-full px-4 flex flex-col items-center">
          {/* Logo */}
          <div className="w-full flex justify-center items-center gap-5">
            <div className=" text-2xl font-bold flex items-center justify-between">
              <img
                src={logo}
                alt="Website logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>

            <div className="w-full h-28 bg-gray-100 flex items-center justify-center rounded-md border border-dashed border-gray-300">
              <div className="text-gray-400">ADVERTISEMENT</div>
            </div>
          </div>
        </div>
        {/* Combined Navigation, Search and Video Button */}
        <div
          className="w-full flex  md:flex-row items-center justify-between px-3  mt-2 "
          style={{
            background: bgColor,
            color: color,
          }}
        >
          {/* Mobile Menu Button (hidden on desktop) */}
          <div>
            <FaHome
              size={20}
              className=" cursor-pointer"
              style={{
                color: color,
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="sm:hidden p-2 rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 18 18"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation (hidden on mobile, shown on desktop) */}
          <nav className="hidden sm:flex ">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
              <div className="cursor-pointer px-3 py-2 hover:bg-red-700 rounded">
                देश
              </div>
              <div className="cursor-pointer px-3 py-2 hover:bg-red-700 rounded">
                न्यूज़
              </div>
              <div className="cursor-pointer px-3 py-2 hover:bg-red-700 rounded">
                उत्तर प्रदेश
              </div>
              <div className="cursor-pointer px-3 py-2 hover:bg-red-700 rounded">
                मध्य प्रदेश
              </div>
              <div className="cursor-pointer px-3 py-2 hover:bg-red-700 rounded">
                मनोरंजन
              </div>
              <div className="cursor-pointer px-3 py-2 hover:bg-red-700 rounded">
                विविध
              </div>
            </div>
          </nav>

          {/* Search Bar (takes remaining space) */}
        </div>
      </div>
    </header>
  );
};

// Skeleton card helper
const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 rounded-md ${className}`}
    aria-hidden="true"
  ></div>
);

// Main Content Placeholder
const MainContent = () => {
  return (
    <main className="flex-1 bg-white py-2">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        {/* Advertisement Banner */}
        <div className="w-full h-28 bg-gray-100 flex items-center justify-center rounded-md border border-dashed border-gray-300">
          <div className="text-gray-400">ADVERTISEMENT</div>
        </div>

        {/* Top big section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left large preview */}
          <div className="lg:col-span-2 space-y-3">
            <Skeleton className="w-full h-28" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
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
            {Array.from({ length: 2 }).map((_, i) => (
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
};

// Footer with social links and navigation
const Footer = ({ socialLinks = {}, footerColor, color, logo }) => {
  console.log(socialLinks);
  return (
    <footer
      className="bg-[#0f2347] mt-2"
      style={{
        background: footerColor,
        color: color,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-2">
          <h3 className="font-semibold text-md text-yellow-300">Navigation</h3>
          {[
            "Home",
            "About Us",
            "Terms & Condition",
            "Privacy & Policy",
            "Contact Us",
          ].map((item, idx) => (
            <div key={idx} className="text-sm">
              <a
                href={item.href}
                className="hover:underline cursor-pointer hover:text-yellow-200"
              >
                {item}
              </a>
            </div>
          ))}
        </div>
        <div className="">
          <FooterFaceBook url={socialLinks.fb_link}/>
        </div>
        <div className="relative space-y-2">
          <div>
            {/* Yellow connecting line */}

            <h3 className="font-semibold text-md text-yellow-300 relative">
              #BS_EXCLUSIVE
            </h3>

            <ul className="space-y-1 text-xs leading-snug ">
              <li className="relative group cursor-pointer">
                <div className="absolute group-hover:bg-yellow-300 -left-[12.4px] bottom- h-16 w-[1.5px] bg-gray-50"></div>
                <span className="absolute -left-4 bg-gray-50 group-hover:bg-yellow-400 h-2 w-2 rounded-full"></span>
                <span className="group-hover:text-yellow-300">
                  {" "}
                  Russian President Vladimir Putin is confirmed to ...{" "}
                </span>
              </li>
              <li className="relative group cursor-pointer">
                <div className="absolute group-hover:bg-yellow-300 -left-[12.4px] bottom- h-12 w-[1.5px] bg-gray-50"></div>
                <span className="absolute -left-4 bg-gray-50 group-hover:bg-yellow-400 h-2 w-2 rounded-full"></span>
                <span className="group-hover:text-yellow-300">
                  In a milestone for indigenous defense two stealth ...{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center  justify-center">
          <LoginCard logo={logo} />
        </div>
      </div>
      <div className="flex items-center justify-between px-3 border-t border-gray-700 text-center py-2 text-[10px]">
        <div className="text-xs">
          © {new Date().getFullYear()} My Patrakar. All rights reserved.
        </div>
        <div className="flex gap-2">
          {socialLinks.fb_link && (
            <a
              aria-label="facebook"
              href={socialLinks.fb_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={18}
                className="text-pink-500 hover:text-pink-600"
              />
            </a>
          )}
          {socialLinks.twitter_link && (
            <a
              aria-label="twitter"
              href={socialLinks.twitter_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={18} />
            </a>
          )}
          {socialLinks.linkedin_link && (
            <a
              aria-label="linkedin"
              href={socialLinks.linkedin_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={18} />
            </a>
          )}
          {socialLinks.insta_link && (
            <a
              aria-label="instagram"
              href={socialLinks.insta_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={18}
                className="text-pink-500 hover:text-pink-600"
              />
            </a>
          )}
          {socialLinks.youtube_link && (
            <a
              aria-label="youtube"
              href={socialLinks.youtube_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={18} />
            </a>
          )}
        </div>
        <div className="">Powered & Developed by MyPatrakar</div>
      </div>
    </footer>
  );
};

// Full Page Wrapper
const WebPreview = ({ bgColor, color, footerColor, footerText }) => {
  const { webPreview, appPreview } = useContext(PreViewContext);
  // console.log(webPreview)
  // console.log(webPreview.socialMedia);

  return (
    <div className="flex flex-col ">
      <Header
        logo={webPreview.logo}
        bgColor={webPreview.backgroundColor || bgColor}
        color={webPreview.color || color}
      />
      <MainContent />
      <Footer
        socialLinks={webPreview.socialMedia}
        footerColor={footerColor}
        color={footerText}
        logo={appPreview.logo}
      />
    </div>
  );
};

export default WebPreview;
