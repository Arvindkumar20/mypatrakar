// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FiDownload, FiCheckCircle, FiXCircle, FiInfo } from "react-icons/fi";
// import { ApplyCoupon, DecryptString, getPurchaseDetails } from "../../../api";
// import PaymentPage from "./PaymentPage";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

// export default function OrderSummary() {
//   const { package_id, purchase_id, user_id } = useParams();
//   console.log(package_id);
//   const [couponCode, setCouponCode] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [couponLoading, setCouponLoading] = useState(false);
//   const [couponApplied, setCouponApplied] = useState(false);
//   const [ids, setIds] = useState({
//     package_id: "",
//     purchase_id: "",
//     user_id: "",
//   });
//   const [packageDetail, setPackageDetail] = useState(null);

//   useEffect(() => {
//     const decryptParams = async () => {
//       try {
//         setLoading(true);
//         const [pkg, pur, usr] = await Promise.all([
//           DecryptString(package_id),
//           DecryptString(purchase_id),
//           DecryptString(user_id),
//         ]);
//         setIds({
//           package_id: pkg.data.response,
//           purchase_id: pur.data.response,
//           user_id: usr.data.response,
//         });
//       } catch (err) {
//         console.error("Error decrypting IDs:", err);
//         setError("Invalid URL or access error.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     decryptParams();
//   }, [package_id, purchase_id, user_id]);
//   console.log(ids);
//   useEffect(() => {
//     const fetchPackage = async () => {
//       try {
//         setLoading(true);
//         const purchaseId = ids.purchase_id.includes(":")
//           ? ids.purchase_id.replace(":", "")
//           : ids.purchase_id;

//         const res = await getPurchaseDetails(purchaseId);
//         console.log(res);
//         if (res.data?.data) {
//           setPackageDetail(res.data.data);
//         } else {
//           setError("Invalid response from server.");
//         }
//       } catch (err) {
//         console.error("Failed to fetch package:", err);
//         setError("Unable to load package details. Try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (ids.package_id && ids.purchase_id) fetchPackage();
//   }, [ids.package_id, ids.purchase_id, couponApplied]);

//   const handleCouponChange = (e) => {
//     setCouponCode(e.target.value.trim());
//     setError("");
//     setSuccess("");
//   };

//   const handleCouponSubmit = async (e) => {
//     e.preventDefault();
//     if (!couponCode) return setError("Enter a valid coupon code.");

//     const payload = {
//       purchase_id: ids.purchase_id,
//       customer_id: ids.user_id,
//       coupon_code: couponCode,
//     };

//     try {
//       setCouponLoading(true);
//       const res = await ApplyCoupon(payload);

//       // if (res.data?.response) {
//       //   setPackageDetail((prev) => ({
//       //     ...prev,
//       //     discount_amount: res.data.response.discount,
//       //     payable_amount: res.data.response.payable,
//       //     gst_amount: res.data.response.gst_amt,
//       //   }));
//       // }

//       setSuccess("Coupon applied successfully!");
//       setCouponApplied(true);
//       setError("");
//     } catch (err) {
//       const msg = err?.response?.data;
//       if (msg?.status_message === "Validation Failed") {
//         setError(msg?.errors?.coupon_code?.[0] || "Invalid coupon code.");
//       } else {
//         setError(msg?.status_message || "Coupon application failed.");
//       }
//       setSuccess("");
//     } finally {
//       setCouponLoading(false);
//     }
//   };

//   const PriceRow = ({ label, value, isDiscount = false, isTotal = false }) => {
//     const currency = packageDetail?.plan_details?.region == "0" ? "₹" : "$";
//     return (
//       <div
//         className={`flex justify-between py-2 ${
//           isTotal ? "border-t font-semibold pt-3 mt-2 border-gray-300" : ""
//         }`}
//       >
//         <span className={`${isDiscount ? "text-green-600" : "text-gray-600"}`}>
//           {label}
//         </span>
//         <span
//           className={`${isDiscount ? "text-green-600" : "text-gray-800"} ${
//             isTotal ? "text-lg font-bold" : ""
//           }`}
//         >
//           {Number(value) > 100 && currency}
//           {value}
//           {Number(value) <= 100 && <span>%</span>}
//         </span>
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[200px]">
//         <AiOutlineLoading3Quarters className="animate-spin w-10 h-10 text-blue-500" />
//       </div>
//     );
//   }

//   if (error && !packageDetail) {
//     return (
//       <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow text-center">
//         <FiXCircle className="text-red-500 text-4xl mx-auto mb-4" />
//         <h3 className="text-xl font-bold text-gray-800">
//           Oops! Something went wrong
//         </h3>
//         <p className="text-gray-600 mt-2">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden my-8">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
//         <h1 className="text-2xl font-bold">Order Summary</h1>
//         <p className="text-sm opacity-90">Review and complete your purchase</p>
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-6">
//         {/* Package Info */}
//         {packageDetail && (
//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <h3 className="text-blue-800 font-semibold mb-1">Package</h3>
//             <p className="text-lg font-bold">
//               {packageDetail?.plan_details?.package_name}
//             </p>
//           </div>
//         )}

