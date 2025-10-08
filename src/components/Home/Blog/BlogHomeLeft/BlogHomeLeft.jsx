// import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import Pagination from "../Pagination/PagiNation";
// import { FindBlogs } from "../../../../api";
// import { BlogContext } from "../../../../context/BlogContext";

// export default function BlogHomeLeft() {
//   // console.log("dwrtyuiodp][")

//   const navigate = useNavigate();
//   const {
//     blog,
//     blogS,
//     setBlogs,
//     setBlog,
//     category_id,
//     blog_category,
//   } = useContext(BlogContext);

//   // Fetch Blogs for the selected category
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await FindBlogs({
//           blog_category: blog.blog_category_id || category_id,
//         });
//         if (res?.data?.response) {
//           setBlogs(res.data.response);
//         }
//       } catch (error) {
//         console.log(error);
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, [category_id, blog.blog_category_id, setBlogs]);

//   // Handle blog card click
//   const handleBlogClick = (blogData) => {
//     setBlog(blogData);
//     navigate(`/blog/${blogData.blog_category}/${blogData.blog_slug}`);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6">
//       <div className="my-6">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-6">
//           Blog Category: {blog_category || "Loading..."}
//         </h1>

//         {/* Blog Grid */}
//         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//           {blogS.map((b, index) => (
//             <li
//               key={index}
//               className="bg-white shadow hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
//               onClick={() => handleBlogClick(b)}
//             >
//               <img
//                 src={b.thumbnail_image}
//                 alt={b.blog_slug}
//                 className="w-full h-56 object-center"
//                 // loading="lazy"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold text-gray-900 truncate">
//                   {b.blog_slug}
//                 </h2>
//                 <p className="text-sm text-gray-600 my-2 line-clamp-3">
//                   {b.short_description}
//                 </p>
//                 <p className="text-sm text-gray-500 italic">{b.blog_tags}</p>
//                 <div className="flex justify-start mt-4">
//                   <button className="bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-4 rounded-xl flex items-center">
//                     Read more <AiOutlineArrowRight className="ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Pagination */}
//       {blogS.length > 6 && (
//         <div className="mt-10">
//           <Pagination
//             totalItems={blogS.length}
//             itemsPerPage={6}
//             onPageChange={(page) => {
//               // Add pagination logic here if using server-side pagination
//               console.log("Page changed to:", page);
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FiTag } from "react-icons/fi";
import Pagination from "../Pagination/PagiNation";
import { FindBlogs } from "../../../../api";
import { BlogContext } from "../../../../context/BlogContext";
import { format } from 'date-fns';

export default function BlogHomeLeft() {
  const navigate = useNavigate();
  const { blog, blogS, setBlogs, setBlog, category_id, blog_category } = useContext(BlogContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch Blogs for the selected category
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const res = await FindBlogs({
          blog_category: blog.blog_category_id || category_id,
        });
        if (res?.data?.response) {
          setBlogs(res.data.response);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [category_id, blog.blog_category_id, setBlogs]);

  // Handle blog card click
  const handleBlogClick = (blogData) => {
    setBlog(blogData);
    navigate(`/blog/${blogData.blog_category}/${blogData.blog_slug}`);
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogS.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogS.length / itemsPerPage);

  // Format date
  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  // Format reading time
  const formatReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Skeleton loader for cards
  const renderSkeletons = () => {
    return Array(itemsPerPage).fill(0).map((_, index) => (
      <div 
        key={index} 
        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      >
        <div className="animate-pulse">
          <div className="bg-gray-200 h-56 w-full" />
          <div className="p-5 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="flex gap-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded-xl w-1/3 mt-4"></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {blog_category || "Our Blog"}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the latest news, tips, and insights in our collection of articles.
        </p>
      </div>

      {/* Blog Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderSkeletons()}
        </div>
      ) : blogS?.length === 0 ? (
        <div className="text-center py-20">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">No articles found</h3>
          <p className="text-gray-600 mt-2">We couldn't find any articles for this category.</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-start gap-8">
            {currentBlogs?.map((b, index) => (
              <div
                key={index}
                className="bg-white w-full md:w-[300px] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group cursor-pointer"
                onClick={() => handleBlogClick(b)}
              >
                <div className="relative">
                  <img
                    src={b?.thumbnail_image}
                    alt={b?.blog_slug}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {b?.blog_category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <AiOutlineCalendar className="mr-1" />
                      {/* {formatDate(b?.created_at)} */}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <AiOutlineClockCircle className="mr-1" />
                      {formatReadingTime(b?.blog_content)}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {b?.blog_slug}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {b?.short_description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {b?.blog_tags?.split(',')?.map((tag, i) => (
                      <span 
                        key={i}
                        className="flex items-center text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        <FiTag className="mr-1 text-gray-500" /> {tag?.trim()}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                    Read more 
                    <AiOutlineArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
            
          </div>

          {/* Pagination */}
          {blogS?.length > itemsPerPage && (
            <div className="mt-12 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}