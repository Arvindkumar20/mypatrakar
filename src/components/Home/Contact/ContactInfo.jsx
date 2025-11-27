// import React, { useEffect, useState } from "react";
// import {
//   FaTwitter,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
//   FaYoutube,
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaReddit,
//   FaSnapchatGhost,
//   FaWhatsapp,
//   FaTiktok,
//   FaPinterest,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { ContactDetails } from "../../../api";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { BsTelegram, BsThreads } from "react-icons/bs";

// const socialIcons = {
//   Twitter: (
//     <FaTwitter className="text-white text-xl hover:text-blue-300 transition-colors" />
//   ),
//   Facebook: (
//     <FaFacebook className="text-white text-xl hover:text-blue-400 transition-colors" />
//   ),
//   Instagram: (
//     <FaInstagram className="text-white text-xl hover:text-pink-300 transition-colors" />
//   ),
//   LinkedIn: (
//     <FaLinkedin className="text-white text-xl hover:text-blue-400 transition-colors" />
//   ),
//   GitHub: (
//     <FaGithub className="text-white text-xl hover:text-gray-300 transition-colors" />
//   ),
//   YouTube: (
//     <FaYoutube className="text-white text-xl hover:text-red-400 transition-colors" />
//   ),
//   WhatsApp: (
//     <FaWhatsapp className="text-white text-xl hover:text-green-400 transition-colors" />
//   ),
//   Snapchat: (
//     <FaSnapchatGhost className="text-white text-xl hover:text-yellow-300 transition-colors" />
//   ),
//   TikTok: (
//     <FaTiktok className="text-white text-xl hover:text-gray-200 transition-colors" />
//   ),
//   Reddit: (
//     <FaReddit className="text-white text-xl hover:text-orange-400 transition-colors" />
//   ),
//   Pinterest: (
//     <FaPinterest className="text-white text-xl hover:text-red-400 transition-colors" />
//   ),
//   Telegram: (
//     <BsTelegram className="text-white text-xl hover:text-red-400 transition-colors" />
//   ),
//   Threads: (
//     <BsThreads className="text-white text-xl hover:text-red-400 transition-colors" />
//   ),
// };

// const ContactInfo = ({ setAddress }) => {
//   const [contactInfoData, setContactInfoData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchContactInfo = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const res = await ContactDetails();
//       console.log(res.data.data);
//       if (res.data?.data) {
//         setContactInfoData(res.data.data);
//         setAddress(
//           res.data.data.contactInfo.state,
//           res.data.data.contactInfo.city,
//           res.data.data.contactInfo.pincode
//         );
//       } else {
//         throw new Error("Invalid data format received");
//       }
//     } catch (err) {
//       console.error("Error fetching contact info:", err);
//       setError("Unable to fetch contact information. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContactInfo();
//   }, []);
//   console.log(import.meta.env.VITE_WEBSITE_BASE_URL);

//   // Skeleton loader for contact info items
//   const renderSkeletonLoader = () => (
//     <div className="space-y-4">
//       {[1, 2, 3].map((i) => (
//         <div key={i} className="flex items-center space-x-3">
//           <Skeleton circle width={20} height={20} />
//           <Skeleton width={200} height={16} />
//         </div>
//       ))}
//       <div className="mt-8">
//         <Skeleton width={150} height={16} className="mb-4" />
//         <div className="flex space-x-4">
//           {[1, 2, 3, 4].map((i) => (
//             <Skeleton key={i} circle width={32} height={32} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="contact-info p-6 bg-red-600 text-white rounded-xl w-full max-w-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-sans">
//         Contact Us
//       </h2>

//       {loading ? (
//         renderSkeletonLoader()
//       ) : error ? (
//         <div className="bg-red-700 p-4 rounded-lg flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <span>{error}</span>
//           <button
//             onClick={fetchContactInfo}
//             className="ml-auto bg-white text-red-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       ) : contactInfoData ? (
//         <>
//           <div className="space-y-4">
//             {/* Phone Numbers */}
//             {contactInfoData.contactInfo?.phone_1 && (
//               <div className="flex items-center space-x-3 group">
//                 <FaPhone className="text-white rotate-90 text-lg group-hover:text-red-300 transition-colors" />
//                 <a
//                   href={`tel:${contactInfoData.contactInfo.phone_1.replace(
//                     /\D/g,
//                     ""
//                   )}`}
//                   className="text-sm md:text-base hover:underline hover:text-red-200 transition-colors"
//                 >
//                   {contactInfoData.contactInfo.phone_1}
//                 </a>
//               </div>
//             )}

