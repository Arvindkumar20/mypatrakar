// import React, { useState } from "react";
// import phone from "../../assets/phone-call.png";
// import location from "../../assets/pin.png";
// import email from "../../assets/email.png";
// import { MyPatrakar } from "./MyPatrakar";
// import { useTranslation } from "react-i18next";
// import {
//   AiOutlineExclamationCircle,
//   AiOutlineCheckCircle,
// } from "react-icons/ai"; // Importing icons

// export default function FooterTop() {
//   const { t } = useTranslation();
//   const [warn, setWarn] = useState(""); // Store specific error messages
//   const [success, setSuccess] = useState(false);
//   const [info, setInfo] = useState({
//     mobileNumber: "",
//     message: "",
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

//   const getInTouch = [
//     {
//       logo: phone,
//       text: "+91 7905320279 ",
//     },
//     {
//       logo: phone,
//       text: " 0522-4343-194",
//     },
//     {
//       logo: location,
//       text: t("footer.top.address"),
//     },
//     {
//       logo: email,
//       text: "sales@mypatrakar.com",
//     },
//   ];

//   const showAlert = () => {
//     if (info.mobileNumber !== "" && info.message !== "") {
//       setWarn("");
//       setSuccess(true);
//       setInfo({ mobileNumber: "", message: "" });
//       setIsModalOpen(true); // Show modal on success
//     } else {
//       setSuccess(false);
//     }
//   };

//   const handleCallRequest = (e) => {
//     e.preventDefault();

//     // Check for empty fields and set appropriate error messages
//     if (info.mobileNumber === "") {
//       setWarn("Mobile number is required");
//     } else if (!/^\d{10}$/.test(info.mobileNumber)) {
//       setWarn("Please enter a valid 10-digit mobile number");
//     } else if (info.message === "") {
//       setWarn("Message is required");
//     } else {
//       showAlert();
//     }
//   };

//   const handleChange = (e) => {
//     setWarn(""); // Reset error message on input change
//     setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // Close modal function
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSuccess(false); // Reset success state
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full lg:px-10 md:px-5 px-3 mx-auto py-2 bg-gray-900   gap-4">
//       <section className="lg:w-1/2 w-full mb-8 lg:mb-0">
//         <div className="bg-gray-800 md:p-5 p-3 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold text-left tracking-wide text-white mb-3">
//             {t("footer.top.mainHeading")}
//             {/* Looking for an excellent News Portal Design? */}
//           </h2>
//           <p className="text-sm text-left text-gray-400 mb-5 tracking-wide ">
//             {t("footer.top.mainHeadingDesc")}

//             {/* Give us a call or drop a message anytime, we answer inquiries within
//             24 hours on business days. */}
//           </p>
//           <div className="text-left">
//             <p className="font-semibold text-lg text-white mb-3">
//               {t("footer.top.getInTouch")}
//             </p>
//             <div className="flex flex-col gap-3">
//               {getInTouch.map((item, index) => (
//                 <div className="flex items-center gap-2" key={index}>
//                   <img src={item.logo} alt={item.text} className="w-5 h-5" loading="lazy" />
//                   <p className="text-white text-sm">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="lg:w-1/2 w-full">
//         <div className="bg-gray-800 md:p-3 p-3 rounded-lg shadow-md">
//           <div className="flex flex-col items-center justify-center mb-5">
//             <MyPatrakar />
//             <h2 className="text-white font-medium text-xl my-2">
//               {t("footer.top.form.heading")}
//             </h2>
//           </div>

//           <form>
//             <div className="gap-4">
//               <section className="mb-3">
//                 <div className="text-left">
//                   <label
//                     htmlFor="phone"
//                     className="text-white font-semibold text-sm"
//                   >
//                     {t("footer.top.form.phone")}
//                   </label>
//                 </div>
//                 <input
//                   type="tel"
//                   name="mobileNumber"
//                   id="mobileNumber"
//                   value={info.mobileNumber}
//                   placeholder="Enter your Phone number"
//                   className="py-2 px-3 w-full rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//                   pattern="^[0-9]{10}$"
//                   title="Phone number must be 10 digits"
//                   required
//                   onChange={handleChange}
//                 />
//               </section>

//               <section className="mb-3">
//                 <div className="text-left">
//                   <label
//                     htmlFor="message"
//                     className="text-white font-semibold text-sm"
//                   >
//                     {t("footer.top.form.message")}
//                   </label>
//                 </div>
//                 <textarea
//                   name="message"
//                   id="message"
//                   value={info.message}
//                   placeholder="What are you saying?"
//                   className="py-2 px-3 w-full h-24 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//                   onChange={handleChange}
//                 ></textarea>
//               </section>

//               {warn && (
//                 <div className="flex items-center justify-end  mb-3">
//                   <AiOutlineExclamationCircle className="text-white w-5 h-5 mr-2" />
//                   <p className="text-white text-xs">{warn}</p>
//                 </div>
//               )}

