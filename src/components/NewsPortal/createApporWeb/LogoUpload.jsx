// // import React, { useState, useRef } from "react";
// // import PropTypes from "prop-types";
// // import { FiUpload, FiCheck, FiX, FiImage, FiExternalLink } from "react-icons/fi";

// // const LogoUpload = ({ setFile, file, onUploadComplete }) => {
// //   const [uploading, setUploading] = useState({
// //     app_logo: false,
// //     web_logo: false,
// //   });

// //   const [errors, setErrors] = useState({
// //     app_logo: null,
// //     web_logo: null,
// //   });

// //   const [dimensionWarning, setDimensionWarning] = useState({
// //     app_logo: null,
// //     web_logo: null,
// //   });

// //   const appLogoRef = useRef(null);
// //   const webLogoRef = useRef(null);

// //   const checkDimensions = (file, type) => {
// //     return new Promise((resolve) => {
// //       const img = new Image();
// //       const url = URL.createObjectURL(file);

// //       img.onload = function () {
// //         const { width, height } = this;
// //         URL.revokeObjectURL(url);

// //         if (type === "app_logo") {
// //           if (width !== 512 || height !== 512) {
// //             setDimensionWarning((prev) => ({
// //               ...prev,
// //               app_logo: `Your image is ${width}×${height}. Recommended: 512×512 square`,
// //             }));
// //           } else {
// //             setDimensionWarning((prev) => ({ ...prev, app_logo: null }));
// //           }
// //         } else {
// //           if (width !== 200 || height !== 100) {
// //             setDimensionWarning((prev) => ({
// //               ...prev,
// //               web_logo: `Your image is ${width}×${height}. Recommended: 200×100 horizontal`,
// //             }));
// //           } else {
// //             setDimensionWarning((prev) => ({ ...prev, web_logo: null }));
// //           }
// //         }
// //         resolve(true);
// //       };

// //       img.src = url;
// //     });
// //   };

// //   const handleFileChange = async (e, type) => {
// //     const selectedFile = e.target.files[0];
// //     if (!selectedFile) return;

// //     setErrors((prev) => ({ ...prev, [type]: null }));
// //     setDimensionWarning((prev) => ({ ...prev, [type]: null }));

// //     if (!selectedFile.type.match(/image\/(png|jpeg|jpg|svg\+xml)/)) {
// //       setErrors((prev) => ({
// //         ...prev,
// //         [type]: "Only PNG, JPEG, JPG or SVG images are allowed",
// //       }));
// //       return;
// //     }

// //     if (selectedFile.size > 2 * 1024 * 1024) {
// //       setErrors((prev) => ({
// //         ...prev,
// //         [type]: "File size must be less than 2MB",
// //       }));
// //       return;
// //     }

// //     setUploading((prev) => ({ ...prev, [type]: true }));

// //     try {
// //       await checkDimensions(selectedFile, type);
// //       const imageUrl = await mockUpload(selectedFile);

// //       setFile((prev) => ({
// //         ...prev,
// //         [type]: {
// //           file: selectedFile,
// //           preview: imageUrl,
// //         },
// //       }));

// //       onUploadComplete(type, {
// //         file: selectedFile,
// //         preview: imageUrl,
// //       });
// //     } catch (error) {
// //       console.error("Upload failed:", error);
// //       setErrors((prev) => ({
// //         ...prev,
// //         [type]: "Upload failed. Please try again.",
// //       }));
// //     } finally {
// //       setUploading((prev) => ({ ...prev, [type]: false }));
// //     }
// //   };

// //   const mockUpload = (file) => {
// //     return new Promise((resolve) => {
// //       setTimeout(() => {
// //         const url = URL.createObjectURL(file);
// //         resolve(url);
// //       }, 1000);
// //     });
// //   };

// //   const removeImage = (type) => {
// //     if (file[type]?.preview) {
// //       URL.revokeObjectURL(file[type].preview);
// //     }

// //     setFile((prev) => ({
// //       ...prev,
// //       [type]: null,
// //     }));

