// import React, { useState, useEffect, useCallback } from "react";
// import PropTypes from "prop-types";
// import { SketchPicker } from "react-color";
// import {
//   FaHome,
//   FaPhoneAlt,
//   FaInfoCircle,
//   FaNewspaper,
//   FaShoppingCart,
// } from "react-icons/fa";
// import WebPreview from "./WebPreview";

// const WebColor = ({ setUserRequest }) => {
//   const [color, setColor] = useState("#3b82f6"); // Default to a pleasant blue
//   const [textColor, setTextColor] = useState("#ffffff");

//   // Calculate optimal text color based on WCAG contrast guidelines
//   const calculateTextColor = useCallback((rgb) => {
//     const brightness = Math.round(
//       (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
//     );
//     return brightness > 125 ? "#000000" : "#ffffff";
//   }, []);

//   // Handle color selection
//   const handleColorChange = useCallback(
//     (selectedColor) => {
//       const newColor = selectedColor.hex;
//       const optimalTextColor = calculateTextColor(selectedColor.rgb);

//       setColor(newColor);
//       setTextColor(optimalTextColor);
//     },
//     [calculateTextColor]
//   );

//   // Update userRequest with selected web color
//   useEffect(() => {
//     setUserRequest((prev) => ({
//       ...prev,
//       web_color: {
//         primary: color,
//         text: textColor,
//       },
//     }));
//   }, [color, textColor, setUserRequest]);

//   // News data for preview
//   const newsSections = [
//     {
//       title: "📰 City News",
//       items: [
//         {
//           title: "Major development in Kanpur",
//           img: "https://gumlet.assettype.com/knocksense/2022-06/008214f0-a90d-48ff-afc3-2a5a98386411/WhatsApp_Image_2022_06_27_at_11_11_41_AM.jpeg?auto=format%2Ccompress&w=1200",
//         },
//         {
//           title: "This is how metro is shaping Lucknow",
//           img: "https://www.financialexpress.com/wp-content/uploads/2020/02/lucknow-660.jpg?w=660",
//         },
//         {
//           title: "Smart cities progress in UP",
//           img: "https://tse2.mm.bing.net/th/id/OIP.dbtg4eGDdMjSjDBIqp9bgwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
//         },
//       ],
//       cols: "grid-cols-3",
//     },
//     {
//       title: "🗳 Election Charcha",
//       items: [
//         {
//           title: "Youth taking lead in 2024 elections",
//           img: "https://prod.cdn-medias.theafricareport.com/medias/2020/12/ghanavote-e1607954213285.jpg",
//         },
//         {
//           title: "Public speaks on their expectations",
//           img: "https://www.verywellmind.com/thmb/33QzJCAh91dgMhceaF0Y0uYB_BU=/768x531/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-640629953-58dbefca3df78c5162495d0f-39a9293ccbb54ff9aa021a905e335dc4.jpg",
//         },
//       ],
//       cols: "grid-cols-2",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 my-10">
//       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//         Website Color Customization
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-8 items-start">
//         {/* Color Picker Section */}
//         <div className="w-full lg:w-2/5">
//           <div className="mb-6">
//             <h2 className="text-xl font-medium text-gray-700 mb-2">
//               Primary Brand Color
//             </h2>
//             <p className="text-gray-500">
//               Select a color that represents your news brand identity
//             </p>
//           </div>
//           <SketchPicker
//             color={color}
//             onChangeComplete={handleColorChange}
//             width="400px"
//             presetColors={[
//               "#3b82f6", // blue
//               "#ef4444", // red
//               "#10b981", // green
//               "#f59e0b", // yellow
//               "#8b5cf6", // purple
//               "#ec4899", // pink
//               "#000000", // black
//               "#ffffff", // white
//             ]}
//           />
//         </div>

//         {/* Website Preview Section */}
//         <div className="w-full lg:w-3/5 space-y-6">
//           <WebPreview />
//         </div>
//       </div>
//     </div>
//   );
// };

// WebColor.propTypes = {
//   setUserRequest: PropTypes.func.isRequired,
// };

// export default WebColor;


