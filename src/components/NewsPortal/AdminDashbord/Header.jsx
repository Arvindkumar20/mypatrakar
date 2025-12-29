// import React, { useEffect, useRef, useState } from "react";
// import MyPatrakarlog from "../../../assets/MyPatrakarLogo.png";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { CustomerProfile, Logout } from "../../../api/index.js";
// import { useAuthContext } from "../../../context/AuthContext.jsx";
// import { Link, useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdLocalPhone } from "react-icons/md";

// import { MdEmail } from "react-icons/md";

// import { FaUserCircle } from "react-icons/fa";

// // import { MdOutlineMailOutline } from "react-icons/md";
// export default function Header({ close, setClose }) {
//   const { logout } = useAuthContext();
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     wallet: "",
//   });
//   const dropdownRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const getProfile = async () => {
//     try {
//       const userId = JSON.parse(sessionStorage.getItem("userData"));
//       const res = await CustomerProfile({ customer_id: userId?.userId });
//       // console.log(res)
//       setUser(res.data.response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getProfile();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const customer_id = JSON.parse(sessionStorage.getItem("userData"));
//       const res = await Logout({ customer_id: customer_id.userId });
//       if (res.data.status_code === 200) {
//         logout();
//         navigate("/login");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleClose = () => {
//     setClose(!close);
//   };

//   return (
//     <div className="border-b shadow-sm bg-white sticky top-0 z-50">
//       <nav className="flex items-center justify-between px-4 py-3">
//         {/* Mobile Hamburger */}
//         <button className="md:hidden text-2xl" onClick={handleClose}>
//           <GiHamburgerMenu />
//         </button>

//         {/* Logo */}
//        <Link to={"/"}>

//         <img
//           src={MyPatrakarlog}
//           alt="My Patrakar logo"
//           className="w-40 md:w-48 cursor-pointer"
//           loading="lazy"
//           onClick={handleClose}
//         />
//        </Link>

//         {/* Profile Avatar & Dropdown */}
//         <div className="relative">
//           <div
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="cursor-pointer"
//           >
//             {/* <img
//               src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"
//               alt="User"
//               className="w-full h-full object-cover"
//               loading="lazy"
//             /> */}

//             <div className="flex items-center justify-start text-md font-bold text-gray-700 gap-1 font-sans">
//               <FaUserCircle className="text-[#023788] w-4 h-4" />
//               {user.name || "User Name"}
//               {/* </div> */}
//             </div>
//           </div>

//           {dropdownOpen && (
//             <div
//               ref={dropdownRef}
//               className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg p-5 z-50 font-sans "
//             >
//               {/* User Info */}
//               <div className="flex flex-col gap-5">
//                 {/* Name */}
//                 <div className="flex items-center justify-start gap-3  font-bold text-gray-900">
//                   <FaUserCircle className="text-[#023788] text-lg" />
//                   {user.name || "Ankit Sonkar"}
//                 </div>

//                 {/* Phone */}
//                 <div className="flex items-center justify-start gap-3  text-gray-700">
//                   <MdLocalPhone className="text-[#023788] text-xl font-semibold " />
//                   {user.mobile || "9170446729"}
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-center justify-start gap-3  text-gray-700">
//                   <MdEmail className="text-[#023788] text-xl" />
//                   {user.email || "ankitsonkar.work@gmail.com"}
//                 </div>
//               </div>

//               {/* Divider */}
//               <hr className="my-4 border-gray-200" />

//               {/* Logout */}
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-center text-red-600 hover:text-red-700 text-md font-semibold"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import MyPatrakarlog from "../../../assets/MyPatrakarLogo.png";
import { CustomerProfile, Logout } from "../../../api/index.js";
import { useAuthContext } from "../../../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import LogoutModal from "./LogoutModal.jsx";

export default function Header({ close, setClose }) {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getProfile = async () => {
    try {
      const userId = JSON.parse(sessionStorage.getItem("userData"));
      const res = await CustomerProfile({ customer_id: userId?.userId });
      setUser(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const finalLogout = async () => {
    try {
      const customer_id = JSON.parse(sessionStorage.getItem("userData"));
      const res = await Logout({ customer_id: customer_id.userId });
      if (res.data.status_code === 200) {
        logout();
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setModalOpen(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="border-b shadow-sm bg-white sticky top-0 z-50">
        <nav className="flex items-center justify-between px-4 py-3">
          <button
            className="md:hidden text-2xl"
            onClick={() => setClose(!close)}
          >
            <GiHamburgerMenu />
          </button>

          <Link to={"/"}>
            <img
              src={MyPatrakarlog}
              alt="My Patrakar logo"
              className="w-40 md:w-48 cursor-pointer"
              loading="lazy"
              onClick={() => setClose(false)}
            />
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-1 text-md font-bold text-gray-700">
                <FaUserCircle className="text-[#023788] w-4 h-4" />
                {user.name || "User Name"}
              </div>
            </div>

            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg p-5 z-50"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 font-bold text-gray-900">
                    <FaUserCircle className="text-[#023788] text-lg" />
                    {user.name || "User"}
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <MdLocalPhone className="text-[#023788] text-xl" />
                    {user.mobile || "---"}
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <MdEmail className="text-[#023788] text-xl" />
                    {user.email || "---"}
                  </div>
                </div>

                <hr className="my-4 border-gray-200" />

                <button
                  onClick={() => setModalOpen(true)} // OPEN POPUP
                  className="w-full text-center text-red-600 hover:text-red-700 text-md font-semibold"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Logout Modal */}
      {modalOpen && (
        <LogoutModal
          onCancel={() => setModalOpen(false)}
          onConfirm={finalLogout}
        />
      )}
    </>
  );
}
