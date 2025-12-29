// export default function RegionPlanSection({
//   formData,
//   packages,
//   isLoadingPackages,
//   portalRequestDetail,
//   hasError,
//   getInputBorder,
//   handleChange,
//   handleBlur,
//   handlePackageSelect,
//   validation,
// }) {
//   console.log(packages);
//   return (
//     <section className="grid md:grid-cols-2 gap-6">
//       <div>
//         <label
//           htmlFor="region"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Select Region <span className="text-red-500">*</span>
//         </label>
//         <select
//           id="region"
//           name="region"
//           value={formData.region}
//           onChange={handleChange}
//           onBlur={() => handleBlur("region")}
//           className={`block w-full pl-3 pr-10 py-3 text-base border ${getInputBorder(
//             "region"
//           )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md`}
//         >
//           <option value="">Select Region</option>
//           <option value="0">India</option>
//           <option value="1">Outside India</option>
//         </select>
//         {hasError("region") && (
//           <p className="mt-1 text-sm text-red-600">
//             {validation.errors.region}
//           </p>
//         )}
//       </div>

import { useContext } from "react";
import { PaymentContext } from "../../../../context/PaymentContext";

//       <div>
//         <label
//           htmlFor="package_id"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Select Plan <span className="text-red-500">*</span>
//         </label>
//         <select
//           id="package_id"
//           name="package_id"
//           value={formData.package_id}
//           onChange={handlePackageSelect}
//           onBlur={() => handleBlur("package_id")}
//           disabled={!formData.region || isLoadingPackages}
//           className={`block w-full pl-3 pr-10 py-3 text-base border ${getInputBorder(
//             "package_id"
//           )} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md ${
//             !formData.region ? "bg-gray-100" : ""
//           }`}
//         >
//           <option value="">
//             {formData.region ? "Select Plan" : "Select region first"}
//           </option>
//           {packages.map((pkg) => (
//             <option key={pkg.package_id} value={pkg.package_id}>
//               {pkg.package_name} ({pkg.region === "0" ? "₹" : "$"}
//               {pkg.payable}/
//               {pkg?.validity === 365
//                 ? "Yearly"
//                 : pkg?.validity === 90
//                 ? "Quarterly"
//                 : pkg?.validity === 30
//                 ? "Monthly"
//                 : `${pkg?.validity} days`}
//               )
//             </option>
//           ))}
//         </select>
//         <p className="text-xs text-gray-600 mt-1">
//           {formData.region !== "0" ? "$" : "₹"} {formData.price}{" "}
//           {portalRequestDetail?.validity === 365
//             ? "Yearly"
//             : portalRequestDetail?.validity === 90
//             ? "Quarterly"
//             : portalRequestDetail?.validity === 30
//             ? "Monthly"
//             : `${portalRequestDetail?.validity} days`}
//         </p>
//         {hasError("package_id") && (
//           <p className="mt-1 text-sm text-red-600">
//             {validation.errors.package_id}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

export default function RegionPlanSection({
  formData,
  packages,
  isLoadingPackages,
  portalRequestDetail,
  hasError,
  getInputBorder,
  handleChange,
  handleBlur,
  handlePackageSelect,
  validation,
}) {
  // Find selected package
  const selectedPackage = packages.find(
    (pkg) => pkg.package_id === formData.package_id
  );
  // console.log(packages);

  // Calculation (ERP)
  const price = selectedPackage?.price || 0;
  const validity = selectedPackage?.validity || 0;

  // // Days → Months
  // const months = Math.ceil(validity / 30);

  // // Total
  // const calculatedTotal = price * months;

  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Region dropdown */}
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

      {/* Package dropdown */}
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
          disabled={!formData.region || isLoadingPackages}
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
              {pkg.mrp}/month
              {/* {pkg.validity === 365
                ? "Yearly"
                : pkg.validity === 90
                ? "Quarterly"
                : pkg.validity === 30
                ? "Monthly"
                : `${pkg.validity} days`} */}
              )
            </option>
          ))}
        </select>

        {/* Fixed price display */}
        {selectedPackage && (
          <div className="mt-2 text-xs text-gray-500">
            {/* <p>
              Base Price:{" "}
              <span className="font-semibold">
                {formData.region === "0" ? "₹" : "$"}
                {price}
              </span>
            </p> */}

            {/* <p>
              Validity:{" "}
              <span className="font-semibold">
                {validity} days ({months} months)
              </span>
            </p> */}

            <p className="text-gray-500 font-sans font-semibold">
              {selectedPackage.mrp} ×{" "}
              {selectedPackage.validity === 365
                ? "12"
                : selectedPackage.validity === 90
                ? "3"
                : selectedPackage.validity === 30
                ? "1"
                : `${selectedPackage.validity} days`}{" "}
              ={" "}
              <span className="">
                <span className="text-gray-700 font-bold">
                  {" "}
                  {formData.region === "0" ? "₹" : "$"}
                  {selectedPackage.payable}
                </span>
                {/* {calculatedTotal} */}
                {"/"}
                {selectedPackage.validity === 365
                  ? "Yearly"
                  : selectedPackage.validity === 90
                  ? "Quarterly"
                  : selectedPackage.validity === 30
                  ? "Monthly"
                  : `${selectedPackage.validity} days`}
              </span>
            </p>

            {/* <p className="text-green-700 font-bold">
              Payable Amount: {formData.region === "0" ? "₹" : "$"}
              {selectedPackage.payable}
              {"/"}
              {selectedPackage.validity === 365
                ? "Yearly"
                : selectedPackage.validity === 90
                ? "Quarterly"
                : selectedPackage.validity === 30
                ? "Monthly"
                : `${selectedPackage.validity} days`}
            </p> */}
          </div>
        )}

        {hasError("package_id") && (
          <p className="mt-1 text-sm text-red-600">
            {validation.errors.package_id}
          </p>
        )}
      </div>
    </section>
  );
}
