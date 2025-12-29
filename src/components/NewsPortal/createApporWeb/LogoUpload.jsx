// import React, { useState, useRef, useContext } from "react";
// import PropTypes from "prop-types";
// import { FiUpload, FiCheck, FiX, FiExternalLink, FiUser } from "react-icons/fi";
// import { PreViewContext } from "../../../context/PreViewContext";
// import { HiOutlineExclamationCircle } from "react-icons/hi";

// const LogoUpload = ({ setFile, file, onUploadComplete }) => {
//   const { appPreview, webPreview, updateAppPreview, updateWebPreview } =
//     useContext(PreViewContext);

//   const [uploading, setUploading] = useState({
//     app_logo: false,
//     web_logo: false,
//     owner_profile_pic: false,
//   });

//   const [errors, setErrors] = useState({
//     app_logo: null,
//     web_logo: null,
//     owner_profile_pic: null,
//   });

//   const [dimensionWarning, setDimensionWarning] = useState({
//     app_logo: null,
//     web_logo: null,
//     owner_profile_pic: null,
//   });

//   const appLogoRef = useRef(null);
//   const webLogoRef = useRef(null);
//   const ownerProfileRef = useRef(null);

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
//         } else if (type === "web_logo") {
//           if (width !== 200 || height !== 100) {
//             setDimensionWarning((prev) => ({
//               ...prev,
//               web_logo: `Your image is ${width}×${height}. Recommended: 200×100 horizontal`,
//             }));
//           } else {
//             setDimensionWarning((prev) => ({ ...prev, web_logo: null }));
//           }
//         } else if (type === "owner_profile_pic") {
//           if (width !== 400 || height !== 400) {
//             setDimensionWarning((prev) => ({
//               ...prev,
//               owner_profile_pic: `Your image is ${width}×${height}. Recommended: 400×400 square`,
//             }));
//           } else {
//             setDimensionWarning((prev) => ({
//               ...prev,
//               owner_profile_pic: null,
//             }));
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
//       } else if (type === "owner_profile_pic") {
//         updateAppPreview({ ...appPreview, owner_profile_pic: imageUrl });
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
//     } else if (type === "owner_profile_pic") {
//       updateAppPreview({ ...appPreview, owner_profile_pic: "" });
//     }

//     // Clear file input value if present
//     if (type === "app_logo" && appLogoRef.current) {
//       appLogoRef.current.value = "";
//     } else if (type === "web_logo" && webLogoRef.current) {
//       webLogoRef.current.value = "";
//     } else if (type === "owner_profile_pic" && ownerProfileRef.current) {
//       ownerProfileRef.current.value = "";
//     }
//   };

//   const triggerFileInput = (type) => {
//     if (type === "app_logo") {
//       appLogoRef.current?.click();
//     } else if (type === "web_logo") {
//       webLogoRef.current?.click();
//     } else if (type === "owner_profile_pic") {
//       ownerProfileRef.current?.click();
//     }
//   };

//   const openResizerTool = () => {
//     window.open("https://imageresizer.com", "_blank");
//   };

//   // ---------- UI: matches provided HTML styles ----------
//   const previewDimensions = (type) => {
//     // visual display sizes (not enforced, used to show recommended proportions)
//     if (type === "app_logo") return { width: 200, height: 200 }; // square preview
//     if (type === "web_logo") return { width: 200, height: 100 }; // horizontal preview
//     if (type === "owner_profile_pic") return { width: 150, height: 150 }; // square preview
//     return { width: 100, height: 100 };
//   };

//   const renderUploadSection = (type, label, recommended, refObj, icon) => {
//     const preview = file[type]?.preview;
//     const dims = previewDimensions(type);

