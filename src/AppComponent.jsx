// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import React, { Suspense, useState } from "react";

// import { Route, Routes, useLocation } from "react-router-dom";

// // import { useTranslation } from "react-i18next";
// import "./i18n.js";

// const SignUp = React.lazy(() => import("./components/Authentication/SignUp"));
// const WebView = React.lazy(() => import("./components/pages/WebView"));
// const Home = React.lazy(() => import("./components/Home/Home"));
// const MobileView = React.lazy(() => import("./components/pages/MobileView"));
// const Pricing = React.lazy(() => import("./components/Home/price/Pricing"));
// const CreatePortal = React.lazy(
//   () => import("./components/NewsPortal/CreatePortal"),
// );
// const Payment = React.lazy(
//   () => import("./components/NewsPortal/payment/Payment"),
// );
// const CreateAppOrWeb = React.lazy(
//   () => import("./components/NewsPortal/createApporWeb/CreateAppOrWeb"),
// );
// const UserPortal = React.lazy(
//   () => import("./components/NewsPortal/userPortal/UserPortal"),
// );
// const Resources = React.lazy(
//   () => import("./components/Home/Resources/Resources"),
// );
// const Blog = React.lazy(() => import("./components/Home/Blog/Blog"));
// const BlogReaderPage = React.lazy(
//   () => import("./components/Home/Blog/BlogPages/BlogReaderPage"),
// );
// const ReadMore = React.lazy(
//   () => import("./components/Home/Blog/BlogPages/ReadBlogPage/ReadMore"),
// );
// const Contact = React.lazy(() => import("./components/Home/Contact/Contact"));
// const ShippingAndDelivery = React.lazy(
//   () => import("./components/Home/ShippinAndDelivery.jsx"),
// );
// const RefundPolicy = React.lazy(
//   () => import("./components/Home/RefundPolicy.jsx"),
// );

// const PrivacyPolicy = React.lazy(
//   () => import("./components/Home/Policy/PrivacyPolicy .jsx"),
// );
// const TermsAndConditions = React.lazy(
//   () => import("./components/Home/TermsAndConditions/TermsAndConditions"),
// );
// const Login = React.lazy(() => import("./components/Authentication/Login"));
// import NavBar from "./components/NavigationBar/NavBar";
// import Footer from "./components/footer/Footer";

// import { PaymentContext } from "./context/PaymentContext";

// import { useAuth } from "./components/Authentication/auth-hook.js";
// import { AuthContext } from "./context/Auth-context";

// // import ErrorBoundary from "./utils/ErrorBoundary.jsx";
// import { BlogContext } from "./context/BlogContext.jsx";
// import CertificateForm from "./components/footer/CertificateForm.jsx";
// import DownloadCertificate from "./components/footer/DownloadCertificate.jsx";
// import PrivateRoute from "./route/PrivateRoute.jsx";
// import B from "./components/Home/Blog/B.jsx";
// import { PreviewProvider } from "./context/PreViewContext.jsx";
// import ShortGenerator from "./components/Home/shortsAI/pages/ShortGenerator.jsx";
// import AnalyticsTracker from "./components/AnalyticsTracker.jsx";

// import Invoice from "./components/NewsPortal/createPortal/Invoice.jsx";
// import AppDemoLanding from "./components/pages/AppdemoLanding.jsx";
// import WebDemoLanding from "./components/pages/WebDemoLanding.jsx";
// import PreBooking from "./components/prebooking/PreBooking.jsx";
// import { safeLocalStorage } from "./utils/localStorage.js";

// export default function AppContent() {
//   // translation

//   // const [emaiData,]
//   const [email, setEmail] = useState("");
//   const { login, token, logout, userId, isLogin } = useAuth();

//   // for payment
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [requestStatus, setRequesteStatus] = useState();

//   const [portalRequestDetail, setPortalRequestDetails] = useState({
//     customer_id: "",
//     package_id: "",
//     purchaseId: "",
//     payable: "00",
//     price: "00",
//     discount: "00",
//     validity: "",
//     package_name: "",
//     region: "0",
//     fixedValidity: "",
//     domainOwned: false,
//   });
//   const [paymentData, setPaymentData] = useState({
//     paymentMethod: "",
//     cardNumber: "",
//     expiryDate: "",
//     Cvv: "",
//     ZIPCode: "",
//     saveCard: "",
//     rememberMe: "",
//     billingAddress: "",
//     aptNumber: "",
//     state: "",
//     zip: "",
//   });

