import React, { useState } from "react";
import logo from "../../../assets/LG1.png";
// Data Configuration
const PLACEHOLDER_DATA = {
  invoiceNo: "[INV/MP/2025/001]",
  invoiceDate: "[YYYY-MM-DD]",
  orderId: "[ORD-1234567]",
  paymentMethod: "[Online UPI/Card]",
  buyer: {
    name: "[Customer Full Name]",
    email: "[customer@example.com]",
    mobile: "[9876543210]",
    planName: "[Premium Annual Subscription]",
    gstin: "[GSTIN-IF-PROVIDED]",
    gstName: "[Customer GST Business Name]",
  },
  item: {
    name: "[Plan Name]",
    rate: "[Plan Amount]",
    taxable: "[Taxable Value]", // "A" placeholder
    cgst: "B",
    sgst: "C",
    total: "A+B+C",
  },
  discount: {
    code: "[Coupon Code Applied]",
    amount: "[Discount Amount]",
    total: "[Discount Amount]",
  },
  gstSummary: {
    taxable: "[Taxable Value]",
    cgst: "[CGST Amount]",
    sgst: "[SGST Amount]",
    total: "[Total Tax Amount]",
  },
  totals: {
    subtotal: "[Plan Amount]",
    discount: "[Discount Amount]",
    tax: "[Total Tax Amount]",
    final: "[Final Amount Paid]",
    inWords: "[Amount in Words Text]",
  },
  contact: "[Support Email/Phone Number]",
};

const DEMO_DATA = {
  invoiceNo: "INV/MP/2025/0042",
  invoiceDate: "2025-12-10",
  orderId: "ORD-9876543",
  paymentMethod: "UPI (PhonePe)",
  buyer: {
    name: "Vikas Sharma",
    email: "vikas.sharma@patrakar.in",
    mobile: "+91 99001 23456",
    planName: "Premium Annual Subscription",
    gstin: "09ABCDE1234F1Z9",
    gstName: "VS Media Solutions",
  },
  item: {
    name: "Premium Annual Subscription",
    rate: "5084.75",
    taxable: "4084.75",
    cgst: "367.63",
    sgst: "367.63",
    total: "4820.01",
  },
  discount: {
    code: "PATRAKAR20",
    amount: "1000.00",
    total: "1000.00",
  },
  gstSummary: {
    taxable: "4084.75",
    cgst: "367.63",
    sgst: "367.63",
    total: "735.26",
  },
  totals: {
    subtotal: "5084.75",
    discount: "1000.00",
    tax: "735.26",
    final: "4820.01",
    inWords: "Four Thousand Eight Hundred Twenty and One Paisa",
  },
  contact: "support@mypatrakar.in",
};