//     return (
//       <div
//         className={`flex flex-col items-center gap-6 rounded-lg border-2 border-dashed px-6 py-14 bg-white dark:bg-background-dark transition-colors ${
//           errors[type]
//             ? "border-red-500"
//             : dimensionWarning[type]
//             ? "border-yellow-400"
//             : "border-[#dbdfe6] dark:border-slate-700 hover:border-blue-400"
//         }`}
//       >
//         {preview ? (
//           <div className=" w-full flex flex-col items-center">
//             {/* <div
//               className=" relative flex items-center justify-center rounded-md bg-transparent"
//               // style={{ minHeight: "120px", width: "100%" }}
//             >
//               <img
//                 src={preview}
//                 alt={`${label} preview`}
//                 // maintain aspect ratio and contain within recommended size visually
//                 style={{
//                   width: `${dims.width}px`,
//                   height: `${dims.height}px`,
//                   objectFit: "",
//                 }}
//                 className="block"
//               />
//               <button
//               onClick={() => removeImage(type)}
//               aria-label={`Remove ${type}`}
//               className="fixed top-64 z-50 left-96  text-red-700 bg-red-100 rounded-full p-1 shadow hover:bg-red-50 "
//             >
//               <FiX size={16} />
//             </button>
//             </div> */}
// <div
//   className="relative flex items-center justify-center rounded-md bg-transparent"
// >
//   <img
//     src={preview}
//     alt={`${label} preview`}
//     style={{
//       width: `${dims.width}px`,
//       height: `${dims.height}px`,
//       objectFit: "contain", // optional: maintain aspect ratio
//     }}
//     className="block rounded-md"
//   />

//   {/* ❌ Cross button top-right corner pe fix */}
//   <button
//     onClick={() => removeImage(type)}
//     aria-label={`Remove ${type}`}
//     className="absolute top-2 right-2 text-red-700 bg-red-100 rounded-full p-1 shadow hover:bg-red-50 animate-pulse"
//   >
//     <FiX size={16} />
//   </button>
// </div>

//             {/* remove icon top-right of the image area */}
//             {/* <button
//               onClick={() => removeImage(type)}
//               aria-label={`Remove ${type}`}
//               className="absolute top-4 right-10 text-red-700 bg-red-100 rounded-full p-1 shadow hover:bg-red-50 "
//             >
//               <FiX size={16} />
//             </button> */}

//             {/* dimension warning if any */}
//             {dimensionWarning[type] && (
//               <p className="mt-3 text-xs text-yellow-700 text-center">
//                 {dimensionWarning[type]}
//               </p>
//             )}
//           </div>
//         ) : (
//           <>
//             <div className="flex max-w-[480px] flex-col items-center  text-center">
//               <p className="text-[#111418]  text-lg mb-2 font-bold leading-tight tracking-[-0.015em]">
//                 {label}
//               </p>

//               <p className="text-[#5f718c] w-[160px] text-sm font-normal leading-normal">
//                 {recommended}
//               </p>
//             </div>

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
//               className={`flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 text-sm font-bold transition-colors ${
//                 uploading[type]
//                   ? "bg-[#f0f2f5] text-[#111418] opacity-60 cursor-not-allowed"
//                   : "bg-[#f0f2f5] hover:bg-slate-200 text-[#111418]  "
//               }`}
//             >
//               <span className="truncate">
//                 {uploading[type] ? "Uploading..." : "Upload"}
//               </span>
//             </button>

//             {errors[type] && (
//               <p className="mt-2 text-sm text-red-500">{errors[type]}</p>
//             )}

//             {dimensionWarning[type] && (
//               <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-700">
//                 <p>{dimensionWarning[type]}</p>
//                 <button
//                   onClick={openResizerTool}
//                   className="mt-1 text-primary dark:text-blue-400 text-xs hover:underline flex items-center"
//                 >
//                   <FiExternalLink className="mr-1" size={12} />
//                   Resize your image online
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//         {renderUploadSection(
//           "app_logo",
//           "App Logo",
//           "Click or drag to upload (512x512 PNG, max 2MB)",
//           appLogoRef
//         )}

//         {renderUploadSection(
//           "web_logo",
//           "Website Logo",
//           "Click or drag to upload (200x100 PNG, max 2MB)",
//           webLogoRef
//         )}

//         {renderUploadSection(
//           "owner_profile_pic",
//           "Owner Profile",
//           "Click or drag to upload (400x400 PNG, max 2MB)",
//           ownerProfileRef,
//           <FiUser size={24} className="mb-1" />
//         )}
//       </div>