//         {/* Coupon Section */}
//         <div>
//           <h3 className="text-gray-700 font-semibold mb-2">Have a Coupon?</h3>
//           <form onSubmit={handleCouponSubmit} className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Enter coupon"
//               value={couponCode}
//               onChange={handleCouponChange}
//               disabled={couponLoading}
//               className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
//             />
//             <button
//               type="submit"
//               disabled={couponLoading}
//               className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
//             >
//               {couponLoading ? (
//                 <AiOutlineLoading3Quarters className="animate-spin" />
//               ) : (
//                 <>
//                   <FiDownload />
//                   Apply
//                 </>
//               )}
//             </button>
//           </form>
//           {error && (
//             <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
//               <FiXCircle /> {error}
//             </p>
//           )}
//           {success && (
//             <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
//               <FiCheckCircle /> {success}
//             </p>
//           )}
//         </div>

//         {/* Price Details */}
//         {packageDetail && (
//           <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
//             <h3 className="text-gray-700 font-semibold mb-3">Price Details</h3>
//             <PriceRow
//               label="Price"
//               value={packageDetail?.plan_details?.payable}
//             />
//             {packageDetail.discount_amount > 0 && (
//               <PriceRow
//                 label="Discount"
//                 value={packageDetail?.discount_amount}
//                 isDiscount
//               />
//             )}
//             <PriceRow label="Tax" value={packageDetail?.gst_amount ?? "0"} />
//             <PriceRow
//               label="Total"
//               value={packageDetail?.payable_amount}
//               isTotal
//             />
//           </div>
//         )}

//         {/* Payment */}
//         {packageDetail && (
//           <div className="">
//             <PaymentPage
//               amount={packageDetail.payable_amount}
//               setError={setError}
//               error={error}
//               purchaseId={ids.purchase_id}
//               region={packageDetail?.plan_details?.region}
//               user_id={ids.user_id}
//             />
//             <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg flex items-start gap-2">
//               <FiInfo className="mt-0.5" />
//               <p>
//                 By proceeding, you agree to our{" "}
//                 <a
//                   href="/terms-and-conditions"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Terms of Service
//                 </a>{" "}
//                 and{" "}
//                 <a
//                   href="/privacy-policy"
//                   className="text-blue-600 hover:underline"
//                 >
//                   Privacy Policy
//                 </a>
//                 . Your subscription will renew unless canceled.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {

  FiXCircle,
  FiInfo,
 
} from "react-icons/fi";
import { ApplyCoupon, DecryptString, getPurchaseDetails } from "../../../api";
import PaymentPage from "./PaymentPage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ApplyCouponHere from "./ApplyCouponHere";

