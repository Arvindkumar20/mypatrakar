// import React, { useContext, useEffect, useState } from "react";
// import { FaRegNewspaper } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { FcMoneyTransfer } from "react-icons/fc";
// // import { blogs } from "../Blogs";
// import { FindBlogs } from "../../../../api";
// import { BlogContext } from "../../../../context/BlogContext";
// // import { useState } from "react";
// const BlogSection = () => {
//   const navigate = useNavigate();
//   const { blog, setBlog, category_id } = useContext(BlogContext);
//   const [blogS, setBlogs] = useState([]);
//   console.log(blog.blog_category_id);
//   const lenTitle = 50;
//   const blogs = async () => {
//     // const [blog_categories, setCategories] = useState("");

//     try {
//       const res = await FindBlogs({
//         blog_category: blog.blog_category_id || category_id,
//       });
//       console.log("Blogs response:", res);
//       setBlogs(res.data.response);
//     } catch (error) {
//       console.log(error)
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   useEffect(() => {
//     blogs();
//   }, [blog, setBlog,category_id]);

//   const handleBlogSlug = (
//     blog_category,
//     blog_category_id,
//     blog_slug,
//     blog_content,
//     blog_image,
//     blog_tags
//   ) => {
//     setBlog({
//       blog_category,
//       blog_category_id,
//       blog_slug,
//       blog_content,
//       blog_image,
//       blog_tags,
//     });
//     navigate(`/blog/${blog_category}/${blog_slug}`);
//     console.log("Blog slug clicked");
//   };
//   return (
//     <section className=" ">
//       <div className="container lg:mx-auto mx-0">
//         <div className="w-full animated slideInUp delay-100">
//           <div className="flex lg:items-center items-start justify-start ">
//             <div className="p-2">
//               <FaRegNewspaper className="w-7 h-7" />
//             </div>
//             <h1 className="text-left text-lg font-bold">Recent Blogs</h1>
//           </div>
//           <div className="mt-6">
//             <div className="grid grid-cols-1 gap-4">
//               {/* Blog Post 1 */}
//               {blogS.slice(0, 4).map((blog, index) => (
//                 <article
//                   key={index}
//                   className=" flex items-center justify-center cursor-pointer  gap-3"
//                   onClick={() =>
//                     handleBlogSlug(
//                       blog.blog_category,
//                       blog.blog_category_id,
//                       blog.blog_slug,
//                       blog.blog_content,
//                       blog.blog_image,
//                       blog.blog_tags
//                     )
//                   }
//                 >
//                   <div className="overflow-hidden  w-24 h-24 rounded-full">
//                     <img
//                       className="object-cover w-full h-full   "
//                       src={blog.blog_image}
//                       alt="Reason why your business should go online"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="">
//                     <h3 className="text-md font-bold items-start text-start">
//                       <div>
//                         <span className="text-lg line-clamp-2 leading-6">
//                           {lenTitle < blog.short_description.length
//                             ? blog.short_description.slice(0, lenTitle) + "..."
//                             : blog.short_description}
//                         </span>
//                       </div>
//                     </h3>
//                     <span className="text-xs text-gray-500 font-semibold">
//                       {blog?.date || "hgvv"}
//                     </span>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

// import React, { useContext, useEffect, useState } from "react";
// import { FaRegNewspaper, FaClock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { FindBlogs } from "../../../../api";
// import { BlogContext } from "../../../../context/BlogContext";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const BlogSection = () => {
//   const navigate = useNavigate();
//   const { blog, setBlog, category_id } = useContext(BlogContext);
//   const [blogS, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBlogs = async () => {
//     try {
//       setLoading(true);
//       const res = await FindBlogs({
//         blog_category: blog.blog_category_id || category_id,
//       });
//       setBlogs(res.data.response);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, [blog, setBlog, category_id]);

//   const handleBlogClick = (blog) => {
//     setBlog({
//       blog_category: blog.blog_category,
//       blog_category_id: blog.blog_category_id,
//       blog_slug: blog.blog_slug,
//       blog_content: blog.blog_content,
//       blog_image: blog.blog_image,
//       blog_tags: blog.blog_tags,
//     });
//     navigate(`/blog/${blog.blog_category}/${blog.blog_slug}`);
//   };

//   // Format date to readable format
//   const formatDate = (dateString) => {
//     if (!dateString) return "No date";
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <section className="py-8 bg-white rounded-lg my-2">
//       <div className="container mx-auto px-4">
//         <div className="mb-10">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="bg-indigo-100 p-3 rounded-full">
//               <FaRegNewspaper className="w-6 h-6 text-indigo-600" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800">
//               Recent Articles
//             </h1>
//           </div>
//           <p className="text-gray-600 ml-14">
//             Stay updated with our latest insights
//           </p>
//         </div>

//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[...Array(4)].map((_, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-md overflow-hidden"
//               >
//                 <Skeleton height={160} />
//                 <div className="p-5">
//                   <Skeleton count={2} />
//                   <div className="mt-4 flex items-center">
//                     <Skeleton circle width={24} height={24} />
//                     <Skeleton width={80} className="ml-2" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : blogS.length > 0 ? (
//         <div className="grid grid-cols-1 gap-5">
//   {blogS.slice(0, 4).map((blog, index) => (
//     <article
//       key={index}
//       className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex p-3 group"
//       onClick={() => handleBlogClick(blog)}
//     >
//       <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
//         <img
//           className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
//           src={blog.blog_image || "/default-blog.jpg"}
//           alt={blog.blog_title || "Blog post"}
//           loading="lazy"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = "/default-blog.jpg";
//           }}
//         />
//       </div>

//       <div className="ml-4 flex flex-col justify-between py-1">
//         <div>
//           <h3 className="text-base font-bold text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
//             {blog.blog_title || blog.short_description.substring(0, 60)}
//           </h3>
//           <div className="flex items-center text-xs text-gray-500 mt-1">
//             <FaClock className="mr-1 text-gray-400" />
//             <span>{formatDate(blog.date)}</span>
//           </div>
//         </div>

//         <p className="text-gray-600 text-sm mt-2 line-clamp-2">
//           {blog.short_description}
//         </p>

//         <button className="text-indigo-600 font-medium text-sm mt-2 inline-flex items-center group-hover:text-indigo-800 transition-colors">
//           Read more
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </article>
//   ))}
// </div>
//         ) : (
//           <div className="text-center py-12">
//             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-700">
//               No articles found
//             </h3>
//             <p className="text-gray-500 mt-2">
//               We couldn't find any blog posts at the moment
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

import React, { useContext, useEffect, useState } from "react";
import { FaRegNewspaper, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FindBlogs } from "../../../../api";
import { BlogContext } from "../../../../context/BlogContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSection = () => {
  const navigate = useNavigate();
  const { blog, setBlog, category_id } = useContext(BlogContext);
  const [blogS, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await FindBlogs({
        blog_category: blog.blog_category_id || category_id,
      });
      setBlogs(res.data.response);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [blog, setBlog, category_id]);

  const handleBlogClick = (blog) => {
    setBlog({
      blog_category: blog.blog_category,
      blog_category_id: blog.blog_category_id,
      blog_slug: blog.blog_slug,
      blog_content: blog.blog_content,
      blog_image: blog.blog_image,
      blog_tags: blog.blog_tags,
    });
    navigate(`/blog/${blog.blog_category}/${blog.blog_slug}`);
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-4 my-2 bg-white rounded-xl shadow-lg">
      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <FaRegNewspaper className="w-5 h-5 text-indigo-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Recent Articles</h1>
          </div>
          <p className="text-gray-500 text-sm ml-10">
            Stay updated with our latest insights
          </p>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton width={80} height={80} className="rounded-lg" />
                <div className="flex-1">
                  <Skeleton count={1} width="80%" />
                  <Skeleton count={1} width="60%" />
                  <Skeleton width={50} height={18} className="mt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : blogS.length > 0 ? (
          <div className="space-y-4">
            {blogS.slice(0, 4).map((blog, index) => (
              <article
                key={index}
                className="hover:bg-indigo-50/50 transition-all duration-300 cursor-pointer flex group p-2 rounded-lg"
                onClick={() => handleBlogClick(blog)}
              >
                <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                  <img
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    src={blog.blog_image || "/default-blog.jpg"}
                    alt={blog.blog_title || "Blog post"}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-blog.jpg";
                    }}
                  />
                </div>

                <div className="ml-3 flex flex-col justify-start">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {blog.blog_title || blog.short_description.substring(0, 60)}
                  </h3>

                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <FaClock className="mr-1 text-gray-400 w-3 h-3" />
                    <span>{formatDate(blog.date)}</span>
                  </div>

                  <button className="text-indigo-600 font-medium text-xs mt-1 inline-flex items-center group-hover:text-indigo-800 transition-colors">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-base font-semibold text-gray-700">
              No articles found
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              We couldn't find any blog posts.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
