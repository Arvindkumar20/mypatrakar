// import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import Cancel from "./Cancel";
// import { PaymentContext } from "../../context/PaymentContext";
// import { CreateNewPortal, GetPriceDetails } from "../../api";
// import { useSessionStorage } from "../../hooks/sessionStorage";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { checkDomainPrice } from "./checkDomainPrice";

// export default function CreatePortal() {
//   const [domainResult, setDomainResult] = useState(null);

//   const { setPortalRequestDetails, portalRequestDetail } =
//     useContext(PaymentContext);
//   const [formData, setFormData] = useState({
//     app_name: "",
//     website_name: "",
//     region: "0",
//     app_package_name: "",
//     agency_name: "",
//     agency_add: "",
//     free_domain: "",
//     package_id: "",
//     price: 0.0,
//   });
//   const [validation, setValidation] = useState({
//     touched: {},
//     errors: {},
//   });
//   const [packages, setPackages] = useState([]);
//   const [status, setStatus] = useState({
//     isLoading: false,
//     error: null,
//   });
//   const navigate = useNavigate();
//   const { setSessionData } = useSessionStorage();

//   // SEO Metadata
//   const metaData = {
//     title: "Create News Portal - MyPatrakar",
//     description: "Create your own news portal website and app with MyPatrakar",
//     canonicalUrl: "https://mypatrakar.com/portal/createportal",
//     logoUrl: "https://mypatrakar.com/assets/LG2-CcMgpPb7.svg",
//   };

//   // Helper: normalize domain (strip, lowercase, prefix)
//   const normalizeDomain = (raw) => {
//     if (!raw) return "";
//     let stripped = raw.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
//     stripped = stripped.toLowerCase();
//     return `https://www.${stripped}`;
//   };

//   // Load packages when region changes (debounced)
//   useEffect(() => {
//     if (!formData.region) return;

//     let canceled = false;
//     const loadPackages = async () => {
//       try {
//         setStatus((prev) => ({ ...prev, isLoading: true, error: null }));
//         const res = await GetPriceDetails();
//         const data = res.data.response.filter(
//           (rgn) => String(rgn?.region) === String(formData?.region)
//         );
//         if (!canceled) {
//           setPackages(data);
//         }
//       } catch (error) {
//         if (!canceled) {
//           setStatus((prev) => ({
//             ...prev,
//             error: "Failed to load packages. Please try again.",
//           }));
//           console.error("Package loading error:", error);
//         }
//       } finally {
//         if (!canceled) {
//           setStatus((prev) => ({ ...prev, isLoading: false }));
//         }
//       }
//     };

//     const debounceTimer = setTimeout(() => {
//       loadPackages();
//     }, 300);

//     return () => {
//       canceled = true;
//       clearTimeout(debounceTimer);
//     };
//   }, [formData.region]);

//   // Validate field on blur
//   const handleBlur = (field) => {
//     setValidation((prev) => ({
//       ...prev,
//       touched: { ...prev.touched, [field]: true },
//     }));
//     validateField(field, formData[field]);
//   };

//   // Field validation
//   const validateField = async (fieldName, value) => {
//     let error = "";

//     switch (fieldName) {
//       case "app_name":
//         if (!value) error = "App name is required";
//         else if (String(value).trim().length < 3)
//           error = "Minimum 3 characters required";
//         break;
//       case "website_name":
//         if (!value) error = "Website name is required";
//         else if (String(value).trim().length < 3)
//           error = "Minimum 3 characters required";
//         break;
//       case "region":
//         if (!value) error = "Please select a region";
//         break;
//       case "package_id":
//         if (!value) error = "Please select a plan";
//         break;
//       case "agency_name":
//         if (!value) error = "Agency name is required";
//         break;
//       case "agency_add":
//         if (!value) error = "Agency address is required";
//         break;
//       // case "free_domain":
//       //   if (value) {
//       //     const domainRegex = /^(?!:\/\/)([a-z0-9-]+\.)+[a-z]{2,}$/;
//       //     let stripped = String(value)
//       //       .replace(/^https?:\/\//i, "")
//       //       .replace(/^www\./i, "")
//       //       .toLowerCase();
//       //     if (!domainRegex.test(stripped)) {
//       //       error = "Invalid domain format (e.g., example.com)";
//       //     } else {
//       //       const normalized = `https://www.${stripped}`;
//       //       setFormData((prev) => ({
//       //         ...prev,
//       //         free_domain: normalized,
//       //       }));
//       //     }
//       //   }
//       //   break;
//       case "free_domain":
//         if (value) {
//           const domainRegex = /^(?!:\/\/)([a-z0-9-]+\.)+[a-z]{2,}$/;
//           let stripped = String(value)
//             .replace(/^https?:\/\//i, "")
//             .replace(/^www\./i, "")
//             .toLowerCase();

