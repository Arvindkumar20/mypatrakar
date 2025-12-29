// import React, { useContext, useState, useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import AppColor from "./AppColor";
// import BasicDetails from "./basicDetails";
// import Cancel from "../Cancel";
// import SocialMediaLinks from "./SocialMediaLinks";
// import WebColor from "./WebColor";
// import { checkObjNotEmpty } from "../../../utils/CheckObjEmptyOrNot";
// import { AuthContext } from "../../../context/Auth-context";
// import { CreateAppOrWebCustomer, DecryptString } from "../../../api";
// import { PaymentContext } from "../../../context/PaymentContext";
// import { useSessionStorage } from "../../../hooks/sessionStorage";

// const CreateAppOrWeb = () => {
//   const [empty, setEmpty] = useState(false);
//   const [submitForm, setSubmitForm] = useState(false);
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { setRequesteStatus } = useContext(AuthContext);
//   const { portalRequestDetail } = useContext(PaymentContext);
//   const navigate = useNavigate();
//   const { getSessionData } = useSessionStorage();

//   const [ids, setIds] = useState({
//     package_id: "",
//     purchase_id: "",
//     user_id: "",
//   });

//   const packageData = getSessionData("packageDetails");

//   useEffect(() => {
//     const decryptParams = async () => {
//       try {
//         const [pkg, pur, usr] = await Promise.all([
//           DecryptString(packageData.packageId),
//           DecryptString(packageData.purchaseId),
//           DecryptString(packageData.userId),
//         ]);
//         setIds({
//           package_id: pkg.data.response,
//           purchase_id: pur.data.response,
//           user_id: usr.data.response,
//         });
//       } catch (err) {
//         console.error("Error decrypting IDs:", err);
//         setError("Failed to process your request. Please try again.");
//       }
//     };

//     decryptParams();
//   }, []);
//   // console.log(ids.purchase_id);
//   const [userRequest, setUserRequest] = useState({
//     basicDetails: {
//       app_logo: null,
//       web_logo: null,
//       owner_profile_pic: null,
//       agency_name: "",
//       language: {
//         language_mode:"0",
//         language:""
//       },
//       reg_number: "",
//       owner_name: "",
//       owner_mobile: "",
//       owner_email: "",
//       state: "",
//       owner_state: "",
//       owner_city: "",
//       owner_add: "",
//     },
//     socialMediaLinks: {
//       fb_link: "",
//       twitter_link: "",
//       insta_link: "",
//       youtube_link: "",
//       koo_link: "",
//       linkedin_link: "",
//       whats_link: "",
//       telegram_link: "",
//     },
//     web_color: {
//       primary: "",
//       text: "",
//     },
//     web_footer_color: {
//       primary: "",
//       text: "",
//     },
//     app_color: {
//       primary: "",
//       text: "",
//     },
//   });
//   // console.log(userRequest.basicDetails.app_logo.file);
//   const saveAppOrWebData = useCallback(async () => {
//     setIsSubmitting(true);
//     try {
//       const formData = new FormData();

//       // Add all fields to FormData
//       formData.append(
//         "purchase_id",
//         ids.purchase_id.includes(":")
//           ? ids.purchase_id.split(":")[1]
//           : ids.purchase_id
//       );
//       formData.append(
//         "package_id",
//         ids.package_id.includes(":")
//           ? ids.package_id.split(":")[1]
//           : ids.package_id
//       );
//       formData.append(
//         "customer_id",
//         ids.user_id.includes(":") ? ids.user_id.split(":")[1] : ids.user_id
//       );
//       formData.append("theme_id", userRequest.web_color.primary);

//       // Append files if they exist
//       if (userRequest.basicDetails.app_logo) {
//         formData.append("app_logo", userRequest.basicDetails?.app_logo?.file);
//       }

//       if (userRequest.basicDetails.web_logo) {
//         formData.append("web_logo", userRequest.basicDetails?.web_logo?.file);
//       }
//       if (userRequest.basicDetails.owner_profile_pic) {
//         formData.append(
//           "owner_profile_pic",
//           userRequest.basicDetails?.owner_profile_pic?.file
//         );
//       }

