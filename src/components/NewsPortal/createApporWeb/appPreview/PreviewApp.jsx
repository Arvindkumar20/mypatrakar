import React, { useContext, useState } from "react";
import { Home, Search, Video, BarChart2, Megaphone } from "lucide-react";
import { PreViewContext } from "../../../../context/PreViewContext";
const navItems = [
  { name: "Top Stories", icon: Home },
  { name: "Explore", icon: Search },
  { name: "Shorts", icon: Video },
  { name: "Youtube", icon: BarChart2 },
  { name: "Polls", icon: Megaphone },
];

const PreviewApp = ({
  backgroundColor = "#f3f4f6", // Default gray-100 as hex
  headerColor = "#2563eb", // Default blue-600 as hex
  textColor = "#ffffff", // Default white as hex
  activeColor = "#2563eb", // Default blue-600 as hex
  inactiveColor = "#9ca3af", // Default gray-400 as hex
  logo
}) => {
  const [active, setActive] = useState("Top Stories");
const {appPreview}=useContext(PreViewContext);
  // Helper function to determine if a value is a hex color
  const isHexColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  // Helper function to get text color class based on background brightness
  const getTextColorClass = (bgColor) => {
    if (!isHexColor(bgColor)) return 'text-white'; // fallback
    
    // Convert hex to RGB
    const hex = bgColor.replace('#', '');
    const r = parseInt(hex.length === 3 ? hex.slice(0,1).repeat(2) : hex.slice(0,2), 16);
    const g = parseInt(hex.length === 3 ? hex.slice(1,2).repeat(2) : hex.slice(2,4), 16);
    const b = parseInt(hex.length === 3 ? hex.slice(2,3).repeat(2) : hex.slice(4,6), 16);
    
    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    return brightness > 125 ? 'text-gray-900' : 'text-white';
  };

  return (
    <div
      className="min-w-[330px] max-w-lg mx-auto h-[630px] rounded-2xl shadow-lg overflow-hidden flex flex-col"
      style={{
        backgroundColor: isHexColor(backgroundColor) ? backgroundColor : '',
      }}
    >
      {/* Header */}
      <div 
        className="flex items-center px-4 py-4 gap-3"
        style={{
          backgroundColor: isHexColor(headerColor) ? headerColor : '',
        }}
      >
        <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
          <img src={appPreview.logo} alt=""className="w-full h-full rounded-full object-center" />
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div 
              className="text-sm font-semibold"
              style={{ color: isHexColor(textColor) ? textColor : '' }}
            >
              MyPtrakar
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-6 h-6 bg-white rounded-full" >
                <img src={appPreview.owner_profile_pic} alt="this is owner profile picture" className="rounded-full" />
              </div>
              {/* <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" /> */}
            </div>
            <div 
              className="font-medium cursor-pointer"
              style={{ color: isHexColor(textColor) ? textColor : '' }}
            >
              Menu
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-scroll hide-scrollbar px-4 py-3 space-y-4">
        <div className="w-full h-16 rounded-md bg-gray-200 animate-pulse" />
        <div className="w-full h-28 rounded-md bg-gray-200 animate-pulse" />
        <div className="w-3/5 h-4 rounded bg-gray-200 animate-pulse" />
        <div className="space-y-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-3 rounded bg-gray-200 animate-pulse"
            />
          ))}
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-md bg-gray-200 animate-pulse" />
          <div className="flex-1 space-y-1">
            <div className="w-4/5 h-3 rounded bg-gray-200 animate-pulse" />
            <div className="w-1/2 h-3 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-md bg-gray-200 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="w-4/5 h-3 rounded bg-gray-200 animate-pulse" />
            <div className="w-1/2 h-3 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t bg-white flex justify-between items-center px-1 py-2">
        {navItems.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.name;
          return (
            <div
              key={it.name}
              className="flex-1 flex flex-col items-center justify-center cursor-pointer select-none"
              onClick={() => setActive(it.name)}
            >
              <Icon
                size={24}
                style={{
                  color: isActive 
                    ? (isHexColor(headerColor) ? headerColor : '')
                    : (isHexColor(inactiveColor) ? inactiveColor : '')
                }}
              />
              <div
                style={{
                  color: isActive 
                    ? (isHexColor(headerColor) ? headerColor : '')
                    : (isHexColor(inactiveColor) ? inactiveColor : '')
                }}
                className="text-xs mt-1 font-medium"
              >
                {it.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviewApp;