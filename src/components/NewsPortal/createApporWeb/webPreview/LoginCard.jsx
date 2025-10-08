import React from "react";
import google from "./google.jpg"
export default function LoginCard({logo}) {
  return (
    <div className=" flex items-center justify-center bg-blue-500">
      <div className="bg-white shadow-md rounded-md  w-36 text-center">
        {/* Logo */}
        <div className="flex justify-center mt-2">
          <img
            src={logo}  
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Title */}
        <h2 className="text-md font-bold mb-1">Welcome Back</h2>
        <p className="text-gray-500 text-xs mb-2">
          Sign in to continue to your account
        </p>

        {/* Google Button */}
       <div className="flex items-center justify-center my-1">
         <button className="flex items-center justify-center gap-1 w-5/6 bg-white border border-gray-300 rounded-md py-1 mb-2  hover:bg-gray-50 transition">
          <img
            src={google}
            alt="Google"
            className="h-3 w-3"
          />
          
          <span className="text-xs font-medium text-gray-700">
            Continue 
          </span>
        </button>
       </div>
      </div>
    </div>
  );
}