//             {contactInfoData.contactInfo?.phone_2 && (
//               <div className="flex items-center space-x-3 group">
//                 <FaPhone className="text-white rotate-90 text-lg group-hover:text-red-300 transition-colors" />
//                 <a
//                   href={`tel:${contactInfoData.contactInfo.phone_2.replace(
//                     /\D/g,
//                     ""
//                   )}`}
//                   className="text-sm md:text-base hover:underline hover:text-red-200 transition-colors"
//                 >
//                   {contactInfoData.contactInfo.phone_2}
//                 </a>
//               </div>
//             )}

//             {/* Email */}
//             {contactInfoData.contactInfo?.email && (
//               <div className="flex items-center space-x-3 group">
//                 <FaEnvelope className="text-white text-lg group-hover:text-red-300 transition-colors" />
//                 <a
//                   href={`mailto:${contactInfoData.contactInfo.email}`}
//                   className="text-sm md:text-base hover:underline hover:text-red-200 transition-colors"
//                 >
//                   {contactInfoData.contactInfo.email}
//                 </a>
//               </div>
//             )}

//             {/* Address */}
//             {(contactInfoData.contactInfo?.state ||
//               contactInfoData.contactInfo?.city ||
//               contactInfoData.contactInfo?.pincode) && (
//               <div className="flex items-start space-x-3 group">
//                 <FaMapMarkerAlt className="text-white text-lg mt-1 group-hover:text-red-300 transition-colors" />
//                 <address className="text-sm md:text-base not-italic hover:text-red-200 transition-colors">
//                   {[
//                     contactInfoData.contactInfo.state,
//                     contactInfoData.contactInfo.city,
//                     contactInfoData.contactInfo.pincode,
//                   ]
//                     .filter(Boolean)
//                     .join(", ")}
//                 </address>
//               </div>
//             )}
//           </div>

//           {/* Divider */}
//           <hr className="my-6 md:my-8 border-red-400 opacity-50" />

//           {/* Social Icons */}
//           {contactInfoData.socialMediaLinks?.length > 0 && (
//             <div>
//               <h3 className="text-lg font-medium mb-4">Follow Us</h3>
//               <div className="flex flex-wrap gap-4 md:gap-3 items-center">
//                 {contactInfoData.socialMediaLinks.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:scale-110 transition-transform duration-200"
//                     aria-label={item.name}
//                   >
//                     {
//                       socialIcons[item.name]
//                       //  ||
//                       // (
//                       //   // <span className="text-white text-xl">{item.name}</span>
//                       //  <img src={`${import.meta.env.VITE_WEBSITE_BASE_URL}/${item.icon}`} alt={item.name} className="w-7 h-7"/>
//                       // )
//                     }
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="text-center py-6">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-12 w-12 mx-auto text-red-300 mb-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <p className="text-red-100">No contact information available.</p>
//           <button
//             onClick={fetchContactInfo}
//             className="mt-4 bg-white text-red-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
//           >
//             Refresh
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactInfo;

import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaReddit,
  FaSnapchatGhost,
  FaWhatsapp,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContactDetails } from "../../../api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsTelegram, BsThreads } from "react-icons/bs";

const socialIcons = {
  Twitter: (
    <FaTwitter className="text-white text-xl group-hover:text-blue-400 transition-colors" />
  ),
  Facebook: (
    <FaFacebook className="text-white text-xl group-hover:text-blue-600 transition-colors" />
  ),
  Instagram: (
    <FaInstagram className="text-white text-xl group-hover:text-pink-500 transition-colors" />
  ),
  LinkedIn: (
    <FaLinkedin className="text-white text-xl group-hover:text-blue-700 transition-colors" />
  ),
  GitHub: (
    <FaGithub className="text-white text-xl group-hover:text-gray-800 transition-colors" />
  ),
  YouTube: (
    <FaYoutube className="text-white text-xl group-hover:text-red-600 transition-colors" />
  ),
  WhatsApp: (
    <FaWhatsapp className="text-white text-xl group-hover:text-green-500 transition-colors" />
  ),
  Snapchat: (
    <FaSnapchatGhost className="text-white text-xl group-hover:text-yellow-300 transition-colors" />
  ),
  TikTok: (
    <FaTiktok className="text-white text-xl group-hover:text-black transition-colors" />
  ),
  Reddit: (
    <FaReddit className="text-white text-xl group-hover:text-orange-500 transition-colors" />
  ),
  Pinterest: (
    <FaPinterest className="text-white text-xl group-hover:text-red-600 transition-colors" />
  ),
  Telegram: (
    <BsTelegram className="text-white text-xl group-hover:text-blue-400 transition-colors" />
  ),
  Threads: (
    <BsThreads className="text-white text-xl group-hover:text-gray-800 transition-colors" />
  ),
};

