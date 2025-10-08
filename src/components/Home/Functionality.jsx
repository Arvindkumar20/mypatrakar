import React from "react";
import download from "../../assets/download.webp";
// import UserExpe from "../../assets/UserExp.webp";
import vote from "../../assets/Vote.png";
// import vote from "../../assets/Vote.png";
import Reporter from "../../assets/Repoter.png";
// import Revenue from "../../assets/Revanue.webp";
import Audience from "../../assets/Youtube.png";
// import Newscuate from "../../assets/Newscuate.webp";
import { useCallback, useState } from "react";
import { DownloadBochure } from "../../api";
import { useTranslation } from "react-i18next";

export default function Functionality() {
  const { t } = useTranslation();
  const [show, setshow] = useState(80);
  const handleClick = async () => {
    // api calling here
    try {
      const res = await DownloadBochure();
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "MyPatrakar.pdf"; // Specify the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    //  end api calling
  };
  const features = [
    // {
    //   image: UserExpe,
    //   heading: "Enhanced News Experience",
    //   para: "Introducing Our Feature-Packed Android App for Your News Portal – Stay Informed, Anywhere, Anytime!",
    // },
    {
      image: vote,
      heading: "Vote",
      para: "voteDesc",
    },
    {
      image: Reporter,
      heading: "reporter",
      para: "reporterDesc",
    },
    // {
    //   image: Revenue,
    //   heading: "Boost Your Revenue",
    //   para: "Invite Public Ad Submissions and Showcase Them on Your News Portal",
    // },
    {
      image: Audience,
      heading: "audience",
      para: "audienceDesc",
    },
    // {
    //   image: Newscuate,
    //   heading: "ePaper Feature",
    //   para: "Introducing ePaper Integration from Admin Panel to App and Website on Your News Portal.",
    // },
  ];
  const handleShowMoreData = useCallback(
    (len) => {
      setshow(len);
      // console.log("object");
    },
    [setshow]
  );
  return (
    <div className="flex-col mx-auto max-w-screen-2xl">
      <div className="sm:mx-10 mx-2 sm:ms-8 md:ms-10 lg:ms-14 px-1 xl:ms-14   max-w-screen-2xl">
        <section className="my md:flex flex-1 items-center justify-center xl:gap-60 lg:gap-60 md:gap-20 sm:gap-10 ">
          <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full lg:my-0  sm:mx-10 ">
            <h1 className="font-bold font-sans text-2xl lg:text-4xl py-3 sm:mb-5 md:mb-7 lg:mb-10 text-center sm:text-center md:text-start lg:text-start xl:text-start tracking-wide">
              {t("functionality.mainHeading")}
            </h1>
          </div>
          <button
            className="flex ms-14 gap-3 items-center justify-center sm:mx-0 mx-auto lg:px-10 lg:py-3 px-3 py-3 border-2 rounded-full hover:bg-gray-200 transition w-2/3 sm:w-1/4 md:w-60 mb-4"
            onClick={handleClick}
          >
            <img src={download} alt="download icon" className="w-5 h-5" />
            <p className="font-sans ">{t("functionality.button")}</p>
          </button>
        </section>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:mx-10 md:mx-10 sm:mx-10 mx-5">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col ">
            {/* Image Section */}
            <div className="">
              <img
                src={feature.image}
                alt={feature.heading}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {/* {feature.heading} */}
                {t(`functionality.functions.${feature.heading}`)}
              </h2>
              <p
                className="mt-2 text-gray-600 text-sm leading-relaxed tracking-wide"
                onClick={() =>
                  handleShowMoreData(
                    t(`functionality.functions.${feature.para}`).length
                  )
                }
              >
                {show < t(`functionality.functions.${feature.para}`).length ? (
                  <>
                    {t(`functionality.functions.${feature.para}`)}{" "}
                    <span className="text-red-500 font-medium cursor-pointer">
                      ...
                    </span>
                  </>
                ) : (
                  t(`functionality.functions.${feature.para}`)
                )}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