//       <div className="p-4">
//   <div className="flex gap-4 bg-red-100  p-4 rounded-lg font-sans">
//     <div className="text-primary flex items-center justify-center shrink-0 size-12 -mt-1">
//       <span className="material-symbols-outlined text-red-500 text-3xl"><HiOutlineExclamationCircle/></span>
//     </div>
//     <div className="flex flex-1 flex-col justify-center">
//       <p className="text-[#111418]  text-base font-medium leading-normal">
//         Image Guidelines
//       </p>
//       <ul className="text-[#5f718c]  text-sm font-normal leading-normal list-disc pl-5 mt-2 space-y-1">
//         <li>Use high-quality images with transparent background for logos.</li>
//         <li>PNG format recommended for best quality. Maximum file size: 2MB per image.</li>
//         <li>Square logo (512×512) works best for app icon.</li>
//         <li>Horizontal logo (200×100) works best for website header.</li>
//         <li>Profile picture (400×400) recommended for owner profile.</li>
//         <li>
//           Need to resize? use online image resizer{" "}
//           <a
//             href="https://imageresizer.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-red-500 hover:text-red-600  font-medium hover:underline"
//           >
//             https://imageresizer.com/
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>

// </div>

//     </>
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
//     owner_profile_pic: PropTypes.shape({
//       preview: PropTypes.string,
//       file: PropTypes.instanceOf(File),
//     }),
//   }).isRequired,
//   onUploadComplete: PropTypes.func.isRequired,
// };

// export default LogoUpload;

