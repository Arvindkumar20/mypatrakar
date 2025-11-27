// import { useState, useEffect, useCallback } from "react";
// import PropTypes from "prop-types";
// import { SketchPicker } from "react-color";
// import { Info, Palette, Contrast, Eye, EyeOff, Check } from "lucide-react";
// import PreviewApp from "./appPreview/PreviewApp";
// import NobleFrame from "./appPreview/NobleFrame";

// const AppColor = ({ setUserRequest, logo }) => {
//   const [color, setColor] = useState("#3b82f6");
//   const [textColor, setTextColor] = useState("#ffffff");
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [contrastWarning, setContrastWarning] = useState(false);
//   const [activeTab, setActiveTab] = useState("primary");

//   // Calculate optimal text color and contrast ratio
//   const calculateTextColor = useCallback((rgb) => {
//     const brightness = Math.round(
//       (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
//     );
//     const newTextColor = brightness > 125 ? "#000000" : "#ffffff";

//     // Calculate contrast ratio (WCAG)
//     const luminance1 = getLuminance(rgb);
//     const luminance2 = getLuminance(hexToRgb(newTextColor));
//     const contrast =
//       (Math.max(luminance1, luminance2) + 0.05) /
//       (Math.min(luminance1, luminance2) + 0.05);

//     setContrastWarning(contrast < 4.5);
//     return newTextColor;
//   }, []);

//   // Helper function to calculate luminance
//   const getLuminance = (rgb) => {
//     const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((v) => {
//       v /= 255;
//       return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
//     });
//     return 0.2126 * r + 0.7152 * g + 0.0722 * b;
//   };

//   // Convert hex to RGB
//   const hexToRgb = (hex) => {
//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result
//       ? {
//           r: parseInt(result[1], 16),
//           g: parseInt(result[2], 16),
//           b: parseInt(result[3], 16),
//         }
//       : { r: 0, g: 0, b: 0 };
//   };

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
//   console.log(logo);
//   // Update userRequest on color change
//   useEffect(() => {
//     setUserRequest((prev) => ({
//       ...prev,
//       app_color: {
//         primary: color,
//         text: textColor,
//       },
//     }));
//   }, [color, textColor, setUserRequest]);

//   return (
//     <div className="container mx-auto bg-white p-6 my-6 rounded-lg shadow-sm border border-gray-100">
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//             <Palette size={20} className="text-blue-500" />
//             App Color Customization
//           </h1>
//           <p className="text-sm text-gray-500 mt-1">
//             Customize your app's primary color scheme
//           </p>
//         </div>
//         <button
//           onClick={() => setShowAdvanced(!showAdvanced)}
//           className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
//         >
//           {showAdvanced ? (
//             <>
//               <EyeOff size={16} /> Hide Advanced
//             </>
//           ) : (
//             <>
//               <Eye size={16} /> Show Advanced
//             </>
//           )}
//         </button>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-20 items-start justify-center">
//         {/* Color Picker Section */}
//         <div className="w-full lg:w-1/4 space-y-6">
//           <div className="flex border-b border-gray-200">
//             <button
//               className={`px-4 py-2 font-medium text-sm ${
//                 activeTab === "primary"
//                   ? "text-blue-600 border-b-2 border-blue-600"
//                   : "text-gray-500"
//               }`}
//               onClick={() => setActiveTab("primary")}
//             >
//               Primary Color
//             </button>
//             {showAdvanced && (
//               <button
//                 className={`px-4 py-2 font-medium text-sm ${
//                   activeTab === "secondary"
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-500"
//                 }`}
//                 onClick={() => setActiveTab("secondary")}
//               >
//                 Secondary Color
//               </button>
//             )}
//           </div>

//           {activeTab === "primary" ? (
//             <>
//               <div className="mb-4">
//                 <h2 className="text-lg font-medium text-gray-700 my-2">
//                   Brand Color
//                 </h2>
//                 <p className="text-sm text-gray-500 mb-3">
//                   Choose a color that matches your brand identity
//                 </p>
//               </div>
//               <SketchPicker
//                 color={color}
//                 onChangeComplete={handleColorChange}
//                 width="100%"
//                 presetColors={[
//                   "#3b82f6",
//                   "#ef4444",
//                   "#10b981",
//                   "#f59e0b",
//                   "#8b5cf6",
//                   "#ec4899",
//                   "#000000",
//                   "#ffffff",
//                   "#64748b",
//                   "#f97316",
//                   "#06b6d4",
//                   "#d946ef",
//                 ]}
//               />
//             </>
//           ) : (
//             <div className="p-4 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-medium text-gray-700 mb-2">
//                 Secondary Colors
//               </h3>
//               <p className="text-sm text-gray-500 mb-4">
//                 Coming soon! Secondary color customization will be available in
//                 the next update.
//               </p>
//             </div>
//           )}