//               <section className="mt-3 flex items-center justify-center">
//                 <button
//                   className={`text-white text-center font-semibold py-2 w-full rounded-lg transition-colors ${
//                     success
//                       ? "bg-green-600 hover:bg-green-700"
//                       : "bg-red-600 hover:bg-red-700"
//                   }`}
//                   onClick={handleCallRequest}
//                 >
//                   {success
//                     ? t("footer.top.form.button2")
//                     : t("footer.top.form.button1")}
//                 </button>
//               </section>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Success Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
//             {/* Only the icon has the bouncing animation */}
//             <div className="flex items-center justify-center mx-auto">
//               <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4 w-12 h-12 animate-bounce" />
//             </div>
//             <h3 className="text-xl font-semibold text-green-600 mb-2">
//               Request Successful
//             </h3>
//             <p className="text-sm text-gray-600 mb-4">
//               We have received your request. Our team will get back to you
//               shortly.
//             </p>
//             <button
//               className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState } from "react";
import phone from "../../assets/phone-call.png";
import location from "../../assets/pin.png";
import email from "../../assets/email.png";
import { MyPatrakar } from "./MyPatrakar";
import { useTranslation } from "react-i18next";
import { 
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment
} from "react-icons/ai";

export default function FooterTop() {
  const { t } = useTranslation();
  const [warn, setWarn] = useState("");
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState({
    mobileNumber: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getInTouch = [
    {
      icon: <AiOutlinePhone className="text-red-500 text-xl rotate-90" />,
      text: "+91 7905320279",
    },
    {
      icon: <AiOutlinePhone className="text-red-500 text-xl rotate-90" />,
      text: "0522-4343-194",
    },
    {
      icon: <AiOutlineEnvironment className="text-red-500 text-xl" />,
      text: t("footer.top.address"),
    },
    {
      icon: <AiOutlineMail className="text-red-500 text-xl" />,
      text: "sales@mypatrakar.com",
    },
  ];

  const showAlert = () => {
    if (info.mobileNumber !== "" && info.message !== "") {
      setWarn("");
      setSuccess(true);
      setInfo({ mobileNumber: "", message: "" });
      setIsModalOpen(true);
    } else {
      setSuccess(false);
    }
  };

  const handleCallRequest = (e) => {
    e.preventDefault();

    if (info.mobileNumber === "") {
      setWarn("Mobile number is required");
    } else if (!/^\d{10}$/.test(info.mobileNumber)) {
      setWarn("Please enter a valid 10-digit mobile number");
    } else if (info.message === "") {
      setWarn("Message is required");
    } else {
      showAlert();
    }
  };

  const handleChange = (e) => {
    setWarn("");
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccess(false);
  };

  return (
    <div className="w-full bg-gradient-to-br py-2 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
              {t("footer.top.mainHeading")}
            </h2>
            
            <p className="text-gray-300  text-lg leading-relaxed">
              {t("footer.top.mainHeadingDesc")}
            </p>
            
            <div className="space-y-2 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t("footer.top.getInTouch")}
              </h3>
              
              <div className="space-y-4">
                {getInTouch.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all"
                  >
                    <div className="bg-gray-900 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <p className="text-gray-200 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <MyPatrakar />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {t("footer.top.form.heading")}
              </h2>
              <p className="text-gray-400 mt-2">
                {t("footer.top.form.subheading")}
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label 
                  htmlFor="mobileNumber" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("footer.top.form.phone")}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="mobileNumber"
                    id="mobileNumber"
                    value={info.mobileNumber}
                    placeholder={t("footer.top.form.phonePlaceholder")}
                    className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    pattern="^[0-9]{10}$"
                    title="Phone number must be 10 digits"
                    required
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <AiOutlinePhone className="text-gray-400 -rotate-90" />
                  </div>
                </div>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("footer.top.form.message")}
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={info.message}
                  placeholder={t("footer.top.form.messagePlaceholder")}
                  className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all min-h-[120px]"
                  onChange={handleChange}
                ></textarea>
              </div>

              {warn && (
                <div className="flex items-center gap-2 p-3 bg-red-900/20 rounded-lg border border-red-800">
                  <AiOutlineExclamationCircle className="text-red-500 text-xl flex-shrink-0" />
                  <p className="text-red-400 text-sm">{warn}</p>
                </div>
              )}

              <button
                className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] ${
                  success 
                    ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
                    : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                } shadow-lg`}
                onClick={handleCallRequest}
              >
                {success
                  ? t("footer.top.form.button2")
                  : t("footer.top.form.button1")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-700 animate-scaleIn">
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <div className="bg-green-500/10 p-4 rounded-full">
                  <AiOutlineCheckCircle className="text-green-500 text-5xl animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                {t("footer.top.modal.title")}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {t("footer.top.modal.description")}
              </p>
              
              <button
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
                onClick={closeModal}
              >
                {t("footer.top.modal.button")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}