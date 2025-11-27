import React, { Suspense, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
  useParams,
} from "react-router-dom";
// import { useTranslation } from "react-i18next";
import "./i18n.js";

const SignUp = React.lazy(() => import("./components/Authentication/SignUp"));
const WebView = React.lazy(() => import("./components/pages/WebView"));
const Home = React.lazy(() => import("./components/Home/Home"));
const MobileView = React.lazy(() => import("./components/pages/MobileView"));
const Pricing = React.lazy(() => import("./components/Home/price/Pricing"));
const CreatePortal = React.lazy(() =>
  import("./components/NewsPortal/CreatePortal")
);
const Payment = React.lazy(() =>
  import("./components/NewsPortal/payment/Payment")
);
const CreateAppOrWeb = React.lazy(() =>
  import("./components/NewsPortal/createApporWeb/CreateAppOrWeb")
);
const UserPortal = React.lazy(() =>
  import("./components/NewsPortal/userPortal/UserPortal")
);
const Resources = React.lazy(() =>
  import("./components/Home/Resources/Resources")
);
const Blog = React.lazy(() => import("./components/Home/Blog/Blog"));
const BlogReaderPage = React.lazy(() =>
  import("./components/Home/Blog/BlogPages/BlogReaderPage")
);
const ReadMore = React.lazy(() =>
  import("./components/Home/Blog/BlogPages/ReadBlogPage/ReadMore")
);
const Contact = React.lazy(() => import("./components/Home/Contact/Contact"));
const ShippingAndDelivery = React.lazy(() =>
  import("./components/Home/ShippinAndDelivery.jsx")
);
const RefundPolicy = React.lazy(() =>
  import("./components/Home/RefundPolicy.jsx")
);

// "{"userId":"MPCU250107017","token":"eyJpdiI6ImsyZUZpTFYyUzZSckdoTlphOGpyeVE9PSIsInZhbHVlIjoielB4TWowUkhGZzV4RDlIMlJiMVZGZz09IiwibWFjIjoiYzAzYmZjNjUwODMxODI5MTQ4YzFmODI5MjZiMzA4Mzg1OTFlMmMzNjM5MjhjYmNmZDM3ODU2MDY0MjZlYTdjNCIsInRhZyI6IiJ9","expiration":"2025-04-19T13:51:34.850Z"}"

const PrivacyPolicy = React.lazy(() =>
  import("./components/Home/Policy/PrivacyPolicy .jsx")
);
const TermsAndConditions = React.lazy(() =>
  import("./components/Home/TermsAndConditions/TermsAndConditions")
);
const Login = React.lazy(() => import("./components/Authentication/Login"));
import NavBar from "./components/NavigationBar/NavBar";
import Footer from "./components/footer/Footer";

import { PaymentContext } from "./context/PaymentContext";

import { useAuth } from "./components/Authentication/auth-hook.js";
import { AuthContext } from "./context/Auth-context";

// import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import { BlogContext } from "./context/BlogContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import CertificateForm from "./components/footer/CertificateForm.jsx";
import DownloadCertificate from "./components/footer/DownloadCertificate.jsx";
import PrivateRoute from "./route/PrivateRoute.jsx";
import B from "./components/Home/Blog/B.jsx";
import { PreviewProvider } from "./context/PreViewContext.jsx";
import ShortGenerator from "./components/Home/shortsAI/pages/ShortGenerator.jsx";

// import Table from "./components/NewsPortal/AdminDashbord/shared/Table.jsx";

