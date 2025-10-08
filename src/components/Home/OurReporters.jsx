import React, { useEffect, useState } from "react";
import { GetRepoters } from "../../api";
import reporterLogo from "../../assets/reporterIcon1.png";
import reporterLogo2 from "../../assets/reporterIcon2.png";
import reporterLogo3 from "../../assets/reporterIcon3.png";
import reporterLogo4 from "../../assets/reporterIcon4.png";
import reporterLogo5 from "../../assets/reporterIcon5.png";
import { useTranslation } from "react-i18next";
// import "../../../i18n";
export default function OurReporters() {
  const { t } = useTranslation();
  // const [reporters, setReporters] = useState([]);
  // // Uncomment below for API call
  // const showReporter = async () => {
  //   try {
  //     const response = await GetRepoters();
  //     setReporters(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   showReporter();
  // }, []);

  const reporter = [
    {
      reporterLOgo: reporterLogo,
      reporterName: "John Doe",
    },
    {
      reporterLOgo: reporterLogo2,
      reporterName: "Jane Smith",
    },
    {
      reporterLOgo: reporterLogo3,
      reporterName: "David Brown",
    },
    {
      reporterLOgo: reporterLogo4,
      reporterName: "Emily White",
    },
    {
      reporterLOgo: reporterLogo5,
      reporterName: "Chris Black",
    },
  ];

  return (
    <div className="flex flex-col items-center mx-auto px-4 mt-3 md:px-10  py-8 max-w-screen-xl">
      {/* Title Section */}
      <section className="text-center  sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12">
        <h1 className="lg:w-full md:w-2/3 sm:w-full w-full  mt-2 mb-2  lg:mx-0 md:mx-0 sm:mx-auto mx-auto font-bold font-sans text-2xl lg:text-4xl  text-center sm:text-center md:text-start lg:text-start xl:text-start">
        {t("reportersSec")}
        </h1>
      </section>

      {/* Reporters Section */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {reporter?.map((reporter, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transition-shadow duration-300"
          >
            <img
              src={reporter.reporterLOgo}
              alt={reporter.reporterName}
              className="w-48 sm:w-32 md:w-24 lg:w-24 h-32 object-cover rounded-full mb-3 hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            <p className="text-gray-800 font-medium text-sm text-center">
              {/* {reporter.reporterName || "Anonymous"} */}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