const ContactInfo = ({ setAddress }) => {
  const [contactInfoData, setContactInfoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContactInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await ContactDetails();
      console.log(res);
      if (res.data?.data) {
        setContactInfoData(res.data.data);
        const addressStr = [
          res.data.data.contactInfo.state,
          res.data.data.contactInfo.city,
          res.data.data.contactInfo.pincode,
        ]
          .filter(Boolean)
          .join(", ");
        setAddress(addressStr);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      console.error("Error fetching contact info:", err);
      setError("Unable to fetch contact information. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  // Skeleton loader for contact info items
  const renderSkeletonLoader = () => (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={200} height={20} />
        </div>
      ))}
      <div className="mt-8">
        <Skeleton width={150} height={24} className="mb-6" />
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} circle width={44} height={44} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl -z-10">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-red-400/30">
          <h2 className="text-2xl md:text-3xl font-bold">
            Contact Information
          </h2>
        </div>

        {loading ? (
          renderSkeletonLoader()
        ) : error ? (
          <div className="bg-red-700/50 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-red-800/30 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-medium">{error}</p>
            </div>
            <button
              onClick={fetchContactInfo}
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : contactInfoData ? (
          <>
            <div className="space-y-6">
              {/* Phone Numbers */}
              {contactInfoData.contactInfo?.phone_1 && (
                <div className="flex items-center gap-4 group">
                  <div className="bg-red-500/20 p-3 rounded-xl group-hover:bg-red-500/30 transition-colors">
                    <FaPhone className="text-white text-xl rotate-90" />
                  </div>
                  <a
                    href={`tel:${contactInfoData.contactInfo.phone_1.replace(
                      /\D/g,
                      ""
                    )}`}
                    className="text-lg font-medium hover:underline hover:text-red-200 transition-colors"
                  >
                    {contactInfoData.contactInfo.phone_1}
                  </a>
                </div>
              )}

              {contactInfoData.contactInfo?.phone_2 && (
                <div className="flex items-center gap-4 group">
                  <div className="bg-red-500/20 p-3 rounded-xl group-hover:bg-red-500/30 transition-colors">
                    <FaPhone className="text-white text-xl rotate-90" />
                  </div>
                  <a
                    href={`tel:${contactInfoData.contactInfo.phone_2.replace(
                      /\D/g,
                      ""
                    )}`}
                    className="text-lg font-medium hover:underline hover:text-red-200 transition-colors"
                  >
                    {contactInfoData.contactInfo.phone_2}
                  </a>
                </div>
              )}

              {/* Email */}
              {contactInfoData.contactInfo?.email && (
                <div className="flex items-center gap-4 group">
                  <div className="bg-red-500/20 p-3 rounded-xl group-hover:bg-red-500/30 transition-colors">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <a
                    href={`mailto:${contactInfoData.contactInfo.email}`}
                    className="text-lg font-medium hover:underline hover:text-red-200 transition-colors"
                  >
                    {contactInfoData.contactInfo.email}
                  </a>
                </div>
              )}

              {/* Address */}
              {(contactInfoData.contactInfo?.state ||
                contactInfoData.contactInfo?.city ||
                contactInfoData.contactInfo?.pincode) && (
                <div className="flex items-start gap-4 group">
                  <div className="bg-red-500/20 p-3 rounded-xl group-hover:bg-red-500/30 transition-colors">
                    <FaMapMarkerAlt className="text-white text-xl mt-0.5" />
                  </div>
                  <address className="text-lg font-medium not-italic hover:text-red-200 transition-colors">
                    {[
                      contactInfoData.contactInfo.state,
                      contactInfoData.contactInfo.city,
                      contactInfoData.contactInfo.pincode,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </address>
                </div>
              )}
            </div>

            {/* Social Icons */}
            {contactInfoData?.socialMediaLinks?.length > 0 && (
              <>
                <div className="mt-10 mb-6 border-t border-red-400/30 pt-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {contactInfoData?.socialMediaLinks?.map((item) => (
                      <a
                        key={item?.name}
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer bg-red-500/20 hover:scale-105 hover:bg-red-500/30 p-2 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                        aria-label={item?.name}
                      >
                        {socialIcons[item?.name] || (
                          <span className="text-white text-lg">
                            {item?.name?.charAt(0)}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-red-500/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-lg mb-6">No contact information available.</p>
            <button
              onClick={fetchContactInfo}
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Refresh Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