//   const [blog, setBlog] = useState(
//     // JSON.parse(localStorage.getItem("blog"))
//     JSON.parse(safeLocalStorage.get("blog"))
//       ? JSON.parse(safeLocalStorage.get("blog"))
//       : // ? JSON.parse(localStorage.getItem("blog"))
//         {
//           blog_category: "",
//           blog_category_id: "",
//           blog_slug: "",
//           blog_content: "",
//           blog_image: "",
//           blog_tags: "",
//         },
//   );
//   const [category_id, setCategoryId] = useState("");
//   const [blog_category, setCategory] = useState();
//   const [blogS, setBlogs] = useState([]);

//   // all urls here when navbar hidden
//   const location = useLocation();

//   const hideNavBarAndFooterRoutes =
//     location.pathname === "/login" ||
//     location.pathname === "/signup" ||
//     location.pathname.startsWith("/blog") ||
//     location.pathname.startsWith("/b") ||
//     location.pathname.startsWith("/portal") ||
//     location.pathname.startsWith("/dashboard") ||
//     location.pathname.startsWith("/pre-booking");

//   return (
//     <div className="flex flex-col ">
//       <ToastContainer position="top-center" autoClose={3000} />
//       {/* {!hideNavBarAndFooterRoutes.includes(location.pathname) && <NavBar />} */}
//       {!hideNavBarAndFooterRoutes && <NavBar />}
//       <main className="flex-grow">
//         <Suspense
//           fallback={
//             <div className="fixed inset-0 flex items-center justify-center">
//               <AiOutlineLoading3Quarters className="animate-spin w-16 h-16 text-red-500" />
//             </div>
//           }
//         >
//           <AuthContext.Provider
//             value={{
//               // setUserId,
//               token: token,
//               userId: userId,
//               login: login,
//               logout: logout,
//               requestStatus,
//               setRequesteStatus,
//               isLogin,
//             }}
//           >
//             <PaymentContext.Provider
//               value={{
//                 paymentStatus,
//                 setPaymentStatus,
//                 portalRequestDetail,
//                 setPortalRequestDetails,
//                 paymentData,
//                 setPaymentData,
//                 email,
//                 setEmail,
//               }}
//             >
//               <BlogContext.Provider
//                 value={{
//                   blog,
//                   setBlog,
//                   category_id,
//                   setCategoryId,
//                   blog_category,
//                   setCategory,
//                   blogS,
//                   setBlogs,
//                 }}
//               >
//                 {/* {open && location.pathname != "/pre-booking" && (
//                   <EventConfirm
//                     close={() => {
//                       localStorage.setItem("eventConfirmShown", "true");
//                       setOpen(false);
//                     }}
//                   />
//                 )} */}
//                 <PreviewProvider>
//                   <AnalyticsTracker />
//                   <Routes>
//                     <Route path="/" element={<Home />} />
//                     {/* <Route path="/*" element={<Home />} /> */}
//                     {/* <PrivateRoute> */}
//                     <Route
//                       path="/pricing-in-my-patrakar"
//                       element={<Pricing />}
//                     />
//                     {/* </PrivateRoute>{" "} */}
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/signup" element={<SignUp />} />
//                     <Route
//                       path="/product/app-demo"
//                       element={<AppDemoLanding />}
//                     />
//                     <Route
//                       path="/product/web-demo"
//                       element={<WebDemoLanding />}
//                     />
//                     <Route path="/pre-booking" element={<PreBooking />} />
//                     <Route
//                       path="/try-mypatrakar-ai"
//                       element={<ShortGenerator />}
//                     />
//                     <Route
//                       path="/dashboard"
//                       element={
//                         <PrivateRoute>
//                           <UserPortal />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="/product/website"
//                       element={
//                         // <PrivateRoute>
//                         <WebView />
//                         //  </PrivateRoute>
//                       }
//                     />
//                     <Route path="/product/app" element={<MobileView />} />
//                     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//                     /
//                     <Route
//                       path="/cancellation-and-refund-policy"
//                       element={<RefundPolicy />}
//                     />
//                     <Route path="/register" element={<CertificateForm />} />
//                     <Route
//                       path="/download-certificate"
//                       element={<DownloadCertificate />}
//                     />
//                     /
//                     <Route
//                       path="/shipping-and-delivery"
//                       element={<ShippingAndDelivery />}
//                     />
//                     <Route
//                       path="/terms-and-conditions"
//                       element={<TermsAndConditions />}
//                     />
//                     <Route
//                       path="/resources-in-my-patrakar"
//                       element={<Resources />}
//                     />
//                     {/* /portal/payment-reciept */}
//                     <Route
//                       path="/portal/payment/:package_id/:purchase_id/:user_id"
//                       element={<Payment />}
//                     />
//                     {/* if user login then route to portal otherwise route to login */}
//                     {/* <Route
//                     path="/portal"
//                     element={data ? <UserPortal /> : <Navigate to="/login" />}
//                   /> */}
//                     <Route
//                       path="/portal"
//                       element={
//                         <PrivateRoute>
//                           <UserPortal />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="/portal/payment-reciept"
//                       element={
//                         <PrivateRoute>
//                           {/* <PaymentReceiptScreen /> */}
//                           <Invoice />
//                         </PrivateRoute>
//                       }
//                     />
//                     {/* <Route
//                   path="/portal/createApporWeb"
//                   element={data ? <CreateAppOrWeb /> : <Navigate to="/login" />}
//                 /> */}
//                     <Route
//                       path="/portal/createApporWeb"
//                       element={
//                         <PrivateRoute>
//                           <CreateAppOrWeb />
//                         </PrivateRoute>
//                       }
//                     />
//                     <Route
//                       path="/portal/createportal"
//                       element={
//                         <PrivateRoute>
//                           <CreatePortal />
//                         </PrivateRoute>
//                       }
//                     />
//                     {/* <Route
//                   path="/portal/createportal"
//                   element={data ? <CreatePortal /> : <Navigate to="/login" />}
//                 /> */}
//                     {/* <Route path={"/blog"} element={<Blog />} /> */}
//                     <Route path={"/blog-page"} element={<B />} />
//                     <Route path="/blog/:categories" element={<Blog />} />
//                     {/* <Route path="/blog/category/:category/:blog-slug" element={<Blog />} /> */}
//                     <Route path={`/blog/:categories`} element={<ReadMore />} />
//                     <Route
//                       path={`/blog/category/:category/:blog-slug`}
//                       element={<ReadMore />}
//                     />
//                     <Route
//                       path={`/blog/:category/:blog-slug`}
//                       element={<ReadMore />}
//                     />
//                     <Route
//                       path="/blog/tag/:tagName"
//                       element={<BlogReaderPage />}
//                     />
//                   </Routes>
//                 </PreviewProvider>
//               </BlogContext.Provider>
//             </PaymentContext.Provider>
//           </AuthContext.Provider>
//         </Suspense>
//       </main>
//       {!hideNavBarAndFooterRoutes && <Footer />}
//       {/* {!hideNavBarAndFooterRoutes.includes(location.pathname) && <Footer />} */}
//     </div>
//   );
// }



