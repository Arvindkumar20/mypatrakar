
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { DEMO_DATA, PLACEHOLDER_DATA } from "./invoicr/data/invoiceData";
import { fetchAllData } from "./invoicr/api/invoiceApi";
import { formatCombinedData } from "./invoicr/utils/dataFormatter";

import SellerMetadata from "./invoicr/SellerMetadata";
import BuyerDetails from "./invoicr/BuyerDetails";
import ItemSummary from "./invoicr/ItemSummary";
import GSTAmountSummary from "./invoicr/GSTAmountSummary";
import BankFooter from "./invoicr/BankFooter";
import DownloadControls from "./invoicr/DownloadControls";
import InvoiceHeader from "./invoicr/InvoiceHeader";
import Swal from "sweetalert2";

export default function Invoice() {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceRef = useRef(null);

  const [isDemo, setIsDemo] = useState(true);
  const [data, setData] = useState(DEMO_DATA); // Initialize with DEMO_DATA
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [sellerData, setSellerData] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState(null);

  // Get purchase_id and customer_id from navigation state
  const purchaseId = location.state?.purchase_id || "MPCP2026195";
  const customerId = location.state?.customer_id;

  // Handle data source change
  useEffect(() => {
    if (isDemo) {
      setData(DEMO_DATA);
    } else if (!sellerData && !customerData) {
      setData(PLACEHOLDER_DATA);
    }
  }, [isDemo, sellerData, customerData]);

  // Handle fetching data
  const handleFetchData = async () => {
    if (!purchaseId) {
      setError("Purchase ID not found");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { sellerData: seller, customerData: customer } =
        await fetchAllData(purchaseId);

      setSellerData(seller);
      setCustomerData(customer);

      const formattedData = formatCombinedData(seller, customer);
      // console.log("Formatted Data:", formattedData); // Debug log

      setData(formattedData);
      setIsDemo(false);
    } catch (err) {
      // console.log("Fetch Error:", err);
      setError(err.message);
      setIsDemo(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all data from APIs on component mount
  useEffect(() => {
    if (purchaseId) {
      handleFetchData();
    }
  }, [purchaseId]); // Add purchaseId as dependency

  // Download invoice as PDF using canvas
  const handleDownload = async () => {
    if (!invoiceRef.current) return;

    setDownloading(true);

    try {
      document.body.classList.add("pdf-capture");

      const element = invoiceRef.current;
      const originalStyles = {
        paddingBottom: element.style.paddingBottom,
        marginBottom: element.style.marginBottom,
        boxShadow: element.style.boxShadow,
      };

      element.style.paddingBottom = "0px";
      element.style.marginBottom = "0px";
      element.style.boxShadow = "none";

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: -window.scrollY,
        width: element.scrollWidth,
        height: element.scrollHeight,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        logging: false,
        allowTaint: true,
        foreignObjectRendering: false,
        imageTimeout: 15000,
        onclone: (clonedDoc) => {
          const printHiddenElements =
            clonedDoc.querySelectorAll(".print-hidden");
          printHiddenElements.forEach((el) => {
            el.style.display = "none";
            el.style.visibility = "hidden";
            el.style.opacity = "0";
            el.style.height = "0";
            el.style.overflow = "hidden";
          });

          const invoiceContainer =
            clonedDoc.querySelector(".invoice-container");
          if (invoiceContainer) {
            invoiceContainer.style.margin = "0";
            invoiceContainer.style.padding = "0";
            invoiceContainer.style.boxShadow = "none";
          }
        },
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      const pxToMm = (px) => px * 0.264583;
      const pdfWidth = pxToMm(canvas.width);
      const pdfHeight = pxToMm(canvas.height);

      const orientation = pdfWidth > pdfHeight ? "l" : "p";
      const pdf = new jsPDF(orientation, "mm", [pdfWidth, pdfHeight]);

      pdf.addImage(imgData, "PNG", 0, 2, pdfWidth, pdfHeight - 2);

      const filename = `Invoice_${data.invoiceNo}_${data.buyer.name.replace(/\s+/g, "_")}.pdf`;
      pdf.save(filename);
      Swal.fire({
        icon: "success",
        title: "DOWNLOADED!",
        text: "इनवॉइस सफलतापूर्वक डाउनलोड हो गया है।",
        timer: 2000,
        showConfirmButton: false,
        iconColor: "#059669", // Green color for the seal
      }).then(() => {
        setTimeout(() => navigate("/portal"), 500);
      });
      // Restore original styles
      element.style.paddingBottom = originalStyles.paddingBottom;
      element.style.marginBottom = originalStyles.marginBottom;
      element.style.boxShadow = originalStyles.boxShadow;
    } catch (err) {
      // console.error("PDF generation failed:", err);
      setError("Failed to generate PDF. Please try again.");
      window.print();
    } finally {
      document.body.classList.remove("pdf-capture");
      setDownloading(false);
    }
  };

  // Print invoice
  const handlePrint = () => {
    window.print();
    Swal.fire({
      icon: "success",
      title: "DOWNLOADED!",
      text: "इनवॉइस सफलतापूर्वक डाउनलोड हो गया है।",
      timer: 2000,
      showConfirmButton: false,
      iconColor: "#059669", // Green color for the seal
    }).then(() => {
      setTimeout(() => navigate("/portal"), 500);
    });
  };

  // Clear API data and reset to demo
  // const clearApiData = () => {
  //   setSellerData(null);
  //   setCustomerData(null);
  //   setData(DEMO_DATA);
  //   setError(null);
  //   setIsDemo(true);
  // };

  // Go back to previous page
  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  // Conditional rendering to prevent errors
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading invoice data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8 px-2 md:px-0">
      {/* Print Styles */}
      <style>{`
        @media print {
          body { 
            margin: 0 !important; 
            padding: 0 !important; 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important;
            background: white !important;
          }
          .print-hidden { 
            display: none !important; 
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          .invoice-container { 
            box-shadow: none !important; 
            border: none !important;
            padding: 0 !important;
            margin: 0 auto !important;
            max-width: 100% !important; 
            width: 100% !important; 
            min-height: auto !important;
          }
          .table-container { 
            overflow: visible !important;
            page-break-inside: avoid !important;
          }
          @page { 
            margin: 0.5cm !important; 
            size: A4 !important;
          }
        }
        
        .pdf-capture .print-hidden {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }
        
        .pdf-capture .invoice-container {
          box-shadow: none !important;
          margin: 0 !important;
        }
      `}</style>

      {/* Control Panel Component */}
      {/* <ControlPanel
        isDemo={isDemo}
        setIsDemo={setIsDemo}
        loading={loading}
        sellerData={sellerData}
        purchaseId={purchaseId}
        customerId={customerId}
        error={error}
        handleManualFetch={handleFetchData}
        clearApiData={clearApiData}
        handlePrint={handlePrint}
        handleGoBack={handleGoBack}
      /> */}

      {/* Main Invoice Container */}
      <div className="flex items-center justify-center" ref={invoiceRef}>
        <div
          className="invoice-container mx-auto bg-white p-4 md:p-10 font-sans text-gray-800 text-sm shadow-sm md:shadow-lg rounded-lg md:rounded-none"
          style={{ maxWidth: "800px", width: "100%", minHeight: "1100px" }}
        >
          {/* Header Component */}
          <InvoiceHeader sellerData={sellerData} data={data} />

          {/* Seller & Metadata Component */}
          <SellerMetadata data={data} />
          {/* प्यारा सा नोटिफिकेशन पॉप-अप */}

          {/* Buyer Details Component */}
          <BuyerDetails data={data} />

          {/* Item Summary Component */}
          <ItemSummary data={data} />

          {/* GST & Amount Summary Component */}
          <GSTAmountSummary data={data} />

          {/* Amount in Words */}
          <div className="mt-8">
            <p className="font-bold text-xs text-gray-600 mb-2">
              Amount in Words
            </p>
            <p className="bg-red-50 p-2 rounded-md italic font-semibold text-sm text-blue-900 border border-red-200">
              **<span>{data.totals?.inWords || "Zero Rupees Only"}</span>**
              Only.
            </p>
          </div>

          {/* Bank & Footer Component */}
          <BankFooter data={data} />

          {/* Footer Notes */}
          <div className="mt-8 pt-4 text-center text-xs text-gray-500 border-t border-gray-300">
            <p className="mb-1 italic font-medium">
              Computer generated invoice, no signature required.
            </p>
            <p className="mb-1">
              All disputes are subject to the jurisdiction of{" "}
              <strong>{data.seller?.city || "Lucknow"}</strong> courts only.
            </p>
            <p>
              Support Contact:{" "}
              <span className="text-red-600 break-all">
                {data.seller?.supportEmail || data.contact || "N/A"}
              </span>
              {data.seller?.supportPhone && (
                <>
                  {" "}
                  |{" "}
                  <span className="text-red-600">
                    {data.seller.supportPhone}
                  </span>
                </>
              )}
            </p>
            {data.seller?.website && (
              <a href={data.seller.website} className="mt-1">
                Website:{" "}
                <span className="text-blue-600 break-all">
                  {data.seller.website}
                </span>
              </a>
            )}
          </div>

          {/* Download Controls Component */}
          <DownloadControls
            sellerData={sellerData}
            customerData={customerData}
            data={data}
            purchaseId={purchaseId}
            loading={loading}
            downloading={downloading}
            handleManualFetch={handleFetchData}
            handlePrint={handlePrint}
            handleDownload={handleDownload}
          />
        </div>
      </div>
    </div>
  );
}