import React, { useState, useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { FiUpload, FiCheck, FiX } from "react-icons/fi";
import { PreViewContext } from "../../../context/PreViewContext";
import { FiUploadCloud } from "react-icons/fi";
import { Info } from "lucide-react";

const LogoUpload = ({ setFile, file, onUploadComplete }) => {
  const { appPreview, webPreview, updateAppPreview, updateWebPreview } =
    useContext(PreViewContext);

  const [uploading, setUploading] = useState({
    app_logo: false,
    web_logo: false,
    owner_profile_pic: false,
  });

  const [dimensionWarning, setDimensionWarning] = useState({});
  const [popupMsg, setPopupMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const appLogoRef = useRef(null);
  const webLogoRef = useRef(null);
  const ownerProfileRef = useRef(null);

  // Auto close popup after 5 sec
  useEffect(() => {
    if (showPopup) {
      const t = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(t);
    }
  }, [showPopup]);

  const openPopup = (msg) => {
    setPopupMsg(msg);
    setShowPopup(true);
  };

  // 🔥 CHECK DIMENSIONS
  const checkDimensions = (file, type) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = function () {
        const { width, height } = this;
        URL.revokeObjectURL(url);

        if (type === "app_logo" && (width !== 512 || height !== 512)) {
          return reject(`Your image is ${width}×${height}. Required: 512×512`);
        }
        if (type === "web_logo" && (width !== 200 || height !== 100)) {
          return reject(`Your image is ${width}×${height}. Required: 200×100`);
        }
        if (type === "owner_profile_pic" && (width !== 400 || height !== 400)) {
          return reject(`Your image is ${width}×${height}. Required: 400×400`);
        }

        resolve(true);
      };

      img.src = url;
    });
  };

  // Fake upload
  const mockUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(URL.createObjectURL(file));
      }, 800);
    });
  };

  // 🔥 FILE HANDLING WITH DIMENSION CHECK
  const handleFileChange = async (e, type) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setDimensionWarning((p) => ({ ...p, [type]: null }));
    setUploading((p) => ({ ...p, [type]: true }));

    try {
      await checkDimensions(selectedFile, type);

      const imgUrl = await mockUpload(selectedFile);

      if (type === "app_logo")
        updateAppPreview({ ...appPreview, logo: imgUrl });
      if (type === "web_logo")
        updateWebPreview({ ...webPreview, logo: imgUrl });
      if (type === "owner_profile_pic")
        updateAppPreview({ ...appPreview, owner_profile_pic: imgUrl });

      setFile((prev) => ({
        ...prev,
        [type]: {
          file: selectedFile,
          preview: imgUrl,
        },
      }));

      onUploadComplete(type, { file: selectedFile, preview: imgUrl });
    } catch (err) {
      openPopup(err);
      setDimensionWarning((p) => ({ ...p, [type]: err }));
    }

    setUploading((p) => ({ ...p, [type]: false }));
  };

  const removeImage = (type) => {
    setFile((p) => ({ ...p, [type]: null }));
    setDimensionWarning((p) => ({ ...p, [type]: null }));

    if (type === "app_logo") updateAppPreview({ ...appPreview, logo: "" });
    if (type === "web_logo") updateWebPreview({ ...webPreview, logo: "" });
    if (type === "owner_profile_pic")
      updateAppPreview({ ...appPreview, owner_profile_pic: "" });
  };

  const previewDimensions = (type) => {
    if (type === "app_logo") return { width: 200, height: 200 };
    if (type === "web_logo") return { width: 200, height: 100 };
    if (type === "owner_profile_pic") return { width: 160, height: 160 };
    return { width: 140, height: 140 };
  };

  // COMPONENT BLOCK
  const renderUploadSection = (type, label, recommended, refObj) => {
    const preview = file[type]?.preview;
    const dims = previewDimensions(type);

    return (
      <div
        className={`border-2 rounded-lg p-6 flex flex-col items-center transition 
          ${
            dimensionWarning[type]
              ? "border-red-500"
              : "border-dashed border-gray-400"
          }`}
      >
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              style={{
                width: dims.width,
                height: dims.height,
                objectFit: "contain",
              }}
              className="rounded-md"
            />

            <button
              onClick={() => removeImage(type)}
              className="absolute top-2 right-2 bg-red-100 text-red-600 p-1 rounded-full shadow"
            >
              <FiX size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="bg-gray-200 p-3 rounded-full">
              <FiUploadCloud size={25} />
            </div>
            <p className="font-bold">{label}</p>
            <p className="text-sm text-gray-500 mb-2">{recommended}</p>

            <input
              type="file"
              ref={refObj}
              onChange={(e) => handleFileChange(e, type)}
              accept="image/*"
              className="hidden"
            />

            <button
              onClick={() => refObj.current.click()}
              className="bg-gray-100 px-4 py-2 rounded font-semibold hover:bg-gray-200"
            >
              {uploading[type] ? "Uploading..." : "Upload"}
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      {/* GRID SECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {renderUploadSection(
          "app_logo",
          "App Logo",
          "512×512 PNG (Max 2MB)",
          appLogoRef
        )}

        {renderUploadSection(
          "web_logo",
          "Website Logo",
          "200×100 PNG (Max 2MB)",
          webLogoRef
        )}

        {renderUploadSection(
          "owner_profile_pic",
          "Owner Profile",
          "400×400 PNG (Max 2MB)",
          ownerProfileRef
        )}
      </div>
      {/* // Add this directly in your LogoUpload component where you want to show the message */}
     <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-5 shadow-sm hover:shadow-md transition-all duration-300">
  <div className="flex items-start gap-4">
    {/* Icon */}
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
      <Info size={18} />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-4 w-full">
      {/* Tip 1 */}
      <p className="text-sm text-gray-700 leading-relaxed">
        Optimize image size using{" "}
        <a
          href="https://imageresizer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:text-indigo-700 underline underline-offset-4"
        >
          Image Resizer
        </a>{" "}
        to ensure fast loading and sharp visuals.
      </p>

      {/* Divider */}
      <div className="h-px bg-blue-200/60" />

      {/* Tip 2 */}
      <p className="text-sm text-gray-700 leading-relaxed">
        Remove unwanted backgrounds easily with{" "}
        <a
          href="https://remove.bg"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:text-indigo-700 underline underline-offset-4"
        >
          AI Background Remover
        </a>{" "}
        for clean, professional-looking logos.
      </p>
    </div>
  </div>
</div>


      {/* 🔥 CENTER POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white p-5 rounded-xl shadow-lg w-80 text-center animate-pop">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl"
            >
              &times;
            </button>

            <p className="text-red-600 font-semibold">{popupMsg}</p>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        .animate-pop {
          animation: pop .25s ease-out;
        }
        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0 }
          100% { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </>
  );
};

export default LogoUpload;