function AppContent() {
  // translation

  // const [emaiData,]
  const [email, setEmail] = useState("");
  const { login, token, logout, userId, isLogin } = useAuth();

  // for payment
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [requestStatus, setRequesteStatus] = useState();

  // useEffect(() => {
  //   const fetchQueryData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://mypatrakar.com/portal/payment?$query"
  //       );
  //       const jsonData = await response.json();
  //       console.log("Fetched Data:", jsonData);
  //     } catch (error) {
  //       console.error("Error fetching query data:", error);
  //     }
  //   };

  //   fetchQueryData();
  // }, []);
  // console.log()
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
  });
  const [paymentData, setPaymentData] = useState({
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    Cvv: "",
    ZIPCode: "",
    saveCard: "",
    rememberMe: "",
    billingAddress: "",
    aptNumber: "",
    state: "",
    zip: "",
  });
  // for blog
  const [blog, setBlog] = useState({
    blog_category: "",
    blog_category_id: "",
    blog_slug: "",
    blog_content: "",
    blog_image: "",
    blog_tags: "",
  });
  const [category_id, setCategoryId] = useState("");
  const [blog_category, setCategory] = useState();
  const [blogS, setBlogs] = useState([]);

  // all urls here when navbar hidden
  const location = useLocation();

  const hideNavBarAndFooterRoutes =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
 
    location.pathname.startsWith("/blog") ||
    location.pathname.startsWith("/b") ||
    location.pathname.startsWith("/portal") ||
    location.pathname.startsWith("/dashboard");
  const data = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="flex flex-col ">
      <ToastContainer position="top-center" autoClose={3000} />
      {/* {!hideNavBarAndFooterRoutes.includes(location.pathname) && <NavBar />} */}
      {!hideNavBarAndFooterRoutes && <NavBar />}
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="fixed inset-0 flex items-center justify-center">
              <AiOutlineLoading3Quarters className="animate-spin w-16 h-16 text-red-500" />
            </div>
          }
        >
          <AuthContext.Provider
            value={{
              // setUserId,
              token: token,
              userId: userId,
              login: login,
              logout: logout,
              requestStatus,
              setRequesteStatus,
              isLogin,
            }}
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
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/*" element={<Home />} /> */}
                    {/* <PrivateRoute> */}
                    <Route
                      path="/pricing-in-my-patrakar"
                      element={<Pricing />}
                    />
                    {/* </PrivateRoute>{" "} */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
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
                      path="/product/website"
                      element={
                        // <PrivateRoute>
                        <WebView />
                        //  </PrivateRoute>
                      }
                    />
                    <Route path="/product/app" element={<MobileView />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    /
                    <Route
                      path="/cancellation-and-refund-policy"
                      element={<RefundPolicy />}
                    />
                    <Route path="/register" element={<CertificateForm />} />
                    <Route
                      path="/download-certificate"
                      element={<DownloadCertificate />}
                    />
                    /
                    <Route
                      path="/shipping-and-delivery"
                      element={<ShippingAndDelivery />}
                    />
                    <Route
                      path="/terms-and-conditions"
                      element={<TermsAndConditions />}
                    />
                    <Route
                      path="/resources-in-my-patrakar"
                      element={<Resources />}
                    />
                    <Route
                      path="/portal/payment/:package_id/:purchase_id/:user_id"
                      element={<Payment />}
                    />
                    {/* if user login then route to portal otherwise route to login */}
                    {/* <Route
                    path="/portal"
                    element={data ? <UserPortal /> : <Navigate to="/login" />}
                  /> */}
                    <Route
                      path="/portal"
                      element={
                        <PrivateRoute>
                          <UserPortal />
                        </PrivateRoute>
                      }
                    />
                    {/* <Route
                  path="/portal/createApporWeb"
                  element={data ? <CreateAppOrWeb /> : <Navigate to="/login" />}
                /> */}
                    <Route
                      path="/portal/createApporWeb"
                      element={
                        <PrivateRoute>
                          <CreateAppOrWeb />
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
                    {/* <Route
                  path="/portal/createportal"
                  element={data ? <CreatePortal /> : <Navigate to="/login" />}
                /> */}
                    {/* <Route path={"/blog"} element={<Blog />} /> */}
                    <Route path={"/blog-page"} element={<B />} />
                    <Route path="/blog/:categories" element={<Blog />} />
                    {/* <Route path="/blog/category/:category/:blog-slug" element={<Blog />} /> */}
                    <Route path={`/blog/:categories`} element={<ReadMore />} />
                    <Route
                      path={`/blog/category/:category/:blog-slug`}
                      element={<ReadMore />}
                    />
                    <Route
                      path={`/blog/:category/:blog-slug`}
                      element={<ReadMore />}
                    />
                    <Route
                      path="/blog/tag/:tagName"
                      element={<BlogReaderPage />}
                    />
                  </Routes>
                </PreviewProvider>
              </BlogContext.Provider>
            </PaymentContext.Provider>
          </AuthContext.Provider>
        </Suspense>
      </main>
      {!hideNavBarAndFooterRoutes && <Footer />}
      {/* {!hideNavBarAndFooterRoutes.includes(location.pathname) && <Footer />} */}
    </div>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  const style = {
    fontFamily: "Times New Roman",
  };

  return (
    <Router>
      <ScrollToTop />
      {/* <ErrorBoundary> */}
      <LanguageProvider>
        <div style={style}>
          <AppContent />
        </div>
      </LanguageProvider>
      {/* </ErrorBoundary> */}
    </Router>
  );
}
export default App;
