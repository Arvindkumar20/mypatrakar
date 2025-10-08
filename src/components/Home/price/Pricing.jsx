import { useEffect, useState } from "react";
import React from "react";
import PriceInfoCard from "./PriceInfoCard";
import { GetPriceDetails } from "../../../api";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Pricing = () => {
  const location = useLocation();
  const [region, setRegion] = useState(0);
  const [pricingDetails, setPricingDetails] = useState([]);
  const handleRegionClick = (region) => {
    setRegion(region);
  };

  const { t } = useTranslation();

  // api calling here
  const handlePricingDetails = async () => {
    try {
      const res = await GetPriceDetails();
      console.log(res.data.response);
      let data = res.data.response.filter((rgn) => rgn.region == region);
      setPricingDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handlePricingDetails();
  }, [region]);
  // end api calling
  return (
    <>
      {location.pathname == "/pricing-in-my-patrakar" && (
        <Helmet>
          <title>
            Pricing | MyPatrakar - Affordable News Portal Development
          </title>
          <meta
            name="description"
            content="Explore MyPatrakar's simple and economical pricing plans. Get your own news portal website and mobile app at an affordable cost with top-notch features."
          />
          <meta
            name="keywords"
            content="MyPatrakar pricing, news portal pricing, affordable news website, news app cost, MyPatrakar plans, news portal development cost"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
      )}
      <div className="lg:mx-auto sm:mx-10 mx-0 px-3 md:px-10 p-0 my-24 sm:my-20 md:my-20 lg:my-20 py-3 ">
        <h2 className="lg:w-2/3 md:w-2/3 sm:w-full w-full mt-4  sm:mb-6 md:mb-8 lg:mb-10  lg:mx-auto md:mx-auto sm:mx-auto mx-auto font-bold text-2xl lg:text-4xl py-4 text-center sm:text-center md:text-center lg:text-center xl:text-center tracking-wide font-sans">
          {t("pricing")}
        </h2>
        <div className="flex my-5  md:flex-row items-center justify-center mx-auto mt-8 mb-3 border-2 border-gray-300  lg:w-1/2 md:w-2/3 sm:w-4/5 w-full rounded-full  overflow-hidden">
          <button
            name="india"
            className="py-4  xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6 rounded-full rounded-r-none w-full md:w-1/2 font-semibold text-gray-800 
      hover:bg-red-50  focus:bg-red-500 focus:text-white active:bg-red-600 "
            onClick={() => handleRegionClick(0)}
          >
            India
          </button>

          {/* Vertical Divider for Medium+ Screens */}
          <hr className=" h-14 bg-gray-300 w-[2px]" />
          <button
            name="outside"
            className="py-4 xl:px-14 lg:px-12 md:px-10 sm:px-8 px-6 rounded-full rounded-l-none w-full md:w-1/2 font-semibold text-gray-800 
      hover:bg-red-50  focus:bg-red-500 focus:text-white active:bg-red-600 
      "
            onClick={() => handleRegionClick(1)}
          >
            Outside of India
          </button>
        </div>
        {/* <Buttons/> */}
        <div className="md:flex md:flex-wrap flex-1 lg:space-y-0 space-y-4 items-start justify-center gap-4">
          {pricingDetails.length > 0 &&
            pricingDetails.map((pkg) => {
              return (
                <div key={pkg.package_id}>
                  <PriceInfoCard
                    region={pkg.region == 0 ? "India" : "OutSide of India"}
                    realPrice={pkg.mrp}
                    payAble={pkg.payable}
                    discount={pkg.discount}
                    packageDesc={pkg.validity}
                    packageName={pkg.package_name}
                    // mrp={pkg.mrp}
                    atPriceFeatures={
                      pkg?.features?.length > 0 ? pkg.features : []
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Pricing;
