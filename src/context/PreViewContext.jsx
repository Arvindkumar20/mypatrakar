import React, { createContext, useState } from "react";
import myPtrakarLogo from "../assets/Lg2.svg";
import myPtrakarLogo2 from "../assets/Lg1.svg";

const defaultAppPreview = {
  name: "My Awesome App",
  color: "#4F46E5",
  backgroundColor: "#FFFFFF",
  logo: myPtrakarLogo,
  owner_profile_pic:myPtrakarLogo,
    socialMedia: {
    fb_link: "",
    insta_link: "",
    twitter_link: "",
    linkedin_link: "",
    youtube_link: "",
    whats_link: "",
    koo_link: "",
    telegram_link: "",
  },
};

const defaultWebPreview = {
  title: "My Website",
  themeColor: "",
  color: "",
  backgroundColor: "",
  logo: myPtrakarLogo2,
  metaDescription: "This is my amazing website",
  socialMedia: {
    fb_link: "",
    insta_link: "",
    twitter_link: "",
    linkedin_link: "",
    youtube_link: "",
    whats_link: "",
    koo_link: "",
    telegram_link: "",
  },
};

export const PreViewContext = createContext();

export const PreviewProvider = ({ children }) => {
  const [appPreview, setAppPreview] = useState(defaultAppPreview);
  const [webPreview, setWebPreview] = useState(defaultWebPreview);

  const updateAppPreview = (newSettings) => {
    setAppPreview((prev) => ({ ...prev, ...newSettings }));
  };

  const updateWebPreview = (newSettings) => {
    console.log(newSettings)
    setWebPreview((prev) => ({ ...prev, ...newSettings }));
  };

  const resetAppPreview = () => {
    setAppPreview(defaultAppPreview);
  };

  const resetWebPreview = () => {
    setWebPreview(defaultWebPreview);
  };

  return (
    <PreViewContext.Provider
      value={{
        appPreview,
        webPreview,
        updateAppPreview,
        updateWebPreview,
        resetAppPreview,
        resetWebPreview,
      }}
    >
      {children}
    </PreViewContext.Provider>
  );
};
