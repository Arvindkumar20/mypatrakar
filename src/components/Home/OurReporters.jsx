import kutumb from "../../assets/reporters/kutumb.png";
import astv from "../../assets/reporters/astv.png";
import indiaupdesh from "../../assets/reporters/indiaupdesh.png";
import publicbharat from "../../assets/reporters/publicbharat.png";
import { useTranslation } from "react-i18next";

export default function OurReporters() {
  const { t } = useTranslation();

  const reporter = [
    {
      reporterLOgo: kutumb,
      reporterName: "Kutumb Jagran News",
    },
    {
      reporterLOgo: astv,
      reporterName: "ASTV 24",
    },
    {
      reporterLOgo: indiaupdesh,
      reporterName: "India Updesh",
    },
    {
      reporterLOgo: publicbharat,
      reporterName: "Public Bharat",
    },
  ];

  return (
    <section className="relative font-sans w-full pt-20 overflow-hidden bg-gradient-to-b from-gray-100 via-slate-100 to-white">
      
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-600 bg-blue-100 rounded-full mb-5">
            Trusted Media Partners
          </span> */}

          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-black
              text-gray-700
              leading-tight
            "
          >
            {t("reportersSec")}
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Collaborating with trusted media networks to bring authentic,
            impactful, and fast news coverage across India.
          </p>
        </div>

        {/* Reporters Grid */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4
            gap-6 md:gap-8
          "
        >
          {reporter.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                
                
                flex flex-col items-center justify-center
                
                transition-all duration-500
                overflow-hidden
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Logo */}
              <div
                className="
                  relative
                  w-28 h-28 sm:w-32 sm:h-32
                  flex items-center justify-center
                "
              >
                <img
                  src={item.reporterLOgo}
                  alt={item.reporterName}
                  loading="lazy"
                  className="
                    w-full h-full
                    object-contain
                    transition-all duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Divider */}
              {/* <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 my-5 group-hover:w-20 transition-all duration-500"></div> */}

              {/* Name */}
              {/* <h3
                className="
                  text-sm sm:text-base md:text-lg
                  font-bold
                  text-slate-800
                  text-center
                  leading-snug
                  group-hover:text-blue-600
                  transition-colors duration-300
                "
              >
                {item.reporterName}
              </h3> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}