// //     onUploadComplete(type, null);
// //     setErrors((prev) => ({ ...prev, [type]: null }));
// //     setDimensionWarning((prev) => ({ ...prev, [type]: null }));

// //     if (type === "app_logo" && appLogoRef.current) {
// //       appLogoRef.current.value = "";
// //     } else if (type === "web_logo" && webLogoRef.current) {
// //       webLogoRef.current.value = "";
// //     }
// //   };

// //   const triggerFileInput = (type) => {
// //     if (type === "app_logo") {
// //       appLogoRef.current?.click();
// //     } else {
// //       webLogoRef.current?.click();
// //     }
// //   };

// //   const openResizerTool = () => {
// //     window.open("https://imageresizer.com", "_blank");
// //   };

// //   const renderUploadSection = (type, label, recommended, refObj) => {
// //     return (
// //       <div
// //         className={`border-2 ${
// //           errors[type]
// //             ? "border-red-500"
// //             : dimensionWarning[type]
// //             ? "border-yellow-400"
// //             : "border-gray-200"
// //         } rounded-xl p-5 transition-all duration-200 bg-white hover:border-blue-400`}
// //       >
// //         <div className="flex justify-between items-start mb-3">
// //           <div>
// //             <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
// //             <p className="text-sm text-gray-500">Recommended: {recommended}</p>
// //           </div>
// //           {file[type]?.preview && !uploading[type] && (
// //             <button
// //               onClick={() => removeImage(type)}
// //               className="text-red-500 hover:text-red-700 transition-colors"
// //               aria-label="Remove logo"
// //             >
// //               <FiX size={18} />
// //             </button>
// //           )}
// //         </div>

// //         <div className="flex flex-col items-center space-y-4">
// //           <div
// //             className="relative w-24 h-24 rounded-lg bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center cursor-pointer"
// //             onClick={() => triggerFileInput(type)}
// //           >
// //             {file[type]?.preview ? (
// //               <img
// //                 src={file[type].preview}
// //                 alt="Logo preview"
// //                 className="w-full h-full object-contain p-2"
// //               />
// //             ) : (
// //               <div className="text-gray-400 flex flex-col items-center">
// //                 <FiImage size={24} className="mb-1" />
// //                 <span className="text-xs">Click to upload</span>
// //               </div>
// //             )}

// //             {uploading[type] && (
// //               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
// //                 <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
// //               </div>
// //             )}
// //           </div>

// //           <div className="w-full">
// //             <input
// //               type="file"
// //               ref={refObj}
// //               accept="image/png, image/jpeg, image/jpg, image/svg+xml"
// //               onChange={(e) => handleFileChange(e, type)}
// //               className="hidden"
// //               disabled={uploading[type]}
// //             />

// //             <button
// //               type="button"
// //               onClick={() => triggerFileInput(type)}
// //               disabled={uploading[type]}
// //               className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors w-full ${
// //                 uploading[type]
// //                   ? "bg-gray-100 text-gray-500 cursor-not-allowed"
// //                   : "bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer"
// //               }`}
// //             >
// //               {uploading[type] ? (
// //                 "Uploading..."
// //               ) : file[type]?.preview ? (
// //                 <>
// //                   <FiCheck className="mr-2" />
// //                   Change Logo
// //                 </>
// //               ) : (
// //                 <>
// //                   <FiUpload className="mr-2" />
// //                   Upload Logo
// //                 </>
// //               )}
// //             </button>

// //             {errors[type] && (
// //               <p className="mt-2 text-sm text-red-500">{errors[type]}</p>
// //             )}

// //             {dimensionWarning[type] && (
// //               <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-700">
// //                 <p>{dimensionWarning[type]}</p>
// //                 <button
// //                   onClick={openResizerTool}
// //                   className="mt-1 text-blue-700 hover:text-blue-800 flex items-center text-xs"
// //                 >
// //                   <FiExternalLink className="mr-1" size={12} />
// //                   Resize your image online
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {renderUploadSection("app_logo", "App Logo", "512×512 PNG", appLogoRef)}
// //         {renderUploadSection("web_logo", "Website Logo", "200×100 PNG", webLogoRef)}
// //       </div>

