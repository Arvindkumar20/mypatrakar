import vector32 from "../../../assets/Vector_32.png";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import MyPatrakarThumbNail from "../../../assets/My Patrakar Thumbnail Image.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import VideoSection from "./VideoSection";

export default function Hero() {
  const { t } = useTranslation();

  const buttons = [
    { text: "android", href: "/product/app-demo" },
    // { text: "ios", href: "/product/app" },
    { text: "website", href: "/product/web-demo" },
    { text: "admin", href: "/product/website" },
  ];

  return (
    <>
      <Helmet>
        <title>MyPatrakar | Complete News Portal Development Solution</title>
        <meta
          name="description"
          content="MyPatrakar is the one-stop solution for building a complete news portal."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="MyPatrakar - Best Journalist Platform" />
        <meta
          property="og:description"
          content="Create your own journalism website with MyPatrakar."
        />
        <meta property="og:url" content="https://mypatrakar.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MyPatrakar - Best Journalist Platform" />
        <meta
          name="twitter:description"
          content="Create your own journalism website with MyPatrakar."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MyPatrakar",
            url: "https://mypatrakar.com",
          })}
        </script>
      </Helmet>

      <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16 select-none mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Main flex container: column on mobile, row-reverse on md+ */}
          <div className="flex flex-col md:flex-row-reverse md:items-start gap-8 lg:gap-12 xl:gap-16">
            
            {/* Video Section - full width on mobile, half on desktop */}
            <div className="w-full md:w-5/12 lg:w-1/2 xl:w-5/12 flex justify-center">
              <VideoSection />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-7/12 lg:w-1/2 xl:w-7/12 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-6">
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-Poppins text-black leading-tight tracking-tight">
                {t("hero")}
              </h1>

              {/* Vector Image - centered on mobile, left aligned on desktop */}
              <div className="flex justify-center md:justify-start w-full">
                <img
                  src={vector32}
                  alt="vector 32"
                  className="w-2/3 sm:w-1/2 md:w-3/4 lg:w-2/3 xl:w-5/6 my-2 md:my-4"
                />
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-Poppins text-gray-700 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {t("heroDesc")}
              </p>

              {/* Buttons Group */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 w-full pt-2">
                {buttons.map((button) => (
                  <Link key={button.text} to={button.href}>
                    <button className="px-5 py-2 sm:px-6 sm:py-2.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5 xl:px-7 xl:py-3 border border-gray-700 text-gray-800 font-medium rounded-full bg-gray-50 hover:bg-red-200 transition-all duration-200 text-sm sm:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                      {t(`heroButtons.${button.text}`)}
                    </button>
                  </Link>
                ))}
                
                {/* Free Portal Button */}
                <Link to="/portal/createPortal">
                  <button className="px-5 py-2 sm:px-6 sm:py-2.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5 xl:px-7 xl:py-3 border border-red-700 text-white font-medium rounded-full bg-red-500 hover:bg-red-600 hover:text-white transition-all duration-200 text-sm sm:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                    {t("heroButtonsFree")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}