import React, { Suspense, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./i18n.js";

// ✅ Lazy imports (same as yours)
const SignUp = React.lazy(() => import("./components/Authentication/SignUp"));
const Login = React.lazy(() => import("./components/Authentication/Login"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Pricing = React.lazy(() => import("./components/Home/price/Pricing"));
const WebView = React.lazy(() => import("./components/pages/WebView"));
const MobileView = React.lazy(() => import("./components/pages/MobileView"));
const AppDemoLanding = React.lazy(() => import("./components/pages/AppdemoLanding.jsx"));
const WebDemoLanding = React.lazy(() => import("./components/pages/WebDemoLanding.jsx"));
const PreBooking = React.lazy(() => import("./components/prebooking/PreBooking.jsx"));
const ShortGenerator = React.lazy(() => import("./components/Home/shortsAI/pages/ShortGenerator.jsx"));

const UserPortal = React.lazy(() =>
  import("./components/NewsPortal/userPortal/UserPortal")
);
const CreatePortal = React.lazy(() =>
  import("./components/NewsPortal/CreatePortal")
);
const CreateAppOrWeb = React.lazy(() =>
  import("./components/NewsPortal/createApporWeb/CreateAppOrWeb")
);
const Payment = React.lazy(() =>
  import("./components/NewsPortal/payment/Payment")
);
const Invoice = React.lazy(() =>
  import("./components/NewsPortal/createPortal/Invoice.jsx")
);

const Blog = React.lazy(() => import("./components/Home/Blog/Blog"));
const ReadMore = React.lazy(() =>
  import("./components/Home/Blog/BlogPages/ReadBlogPage/ReadMore")
);
const BlogReaderPage = React.lazy(() =>
  import("./components/Home/Blog/BlogPages/BlogReaderPage")
);
const B = React.lazy(() => import("./components/Home/Blog/B.jsx"));

const Resources = React.lazy(() =>
  import("./components/Home/Resources/Resources")
);
const Contact = React.lazy(() =>
  import("./components/Home/Contact/Contact")
);
const PrivacyPolicy = React.lazy(() =>
  import("./components/Home/Policy/PrivacyPolicy .jsx")
);
const RefundPolicy = React.lazy(() =>
  import("./components/Home/RefundPolicy.jsx")
);
const ShippingAndDelivery = React.lazy(() =>
  import("./components/Home/ShippinAndDelivery.jsx")
);
const TermsAndConditions = React.lazy(() =>
  import("./components/Home/TermsAndConditions/TermsAndConditions")
);

import NavBar from "./components/NavigationBar/NavBar";
import Footer from "./components/footer/Footer";
import PrivateRoute from "./route/PrivateRoute.jsx";
import AnalyticsTracker from "./components/AnalyticsTracker.jsx";

import { useAuth } from "./components/Authentication/auth-hook.js";
import { AuthContext } from "./context/Auth-context";
import { PaymentContext } from "./context/PaymentContext";
import { BlogContext } from "./context/BlogContext.jsx";
import { PreviewProvider } from "./context/PreViewContext.jsx";
import { safeLocalStorage } from "./utils/localStorage.js";

/* 🔹 Loader */
function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin w-14 h-14 text-red-500" />
    </div>
  );
}

export default function AppContent() {
  const location = useLocation();
  const { login, token, logout, userId, isLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [requestStatus, setRequesteStatus] = useState();

  const [portalRequestDetail, setPortalRequestDetails] = useState({
    customer_id: "",
    package_id: "",
    purchaseId: "",
    payable: "00",
    price: "00",
    discount: "00",
    validity: "",
    package_name: "",
    region: "0",
    fixedValidity: "",
    domainOwned: false,
  });

  const [paymentData, setPaymentData] = useState({
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    Cvv: "",
    ZIPCode: "",
  });

  const [blog, setBlog] = useState(
    JSON.parse(safeLocalStorage.get("blog")) || {
      blog_category: "",
      blog_slug: "",
      blog_content: "",
    }
  );
  const [category_id, setCategoryId] = useState("");
  const [blog_category, setCategory] = useState();
  const [blogS, setBlogs] = useState([]);

  const hideNavAndFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/blog") ||
    location.pathname.startsWith("/portal") ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/pre-booking");

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} />

      {!hideNavAndFooter && <NavBar />}

      <main className="flex-grow">
        {/* ✅ Providers OUTSIDE Suspense */}
        <AuthContext.Provider
          value={{ token, userId, login, logout, requestStatus, setRequesteStatus, isLogin }}
        >
          <PaymentContext.Provider
            value={{
              paymentStatus,
              setPaymentStatus,
              portalRequestDetail,
              setPortalRequestDetails,
              paymentData,
              setPaymentData,
              email,
              setEmail,
            }}
          >
            <BlogContext.Provider
              value={{
                blog,
                setBlog,
                category_id,
                setCategoryId,
                blog_category,
                setCategory,
                blogS,
                setBlogs,
              }}
            >
              <PreviewProvider>
                <AnalyticsTracker />

                {/* ✅ Suspense ONLY for routes */}
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing-in-my-patrakar" element={<Pricing />} />

                    <Route path="/product/app-demo" element={<AppDemoLanding />} />
                    <Route path="/product/web-demo" element={<WebDemoLanding />} />
                    <Route path="/product/app" element={<MobileView />} />
                    <Route path="/product/website" element={<WebView />} />

                    <Route path="/pre-booking" element={<PreBooking />} />
                    <Route path="/try-mypatrakar-ai" element={<ShortGenerator />} />

                    <Route
                      path="/dashboard"
                      element={
                        <PrivateRoute>
                          <UserPortal />
                        </PrivateRoute>
                      }
                    />

                    <Route
                      path="/portal"
                      element={
                        <PrivateRoute>
                          <UserPortal />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/portal/createportal"
                      element={
                        <PrivateRoute>
                          <CreatePortal />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/portal/createApporWeb"
                      element={
                        <PrivateRoute>
                          <CreateAppOrWeb />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/portal/payment/:package_id/:purchase_id/:user_id"
                      element={<Payment />}
                    />
                    <Route
                      path="/portal/payment-reciept"
                      element={
                        <PrivateRoute>
                          <Invoice />
                        </PrivateRoute>
                      }
                    />

                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/cancellation-and-refund-policy" element={<RefundPolicy />} />
                    <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/resources-in-my-patrakar" element={<Resources />} />

                    <Route path="/blog-page" element={<B />} />
                    <Route path="/blog/:categories" element={<Blog />} />
                    <Route path="/blog/tag/:tagName" element={<BlogReaderPage />} />
                    <Route path="/blog/:category/:blog-slug" element={<ReadMore />} />
                  </Routes>
                </Suspense>
              </PreviewProvider>
            </BlogContext.Provider>
          </PaymentContext.Provider>
        </AuthContext.Provider>
      </main>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}