// //       <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
// //         <h4 className="text-sm font-medium text-blue-800 flex items-center">
// //           <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
// //             <path
// //               fillRule="evenodd"
// //               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //           Logo Guidelines
// //         </h4>
// //         <ul className="mt-2 text-sm text-blue-600 list-disc pl-5 space-y-1">
// //           <li>Use high-quality images with transparent background</li>
// //           <li>PNG format recommended for best quality</li>
// //           <li>Maximum file size: 2MB</li>
// //           <li>Square logo (512×512) works best for app icon</li>
// //           <li>Horizontal logo (200×100) works best for website header</li>
// //           <li>
// //             Need to resize?{" "}
// //             <button
// //               onClick={openResizerTool}
// //               className="text-red-700 hover:text-red-800 underline flex items-center inline-flex"
// //             >
// //               Use online image resizer <FiExternalLink className="ml-1" size={12} />
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // LogoUpload.propTypes = {
// //   setFile: PropTypes.func.isRequired,
// //   file: PropTypes.shape({
// //     app_logo: PropTypes.shape({
// //       preview: PropTypes.string,
// //       file: PropTypes.instanceOf(File),
// //     }),
// //     web_logo: PropTypes.shape({
// //       preview: PropTypes.string,
// //       file: PropTypes.instanceOf(File),
// //     }),
// //   }).isRequired,
// //   onUploadComplete: PropTypes.func.isRequired,
// // };

// // export default LogoUpload;

// import React, { useState, useRef, useContext } from "react";
// import PropTypes from "prop-types";
// import {
//   FiUpload,
//   FiCheck,
//   FiX,
//   FiImage,
//   FiExternalLink,
// } from "react-icons/fi";
// import { PreViewContext } from "../../../context/PreViewContext";

// const LogoUpload = ({ setFile, file, onUploadComplete }) => {
//   const { appPreview, webPreview, updateAppPreview, updateWebPreview } =
//     useContext(PreViewContext);
//   const [uploading, setUploading] = useState({
//     app_logo: false,
//     web_logo: false,
//   });

//   const [errors, setErrors] = useState({
//     app_logo: null,
//     web_logo: null,
//   });

//   const [dimensionWarning, setDimensionWarning] = useState({
//     app_logo: null,
//     web_logo: null,
//   });

//   const appLogoRef = useRef(null);
//   const webLogoRef = useRef(null);

//   const checkDimensions = (file, type) => {
//     return new Promise((resolve) => {
//       const img = new Image();
//       const url = URL.createObjectURL(file);

//       img.onload = function () {
//         const { width, height } = this;
//         URL.revokeObjectURL(url);

//         if (type === "app_logo") {
//           if (width !== 512 || height !== 512) {
//             setDimensionWarning((prev) => ({
//               ...prev,
//               app_logo: `Your image is ${width}×${height}. Recommended: 512×512 square`,
//             }));
//           } else {
//             setDimensionWarning((prev) => ({ ...prev, app_logo: null }));
//           }
//         } else {
//           if (width !== 200 || height !== 100) {
//             setDimensionWarning((prev) => ({
//               ...prev,
//               web_logo: `Your image is ${width}×${height}. Recommended: 200×100 horizontal`,
//             }));
//           } else {
//             setDimensionWarning((prev) => ({ ...prev, web_logo: null }));
//           }
//         }
//         resolve(true);
//       };

//       img.src = url;
//     });
//   };

//   const mockUpload = (file) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const url = URL.createObjectURL(file);
//         resolve(url);
//       }, 1000);
//     });
//   };

//   const handleFileChange = async (e, type) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     setErrors((prev) => ({ ...prev, [type]: null }));
//     setDimensionWarning((prev) => ({ ...prev, [type]: null }));

//     if (!selectedFile.type.match(/image\/(png|jpeg|jpg|svg\+xml)/)) {
//       setErrors((prev) => ({
//         ...prev,
//         [type]: "Only PNG, JPEG, JPG or SVG images are allowed",
//       }));
//       return;
//     }