//       // Append other fields
//       formData.append("agency_name", userRequest.basicDetails.agency_name);
//       formData.append("language", userRequest.basicDetails.language || "hindi");
//       formData.append("reg_number", userRequest.basicDetails.reg_number);
//       formData.append("owner_number", userRequest.basicDetails.reg_number);
//       formData.append("owner_name", userRequest.basicDetails.owner_name);
//       formData.append("owner_mobile", userRequest.basicDetails.owner_mobile);
//       formData.append("owner_email", userRequest.basicDetails.owner_email);
//       formData.append(
//         "owner_state",
//         userRequest.basicDetails.state || "Maharashtra"
//       );
//       formData.append("owner_city", userRequest.basicDetails.owner_city);
//       formData.append("owner_add", userRequest.basicDetails.owner_add);
//       formData.append("fb_link", userRequest.socialMediaLinks.fb_link);
//       formData.append(
//         "twitter_link",
//         userRequest.socialMediaLinks.twitter_link
//       );
//       formData.append("insta_link", userRequest.socialMediaLinks.insta_link);
//       formData.append(
//         "youtube_link",
//         userRequest.socialMediaLinks.youtube_link
//       );
//       formData.append("koo_link", userRequest.socialMediaLinks.koo_link);
//       formData.append(
//         "linkedin_link",
//         userRequest.socialMediaLinks.linkedin_link
//       );

//       // Format WhatsApp link
//       const whatsappNumber = userRequest?.socialMediaLinks?.whats_link.replace(
//         /\D/g,
//         ""
//       );
//       if (whatsappNumber) {
//         formData.append("whats_link", `https://wa.me/${whatsappNumber}`);
//       } else {
//         formData.append("whats_link", "");
//       }

//       formData.append(
//         "telegram_link",
//         userRequest.socialMediaLinks.telegram_link
//       );
//       formData.append("app_color", userRequest.app_color.primary || "#000000");
//       formData.append("web_color", userRequest.web_color.primary || "#000000");
//       formData.append(
//         "web_footer_color",
//         userRequest.web_footer_color.primary || "#000000"
//       );

//       const res = await CreateAppOrWebCustomer(formData, true); // Pass true to indicate FormData
//       setRequesteStatus(true);
//       return res.status;
//     } catch (error) {
//       console.log("API Error:", error);
//       setError(
//         error?.response?.data?.status_message ||
//           "An unexpected error occurred. Please try again."
//       );
//       throw error;
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [userRequest, portalRequestDetail]);

//   const handleUsersRequest = useCallback(async () => {
//     setSubmitForm(true);
//     try {
//       setError("");
//       if (!checkObjNotEmpty(userRequest)) {
//         setEmpty(true);
//         return;
//       }

//       const status = await saveAppOrWebData();
//       setRequesteStatus(true);

//       if (status === 200) {
//         navigate("/portal");
//       }
//     } catch (error) {
//       console.error("Submission Error:", error);
//     }
//   }, [userRequest, saveAppOrWebData, setRequesteStatus, navigate]);
//   console.log(userRequest.basicDetails);
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Cancel text="Create App & Website" />

//       <div className="flex-1 p-4 max-w-7xl mx-auto w-full">
//         <header className="my-6">
//           <h1 className="text-3xl font-bold text-gray-800">MyPatrakar</h1>
//           <p className="text-gray-500 font-medium text-sm mt-2">
//             Create Fully Functional Website & App
//           </p>
//         </header>

//         <div className="space-y-8">
//           <BasicDetails
//             setUserRequest={setUserRequest}
//             setEmpty={setEmpty}
//             submitForm={submitForm}
//             setSubmitForm={setSubmitForm}
//           />
//           <SocialMediaLinks
//             setUserRequest={setUserRequest}
//             setEmpty={setEmpty}
//             submitForm={submitForm}
//             setSubmitForm={setSubmitForm}
//           />
//           <AppColor
//             setUserRequest={setUserRequest}
//             setEmpty={setEmpty}
//             submitForm={submitForm}
//             setSubmitForm={setSubmitForm}
//             logo={userRequest.basicDetails?.app_logo?.file?.preview}
//           />
//           <WebColor
//             setUserRequest={setUserRequest}
//             setEmpty={setEmpty}
//             submitForm={submitForm}
//             setSubmitForm={setSubmitForm}
//           />
//         </div>
//       </div>

//       <footer className="bg-white border-t border-gray-200 py-4 px-6">
//         <div className="flex flex-col items-end space-y-2">
//           <button
//             onClick={handleUsersRequest}
//             disabled={isSubmitting}
//             className={`px-6 py-2 rounded-md border-2 font-medium transition-colors ${
//               isSubmitting
//                 ? "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
//                 : "border-red-500 text-red-500 hover:bg-red-50"
//             }`}
//           >
//             {isSubmitting ? "Submitting..." : "Submit Request"}
//           </button>