//           {showAdvanced && (
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
//                 <Contrast size={16} />
//                 Color Accessibility
//               </h3>
//               <div
//                 className={`p-3 rounded-md ${
//                   contrastWarning
//                     ? "bg-red-50 border border-red-200"
//                     : "bg-green-50 border border-green-200"
//                 }`}
//               >
//                 <div className="flex items-start gap-3">
//                   {contrastWarning ? (
//                     <Info
//                       size={18}
//                       className="text-red-500 mt-0.5 flex-shrink-0"
//                     />
//                   ) : (
//                     <Check
//                       size={18}
//                       className="text-green-500 mt-0.5 flex-shrink-0"
//                     />
//                   )}
//                   <div>
//                     <p
//                       className={`text-sm font-medium ${
//                         contrastWarning ? "text-red-700" : "text-green-700"
//                       }`}
//                     >
//                       {contrastWarning
//                         ? "Low Contrast Warning"
//                         : "Good Contrast"}
//                     </p>
//                     <p className="text-xs text-gray-600 mt-1">
//                       {contrastWarning
//                         ? "The current color combination may be hard to read for some users. Consider adjusting your colors."
//                         : "This color combination meets accessibility standards for readability."}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
//               <Info size={16} />
//               Color Values
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               <div>
//                 <label className="block text-xs text-gray-500 mb-1">
//                   Primary
//                 </label>
//                 <div className="flex items-center gap-2">
//                   <div
//                     className="w-6 h-6 rounded border border-gray-200"
//                     style={{ backgroundColor: color }}
//                   />
//                   <input
//                     type="text"
//                     value={color}
//                     readOnly
//                     className="text-sm bg-white border border-gray-200 rounded px-2 py-1 w-full"
//                   />
//                 </div>
//               </div>
//               {/* <div>
//                 <label className="block text-xs text-gray-500 mb-1">Font</label>
//                 <div className="flex items-center gap-2">
//                   <div
//                     className="w-6 h-6 rounded border border-gray-200"
//                     style={{ backgroundColor: textColor }}
//                   />
//                   <input
//                     type="text"
//                     value={textColor}
//                     readOnly
//                     className="text-sm bg-white border border-gray-200 rounded px-2 py-1 w-full"
//                   />
//                 </div>
//               </div> */}
//               <div>
//                 <label className="block text-xs text-gray-500 mb-1">Font</label>
//                 <div className="flex items-center gap-2">
//                   <select
//                     value={fontFamily}
//                     onChange={(e) => setFontFamily(e.target.value)}
//                     className="text-sm bg-white border border-gray-200 rounded px-2 py-1 w-full"
//                     style={{ fontFamily }}
//                   >
//                     <option value="Poppins" style={{ fontFamily: "Poppins" }}>
//                       Poppins
//                     </option>
//                     <option value="Roboto" style={{ fontFamily: "Roboto" }}>
//                       Roboto
//                     </option>
//                     <option value="Inter" style={{ fontFamily: "Inter" }}>
//                       Inter
//                     </option>
//                     <option
//                       value="Open Sans"
//                       style={{ fontFamily: "Open Sans" }}
//                     >
//                       Open Sans
//                     </option>
//                     <option value="Lato" style={{ fontFamily: "Lato" }}>
//                       Lato
//                     </option>
//                     <option
//                       value="Montserrat"
//                       style={{ fontFamily: "Montserrat" }}
//                     >
//                       Montserrat
//                     </option>
//                     <option value="Nunito" style={{ fontFamily: "Nunito" }}>
//                       Nunito
//                     </option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* App Preview Section */}
//         <div className="w-full lg:w-1/2">
//           <div className="mb-4">
//             <h2 className="text-lg font-medium text-gray-700 my-2">
//               Live Preview
//             </h2>
//             <p className="text-sm text-gray-500 mb-3">
//               See how your color choices will look in the app
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <NobleFrame width={330} height={650} color="black">
//               <PreviewApp
//                 backgroundColor="#ffffff"
//                 headerColor={color}
//                 textColor={textColor}
//                 activeColor={"#f3122c"}
//                 inactiveColor={contrastWarning ? "#4b5563" : "#6b7280"}
//                 logo={logo}
//               />
//             </NobleFrame>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// AppColor.propTypes = {
//   setUserRequest: PropTypes.func.isRequired,
// };

// export default AppColor;





import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";
import { Info, Palette, Contrast, Eye, EyeOff, Check } from "lucide-react";
import PreviewApp from "./appPreview/PreviewApp";
import NobleFrame from "./appPreview/NobleFrame";

