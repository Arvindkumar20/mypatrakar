// import React, { useContext } from "react";ƒ
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShareAlt,
} from "react-icons/fa";
// import { BlogContext } from "../../../../../context/BlogContext";

const BlogMetaAndShare = () => {
  //   const { blog } = useContext(BlogContext);
  //   console.log(blog);
  // const {authorName}
  const authorName = "Admin";
  const date = "April 30, 2025";
  const readTime = "5 min read";
  const authorImage =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=128&h=128&q=80"; // कृपया अपनी एडमिन इमेज का URL यहाँ डालें

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      {/* 1. Meta Data Section */}
      <div className="flex items-center space-x-3">
        <img
          className="w-12 h-12 rounded-full object-cover bg-gray-300"
          src={authorImage}
          alt={authorName}
        />

        {/* Name and Date/Read Time */}
        <div>
          <p className="text-lg font-bold text-gray-800">{authorName}</p>
          <p className="text-sm text-gray-500">
            {date} • {readTime}
          </p>
        </div>
      </div>

      {/* 2. Social Share Icons Section */}
      <div className="flex items-center space-x-6 text-gray-400">
        {/* Facebook Icon */}
        <a href="#" className="hover:text-gray-700 transition duration-150">
          <FaFacebookF className="w-5 h-5" />
        </a>

        {/* Twitter Icon */}
        <a href="#" className="hover:text-gray-700 transition duration-150">
          <FaTwitter className="w-5 h-5" />
        </a>

        {/* LinkedIn Icon */}
        <a href="#" className="hover:text-gray-700 transition duration-150">
          <FaLinkedinIn className="w-5 h-5" />
        </a>

        {/* Share Icon */}
        <a href="#" className="hover:text-gray-700 transition duration-150">
          <FaShareAlt className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

// Example usage of both components
const CompleteBlogHeader = ({ blog }) => {
  return (
    <div className="font-sans">
      {/* <BlogCategoryTag category="AWARENESS" /> */}

      <div className="mt-4">
        <BlogMetaAndShare />
      </div>
    </div>
  );
};

export default CompleteBlogHeader;