//           {empty && (
//             <p className="text-red-500 text-sm">
//               Please fill all required fields
//             </p>
//           )}
//           {error && (
//             <p className="text-red-500 text-sm max-w-md text-right">{error}</p>
//           )}
//           {!empty && !error && (
//             <p className="text-gray-600 text-sm">
//               Your App & Website will be live within 48 hours if all
//               requirements are met
//             </p>
//           )}
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CreateAppOrWeb;

import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppColor from "./AppColor";
import BasicDetails from "./basicDetails";
import Cancel from "../Cancel";
import SocialMediaLinks from "./SocialMediaLinks";
import WebColor from "./WebColor";
import { checkObjNotEmpty } from "../../../utils/CheckObjEmptyOrNot";
import { AuthContext } from "../../../context/Auth-context";
import { CreateAppOrWebCustomer, DecryptString } from "../../../api";
import { PaymentContext } from "../../../context/PaymentContext";
import { useSessionStorage } from "../../../hooks/sessionStorage";

const CreateAppOrWeb = () => {
  const [empty, setEmpty] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setRequesteStatus } = useContext(AuthContext);
  const { portalRequestDetail } = useContext(PaymentContext);
  const navigate = useNavigate();
  const { getSessionData } = useSessionStorage();

  const [ids, setIds] = useState({
    package_id: "",
    purchase_id: "",
    user_id: "",
  });

  // const packageData = getSessionData("packageDetails");

  const packageData = useMemo(
    () => getSessionData("packageDetails"),
    [getSessionData]
  );

  useEffect(() => {
    // Only decrypt if packageData exists and IDs not already set
    if (!packageData || ids.package_id) return;

    const decryptParams = async () => {
      try {
        const [pkg, pur, usr] = await Promise.all([
          DecryptString(packageData.packageId),
          DecryptString(packageData.purchaseId),
          DecryptString(packageData.userId),
        ]);
        setIds({
          package_id: pkg.data.response,
          purchase_id: pur.data.response,
          user_id: usr.data.response,
        });
      } catch (err) {
        console.error("Error decrypting IDs:", err);
        setError("Failed to process your request. Please try again later.");
      }
    };

    decryptParams();
  }, [packageData, ids.package_id]);

  const [userRequest, setUserRequest] = useState({
    basicDetails: {
      app_logo: null,
      web_logo: null,
      owner_profile_pic: null,
      agency_name: "",
      language: {
        language_mode: "0",
        language: "",
      },
      reg_number: "",
      owner_name: "",
      owner_mobile: "",
      owner_email: "",
      state: "",
      owner_state: "",
      owner_city: "",
      owner_add: "",
    },
    socialMediaLinks: {
      fb_link: "",
      twitter_link: "",
      insta_link: "",
      youtube_link: "",
      koo_link: "",
      linkedin_link: "",
      whats_link: "",
      telegram_link: "",
    },
    web_color: {
      primary: "",
      text: "",
    },
    web_footer_color: {
      primary: "",
      text: "",
    },
    app_color: {
      primary: "",
      text: "",
    },
  });

  // Save App/Web data
  const saveAppOrWebData = useCallback(
    async (currentRequest) => {
      setIsSubmitting(true);
      try {
        const formData = new FormData();

        formData.append(
          "purchase_id",
          ids.purchase_id.includes(":")
            ? ids.purchase_id.split(":")[1]
            : ids.purchase_id
        );
        formData.append(
          "package_id",
          ids.package_id.includes(":")
            ? ids.package_id.split(":")[1]
            : ids.package_id
        );
        formData.append(
          "customer_id",
          ids.user_id.includes(":") ? ids.user_id.split(":")[1] : ids.user_id
        );
        formData.append("theme_id", currentRequest.web_color.primary);

        // Append files
        if (currentRequest.basicDetails.app_logo) {
          formData.append(
            "app_logo",
            currentRequest.basicDetails.app_logo.file
          );
        }
        if (currentRequest.basicDetails.web_logo) {
          formData.append(
            "web_logo",
            currentRequest.basicDetails.web_logo.file
          );
        }
        if (currentRequest.basicDetails.owner_profile_pic) {
          formData.append(
            "owner_profile_pic",
            currentRequest.basicDetails.owner_profile_pic.file
          );
        }

        // Append other fields
        formData.append("agency_name", currentRequest.basicDetails.agency_name);
        formData.append(
          "language",
          currentRequest.basicDetails.language || "hindi"
        );
        formData.append("reg_number", currentRequest.basicDetails.reg_number);
        formData.append("owner_number", currentRequest.basicDetails.reg_number);
        formData.append("owner_name", currentRequest.basicDetails.owner_name);
        formData.append(
          "owner_mobile",
          currentRequest.basicDetails.owner_mobile
        );
        formData.append("owner_email", currentRequest.basicDetails.owner_email);
        formData.append(
          "owner_state",
          currentRequest.basicDetails.state || "Maharashtra"
        );
        formData.append("owner_city", currentRequest.basicDetails.owner_city);
        formData.append("owner_add", currentRequest.basicDetails.owner_add);

        // Social Media Links
        Object.entries(currentRequest.socialMediaLinks).forEach(
          ([key, value]) => {
            if (key === "whats_link") {
              const whatsappNumber = value?.replace(/\D/g, "");
              formData.append(
                "whats_link",
                whatsappNumber ? `https://wa.me/${whatsappNumber}` : ""
              );
            } else {
              formData.append(key, value);
            }
          }
        );

        formData.append(
          "app_color",
          currentRequest.app_color.primary || "#000000"
        );
        formData.append(
          "web_color",
          currentRequest.web_color.primary || "#000000"
        );
        formData.append(
          "web_footer_color",
          currentRequest.web_footer_color.primary || "#000000"
        );

        const res = await CreateAppOrWebCustomer(formData, true);
        setRequesteStatus(true);
        console.log(res);
        return res.status;
      } catch (err) {
        console.log("API Error:", err);
        setError(
          err?.response?.data?.status_message ||
            "An unexpected error occurred. Please try again."
        );
        throw err;
      } finally {
        setIsSubmitting(false);
      }
    },
    [ids, setRequesteStatus]
  );

  const handleUsersRequest = useCallback(async () => {
    setSubmitForm(true);
    try {
      setError("");
      if (!checkObjNotEmpty(userRequest)) {
        setEmpty(true);
        return;
      }

      const status = await saveAppOrWebData(userRequest);
      console.log(status);
      if (status === 200) {
        navigate("/portal");
        console.log(status);
      }
    } catch (err) {
      console.log("Submission Error:", err);
    }
  // }, [userRequest, saveAppOrWebData]);
  }, [userRequest, saveAppOrWebData, navigate]);
