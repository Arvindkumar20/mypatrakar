import React from "react";

export default function BlogFooter() {
  return (
    <div className="mt-24 mb-6">
      {/* Logo + Title */}
      <div className="flex flex-col items-center justify-center">
        {/* Logo Box */}
       

        {/* Title */}
        {/* <h2 className="mt-3 text-[22px] font-semibold text-[#0F172A] tracking-wide">
          MyPatrakar
        </h2> */}

        {/* Powered By */}
        <p className="mt-4 text-[16px] font-medium text-[#6B7280]">
          Proudly Powered by{" "}
          <a
            href="https://www.hindtechitsolutions.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#111827] hover:underline"
          >
            Hindtech It Solutions
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-2 text-[15px] text-[#9CA3AF]">
          © 2025 All rights reserved.
        </p>
      </div>
    </div>
  );
}
