import { useContext, useState } from "react";
import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { BlogContext } from "../../../context/BlogContext";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaRegLightbulb } from "react-icons/fa"; // Added some icons

export default function ResponsiveNav() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const style = {
    fontFamily: "Times New Roman",
    fontSize: "15px",
  };

  const {
    blogS,
    setBlog,
  } = useContext(BlogContext);
console.log(blogS)
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (blog, blog_category, blog_slug) => {
    setBlog(blog);

    navigate(`/blog/category/${blog_category}/${blog_slug}`);
    setIsMenuOpen(false);

    // return <HtmlToPlainText htmlContent={blog.blog_content} />;
  };

  return (
    <>
      <nav className="mx-auto max-w-7xl px-4 lg:px-6">
        <section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex gap-6 items-center text-lg">
              <li>
                <Link
                  style={style}
                  to={"/blog-page"}
                  className="border-b-2 text-gray-800 hover:text-red-500 font-semibold flex items-center gap-2 py-2 px-4 hover:border-b-2 hover:border-red-500 hover:no-underline"
                >
                  <FaHome />
                  Home
                </Link>
              </li>
              {blogS.length > 0 &&
                blogS.map((blog, index) => (
                  <li key={index}>
                    <div
                      style={style}
                      className="cursor-pointer border-b-2 hover:no-underline text-gray-500 hover:text-red-500 font-semibold flex items-center gap-2 py-2 px-4 hover:border-b-2 hover:border-red-500"
                      onClick={() =>
                        handleNavigate(blog, blog.blog_category, blog.blog_slug)
                      }
                    >
                      {blog.blog_category}
                      {/* <FaRegLightbulb /> {blog.blog_category} */}
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden cursor-pointer flex justify-center items-center p-2 rounded bg-gray-200 w-10"
            onClick={handleMenuToggle}
          >
            <VscThreeBars size={24} />
          </div>
        </section>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-full bg-white p-6 shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-300 ease-in-out rounded-md`}
      >
        {/* Close Button */}
        <div
          className="flex justify-start items-start mb-8 p-2 rounded bg-gray-200 w-10 mx-auto cursor-pointer"
          onClick={handleMenuToggle}
        >
          <IoClose size={24} />
        </div>

        {/* Navigation Links */}
        <ul className="text-start space-y-6 flex flex-col items-start justify-center">
          <li>
            <div
              style={style}
              className="cursor-pointer text-gray-700 font-semibold hover:text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleMenuToggle}
            >
              <Link
                to="/blog-page"
                className="hover:no-underline focus:no-underline"
              >
                <FaHome className="inline-block mr-2" />
                Home
              </Link>
            </div>
          </li>

          {blogS.length > 0 &&
            blogS.map((blog, index) => (
              <li key={index}>
                <div
                  style={style}
                  className="cursor-pointer  hover:no-underline text-gray-500 hover:text-red-500 font-semibold flex items-center gap-2 py-2 px-4 hover:border-b-2 hover:border-red-500"
                  onClick={() =>
                    handleNavigate(blog.blog_category, blog.blog_slug)
                  }
                >
                  <FaRegLightbulb /> {blog.blog_tags}
                </div>
              </li>
            ))}
          {/* Add More Links if Needed */}
        </ul>
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
