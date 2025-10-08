import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  FiCheckCircle,
  FiDownload,
  FiMinus,
  FiPlus,
  FiXCircle,
} from "react-icons/fi";

export default function ApplyCouponHere({
  couponApplied,
  toggleCouponForm,
  showCouponForm,
  handleCouponChange,
  handleCouponSubmit,
  couponCode,
  couponLoading,
  error,
  success,
  setCouponApplied,
  packageDetail,
  setCouponCode,
}) {
  return (
    <div>
      <div className="space-y-3">
        {!couponApplied && (
          <button
            onClick={toggleCouponForm}
            className={`w-full flex items-center justify-between gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
              showCouponForm
                ? "bg-gradient-to-r from-red-50 to-orange-50 border border-orange-200"
                : "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-full ${
                  showCouponForm
                    ? "bg-orange-100 text-orange-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {showCouponForm ? <FiMinus size={18} /> : <FiPlus size={18} />}
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">Got a coupon code?</p>
                <p className="text-sm text-gray-500">
                  Click to apply discounts
                </p>
              </div>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full font-medium ${
                showCouponForm
                  ? "bg-orange-100 text-orange-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {showCouponForm ? "Hide" : "Apply"}
            </span>
          </button>
        )}

        {showCouponForm && (
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-yellow-200 rounded-xl p-4 transition-all duration-300 shadow-sm">
            <form onSubmit={handleCouponSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="coupon"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  🎁 Enter your coupon code
                </label>
                <div className="flex gap-2">
                  <input
                    id="coupon"
                    type="text"
                    placeholder="e.g. SUMMER20, WELCOME15"
                    value={couponCode}
                    onChange={handleCouponChange}
                    disabled={couponLoading}
                    className="flex-1 px-4 py-3 rounded-lg border border-yellow-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white shadow-sm"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={couponLoading || !couponCode}
                    className={`px-5 py-3 rounded-lg transition-all flex items-center gap-2 font-medium ${
                      couponLoading || !couponCode
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-md"
                    }`}
                  >
                    {couponLoading ? (
                      <AiOutlineLoading3Quarters className="animate-spin" />
                    ) : (
                      <>
                        <FiDownload />
                        Apply
                      </>
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <FiXCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
              {success && (
                <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-600">{success}</p>
                </div>
              )}
            </form>
          </div>
        )}

        {couponApplied && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full text-green-600">
                <FiCheckCircle size={18} />
              </div>
              <div>
                <p className="font-medium text-green-800">Coupon applied!</p>
                <p className="text-sm text-green-600">
                  You saved {packageDetail?.discount_amount || "0"} on your
                  order
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setCouponApplied(false);
                setCouponCode("");
              }}
              className="text-sm font-medium text-red-600 hover:text-red-700 px-3 py-1 rounded-md hover:bg-red-50 transition-colors"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