export default function App() {
  const [isDemo, setIsDemo] = useState(true);
  const data = isDemo ? DEMO_DATA : PLACEHOLDER_DATA;

  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8 px-2 md:px-0">
      {/* Print Styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-hidden { display: none !important; }
          .invoice-container { box-shadow: none; padding: 0; margin: 0; max-width: 100% !important; width: 100% !important; min-height: auto; }
          .table-container { overflow: visible !important; }
          @page { margin: 0.5cm; }
        }
      `}</style>

      {/* Testing Area (Hidden on Print) */}
      {/* <div className="fixed top-4 right-4 p-3 bg-red-50 border border-red-300 rounded-lg shadow-xl z-50 text-xs font-semibold print-hidden">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isDemo}
            onChange={(e) => setIsDemo(e.target.checked)}
            className="form-checkbox text-red-600 h-4 w-4 rounded focus:ring-red-500"
          />
          <span className="text-red-700">Enable Demo Invoice Data</span>
        </label>
      </div> */}

      {/* Main Invoice Container */}
      <div
        className="invoice-container mx-auto bg-white p-4 md:p-10 font-sans text-gray-800 text-sm shadow-sm md:shadow-lg rounded-lg md:rounded-none"
        style={{ maxWidth: "800px", width: "100%", minHeight: "1100px" }}
      >
        {/* 1. HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b pb-6 mb-6 border-gray-300 gap-4 md:gap-0">
          <div>
            <div className="flex items-center justify-start">
              {/* Logo */}
              <img
                src={logo}
                alt="MY PATRAKAR Official Logo"
                className="h-auto w-52"
              />
            </div>
            <p className="text-lg font-semibold text-gray-600">
              GST Tax Invoice
            </p>
            <p className="text-xs text-gray-500">
              Legal Proprietor: ANKIT SONKAR (Proprietorship)
            </p>
          </div>
          <div className="text-right w-full md:w-auto flex justify-end">
            <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l5-2 2-5m3 3l-2 5L9 9l5-2 2-5m3 3l-2 5L9 9l5-2 2-5m3 3l-2 5L9 9l5-2 2-5m3 3l-2 5L9 9l5-2 2-5m3 3l-2 5L9 9l5-2 2-5M9 19H5a2 2 0 01-2-2V5a2 2 0 012-2h4l2 4h4l2 4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4l-2 4h-4z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. SELLER & METADATA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs">
          {/* Seller Details */}
          <div className="col-span-1 md:col-span-2 p-4 bg-gray-50 rounded-lg">
            <p className="font-bold text-gray-600 uppercase mb-2">
              Seller (MY PATRAKAR)
            </p>
            <p>
              <strong>Address:</strong> 41-A, Krishna Vihar, Near Takrohi,
              Indira Nagar, Lucknow, UP – 226016
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 mt-2">
              <p>
                <strong>GSTIN:</strong>{" "}
                <span className="text-blue-900 font-medium">
                  09MKUPS1103E2ZR
                </span>
              </p>
              <p>
                <strong>PAN:</strong>{" "}
                <span className="font-medium">MKUPS1103E</span>
              </p>
            </div>
          </div>

          {/* Invoice Metadata */}
          <div className="col-span-1 p-4 bg-red-50 rounded-lg">
            <p className="font-bold text-gray-600 uppercase mb-2">
              Invoice Details
            </p>
            <div className="space-y-1">
              <p>
                <strong>Invoice No:</strong>{" "}
                <span className="font-medium text-red-700">
                  {data.invoiceNo}
                </span>
              </p>
              <p>
                <strong>Invoice Date:</strong> <span>{data.invoiceDate}</span>
              </p>
              <p>
                <strong>Order ID:</strong>{" "}
                <span className="break-all">{data.orderId}</span>
              </p>
              <p>
                <strong>Payment Method:</strong>{" "}
                <span>{data.paymentMethod}</span>
              </p>
            </div>
          </div>
        </div>

        {/* 3. BUYER DETAILS */}
        <div className="mb-8 p-4 border border-gray-200 rounded-lg text-xs">
          <p className="font-bold text-gray-600 uppercase mb-2">
            Billing Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
            <div>
              <strong>Full Name:</strong> <span>{data.buyer.name}</span>
            </div>
            <div className="break-all">
              <strong>Email:</strong> <span>{data.buyer.email}</span>
            </div>
            <div>
              <strong>Mobile:</strong> <span>{data.buyer.mobile}</span>
            </div>
            <div>
              <strong>Plan Name:</strong>{" "}
              <span className="font-semibold text-red-700">
                {data.buyer.planName}
              </span>
            </div>

            <div className="col-span-full h-px bg-gray-200 my-1"></div>

            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <strong>Customer GST No:</strong>{" "}
              <span className="font-medium">{data.buyer.gstin}</span>
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <strong>GST Name:</strong> <span>{data.buyer.gstName}</span>
            </div>
          </div>
        </div>

        {/* 4. ITEM SUMMARY */}
        <p className="font-bold text-gray-600 uppercase mb-2 text-xs">
          Item Summary (SAC: 998431)
        </p>
        <div className="table-container rounded-lg overflow-x-auto border border-gray-300 mb-6">
          <table className="w-full text-left text-xs min-w-[750px]">
            <thead className="bg-gray-100 uppercase text-gray-700 tracking-wider">
              <tr className="h-10">
                <th className="p-3 w-5/12">Description</th>
                <th className="p-3 w-1/12 text-center">SAC</th>
                <th className="p-3 w-1/12 text-center">Qty</th>
                <th className="p-3 w-1/12 text-right">Rate (₹)</th>
                <th className="p-3 w-1/12 text-right">Taxable Amount (₹)</th>
                <th className="p-3 w-1/12 text-right">CGST 9% (₹)</th>
                <th className="p-3 w-1/12 text-right">SGST 9% (₹)</th>
                <th className="p-3 w-1/12 text-right font-semibold">
                  Total (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Main Item */}
              <tr className="border-b border-gray-200 hover:bg-red-50/50">
                <td className="p-3 font-semibold text-red-700">
                  <span>{data.item.name}</span>
                  <p className="text-gray-500 font-normal text-xs mt-0.5">
                    Subscription for digital content services.
                  </p>
                </td>
                <td className="p-3 text-center">998431</td>
                <td className="p-3 text-center">1</td>
                <td className="p-3 text-right">{data.item.rate}</td>
                <td className="p-3 text-right">{data.item.taxable}</td>
                <td className="p-3 text-right">{data.item.cgst}</td>
                <td className="p-3 text-right">{data.item.sgst}</td>
                <td className="p-3 text-right font-bold text-gray-900">
                  {data.item.total}
                </td>
              </tr>
              {/* Discount Row */}
              <tr className="bg-yellow-50/50 border-b border-gray-200">
                <td className="p-3 text-gray-600 italic">
                  Discount Applied: <span>{data.discount.code}</span>
                </td>
                <td className="p-3 text-center">—</td>
                <td className="p-3 text-center">—</td>
                <td className="p-3 text-right">—</td>
                <td className="p-3 text-right font-medium text-red-600">
                  -<span>{data.discount.amount}</span>
                </td>
                <td className="p-3 text-right">—</td>
                <td className="p-3 text-right">—</td>
                <td className="p-3 text-right font-bold text-red-600">
                  -<span>{data.discount.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. GST & 6. AMOUNT SUMMARY */}
        <div className="flex flex-col md:flex-row mt-6 gap-6">
          {/* GST Summary Table */}
          <div className="w-full md:w-1/2">
            <p className="font-bold text-gray-600 uppercase mb-2 text-xs">
              GST Tax Summary
            </p>
            <div className="table-container rounded-lg overflow-x-auto border border-gray-300">
              <table className="w-full text-left text-xs min-w-[350px]">
                <thead className="bg-gray-100 uppercase text-gray-700 tracking-wider">
                  <tr className="h-8">
                    <th className="p-2 w-3/12">SAC</th>
                    <th className="p-2 w-3/12 text-right">Taxable Value (₹)</th>
                    <th className="p-2 w-2/12 text-right">CGST (9%)</th>
                    <th className="p-2 w-2/12 text-right">SGST (9%)</th>
                    <th className="p-2 w-2/12 text-right font-semibold">
                      Total Tax
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2">998431</td>
                    <td className="p-2 text-right">
                      {data.gstSummary.taxable}
                    </td>
                    <td className="p-2 text-right">{data.gstSummary.cgst}</td>
                    <td className="p-2 text-right">{data.gstSummary.sgst}</td>
                    <td className="p-2 text-right font-bold">
                      {data.gstSummary.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Amount Summary */}
          <div className="w-full md:w-1/2">
            <p className="font-bold text-gray-600 uppercase mb-2 text-xs">
              Amount Summary
            </p>
            <div className="space-y-1 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between">
                <p>Subtotal (Before Discount & Tax)</p>
                <p className="font-medium text-right">
                  ₹ {data.totals.subtotal}
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  Discount (<span>{data.discount.code}</span>)
                </p>
                <p className="font-medium text-red-600 text-right">
                  - ₹ <span>{data.totals.discount}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <p>Tax Amount (CGST + SGST)</p>
                <p className="font-medium text-right">
                  + ₹ <span>{data.totals.tax}</span>
                </p>
              </div>
              <div className="h-px bg-gray-300 my-2"></div>
              <div className="flex justify-between items-center text-lg font-bold">
                <p className="text-blue-900">Final Payable Amount</p>
                <p className="text-blue-900 text-right">
                  ₹ <span>{data.totals.final}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. AMOUNT IN WORDS */}
        <div className="mt-8">
          <p className="font-bold text-xs text-gray-600 mb-2">
            Amount in Words
          </p>
          <p className="bg-red-50 p-2 rounded-md italic font-semibold text-sm text-blue-900 border border-red-200">
            **<span>{data.totals.inWords}</span>** Only.
          </p>
        </div>

        {/* 8. BANK & FOOTER */}
        <div className="flex flex-col md:flex-row mt-8 border-t pt-4 border-gray-300">
          <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-6 md:mb-0">
            <p className="font-bold text-xs text-gray-600 uppercase mb-2">
              Bank Details (MY PATRAKAR)
            </p>
            <div className="text-xs space-y-1">
              <p>
                <strong>Bank Name:</strong> HDFC Bank Ltd
              </p>
              <p>
                <strong>A/C No:</strong> 50200070506342
              </p>
              <p>
                <strong>IFSC:</strong> HDFC0009176
              </p>
              <p>
                <strong>Branch:</strong> Indira Nagar 3, Lucknow
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 pl-0 md:pl-6 border-l-0 md:border-l pt-6 md:pt-0 border-t md:border-t-0 border-gray-200 text-left md:text-right">
            <p className="font-bold text-xs text-gray-600 uppercase mb-2">
              For MY PATRAKAR
            </p>
            <div className="h-16 mt-6 border-b border-dashed border-gray-400 mx-auto md:ml-auto md:mr-0 w-4/5"></div>
            <p className="text-sm font-semibold mt-1">Authorized Signatory</p>
          </div>
        </div>

        {/* 9. FOOTER NOTES */}
        <div className="mt-8 pt-4 text-center text-xs text-gray-500 border-t border-gray-300">
          <p className="mb-1 italic font-medium">
            Computer generated invoice, no signature required.
          </p>
          <p className="mb-1">
            All disputes are subject to the jurisdiction of **Lucknow** courts
            only.
          </p>
          <p>
            Support Contact:{" "}
            <span className="text-red-600 break-all">{data.contact}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
