import React from "react";
import { useState } from "react";
import MyPatrakarLogo from "./Logo";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import DemoCallCard from "../Home/ScheduleDemo/DemoCallCard";
import Dropdown from "./NavBarFOrBlog/DropDown";
import { useTranslation } from "react-i18next";
import { useAuth } from "../Authentication/auth-hook";
import LanguageSelector from "./LanguageSelector";
import ai from "../../assets/generative.png";
import { RiAiGenerate } from "react-icons/ri";

export default function ResponsiveNav() {
  const { isLogin } = useAuth();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="px-3 md:px-5  md:py-1 py-0 md:mx-12 sm:mx-5   ">
        <section className="flex items-center justify-between ">
          <div className="flex items-center gap-5  select-none">
            {/* Logo */}
            <NavLink to="/">
              <MyPatrakarLogo />
            </NavLink>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex gap-5 items-center mt-3 font-light">
              <li>
                <Dropdown />
              </li>
              <li>
                <NavLink
                  to={"/pricing-in-my-patrakar"}
                  className=" no-underline hover:no-underline  text-md font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
                >
                  {t("menu.price")}
                </NavLink>
              </li>
              <li
                className="text-md font-semibold font-Poppins text-red-600 hover:text-red-500 focus:text-red-500 transition-colors cursor-pointer"
                // onClick={handleScheduleDemo}
              >
                <DemoCallCard />
              </li>
              <li>
                <NavLink
                  to={"/resources-in-my-patrakar"}
                  className=" no-underline hover:no-underline  text-md font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
                >
                  {t("menu.resources")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog-page"
                  // target="_blank"
                  className=" no-underline hover:no-underline text-md font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
                >
                  {t("menu.blog")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className=" no-underline hover:no-underline text-md font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
                >
                  {t("menu.contact")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/try-mypatrakar-ai"}
                  className="no-underline hover:no-underline text-md font-semibold text-white font-Poppins hover:text-white focus:text-white transition-colors animate-pulse "
                >
                  <div className="flex items-center justify-center gap-2 bg-red-500 p-2 rounded ">
                    <span>
                      {/* <img src={ai} alt="This is generate shorts with AI" className="w-7 h-7 text-red-500" /> */}
                      <RiAiGenerate size={20} />
                    </span>
                    <span>{t("menu.AI")}</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex gap-2 items-center mt-3">
            {userData == "" || userData == null ? (
              <NavLink to={"/login"}>
                <button className="text-black font-semibold py-2 px-4 rounded hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white transition-colors">
                  {t("menu.signin")}
                </button>
              </NavLink>
            ) : (
              <NavLink to={"/portal"}>
                <button className="text-black font-semibold py-2 px-4 rounded hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white transition-colors">
                  {t("menu.signin")}
                </button>
              </NavLink>
            )}
            <NavLink to={"/signup"}>
              <button className="text-white font-semibold py-2 px-4 bg-red-500 rounded hover:bg-red-600 focus:bg-red-600 transition-colors focus:text-white">
                {t("menu.signupForFree")}
              </button>
            </NavLink>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Icon */}
          <div className=" lg:hidden flex items-center justify-center gap-5">
            <LanguageSelector />
            <div className="cursor-pointer" onClick={handleMenuToggle}>
              <VscThreeBars size={24} />
            </div>
          </div>
        </section>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-white p-2 shadow-lg transition-transform ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-8">
          <NavLink to="/">
            <MyPatrakarLogo />
          </NavLink>
          <IoClose
            size={24}
            className="cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6">
          <li>{t("menu.product.product")}</li>
          <li>
            <NavLink
              to={"/product/app"}
              className=" no-underline hover:no-underline  text-sm font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
              onClick={handleCloseMenu}
            >
              {t("menu.product.app")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/product/website"}
              className=" no-underline hover:no-underline text-sm font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
              onClick={handleCloseMenu}
            >
              {t("menu.product.website")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/pricing-in-my-patrakar"}
              className=" no-underline hover:no-underline  text-sm font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
              onClick={handleCloseMenu}
            >
              {t("menu.price")}
            </NavLink>
          </li>
          <li className=" text-left text-sm font-semibold font-Poppins  text-red-500 hover:text-red-500 focus:text-red-500 transition-colors">
            <DemoCallCard />
          </li>
          <li>
            <NavLink
              to={"/resources-in-my-patrakar"}
              className=" no-underline hover:no-underline  text-sm font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
              onClick={handleCloseMenu}
            >
              {t("menu.resources")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog-page"
              className=" no-underline hover:no-underline  text-sm font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
            >
              {t("menu.blog")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className=" no-underline hover:no-underline  text-sm font-semibold font-Poppins hover:text-red-500 focus:text-red-500 transition-colors"
              onClick={handleCloseMenu}
            >
              {t("menu.contact")}
            </NavLink>
          </li>
        </ul>
        {/* Action Buttons */}
        <div className="mt-3 flex flex-col gap-2">
          {userData == "" || userData == null ? (
            <NavLink to={"/login"}>
              <button className="text-black font-semibold py-2 px-4 rounded hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white transition-colors">
                {t("menu.signin")}
              </button>
            </NavLink>
          ) : (
            <NavLink to={"/portal"}>
              <button className="text-black font-semibold py-2 px-4 rounded hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white transition-colors">
                {t("menu.signin")}
              </button>
            </NavLink>
          )}
          <button className="text-black font-semibold py-2 px-4 rounded focus:bg-red-500">
            <NavLink to={"/signup"} onClick={handleCloseMenu}>
              {t("menu.signupForFree")}
            </NavLink>
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleMenuToggle}
        ></div>
      )}
    </>
  );
}
