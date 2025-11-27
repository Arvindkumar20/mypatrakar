import { useState, useEffect, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";
import WebPreview from "./webPreview/WebPreview";
import { PreViewContext } from "../../../context/PreViewContext";
import LaptopFrame from "./webPreview/LaptopFrame";
import FooterColorPicker from "./webPreview/FooterColorPicker";
import { Palette } from "lucide-react";
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
      <div className="flex flex-col lg:flex-row gap- items-start justify-between">
        <div className="w-1/4">
            <div className="flex items-center justify-between mb-6">
            <div className="w-full">
              <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Palette size={20} className="text-blue-500" />
                Web Color Customization
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Customize your website’s primary color and font
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
          {/* Color Picker Section */}
          <div className="w-full  ">
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
                  <div className="text-xs text-gray-500">
                    {color.toUpperCase()}
                  </div>
                </div>
                <div
                  className="w-6 h-6 rounded-full border border-gray-200"
                  style={{ backgroundColor: textColor }}
                />
                {/* Font Selector */}
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Font
                  </label>
                  <div className="flex items-center gap-2">
                    <select
                      value={"fontFamily"}
                      // onChange={(e) => setFontFamily(e.target.value)}
                      onChange={(e) => console.log("object")}
                      className="text-sm bg-white border border-gray-200 rounded px-2 py-1 w-full"
                      style={{ fontFamily: "fontFamily" }}
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

            <FooterColorPicker
              setFooterColor={setFooteColor}
              calculateTextColor={calculateTextColor}
              footerText={footerText}
              setFooterText={setFooterText}
            />
          </div>
        
        </div>

        {/* Website Preview Section */}
        <div className="w-full lg:w-3/5">
          <div className="   sticky ">
            <div className="flex flex-col items-start justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Live Preview
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                See how your color & font choices look in your website
              </p>
              {/* <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div> */}
            </div>
            <div className=" border-gray-800 rounded-2xl overflow-hidden shadow-lg">
              {/* <LaptopFrame
                PreviewComponent={ */}
              <WebPreview
                bgColor={color}
                color={textColor}
                footerColor={footerColor}
                footerText={footerText}
                navigationLinks={["Home", "About Us", "Terms And Condition"]}
              />
              {/* }
              /> */}
            </div>
            {/* <div className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm"> */}
            {/* <h3 className="text-xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
    Web Customization Features
  </h3> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> */}
            {/* Feature 1: Color Control */}
            {/* <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
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
    </div> */}

            {/* Feature 2: Real-time Preview */}
            {/* <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
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
    </div> */}

            {/* Feature 3: Footer Customization */}
            {/* <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
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
    </div> */}

            {/* Feature 4: UI Management */}
            {/* <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
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
    </div> */}

            {/* Feature 5: Color Presets */}
            {/* <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
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
    </div> */}

            {/* Feature 6: Context Integration */}
            {/* <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs flex items-start gap-3">
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
    </div> */}
          </div>

          {/* <div className="mt-6 pt-4 border-t border-blue-100 text-center">
    <p className="text-sm text-blue-700 inline-flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      All features update in real-time as you customize
    </p>
  </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

WebColor.propTypes = {
  setUserRequest: PropTypes.func.isRequired,
};

export default WebColor;