//           if (!domainRegex.test(stripped)) {
//             setDomainResult({
//               error: "Invalid domain format (e.g., example.com)",
//             });
//           } else {
//             // Check availability and price
//             const result = await checkDomainPrice(stripped);

//             if (result.error) {
//               setDomainResult({ error: result.error });
//             } else if (!result.available) {
//               setDomainResult({
//                 available: false,
//                 message: result.message || "Domain not available",
//               });
//             } else {
//               const normalized = `https://www.${stripped}`;
//               setFormData((prev) => ({
//                 ...prev,
//                 free_domain: normalized,
//               }));
//               setDomainResult({
//                 available: true,
//                 price: result.price,
//                 currency: result.currency || "INR",
//                 description:
//                   "This domain is available for registration right now!",
//               });
//             }
//           }
//         }
//         break;

//       default:
//         break;
//     }

//     setValidation((prev) => ({
//       ...prev,
//       errors: { ...prev.errors, [fieldName]: error },
//     }));
//     return !error;
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => {
//       let updated = { ...prev, [name]: value };

//       if (name === "app_name") {
//         const packageName = generatePackageName(value);
//         updated = { ...updated, app_package_name: packageName };
//       }

//       return updated;
//     });

//     if (validation.errors[name]) {
//       setValidation((prev) => ({
//         ...prev,
//         errors: { ...prev.errors, [name]: "" },
//       }));
//     }
//   };

//   // Helper to generate package name
//   const generatePackageName = (appName) => {
//     if (!appName) return "";

//     let packageName = appName
//       .toLowerCase()
//       .replace(/\s+/g, "_")
//       .replace(/[^a-z0-9_]/g, "");

//     if (!packageName.startsWith("com.")) {
//       packageName = `com.app.${packageName}`;
//     }
//     if (!packageName.endsWith("_app")) {
//       packageName = `${packageName}_app`;
//     }
//     return packageName;
//   };

//   // Handle package selection
//   const handlePackageSelect = (e) => {
//     const packageId = e.target.value;
//     const selectedPackage = packages.find(
//       (pkg) => pkg.package_id === packageId
//     );

//     if (selectedPackage) {
//       setFormData((prev) => ({
//         ...prev,
//         package_id: packageId,
//         app_package_name: selectedPackage.package_name,
//         price: selectedPackage.payable,
//       }));
//       setPortalRequestDetails((prev) => ({
//         ...prev,
//         payable: selectedPackage.payable,
//         price: selectedPackage.payable,
//         discount: selectedPackage.discount,
//         validity: selectedPackage.validity,
//         package_name: selectedPackage.package_name,
//         package_id: selectedPackage.package_id,
//         region: selectedPackage.region,
//       }));
//     }
//   };

//   // Validate full form
//   const validateForm = () => {
//     const requiredFields = [
//       "app_name",
//       "website_name",
//       "region",
//       "package_id",
//       "agency_name",
//       "agency_add",
//     ];
//     let isValid = true;
//     requiredFields.forEach((field) => {
//       if (!validateField(field, formData[field])) {
//         isValid = false;
//       }
//     });
//     if (
//       formData.free_domain &&
//       !validateField("free_domain", formData.free_domain)
//     ) {
//       isValid = false;
//     }
//     return isValid;
//   };

//   // Submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus((prev) => ({ ...prev, error: null }));
//     if (!validateForm()) return;

//     try {
//       setStatus((prev) => ({ ...prev, isLoading: true }));
//       const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");

//       const cleanedDomain = formData.free_domain
//         ? normalizeDomain(formData.free_domain)
//         : "";

//       const payload = {
//         customer_id: userData.userId,
//         ...formData,
//         free_domain: cleanedDomain,
//       };

//       const res = await CreateNewPortal(payload);
//       if (res.data?.response) {
//         setSessionData("packageDetails", {
//           purchaseId: res.data.response.purchase_id,
//           packageId: res.data.response.package_id,
//           userId: res.data.response.user_id,
//         });
//         navigate(
//           `/portal/payment/${res.data.response.package_id}/${res.data.response.purchase_id}/${res.data.response.user_id}`
//         );
//       }
//     } catch (error) {
//       console.error("Portal creation error:", error);
//       setStatus((prev) => ({
//         ...prev,
//         isLoading: false,
//         error:
//           error?.response?.data?.status_message ||
//           "Failed to create portal. Please try again.",
//       }));
//     }
//   };

//   // UI helpers
//   const hasError = (field) =>
//     validation.touched[field] && validation.errors[field];

//   const getInputBorder = (field) => {
//     if (!validation.touched[field]) return "border-gray-300";
//     return validation.errors[field] ? "border-red-500" : "border-green-500";
//   };

//   return (
//     <>
//       <Helmet>
//         <title>{metaData.title}</title>
//         <meta name="description" content={metaData.description} />
//         <link rel="canonical" href={metaData.canonicalUrl} />
//         <meta property="og:title" content={metaData.title} />
//         <meta property="og:description" content={metaData.description} />
//         <meta property="og:image" content={metaData.logoUrl} />
//       </Helmet>

//       <div className="min-h-screen bg-gray-50">
//         <Cancel text="New news portal" />

//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="bg-white shadow-xl rounded-lg overflow-hidden">
//             <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-4">
//               <h1 className="text-2xl font-bold text-white">
//                 Create Your News Portal
//               </h1>
//               <p className="text-red-100 mt-1">
//                 Fill in the details to launch your own news platform
//               </p>
//             </div>

//             {status.error && (
//               <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-6 mt-4">
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <svg
//                       className="h-5 w-5 text-red-500"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm text-red-700">{status.error}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="p-6 space-y-8">
//               <section className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="region"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Select Region <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="region"
//                     name="region"
//                     value={formData.region}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur("region")}
//                     className={`block w-full pl-3 pr-10 py-3 text-base border ${getInputBorder(
//                       "region"
//                     )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md`}
//                   >
//                     <option value="">Select Region</option>
//                     <option value="0">India</option>
//                     <option value="1">Outside India</option>
//                   </select>
//                   {hasError("region") && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {validation.errors.region}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="package_id"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Select Plan <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="package_id"
//                     name="package_id"
//                     value={formData.package_id}
//                     onChange={handlePackageSelect}
//                     onBlur={() => handleBlur("package_id")}
//                     disabled={!formData.region || status.isLoading}
//                     className={`block w-full pl-3 pr-10 py-3 text-base border ${getInputBorder(
//                       "package_id"
//                     )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md ${
//                       !formData.region ? "bg-gray-100" : ""
//                     }`}
//                   >
//                     <option value="">
//                       {formData.region ? "Select Plan" : "Select region first"}
//                     </option>
//                     {packages.map((pkg) => (
//                       <option key={pkg.package_id} value={pkg.package_id}>
//                         {pkg.package_name} ({pkg.region === "0" ? "₹" : "$"}
//                         {pkg.payable}/
//                         {pkg?.validity === 365
//                           ? "Yearly"
//                           : pkg?.validity === 90
//                           ? "Quarterly"
//                           : pkg?.validity === 30
//                           ? "Monthly"
//                           : `${pkg?.validity} days`})
//                       </option>
//                     ))}
//                   </select>
//                   <p className=" text-xs text-gray-600 mt-1">
//                     <p className="text-xs text-gray-600">
//                       {formData.region !== "0" ? "$" : "₹"} {formData.price}{" "}
//                       {portalRequestDetail?.validity === 365
//                         ? "Yearly"
//                         : portalRequestDetail?.validity === 90
//                         ? "Quarterly"
//                         : portalRequestDetail?.validity === 30
//                         ? "Monthly"
//                         : `${portalRequestDetail?.validity} days`}
//                     </p>
//                   </p>
//                   {hasError("package_id") && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {validation.errors.package_id}
//                     </p>
//                   )}
//                 </div>
//               </section>

//               <section className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="agency_name"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     News Agency Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="agency_name"
//                     name="agency_name"
//                     value={formData.agency_name}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur("agency_name")}
//                     placeholder="e.g. NDTV, Republic TV"
//                     className={`block w-full px-3 py-3 border ${getInputBorder(
//                       "agency_name"
//                     )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
//                   />
//                   {hasError("agency_name") && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {validation.errors.agency_name}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="agency_add"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Agency Address <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="agency_add"
//                     name="agency_add"
//                     value={formData.agency_add}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur("agency_add")}
//                     placeholder="Full agency address"
//                     className={`block w-full px-3 py-3 border ${getInputBorder(
//                       "agency_add"
//                     )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
//                   />
//                   {hasError("agency_add") && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {validation.errors.agency_add}
//                     </p>
//                   )}
//                 </div>
//               </section>

//               <div className="border-t border-gray-200 pt-6">
//                 <h2 className="text-lg font-medium text-gray-900">
//                   App & Website Information
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Provide details about your digital platform
//                 </p>
//               </div>

//               <section className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="app_name"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     App Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="app_name"
//                     name="app_name"
//                     value={formData.app_name}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur("app_name")}
//                     maxLength={30}
//                     placeholder="Your app display name"
//                     className={`block w-full px-3 py-3 border ${getInputBorder(
//                       "app_name"
//                     )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
//                   />
//                   <div className="flex justify-between mt-1">
//                     <p
//                       className={`text-xs ${
//                         hasError("app_name") ? "text-red-600" : "text-gray-500"
//                       }`}
//                     >
//                       {validation.errors.app_name || "Min. 3 characters"}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {formData.app_name.length}/30
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="app_package_name"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     App Package Name
//                   </label>
//                   <input
//                     type="text"
//                     id="app_package_name"
//                     name="app_package_name"
//                     value={formData.app_package_name}
//                     readOnly
//                     placeholder="Auto-filled from package"
//                     className="block w-full px-3 py-3 border border-gray-300 bg-gray-50 rounded-md shadow-sm sm:text-sm cursor-not-allowed"
//                   />
//                   <p className="mt-1 text-xs text-gray-500">
//                     This will be auto-generated
//                   </p>
//                 </div>
//               </section>

//               <section className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="website_name"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Website Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="website_name"
//                     name="website_name"
//                     value={formData.website_name}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur("website_name")}
//                     maxLength={30}
//                     placeholder="Your website display name"
//                     className={`block w-full px-3 py-3 border ${getInputBorder(
//                       "website_name"
//                     )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
//                   />
//                   <div className="flex justify-between mt-1">
//                     <p
//                       className={`text-xs ${
//                         hasError("website_name")
//                           ? "text-red-600"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {validation.errors.website_name || "Min. 3 characters"}
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       {formData.website_name.length}/30
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="free_domain"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Custom Domain (Optional)
//                   </label>
//                   <div className="flex rounded-md shadow-sm">
//                     <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
//                       https://
//                     </span>
//                     <input
//                       type="text"
//                       id="free_domain"
//                       name="free_domain"
//                       value={String(formData.free_domain.toLowerCase())
//                         .replace(/^https?:\/\//i, "")
//                         .replace(/^www\./i, "")}
//                       onChange={handleChange}
//                       onBlur={() => handleBlur("free_domain")}
//                       placeholder="yourdomain.com"
//                       className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-md border ${getInputBorder(
//                         "free_domain"
//                       )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
//                     />
//                   </div>
//                   {hasError("free_domain") && (
//                     <p className="mt-1 text-sm text-red-600">
//                       {validation.errors.free_domain}
//                     </p>
//                   )}

//                   <p className="mt-1 text-xs text-gray-500">
//                     Free domain worth ₹999 included with your plan
//                   </p>
//                   {domainResult && (
//                     <div className="mt-4 p-4 border rounded-lg shadow bg-white">
//                       {domainResult.error && (
//                         <p className="text-red-500">{domainResult.error}</p>
//                       )}

//                       {domainResult.available && (
//                         <div>
//                           <p className="text-green-600 font-semibold">
//                             ✅ Domain is available!
//                           </p>
//                           <p className="text-gray-700">
//                             Price:{domainResult.currency === "USD" ? "$" : "₹"}{" "}
//                             {domainResult.price}{" "}
//                           </p>
//                           <p className="text-sm text-gray-500 mt-1">
//                             {domainResult.description}
//                           </p>
//                         </div>
//                       )}

//                       {domainResult.available === false && (
//                         <p className="text-red-600">{domainResult.message}</p>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </section>

//               <div className="bg-gray-50 px-4 py-5 sm:px-6 rounded-lg border border-gray-200">
//                 <div className="flex flex-col md:flex-row justify-between items-center">
//                   <div className="mb-4 md:mb-0">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Total Amount
//                     </h3>
//                     <p className="text-2xl font-bold text-gray-900">
//                       {formData.region !== "0" ? "$" : "₹"}{" "}
//                       {formData.price || "0.00"}
//                     </p>
//                     <p className="text-sm text-gray-500 mt-1">
//                       Payment will be processed in the next step
//                     </p>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={status.isLoading}
//                     className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-75 disabled:cursor-not-allowed"
//                   >
//                     {status.isLoading ? (
//                       <div className="flex items-center justify-center ">
//                         <AiOutlineLoading3Quarters className="animate-spin lg:w-40 w-40 lg:h-8 h-8 text-red-500" />
//                       </div>
//                     ) : (
//                       <div className="flex items-center justify-center lg:w-40 w-40 lg:h-8 h-8 ">
//                         Continue to Payment
//                       </div>
//                     )}
//                   </button>
//                 </div>

//                 <div className="mt-4 text-center">
//                   <p className="text-sm text-gray-500">
//                     You won't be charged yet. Review your details before
//                     payment.
//                   </p>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cancel from "./Cancel";
import { PaymentContext } from "../../context/PaymentContext";
import { CreateNewPortal, GetPriceDetails } from "../../api";
import { useSessionStorage } from "../../hooks/sessionStorage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { checkDomainPrice } from "./checkDomainPrice";

export default function CreatePortal() {
  const [domainResult, setDomainResult] = useState(null);

  const { setPortalRequestDetails, portalRequestDetail } =
    useContext(PaymentContext);
  const [formData, setFormData] = useState({
    app_name: "",
    website_name: "",
    region: "0",
    registration_no: "",
    registration_type: "",
    app_package_name: "",
    agency_name: "",
    agency_add: "",
    free_domain: "",
    package_id: "",
    price: 0.0,
  });
  const [validation, setValidation] = useState({
    touched: {},
    errors: {},
  });
  const [packages, setPackages] = useState([]);
  const [status, setStatus] = useState({
    isLoading: false,
    error: null,
  });
  const navigate = useNavigate();
  const { setSessionData } = useSessionStorage();

  // SEO Metadata
  const metaData = {
    title: "Create News Portal - MyPatrakar",
    description: "Create your own news portal website and app with MyPatrakar",
    canonicalUrl: "https://mypatrakar.com/portal/createportal",
    logoUrl: "https://mypatrakar.com/assets/LG2-CcMgpPb7.svg",
  };

  // Helper: normalize domain (strip, lowercase, prefix)
  const normalizeDomain = (raw) => {
    if (!raw) return "";
    let stripped = raw.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
    stripped = stripped.toLowerCase();
    return `https://www.${stripped}`;
  };

  // Load packages when region changes (debounced)
  useEffect(() => {
    if (!formData.region) return;

    let canceled = false;
    const loadPackages = async () => {
      try {
        setStatus((prev) => ({ ...prev, isLoading: true, error: null }));
        const res = await GetPriceDetails();
        const data = res.data.response.filter(
          (rgn) => String(rgn?.region) === String(formData?.region)
        );
        if (!canceled) {
          setPackages(data);
        }
      } catch (error) {
        if (!canceled) {
          setStatus((prev) => ({
            ...prev,
            error: "Failed to load packages. Please try again.",
          }));
          console.error("Package loading error:", error);
        }
      } finally {
        if (!canceled) {
          setStatus((prev) => ({ ...prev, isLoading: false }));
        }
      }
    };

    const debounceTimer = setTimeout(() => {
      loadPackages();
    }, 300);

    return () => {
      canceled = true;
      clearTimeout(debounceTimer);
    };
  }, [formData.region]);

  // Validate field on blur
  const handleBlur = (field) => {
    setValidation((prev) => ({
      ...prev,
      touched: { ...prev.touched, [field]: true },
    }));
    validateField(field, formData[field]);
  };

  // Field validation
  const validateField = async (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "app_name":
        if (!value) error = "App name is required";
        else if (String(value).trim().length < 3)
          error = "Minimum 3 characters required";
        break;
      case "website_name":
        if (!value) error = "Website name is required";
        else if (String(value).trim().length < 3)
          error = "Minimum 3 characters required";
        break;
      case "region":
        if (!value) error = "Please select a region";
        break;
      case "package_id":
        if (!value) error = "Please select a plan";
        break;
      case "agency_name":
        if (!value) error = "Agency name is required";
        break;
      case "agency_add":
        if (!value) error = "Agency address is required";
        break;
      // case "free_domain":
      //   if (value) {
      //     const domainRegex = /^(?!:\/\/)([a-z0-9-]+\.)+[a-z]{2,}$/;
      //     let stripped = String(value)
      //       .replace(/^https?:\/\//i, "")
      //       .replace(/^www\./i, "")
      //       .toLowerCase();
      //     if (!domainRegex.test(stripped)) {
      //       error = "Invalid domain format (e.g., example.com)";
      //     } else {
      //       const normalized = `https://www.${stripped}`;
      //       setFormData((prev) => ({
      //         ...prev,
      //         free_domain: normalized,
      //       }));
      //     }
      //   }
      //   break;
      case "free_domain":
        if (value) {
          const domainRegex = /^(?!:\/\/)([a-z0-9-]+\.)+[a-z]{2,}$/;
          let stripped = String(value)
            .replace(/^https?:\/\//i, "")
            .replace(/^www\./i, "")
            .toLowerCase();

          if (!domainRegex.test(stripped)) {
            setDomainResult({
              error: "Invalid domain format (e.g., example.com)",
            });
          } else {
            // Check availability and price
            const result = await checkDomainPrice(stripped);

            if (result.error) {
              setDomainResult({ error: result.error });
            } else if (!result.available) {
              setDomainResult({
                available: false,
                message: result.message || "Domain not available",
              });
            } else {
              const normalized = `https://www.${stripped}`;
              setFormData((prev) => ({
                ...prev,
                free_domain: normalized,
              }));
              setDomainResult({
                available: true,
                price: result.price,
                currency: result.currency || "INR",
                description:
                  "This domain is available for registration right now!",
              });
            }
          }
        }
        break;

      default:
        break;
    }

    setValidation((prev) => ({
      ...prev,
      errors: { ...prev.errors, [fieldName]: error },
    }));
    return !error;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      let updated = { ...prev, [name]: value };

      if (name === "app_name") {
        const packageName = generatePackageName(value);
        updated = { ...updated, app_package_name: packageName };
      }

      return updated;
    });

    if (validation.errors[name]) {
      setValidation((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  // Helper to generate package name
  const generatePackageName = (appName) => {
    if (!appName) return "";

    let packageName = appName
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

    if (!packageName.startsWith("com.")) {
      packageName = `com.app.${packageName}`;
    }
    if (!packageName.endsWith("_app")) {
      packageName = `${packageName}_app`;
    }
    return packageName;
  };

  // Handle package selection
  const handlePackageSelect = (e) => {
    const packageId = e.target.value;
    const selectedPackage = packages.find(
      (pkg) => pkg.package_id === packageId
    );

    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        package_id: packageId,
        app_package_name: selectedPackage.package_name,
        price: selectedPackage.payable,
      }));
      setPortalRequestDetails((prev) => ({
        ...prev,
        payable: selectedPackage.payable,
        price: selectedPackage.payable,
        discount: selectedPackage.discount,
        validity: selectedPackage.validity,
        package_name: selectedPackage.package_name,
        package_id: selectedPackage.package_id,
        region: selectedPackage.region,
      }));
    }
  };

  // Validate full form
  const validateForm = () => {
    const requiredFields = [
      "app_name",
      "website_name",
      "region",
      "registration_type",
      "registration_no",
      "package_id",
      "agency_name",
      "agency_add",
    ];
    let isValid = true;
    requiredFields.forEach((field) => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });
    if (
      formData.free_domain &&
      !validateField("free_domain", formData.free_domain)
    ) {
      isValid = false;
    }
    return isValid;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, error: null }));
    if (!validateForm()) return;

    console.log(formData);
    try {
      setStatus((prev) => ({ ...prev, isLoading: true }));
      const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");

      const cleanedDomain = formData.free_domain
        ? normalizeDomain(formData.free_domain)
        : "";

      const payload = {
        customer_id: userData.userId,
        ...formData,
        free_domain: cleanedDomain,
      };

      const res = await CreateNewPortal(payload);
      if (res.data?.response) {
        setSessionData("packageDetails", {
          purchaseId: res.data.response.purchase_id,
          packageId: res.data.response.package_id,
          userId: res.data.response.user_id,
        });
        navigate(
          `/portal/payment/${res.data.response.package_id}/${res.data.response.purchase_id}/${res.data.response.user_id}`
        );
      }
    } catch (error) {
      console.error("Portal creation error:", error);
      setStatus((prev) => ({
        ...prev,
        isLoading: false,
        error:
          error?.response?.data?.status_message ||
          "Failed to create portal. Please try again.",
      }));
    }
  };

  // UI helpers
  const hasError = (field) =>
    validation.touched[field] && validation.errors[field];

  const getInputBorder = (field) => {
    if (!validation.touched[field]) return "border-gray-300";
    return validation.errors[field] ? "border-red-500" : "border-green-500";
  };

  return (
    <>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <link rel="canonical" href={metaData.canonicalUrl} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.logoUrl} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Cancel text="New news portal" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">
                Create Your News Portal
              </h1>
              <p className="text-red-100 mt-1">
                Fill in the details to launch your own news platform
              </p>
            </div>

            {status.error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-6 mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{status.error}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Region <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    onBlur={() => handleBlur("region")}
                    className={`block w-full pl-3 pr-10 py-3 text-base border ${getInputBorder(
                      "region"
                    )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md`}
                  >
                    <option value="">Select Region</option>
                    <option value="0">India</option>
                    <option value="1">Outside India</option>
                  </select>
                  {hasError("region") && (
                    <p className="mt-1 text-sm text-red-600">
                      {validation.errors.region}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="package_id"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Plan <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="package_id"
                    name="package_id"
                    value={formData.package_id}
                    onChange={handlePackageSelect}
                    onBlur={() => handleBlur("package_id")}
                    disabled={!formData.region || status.isLoading}
                    className={`block w-full pl-3 pr-10 py-3 text-base border ${getInputBorder(
                      "package_id"
                    )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md ${
                      !formData.region ? "bg-gray-100" : ""
                    }`}
                  >
                    <option value="">
                      {formData.region ? "Select Plan" : "Select region first"}
                    </option>
                    {packages.map((pkg) => (
                      <option key={pkg.package_id} value={pkg.package_id}>
                        {pkg.package_name} ({pkg.region === "0" ? "₹" : "$"}
                        {pkg.payable}/
                        {pkg?.validity === 365
                          ? "Yearly"
                          : pkg?.validity === 90
                          ? "Quarterly"
                          : pkg?.validity === 30
                          ? "Monthly"
                          : `${pkg?.validity} days`}
                        )
                      </option>
                    ))}
                  </select>
                  <p className=" text-xs text-gray-600 mt-1">
                    <p className="text-xs text-gray-600">
                      {formData.region !== "0" ? "$" : "₹"} {formData.price}{" "}
                      {portalRequestDetail?.validity === 365
                        ? "Yearly"
                        : portalRequestDetail?.validity === 90
                        ? "Quarterly"
                        : portalRequestDetail?.validity === 30
                        ? "Monthly"
                        : `${portalRequestDetail?.validity} days`}
                    </p>
                  </p>
                  {hasError("package_id") && (
                    <p className="mt-1 text-sm text-red-600">
                      {validation.errors.package_id}
                    </p>
                  )}
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="agency_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    News Agency Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="agency_name"
                    name="agency_name"
                    value={formData.agency_name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("agency_name")}
                    placeholder="e.g. NDTV, Republic TV"
                    className={`block w-full px-3 py-3 border ${getInputBorder(
                      "agency_name"
                    )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
                  />
                  {hasError("agency_name") && (
                    <p className="mt-1 text-sm text-red-600">
                      {validation.errors.agency_name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="agency_add"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Agency Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="agency_add"
                    name="agency_add"
                    value={formData.agency_add}
                    onChange={handleChange}
                    onBlur={() => handleBlur("agency_add")}
                    placeholder="Full agency address"
                    className={`block w-full px-3 py-3 border ${getInputBorder(
                      "agency_add"
                    )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
                  />
                  {hasError("agency_add") && (
                    <p className="mt-1 text-sm text-red-600">
                      {validation.errors.agency_add}
                    </p>
                  )}
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-medium text-gray-900">
                  App & Website Information
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Provide details about your digital platform
                </p>
              </div>

              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="app_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    App Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="app_name"
                    name="app_name"
                    value={formData.app_name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("app_name")}
                    maxLength={30}
                    placeholder="Your app display name"
                    className={`block w-full px-3 py-3 border ${getInputBorder(
                      "app_name"
                    )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
                  />
                  <div className="flex justify-between mt-1">
                    <p
                      className={`text-xs ${
                        hasError("app_name") ? "text-red-600" : "text-gray-500"
                      }`}
                    >
                      {validation.errors.app_name || "Min. 3 characters"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formData.app_name.length}/30
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="app_package_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    App Package Name
                  </label>
                  <input
                    type="text"
                    id="app_package_name"
                    name="app_package_name"
                    value={formData.app_package_name}
                    readOnly
                    placeholder="Auto-filled from package"
                    className="block w-full px-3 py-3 border border-gray-300 bg-gray-50 rounded-md shadow-sm sm:text-sm cursor-not-allowed"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    This will be auto-generated
                  </p>
                </div>
              </section>
              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="registration_type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Registration Type <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="registration_type"
                    name="registration_type"
                    value={formData.registration_type}
                    onChange={handleChange}
                    onBlur={() => handleBlur("registration_type")}
                    className={`block w-full px-3 py-3 border ${getInputBorder(
                      "registration_type"
                    )} rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
                  >
                    <option value="">Select Type</option>
                    <option value="1">RNI</option>
                    <option value="0">MIB</option>
                  </select>

                  <div className="flex justify-between mt-1">
                    <p
                      className={`text-xs ${
                        hasError("registration_type")
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    >
                      {validation.errors.registration_type ||
                        "Select RNI or MIB"}
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="registration_no"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Registration Number
                  </label>
                  <input
                    type="text"
                    id="registration_no"
                    name="registration_no"
                    value={formData.registration_no}
                    placeholder="Registration Number"
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300  rounded-md shadow-sm sm:text-sm "
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    This will be Registration Number
                  </p>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="website_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Website Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="website_name"
                    name="website_name"
                    value={formData.website_name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("website_name")}
                    maxLength={30}
                    placeholder="Your website display name"
                    className={`block w-full px-3 py-3 border ${getInputBorder(
                      "website_name"
                    )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
                  />
                  <div className="flex justify-between mt-1">
                    <p
                      className={`text-xs ${
                        hasError("website_name")
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    >
                      {validation.errors.website_name || "Min. 3 characters"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formData.website_name.length}/30
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="free_domain"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Custom Domain (Optional)
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      id="free_domain"
                      name="free_domain"
                      value={String(formData.free_domain.toLowerCase())
                        .replace(/^https?:\/\//i, "")
                        .replace(/^www\./i, "")}
                      onChange={handleChange}
                      onBlur={() => handleBlur("free_domain")}
                      placeholder="yourdomain.com"
                      className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-md border ${getInputBorder(
                        "free_domain"
                      )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm`}
                    />
                  </div>
                  {hasError("free_domain") && (
                    <p className="mt-1 text-sm text-red-600">
                      {validation.errors.free_domain}
                    </p>
                  )}

                  <p className="mt-1 text-xs text-gray-500">
                    Free domain worth ₹999 included with your plan
                  </p>
                  {domainResult && (
                    <div className="mt-4 p-4 border rounded-lg shadow bg-white">
                      {domainResult.error && (
                        <p className="text-red-500">{domainResult.error}</p>
                      )}

                      {domainResult.available && (
                        <div>
                          <p className="text-green-600 font-semibold">
                            ✅ Domain is available!
                          </p>
                          <p className="text-gray-700">
                            Price:{domainResult.currency === "USD" ? "$" : "₹"}{" "}
                            {domainResult.price}{" "}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {domainResult.description}
                          </p>
                        </div>
                      )}

                      {domainResult.available === false && (
                        <p className="text-red-600">{domainResult.message}</p>
                      )}
                    </div>
                  )}
                </div>
              </section>

              <div className="bg-gray-50 px-4 py-5 sm:px-6 rounded-lg border border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-medium text-gray-900">
                      Total Amount
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {formData.region !== "0" ? "$" : "₹"}{" "}
                      {formData.price || "0.00"}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Payment will be processed in the next step
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status.isLoading}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {status.isLoading ? (
                      <div className="flex items-center justify-center ">
                        <AiOutlineLoading3Quarters className="animate-spin lg:w-40 w-40 lg:h-8 h-8 text-red-500" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center lg:w-40 w-40 lg:h-8 h-8 ">
                        Continue to Payment
                      </div>
                    )}
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    You won't be charged yet. Review your details before
                    payment.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