//     if (selectedFile.size > 2 * 1024 * 1024) {
//       setErrors((prev) => ({
//         ...prev,
//         [type]: "File size must be less than 2MB",
//       }));
//       return;
//     }

//     setUploading((prev) => ({ ...prev, [type]: true }));

//     try {
//       await checkDimensions(selectedFile, type);
//       const imageUrl = await mockUpload(selectedFile);

//       // Update the correct preview based on the type
//       if (type === "app_logo") {
//         updateAppPreview({ ...appPreview, logo: imageUrl });
//       } else if (type === "web_logo") {
//         updateWebPreview({ ...webPreview, logo: imageUrl });
//       }

//       setFile((prev) => ({
//         ...prev,
//         [type]: {
//           file: selectedFile,
//           preview: imageUrl,
//         },
//       }));

//       onUploadComplete(type, {
//         file: selectedFile,
//         preview: imageUrl,
//       });
//     } catch (error) {
//       console.error("Upload failed:", error);
//       setErrors((prev) => ({
//         ...prev,
//         [type]: "Upload failed. Please try again.",
//       }));
//     } finally {
//       setUploading((prev) => ({ ...prev, [type]: false }));
//     }
//   };

//   const removeImage = (type) => {
//     if (file[type]?.preview) {
//       URL.revokeObjectURL(file[type].preview);
//     }

//     setFile((prev) => ({
//       ...prev,
//       [type]: null,
//     }));

//     onUploadComplete(type, null);
//     setErrors((prev) => ({ ...prev, [type]: null }));
//     setDimensionWarning((prev) => ({ ...prev, [type]: null }));

//     // Clear the logo from the appropriate preview
//     if (type === "app_logo") {
//       updateAppPreview({ ...appPreview, logo: "" });
//     } else if (type === "web_logo") {
//       updateWebPreview({ ...webPreview, logo: "" });
//     }

//     if (type === "app_logo" && appLogoRef.current) {
//       appLogoRef.current.value = "";
//     } else if (type === "web_logo" && webLogoRef.current) {
//       webLogoRef.current.value = "";
//     }
//   };

//   const triggerFileInput = (type) => {
//     if (type === "app_logo") {
//       appLogoRef.current?.click();
//     } else {
//       webLogoRef.current?.click();
//     }
//   };

//   const openResizerTool = () => {
//     window.open("https://imageresizer.com", "_blank");
//   };

//   const renderUploadSection = (type, label, recommended, refObj) => {
//     return (
//       <div
//         className={`border-2 ${
//           errors[type]
//             ? "border-red-500"
//             : dimensionWarning[type]
//             ? "border-yellow-400"
//             : "border-gray-200"
//         } rounded-xl p-5 transition-all duration-200 bg-white hover:border-blue-400`}
//       >
//         <div className="flex justify-between items-start mb-3">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
//             <p className="text-sm text-gray-500">Recommended: {recommended}</p>
//           </div>
//           {file[type]?.preview && !uploading[type] && (
//             <button
//               onClick={() => removeImage(type)}
//               className="text-red-500 hover:text-red-700 transition-colors"
//               aria-label="Remove logo"
//             >
//               <FiX size={18} />
//             </button>
//           )}
//         </div>

//         <div className="flex flex-col items-center space-y-4">
//           <div
//             className="relative w-24 h-24 rounded-lg bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center cursor-pointer"
//             onClick={() => triggerFileInput(type)}
//           >
//             {file[type]?.preview ? (
//               <img
//                 src={file[type].preview}
//                 alt="Logo preview"
//                 className="w-full h-full object-contain p-2"
//               />
//             ) : (
//               <div className="text-gray-400 flex flex-col items-center">
//                 <FiImage size={24} className="mb-1" />
//                 <span className="text-xs">Click to upload</span>
//               </div>
//             )}

//             {uploading[type] && (
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                 <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//               </div>
//             )}
//           </div>

//           <div className="w-full">
//             <input
//               type="file"
//               ref={refObj}
//               accept="image/png, image/jpeg, image/jpg, image/svg+xml"
//               onChange={(e) => handleFileChange(e, type)}
//               className="hidden"
//               disabled={uploading[type]}
//             />