const AppColor = ({ setUserRequest, logo }) => {
  const [color, setColor] = useState("#3b82f6");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontFamily, setFontFamily] = useState("Poppins");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [contrastWarning, setContrastWarning] = useState(false);
  const [activeTab, setActiveTab] = useState("primary");

  // 🔹 Calculate optimal text color and contrast ratio
  const calculateTextColor = useCallback((rgb) => {
    const brightness = Math.round(
      (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
    );
    const newTextColor = brightness > 125 ? "#000000" : "#ffffff";

    const luminance1 = getLuminance(rgb);
    const luminance2 = getLuminance(hexToRgb(newTextColor));
    const contrast =
      (Math.max(luminance1, luminance2) + 0.05) /
      (Math.min(luminance1, luminance2) + 0.05);

    setContrastWarning(contrast < 4.5);
    return newTextColor;
  }, []);

  // Helper → Calculate luminance
  const getLuminance = (rgb) => {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  // Helper → Hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  // 🔹 Handle color selection
  const handleColorChange = useCallback(
    (selectedColor) => {
      const newColor = selectedColor.hex;
      const optimalTextColor = calculateTextColor(selectedColor.rgb);
      setColor(newColor);
      setTextColor(optimalTextColor);
    },
    [calculateTextColor]
  );

  // 🔹 Update userRequest on color / font change
  useEffect(() => {
    setUserRequest((prev) => ({
      ...prev,
      app_color: {
        primary: color,
        text: textColor,
        font: fontFamily,
      },
    }));
  }, [color, textColor, fontFamily, setUserRequest]);

  return (
    <div className="container mx-auto bg-white p-6 my-6 rounded-lg shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Palette size={20} className="text-blue-500" />
            App Color Customization
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Customize your app’s primary color and font
          </p>
        </div>
        {/* <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
        >
          {showAdvanced ? (
            <>
              <EyeOff size={16} /> Hide Advanced
            </>
          ) : (
            <>
              <Eye size={16} /> Show Advanced
            </>
          )}
        </button> */}
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-start justify-center">
        {/* 🎨 Color Picker Section */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "primary"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("primary")}
            >
              Primary Color
            </button>
            {showAdvanced && (
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === "secondary"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("secondary")}
              >
                Secondary Color
              </button>
            )}
          </div>

          {activeTab === "primary" ? (
            <>
              <div className="mb-4">
                <h2 className="text-lg font-medium text-gray-700 my-2">
                  Brand Color
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  Choose a color that matches your brand identity
                </p>
              </div>
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange}
                width="100%"
                presetColors={[
                  "#3b82f6",
                  "#ef4444",
                  "#10b981",
                  "#f59e0b",
                  "#8b5cf6",
                  "#ec4899",
                  "#000000",
                  "#ffffff",
                  "#64748b",
                  "#f97316",
                  "#06b6d4",
                  "#d946ef",
                ]}
              />
            </>
          ) : (
            // <div className="p-4 bg-gray-50 rounded-lg">
            //   <h3 className="text-lg font-medium text-gray-700 mb-2">
            //     Secondary Colors
            //   </h3>
            //   <p className="text-sm text-gray-500 mb-4">
            //     Coming soon! Secondary color customization will be available in
            //     the next update.
            //   </p>
            // </div>
            ""
          )}

          {/* ⚙️ Advanced */}
          {/* {showAdvanced && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Contrast size={16} />
                Color Accessibility
              </h3>
              <div
                className={`p-3 rounded-md ${
                  contrastWarning
                    ? "bg-red-50 border border-red-200"
                    : "bg-green-50 border border-green-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  {contrastWarning ? (
                    <Info
                      size={18}
                      className="text-red-500 mt-0.5 flex-shrink-0"
                    />
                  ) : (
                    <Check
                      size={18}
                      className="text-green-500 mt-0.5 flex-shrink-0"
                    />
                  )}
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        contrastWarning ? "text-red-700" : "text-green-700"
                      }`}
                    >
                      {contrastWarning
                        ? "Low Contrast Warning"
                        : "Good Contrast"}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {contrastWarning
                        ? "This color combination may be hard to read for some users."
                        : "This color combination meets accessibility standards."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )} */}

          {/* 🎨 Color + Font Values */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Info size={16} />
              Color & Font Values
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {/* Primary */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Primary
                </label>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <input
                    type="text"
                    value={color}
                    readOnly
                    className="text-sm bg-white border border-gray-200 rounded px-2 py-1 w-full"
                  />
                </div>
              </div>

              {/* Font Selector */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Font</label>
                <div className="flex items-center gap-2">
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="text-sm bg-white border border-gray-200 rounded px-2 py-1 w-full"
                    style={{ fontFamily }}
                  >
                    <option value="Poppins">Poppins</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Inter">Inter</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Lato">Lato</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Nunito">Nunito</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📱 App Preview Section */}
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-700 my-2">
              Live Preview
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              See how your color & font choices look in your app
            </p>
          </div>
          <div className="flex justify-center">
            <NobleFrame width={300} height={650} color="black">
              <PreviewApp
                backgroundColor="#ffffff"
                headerColor={color}
                textColor={textColor}
                fontFamily={fontFamily}
                activeColor={"#f3122c"}
                inactiveColor={contrastWarning ? "#4b5563" : "#6b7280"}
                logo={logo}
                font={fontFamily}
              />
            </NobleFrame>
          </div>
        </div>
      </div>
    </div>
  );
};

AppColor.propTypes = {
  setUserRequest: PropTypes.func.isRequired,
};

export default AppColor;
