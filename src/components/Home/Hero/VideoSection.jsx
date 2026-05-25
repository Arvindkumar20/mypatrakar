import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

import MyPatrakarThumbNail from "../../../assets/My Patrakar Thumbnail Image.png";
import heroVideo from "../../../assets/hero.mp4";

const VideoSection = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const [closing, setClosing] = useState(false);

  // Close Popup Smoothly
  const closePopup = () => {
    setClosing(true);
    setTimeout(() => {
      setOpenVideo(false);
      setClosing(false);
    }, 400);
  };

  // Auto Close After Video Ends (with delay)
  const handleVideoEnd = () => {
    setTimeout(() => {
      closePopup();
    }, 1200);
  };

  return (
    <>
      {/* Thumbnail Section */}
      <div
        className="group relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl cursor-pointer"
        onClick={() => setOpenVideo(true)}
      >
        {/* Image with rounded corners and shadow */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
          <img
            src={MyPatrakarThumbNail}
            alt="Video Thumbnail"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Modern Play Button with Pulse Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
            rounded-full bg-white/95 backdrop-blur-sm shadow-lg 
            group-hover:scale-110 transition-transform duration-300 
            group-hover:shadow-red-500/30 cursor-pointer"
          >
            {/* Pulsing ring animation */}
            <div className="absolute inset-0 rounded-full bg-white/50 animate-ping opacity-75"></div>
            <FaPlay className="text-red-500 text-lg sm:text-xl md:text-2xl ml-0.5 sm:ml-1" />
          </div>
        </div>
      </div>

      {/* Video Modal with Glassmorphism Effects */}
      {openVideo && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-all duration-500
          ${closing ? "bg-black/0 backdrop-blur-none" : "bg-black/70 backdrop-blur-md"}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePopup();
          }}
        >
          {/* Elegant Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 
                       w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm 
                       text-white flex items-center justify-center
                       hover:bg-red-500 hover:scale-110 transition-all duration-200"
            aria-label="Close video"
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>

          {/* Video Container with Neumorphic Border */}
          <div
            className={`flex items-center justify-center transform transition-all duration-500
            ${closing ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40 backdrop-blur-sm p-1">
              <video
                className="w-full max-w-[90vw] max-h-[85vh] rounded-xl"
                src={heroVideo}
                controls
                autoPlay
                playsInline
                onEnded={handleVideoEnd}
                controlsList="nodownload"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;