//             <button
//               type="button"
//               onClick={() => triggerFileInput(type)}
//               disabled={uploading[type]}
//               className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors w-full ${
//                 uploading[type]
//                   ? "bg-gray-100 text-gray-500 cursor-not-allowed"
//                   : "bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer"
//               }`}
//             >
//               {uploading[type] ? (
//                 "Uploading..."
//               ) : file[type]?.preview ? (
//                 <>
//                   <FiCheck className="mr-2" />
//                   Change Logo
//                 </>
//               ) : (
//                 <>
//                   <FiUpload className="mr-2" />
//                   Upload Logo
//                 </>
//               )}
//             </button>

//             {errors[type] && (
//               <p className="mt-2 text-sm text-red-500">{errors[type]}</p>
//             )}

//             {dimensionWarning[type] && (
//               <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-700">
//                 <p>{dimensionWarning[type]}</p>
//                 <button
//                   onClick={openResizerTool}
//                   className="mt-1 text-blue-700 hover:text-blue-800 flex items-center text-xs"
//                 >
//                   <FiExternalLink className="mr-1" size={12} />
//                   Resize your image online
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {renderUploadSection("app_logo", "App Logo", "512×512 PNG", appLogoRef)}
//         {renderUploadSection(
//           "web_logo",
//           "Website Logo",
//           "200×100 PNG",
//           webLogoRef
//         )}
//       </div>

//       <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//         <h4 className="text-sm font-medium text-blue-800 flex items-center">
//           <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//             <path
//               fillRule="evenodd"
//               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
//               clipRule="evenodd"
//             />
//           </svg>
//           Logo Guidelines
//         </h4>
//         <ul className="mt-2 text-sm text-blue-600 list-disc pl-5 space-y-1">
//           <li>Use high-quality images with transparent background</li>
//           <li>PNG format recommended for best quality</li>
//           <li>Maximum file size: 2MB</li>
//           <li>Square logo (512×512) works best for app icon</li>
//           <li>Horizontal logo (200×100) works best for website header</li>
//           <li>
//             Need to resize?{" "}
//             <button
//               onClick={openResizerTool}
//               className="text-red-700 hover:text-red-800 underline flex items-center inline-flex"
//             >
//               Use online image resizer{" "}
//               <FiExternalLink className="ml-1" size={12} />
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// LogoUpload.propTypes = {
//   setFile: PropTypes.func.isRequired,
//   file: PropTypes.shape({
//     app_logo: PropTypes.shape({
//       preview: PropTypes.string,
//       file: PropTypes.instanceOf(File),
//     }),
//     web_logo: PropTypes.shape({
//       preview: PropTypes.string,
//       file: PropTypes.instanceOf(File),
//     }),
//   }).isRequired,
//   onUploadComplete: PropTypes.func.isRequired,
// };

// export default LogoUpload;

import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import {
  FiUpload,
  FiCheck,
  FiX,
  FiImage,
  FiExternalLink,
  FiUser,
} from "react-icons/fi";
import { PreViewContext } from "../../../context/PreViewContext";

