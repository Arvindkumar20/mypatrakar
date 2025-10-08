import React from "react";

import phone1 from "../../assets/mobileview/MobileView1.webp";
import phone2 from "../../assets/mobileview/MobileView2.webp";
import phone3 from "../../assets/mobileview/MobileView3.webp";
import phone4 from "../../assets/mobileview/MobileView4.webp";
import phone5 from "../../assets/mobileview/MobileView5.webp";
import phone6 from "../../assets/mobileview/MobileView6.webp";
import phone7 from "../../assets/mobileview/MobileView7.webp";
import phone8 from "../../assets/mobileview/MobileView8.webp";
import play from "../../assets/mobileview/grid.png";
import phone from "../../assets/mobileview/Mobile.webp";
import ViewItemList from "./ViewItemList";
import AboutView from "./AboutView";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function MobileView() {
  const { t } = useTranslation();
  const mobileView = [
    {
      sn: t("app.feature1.heading"),
      heading: t("app.feature1.subHeading"),
      description: t("app.feature1.desc"),
      features: [
        t("app.feature1.features.feature1"),
        t("app.feature1.features.feature2"),
        t("app.feature1.features.feature3"),
      ],
      image: phone1,
    },
    {
      sn: t("app.feature2.heading"),
      heading: t("app.feature2.subHeading"),
      description: t("app.feature2.desc"),
      features: [
        t("app.feature2.features.feature1"),
        t("app.feature2.features.feature2"),
        t("app.feature2.features.feature3"),
      ],
      image: phone2,
    },
    {
      sn: t("app.feature3.heading"),
      heading: t("app.feature3.subHeading"),
      description: t("app.feature3.desc"),
      features: [
        t("app.feature3.features.feature1"),
        t("app.feature3.features.feature2"),
        t("app.feature3.features.feature3"),
      ],
      image: phone3,
    },
    {
      sn: t("app.feature4.heading"),
      heading: t("app.feature4.subHeading"),
      description: t("app.feature4.desc"),
      features: [
        t("app.feature4.features.feature1"),
        t("app.feature4.features.feature2"),
        t("app.feature4.features.feature3"),
      ],
      image: phone4,
    },
    {
      sn: t("app.feature5.heading"),
      heading: t("app.feature5.subHeading"),
      description: t("app.feature5.desc"),
      features: [
        t("app.feature5.features.feature1"),
        t("app.feature5.features.feature2"),
        t("app.feature5.features.feature3"),
      ],
      image: phone5,
    },
    {
      sn: t("app.feature6.heading"),
      heading: t("app.feature6.subHeading"),
      description: t("app.feature6.desc"),
      features: [
        t("app.feature6.features.feature1"),
        t("app.feature6.features.feature2"),
        t("app.feature6.features.feature3"),
      ],
      image: phone6,
    },
    {
      sn: t("app.feature7.heading"),
      heading: t("app.feature7.subHeading"),
      description: t("app.feature7.desc"),
      features: [
        t("app.feature7.features.feature1"),
        t("app.feature7.features.feature2"),
        t("app.feature7.features.feature3"),
      ],
      image: phone7,
    },
    {
      sn: t("app.feature8.heading"),
      heading: t("app.feature8.subHeading"),
      description: t("app.feature8.desc"),
      features: [
        t("app.feature8.features.feature1"),
        t("app.feature8.features.feature2"),
        t("app.feature8.features.feature3"),
      ],
      image: phone8,
    },
  ];

  return (
    <>
      <Helmet>
        <title>MyPatrakar App | Launch Your Own News Portal App</title>
        <meta
          name="description"
          content="Get your own news portal mobile app with MyPatrakar. A feature-rich, fast, and scalable app for journalists, news agencies, and media houses."
        />
        <meta
          name="keywords"
          content="MyPatrakar app, news portal app, mobile news app, digital journalism, news agency app, MyPatrakar mobile platform"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="tracking-wide">
        <ViewItemList view={mobileView} width="1/4" height={"60vh"} />
        <AboutView
          image={phone}
          play={play}
          headding={t("app.viewHeading")}
          para={t("app.viewDesc")}
          option={t("app.viewFeature")}
          width="1/2"
        />
      </div>
    </>
  );
}