import { useState, useEffect, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";
import WebPreview from "./webPreview/WebPreview";
import { PreViewContext } from "../../../context/PreViewContext";
import LaptopFrame from "./webPreview/LaptopFrame";
import FooterColorPicker from "./webPreview/FooterColorPicker";
// import WebPreview from "./WebPreview";

const WebColor = ({ setUserRequest }) => {
  const [color, setColor] = useState("#3b82f6");
  const [footerColor, setFooteColor] = useState("#3b82f6");
  const [footerText, setFooterText] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const { webPreview, updateWebPreview } = useContext(PreViewContext);
  // Calculate optimal text color
  const calculateTextColor = useCallback((rgb) => {
    const brightness = Math.round(
      (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
    );
    return brightness > 125 ? "#000000" : "#ffffff";
  }, []);

  const handleColorChange = useCallback(
    (selectedColor) => {
      const newColor = selectedColor.hex;
      const optimalTextColor = calculateTextColor(selectedColor.rgb);
      setColor(newColor);
      setTextColor(optimalTextColor);
    },
    [calculateTextColor]
  );

  useEffect(() => {
    setUserRequest((prev) => ({
      ...prev,
      web_color: {
        primary: color,
        text: textColor,
      },
      web_footer_color: {
        primary: footerColor,
        text: "",
      },
    }));
    updateWebPreview({
      ...webPreview,
      backgroundColor: color,
      color: textColor,
      web_footer_color: footerColor,
    });
  }, [color, textColor, setUserRequest]);

  return (
    <div className="max-w-7xl mx-auto p-3 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 my-6 md:my-12 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Color Picker Section */}
        <div className="w-full lg:w-2/5 ">
          <div className="animate-fadeIn border rounded-md  p-2">
            <SketchPicker
              color={color}
              onChangeComplete={handleColorChange}
              width="95%"
              presetColors={[
                "#3b82f6",
                "#ef4444",
                "#10b981",
                "#f59e0b",
                "#8b5cf6",
                "#ec4899",
                "#000000",
                "#ffffff",
                "#6366f1",
                "#f97316",
                "#06b6d4",
                "#d946ef",
              ]}
              styles={{
                default: {
                  picker: {
                    boxShadow: "none",
                    border: "none",
                    borderRadius: "",
                  },
                },
              }}
            />
               <div className="mt-6 flex items-center gap-3">
            <div
              className="w-6 h-6 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-700">
                Primary Color
              </div>
              <div className="text-xs text-gray-500">{color.toUpperCase()}</div>
            </div>
            <div
              className="w-6 h-6 rounded-full border border-gray-200"
              style={{ backgroundColor: textColor }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-700">
                Text Color
              </div>
              <div className="text-xs text-gray-500">
                {textColor.toUpperCase()}
              </div>
            </div>
          </div>
          </div>

       

          <FooterColorPicker
            setFooterColor={setFooteColor}
            calculateTextColor={calculateTextColor}
            footerText={footerText}
            setFooterText={setFooterText}
          />
        </div>

        {/* Website Preview Section */}
        <div className="w-full lg:w-3/5">
          <div className="   sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Live Preview
              </h2>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="border-4 border-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <LaptopFrame
                PreviewComponent={
                  <WebPreview
                    bgColor={color}
                    color={textColor}
                    footerColor={footerColor}
                    footerText={footerText}
                    navigationLinks={[
                      "Home",
                      "About Us",
                      "Terms And Condition",
                    ]}
                  />
                }
              />
            </div>
         <div className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
  <h3 className="text-xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
    Web Customization Features
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {/* Feature 1: Color Control */}
    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
      <div className="mt-1 p-2 bg-blue-100 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Smart Color System</h4>
        <p className="text-sm text-gray-600 mt-1">
          Dynamic text color calculation based on WCAG contrast guidelines ensures readability on any background
        </p>
      </div>
    </div>
    
    {/* Feature 2: Real-time Preview */}
    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
      <div className="mt-1 p-2 bg-green-100 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Real-time Preview</h4>
        <p className="text-sm text-gray-600 mt-1">
          See changes instantly in the device-accurate preview as you customize colors
        </p>
      </div>
    </div>
    
    {/* Feature 3: Footer Customization */}
    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
      <div className="mt-1 p-2 bg-purple-100 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm0-2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H5z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Footer Control</h4>
        <p className="text-sm text-gray-600 mt-1">
          Separate customization for footer section with independent color and text options
        </p>
      </div>
    </div>
    
    {/* Feature 4: UI Management */}
    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
      <div className="mt-1 p-2 bg-yellow-100 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Dynamic UI Management</h4>
        <p className="text-sm text-gray-600 mt-1">
          Responsive design that automatically adapts to different screen sizes and devices
        </p>
      </div>
    </div>
    
    {/* Feature 5: Color Presets */}
    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
      <div className="mt-1 p-2 bg-red-100 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Curated Color Presets</h4>
        <p className="text-sm text-gray-600 mt-1">
          Professionally selected color palettes optimized for news websites
        </p>
      </div>
    </div>
    
    {/* Feature 6: Context Integration */}
    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
      <div className="mt-1 p-2 bg-indigo-100 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" viewBox="0 0 20 20" fill="CurrentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Context Integration</h4>
        <p className="text-sm text-gray-600 mt-1">
          Seamless state management through React Context API for consistent UI
        </p>
      </div>
    </div>
  </div>
  
  <div className="mt-6 pt-4 border-t border-blue-100 text-center">
    <p className="text-sm text-blue-700 inline-flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      All features update in real-time as you customize
    </p>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

WebColor.propTypes = {
  setUserRequest: PropTypes.func.isRequired,
};

export default WebColor;
