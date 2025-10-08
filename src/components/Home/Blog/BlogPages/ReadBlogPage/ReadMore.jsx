// import BlogContentsection from "./BlogContentsection";
// import React from "react"

// import Heading from "./Heading";
// import ReadMoreHeader from "./ReadMoreHeader";
// import BlogHomeRight from "../../BlogHomeRight/BlogHomeRight";
// import SearchForm from "../SearchForm ";
// export default function ReadMore() {
//   return (
//     <div>
//       <ReadMoreHeader />
//       <Heading />
//       <div className="mx-auto w-full lg:flex items-start justify-center   mb-5">
//         <div className=" mx-2">
//           <BlogContentsection />
//         </div>
//         <div className="xl:w-1/2 lg:w-1/2 md:2/3 sm:w-2/3 w-full xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto mx-auto">
//           <SearchForm />
//           <BlogHomeRight />
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import BlogContentsection from "./BlogContentsection";
import Heading from "./Heading";
import ReadMoreHeader from "./ReadMoreHeader";
import BlogHomeRight from "../../BlogHomeRight/BlogHomeRight";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../../../../footer/Footer";
import BlogFooter from "../../BlogFooter";

export default function ReadMore() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top functionality
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <ReadMoreHeader />
      
      {/* Floating back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Heading />
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <BlogContentsection />
            </div>
            
            {/* Author section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">Author Name</h3>
                  <p className="text-gray-600">Senior Content Writer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                With over 10 years of experience in the industry, our author specializes in creating 
                engaging and informative content that helps readers solve their problems and achieve their goals.
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-200 transition-colors">
                  Follow
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
            
            {/* Related articles */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-100">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start group cursor-pointer">
                    <div className="bg-gray-200 border-2 border-dashed rounded-lg w-20 h-20 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        How to Improve Your Content Marketing Strategy
                      </h3>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span>May 12, 2023</span>
                        <span className="mx-2">•</span>
                        <span>8 min read</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar section */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* <div className="bg-white rounded-xl shadow-lg p-6"> */}
                {/* <SearchForm /> */}
              {/* </div> */}
              
              {/* <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest articles and industry insights
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div> */}
              
              {/* <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Categories</h3>
                <ul className="space-y-3">
                  {['Marketing', 'Technology', 'Design', 'Business', 'Productivity'].map((category, index) => (
                    <li key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors">{category}</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">42</span>
                    </li>
                  ))}
                </ul>
              </div> */}
              
              <BlogHomeRight />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
    <BlogFooter/>
    </div>
  );
}