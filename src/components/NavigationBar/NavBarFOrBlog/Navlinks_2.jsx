import React, { useContext, useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { BlogContext } from "../../../context/BlogContext";
import { BlogCategoryId } from "../../../api";
import { Link } from "react-router-dom";

const ResponsiveNav = () => {
  const { setBlog, setCategory, activeCategory } = useContext(BlogContext);
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const style = { fontFamily: "Times New Roman", fontSize: "15px" };

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const res = await BlogCategoryId();
      setCategories(res.data.response);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  // Handle category selection (no navigation, just update context)
  const handleSelectCategory = (categoryId, categoryName) => {
    setCategory(categoryName);
    window.scrollBy({
      top: 400, // 200px down
      behavior: "smooth",
    });
    setBlog((prev) => ({ ...prev, blog_category_id: categoryId }));
    setIsMenuOpen(false); // close mobile menu if open
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex items-center justify-between py-4">
          <ul className="hidden lg:flex gap-6 items-center text-lg">
            {categories.map((cat) => (
              <li key={cat.category_id}>
                <div
                  style={style}
                  className={`cursor-pointer flex items-center gap-2 py-2 px-4 font-semibold border-b-2 transition-colors ${
                    activeCategory === cat.category_id
                      ? "text-red-500 border-red-500"
                      : "text-gray-700 hover:text-red-500 hover:border-red-500"
                  }`}
                  onClick={() =>
                    handleSelectCategory(cat.category_id, cat.category)
                  }
                >
                  {cat.category}
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden cursor-pointer flex justify-center items-center p-2 rounded bg-gray-200 w-10"
            onClick={handleMenuToggle}
          >
            <VscThreeBars size={24} />
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-full bg-white p-6 shadow-lg transform transition-transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } duration-300 ease-in-out rounded-md`}
      >
        {/* Close Button */}
        <div
          className="flex justify-start items-start mb-8 p-2 rounded bg-gray-200 w-10 mx-auto cursor-pointer"
          onClick={handleMenuToggle}
        >
          <IoClose size={24} />
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col gap-4 text-start">
          {categories.map((cat) => (
            <li key={cat.category_id}>
              <div
                style={style}
                className={`cursor-pointer py-2 px-4 rounded font-semibold flex items-center gap-2 transition-colors ${
                  activeCategory === cat.category_id
                    ? "text-red-500 bg-red-100"
                    : "text-gray-700 hover:text-red-500 hover:bg-red-100"
                }`}
                onClick={() =>
                  handleSelectCategory(cat.category_id, cat.category)
                }
              >
                <FaFolder /> {cat.category}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleMenuToggle}
        />
      )}
    </>
  );
};

export default ResponsiveNav;