console.log(userRequest)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Cancel text="Create App & Website" />
      <div className="flex-1 p-4 max-w-7xl mx-auto w-full">
        <header className="my-6">
          <h1 className="text-3xl font-bold text-gray-800">MyPatrakar</h1>
          <p className="text-gray-500 font-medium text-sm mt-2">
            Create Fully Functional Website & App
          </p>
        </header>
        <div className="space-y-8">
          <BasicDetails
            setUserRequest={setUserRequest}
            setEmpty={setEmpty}
            submitForm={submitForm}
            setSubmitForm={setSubmitForm}
          />
          <SocialMediaLinks
            setUserRequest={setUserRequest}
            setEmpty={setEmpty}
            submitForm={submitForm}
            setSubmitForm={setSubmitForm}
          />
          <AppColor
            setUserRequest={setUserRequest}
            setEmpty={setEmpty}
            submitForm={submitForm}
            setSubmitForm={setSubmitForm}
            logo={userRequest.basicDetails?.app_logo?.preview}
          />
          <WebColor
            setUserRequest={setUserRequest}
            setEmpty={setEmpty}
            submitForm={submitForm}
            setSubmitForm={setSubmitForm}
          />
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 py-4 px-6">
        <div className="flex flex-col items-end space-y-2">
          <button
            onClick={handleUsersRequest}
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-md border-2 font-medium transition-colors ${
              isSubmitting
                ? "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
                : "border-red-500 text-red-500 hover:bg-red-50"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
          {empty && (
            <p className="text-red-500 text-sm">
              Please fill all required fields
            </p>
          )}
          {error && (
            <p className="text-red-500 text-sm max-w-md text-right">{error}</p>
          )}
          {!empty && !error && (
            <p className="text-gray-600 text-sm">
              Your App & Website will be live within 48 hours if all
              requirements are met
            </p>
          )}
        </div>
      </footer>
    </div>
  );
};

export default CreateAppOrWeb;
