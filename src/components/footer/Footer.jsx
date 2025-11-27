import React from "react";

// import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import { Link } from "react-router-dom";
import { t } from "i18next";

export default function Footer() {
  return (
    <div className="w-full py-2 bg-gray-900">
      <FooterTop />
     <div className="w-full bg-gradient-to-br px-4 sm:px-6 lg:px-10">
  <footer
    className="
      flex flex-col lg:flex-row 
      items-center lg:items-start 
      justify-between 
      text-center lg:text-left
      py-4 
      border-t mt-2 border-gray-600 
      max-w-7xl mx-auto gap-3 sm:gap-4 lg:gap-6 
      text-gray-50 text-sm
    "
  >
    {/* LEFT */}
    <div className="w-full lg:w-auto">
      Copyright © {new Date().getFullYear()}
    </div>

    {/* CENTER */}
    <div className="w-full lg:w-auto">
      <span>
        MyPatrakar, a product powered by{" "}
        <Link
          to="https://www.hindtechitsolutions.com/"
          className="hover:no-underline font-extrabold hover:text-red-500 focus:no-underline focus:text-red-500"
        >
          Hindtech IT Solutions
        </Link>
      </span>
    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-auto">
      <p>All Rights Reserved</p>
    </div>
  </footer>
</div>


      {/* <FooterBottom /> */}
    </div>
  );
}