export default function OrderSummary() {
  const { package_id, purchase_id, user_id } = useParams();
  const [couponCode, setCouponCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [ids, setIds] = useState({
    package_id: "",
    purchase_id: "",
    user_id: "",
  });
  const [packageDetail, setPackageDetail] = useState(null);
   console.log(packageDetail)
  useEffect(() => {
    const decryptParams = async () => {
      try {
        setLoading(true);
        const [pkg, pur, usr] = await Promise.all([
          DecryptString(package_id),
          DecryptString(purchase_id),
          DecryptString(user_id),
        ]);
        setIds({
          package_id: pkg.data.response,
          purchase_id: pur.data.response,
          user_id: usr.data.response,
        });
      } catch (err) {
        console.error("Error decrypting IDs:", err);
        setError("Invalid URL or access error.");
      } finally {
        setLoading(false);
      }
    };
    decryptParams();
  }, [package_id, purchase_id, user_id]);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        setLoading(true);
        const purchaseId = ids.purchase_id.includes(":")
          ? ids.purchase_id.replace(":", "")
          : ids.purchase_id;

        const res = await getPurchaseDetails(purchaseId);
        if (res.data?.data) {
          setPackageDetail(res.data.data);
        } else {
          setError("Invalid response from server.");
        }
      } catch (err) {
        console.error("Failed to fetch package:", err);
        setError("Unable to load package details. Try again later.");
      } finally {
        setLoading(false);
      }
    };
    if (ids.package_id && ids.purchase_id) fetchPackage();
  }, [ids.package_id, ids.purchase_id, couponApplied]);

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value.trim());
    setError("");
    setSuccess("");
  };

  const handleCouponSubmit = async (e) => {
    e.preventDefault();
    if (!couponCode) return setError("Enter a valid coupon code.");

    const payload = {
      purchase_id: ids.purchase_id,
      customer_id: ids.user_id,
      coupon_code: couponCode,
    };

    try {
      setCouponLoading(true);
      const res = await ApplyCoupon(payload);
      setSuccess("Coupon applied successfully!");
      setCouponApplied(true);
      setError("");
      setShowCouponForm(false);
    } catch (err) {
      const msg = err?.response?.data;
      if (msg?.status_message === "Validation Failed") {
        setError(msg?.errors?.coupon_code?.[0] || "Invalid coupon code.");
      } else {
        setError(msg?.status_message || "Coupon application failed.");
      }
      setSuccess("");
    } finally {
      setCouponLoading(false);
    }
  };

  const toggleCouponForm = () => {
    setShowCouponForm(!showCouponForm);
    setError("");
    setSuccess("");
  };

  const PriceRow = ({ label, value, isDiscount = false, isTotal = false }) => {
 
    const currency = packageDetail?.plan_details?.region !== "1" ? "₹" : "$";
    return (
      <div
        className={`flex justify-between py-2 ${
          isTotal ? "border-t font-semibold pt-3 mt-2 border-gray-300" : ""
        }`}
      >
        <span className={`${isDiscount ? "text-green-600" : "text-gray-600"}`}>
          {label}
        </span>
        <span
          className={`${isDiscount ? "text-green-600" : "text-gray-800"} ${
            isTotal ? "text-lg font-bold" : ""
          }`}
        >
          {Number(value) > 100 && currency}
          {value}
          {Number(value) <= 100 && <span>%</span>}
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <AiOutlineLoading3Quarters className="animate-spin w-10 h-10 text-blue-500" />
      </div>
    );
  }

  if (error && !packageDetail) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow text-center">
        <FiXCircle className="text-red-500 text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-600 mt-2">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

 return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden my-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
        <h1 className="text-2xl font-bold">Complete Your Purchase</h1>
        <p className="text-sm opacity-90">Review your order details below</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Package Info */}
        {packageDetail && (
          <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Your Selection</h2>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xl font-bold text-gray-900">
                  {packageDetail?.plan_details?.package_name}
                </p>
                <p className="text-gray-600 mt-1">Subscription Plan</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">
                  {packageDetail?.plan_details?.region !== "1" ? "₹" : "$"}
                  {packageDetail?.plan_details?.payable}
                </p>
                <p className="text-gray-600 text-sm">Base Price</p>
              </div>
            </div>
          </div>
        )}

        {/* Price Breakdown */}
        {packageDetail && (
          <div className="border border-gray-200 rounded-lg p-5 bg-white">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  {packageDetail?.plan_details?.region !== "1" ? "₹" : "$"}
                  {packageDetail?.plan_details?.payable}
                </span>
              </div>
              
              {packageDetail.discount_amount > 0 && (
                <div className="flex justify-between">
                  <span className="text-green-600">Discount</span>
                  <span className="font-medium text-green-600">
                    - {packageDetail?.plan_details?.region !== "1" ? "₹" : "$"}
                    {packageDetail?.discount_amount}
                  </span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">
             <span className="font-semibold">   + </span> {packageDetail?.plan_details?.region !== "1" ? "₹" : "$"}
                  {packageDetail?.gst_amount ?? "0"}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-3 mt-2">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-800">Total Amount</span>
                  <span className="text-xl font-bold text-green-600">
                    {packageDetail?.plan_details?.region !== "1" ? "₹" : "$"}
                    {packageDetail?.payable_amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Coupon Section */}
        <ApplyCouponHere
          couponApplied={couponApplied}
          toggleCouponForm={toggleCouponForm}
          showCouponForm={showCouponForm}
          handleCouponChange={handleCouponChange}
          handleCouponSubmit={handleCouponSubmit}
          couponCode={couponCode}
          couponLoading={couponLoading}
          error={error}
          success={success}
          setCouponApplied={setCouponApplied}
          packageDetail={packageDetail}
          setCouponCode={setCouponCode}
        />

        {/* Payment Section */}
        {packageDetail && (
          <div className="border border-gray-200 rounded-lg p-5 bg-white">
            {/* <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h2> */}
            <PaymentPage
              amount={packageDetail.payable_amount}
              setError={setError}
              error={error}
              purchaseId={ids.purchase_id}
              region={packageDetail?.plan_details?.region}
              user_id={ids.user_id}
            />
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start gap-2">
              <FiInfo className="text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600">
                By completing your purchase, you agree to our{" "}
                <a href="/terms-and-conditions" className="text-blue-600 hover:underline">Terms</a> and{" "}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                Your subscription will automatically renew unless canceled.
              </p>
            </div>
            
            {/* Final Total Display */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Amount to Pay:</span>
                <span className="text-2xl font-bold text-green-600">
                  {packageDetail?.plan_details?.region !== "1" ? "₹" : "$"}
                  {packageDetail?.payable_amount}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