const LogoUpload = ({ setFile, file, onUploadComplete }) => {
  const { appPreview, webPreview, updateAppPreview, updateWebPreview } =
    useContext(PreViewContext);
  const [uploading, setUploading] = useState({
    app_logo: false,
    web_logo: false,
    owner_profile_pic: false,
  });

  const [errors, setErrors] = useState({
    app_logo: null,
    web_logo: null,
    owner_profile_pic: null,
  });

  const [dimensionWarning, setDimensionWarning] = useState({
    app_logo: null,
    web_logo: null,
    owner_profile_pic: null,
  });

  const appLogoRef = useRef(null);
  const webLogoRef = useRef(null);
  const ownerProfileRef = useRef(null);

  const checkDimensions = (file, type) => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = function () {
        const { width, height } = this;
        URL.revokeObjectURL(url);

        if (type === "app_logo") {
          if (width !== 512 || height !== 512) {
            setDimensionWarning((prev) => ({
              ...prev,
              app_logo: `Your image is ${width}×${height}. Recommended: 512×512 square`,
            }));
          } else {
            setDimensionWarning((prev) => ({ ...prev, app_logo: null }));
          }
        } else if (type === "web_logo") {
          if (width !== 200 || height !== 100) {
            setDimensionWarning((prev) => ({
              ...prev,
              web_logo: `Your image is ${width}×${height}. Recommended: 200×100 horizontal`,
            }));
          } else {
            setDimensionWarning((prev) => ({ ...prev, web_logo: null }));
          }
        } else if (type === "owner_profile_pic") {
          if (width !== 400 || height !== 400) {
            setDimensionWarning((prev) => ({
              ...prev,
              owner_profile_pic: `Your image is ${width}×${height}. Recommended: 400×400 square`,
            }));
          } else {
            setDimensionWarning((prev) => ({
              ...prev,
              owner_profile_pic: null,
            }));
          }
        }
        resolve(true);
      };

      img.src = url;
    });
  };

  const mockUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const url = URL.createObjectURL(file);
        resolve(url);
      }, 1000);
    });
  };

  const handleFileChange = async (e, type) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setErrors((prev) => ({ ...prev, [type]: null }));
    setDimensionWarning((prev) => ({ ...prev, [type]: null }));

    if (!selectedFile.type.match(/image\/(png|jpeg|jpg|svg\+xml)/)) {
      setErrors((prev) => ({
        ...prev,
        [type]: "Only PNG, JPEG, JPG or SVG images are allowed",
      }));
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        [type]: "File size must be less than 2MB",
      }));
      return;
    }

    setUploading((prev) => ({ ...prev, [type]: true }));

    try {
      await checkDimensions(selectedFile, type);
      const imageUrl = await mockUpload(selectedFile);

      // Update the correct preview based on the type
      if (type === "app_logo") {
        updateAppPreview({ ...appPreview, logo: imageUrl });
      } else if (type === "web_logo") {
        updateWebPreview({ ...webPreview, logo: imageUrl });
      } else if (type === "owner_profile_pic") {
        updateAppPreview({ ...appPreview, owner_profile_pic: imageUrl });
      }

      setFile((prev) => ({
        ...prev,
        [type]: {
          file: selectedFile,
          preview: imageUrl,
        },
      }));

      onUploadComplete(type, {
        file: selectedFile,
        preview: imageUrl,
      });
    } catch (error) {
      console.error("Upload failed:", error);
      setErrors((prev) => ({
        ...prev,
        [type]: "Upload failed. Please try again.",
      }));
    } finally {
      setUploading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const removeImage = (type) => {
    if (file[type]?.preview) {
      URL.revokeObjectURL(file[type].preview);
    }

    setFile((prev) => ({
      ...prev,
      [type]: null,
    }));

    onUploadComplete(type, null);
    setErrors((prev) => ({ ...prev, [type]: null }));
    setDimensionWarning((prev) => ({ ...prev, [type]: null }));

    // Clear the logo from the appropriate preview
    if (type === "app_logo") {
      updateAppPreview({ ...appPreview, logo: "" });
    } else if (type === "web_logo") {
      updateWebPreview({ ...webPreview, logo: "" });
    }

    if (type === "app_logo" && appLogoRef.current) {
      appLogoRef.current.value = "";
    } else if (type === "web_logo" && webLogoRef.current) {
      webLogoRef.current.value = "";
    } else if (type === "owner_profile_pic" && ownerProfileRef.current) {
      ownerProfileRef.current.value = "";
    }
  };

  const triggerFileInput = (type) => {
    if (type === "app_logo") {
      appLogoRef.current?.click();
    } else if (type === "web_logo") {
      webLogoRef.current?.click();
    } else if (type === "owner_profile_pic") {
      ownerProfileRef.current?.click();
    }
  };

  const openResizerTool = () => {
    window.open("https://imageresizer.com", "_blank");
  };

  const renderUploadSection = (type, label, recommended, refObj, icon) => {
    return (
      <div
        className={`border-2 ${
          errors[type]
            ? "border-red-500"
            : dimensionWarning[type]
            ? "border-yellow-400"
            : "border-gray-200"
        } rounded-xl p-5 transition-all duration-200 bg-white hover:border-blue-400`}
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
            <p className="text-sm text-gray-500">Recommended: {recommended}</p>
          </div>
          {file[type]?.preview && !uploading[type] && (
            <button
              onClick={() => removeImage(type)}
              className="text-red-500 hover:text-red-700 transition-colors"
              aria-label="Remove logo"
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div
            className="relative w-24 h-24 rounded-lg bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={() => triggerFileInput(type)}
          >
            {file[type]?.preview ? (
              <img
                src={file[type].preview}
                alt="Logo preview"
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="text-gray-400 flex flex-col items-center">
                {icon || <FiImage size={24} className="mb-1" />}
                <span className="text-xs">Click to upload</span>
              </div>
            )}

            {uploading[type] && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          <div className="w-full">
            <input
              type="file"
              ref={refObj}
              accept="image/png, image/jpeg, image/jpg, image/svg+xml"
              onChange={(e) => handleFileChange(e, type)}
              className="hidden"
              disabled={uploading[type]}
            />

            <button
              type="button"
              onClick={() => triggerFileInput(type)}
              disabled={uploading[type]}
              className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors w-full ${
                uploading[type]
                  ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer"
              }`}
            >
              {uploading[type] ? (
                "Uploading..."
              ) : file[type]?.preview ? (
                <>
                  <FiCheck className="mr-2" />
                  Change Image
                </>
              ) : (
                <>
                  <FiUpload className="mr-2" />
                  Upload Image
                </>
              )}
            </button>

            {errors[type] && (
              <p className="mt-2 text-sm text-red-500">{errors[type]}</p>
            )}

            {dimensionWarning[type] && (
              <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-700">
                <p>{dimensionWarning[type]}</p>
                <button
                  onClick={openResizerTool}
                  className="mt-1 text-blue-700 hover:text-blue-800 flex items-center text-xs"
                >
                  <FiExternalLink className="mr-1" size={12} />
                  Resize your image online
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderUploadSection("app_logo", "App Logo", "512×512 PNG", appLogoRef)}
        {renderUploadSection(
          "web_logo",
          "Website Logo",
          "200×100 PNG",
          webLogoRef
        )}
        {renderUploadSection(
          "owner_profile_pic",
          "Owner Profile",
          "400×400 PNG",
          ownerProfileRef,
          <FiUser size={24} className="mb-1" />
        )}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <h4 className="text-sm font-medium text-blue-800 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
              clipRule="evenodd"
            />
          </svg>
          Image Guidelines
        </h4>
        <ul className="mt-2 text-sm text-blue-600 list-disc pl-5 space-y-1">
          <li>Use high-quality images with transparent background for logos</li>
          <li>PNG format recommended for best quality</li>
          <li>Maximum file size: 2MB per image</li>
          <li>Square logo (512×512) works best for app icon</li>
          <li>Horizontal logo (200×100) works best for website header</li>
          <li>Profile picture (400×400) recommended for owner profile</li>
          <li>
            Need to resize?{" "}
            <button
              onClick={openResizerTool}
              className="text-red-700 hover:text-red-800 underline flex items-center inline-flex"
            >
              Use online image resizer{" "}
              <FiExternalLink className="ml-1" size={12} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

LogoUpload.propTypes = {
  setFile: PropTypes.func.isRequired,
  file: PropTypes.shape({
    app_logo: PropTypes.shape({
      preview: PropTypes.string,
      file: PropTypes.instanceOf(File),
    }),
    web_logo: PropTypes.shape({
      preview: PropTypes.string,
      file: PropTypes.instanceOf(File),
    }),
    owner_profile_pic: PropTypes.shape({
      preview: PropTypes.string,
      file: PropTypes.instanceOf(File),
    }),
  }).isRequired,
  onUploadComplete: PropTypes.func.isRequired,
};

export default LogoUpload;
