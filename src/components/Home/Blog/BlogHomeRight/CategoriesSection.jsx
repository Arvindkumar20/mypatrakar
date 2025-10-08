// import React, { useContext, useEffect, useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons for dropdown toggle
// import { BlogCategoryId } from "../../../../api";
// import { BlogContext } from "../../../../context/BlogContext";

// const CategoriesSection = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [blog_categories, setCategories] = useState([]);
//   const { setBlog } = useContext(BlogContext);

//   // API call here
//   const blogCategoryId = async () => {
//     try {
//       const res = await BlogCategoryId();
//       setCategories(res.data.response);
//     } catch (error) {
//       console.error("Error fetching blog category:", error);
//     }
//   };

//   useEffect(() => {
//     blogCategoryId();
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Handle category selection
//   const handleCategoryId = (id) => {
//     setBlog((pre) => {
//       return { ...pre, blog_category_id: id };
//     });
//   };

//   return (
//     <section className="elementor-section elementor-inner-section elementor-section-boxed elementor-section-height-default fadeIn animate__animated">
//       <div className="elementor-container mx-auto px-6 py-8">
//         <div className="elementor-column w-full">
//           <div className="elementor-widget-wrap">
//             {/* Heading */}
//             <div className="elementor-widget elementor-widget-heading mb-6">
//               <div className="elementor-widget-container">
//                 <h2 className="flex justify-start items-center text-xl font-bold text-gray-800">
//                   <div className="pe-4">Categories</div>
//                   <div className="bg-gray-300" style={{ height: "0.5px", width: "50%" }}></div>
//                 </h2>
//               </div>
//             </div>

//             {/* Navigation Menu */}
//             <div className="elementor-widget elementor-widget-nav-menu pt-0 px-4 py-6">
//               <div className="elementor-widget-container">
//                 <nav className="elementor-nav-menu--main flex flex-col gap-4">
//                   <ul className="elementor-nav-menu space-y-4">
//                     {blog_categories.length > 0 &&
//                       blog_categories.map((category, index) => (
//                         <li key={index + 1} className="menu-item">
//                           <button
//                             className="elementor-item text-gray-600 py-2 px-5 rounded-md focus:bg-red-600 focus:text-white hover:bg-gray-200 font-medium text-md transition-all"
//                             onClick={() => handleCategoryId(category.category_id)}
//                           >
//                             {category.category}
//                           </button>
//                         </li>
//                       ))}
//                   </ul>
//                 </nav>

//                 {/* Mobile Menu Toggle */}
//                 <div
//                   className="elementor-menu-toggle cursor-pointer mt-6 block sm:hidden"
//                   role="button"
//                   tabIndex="0"
//                   aria-label="Menu Toggle"
//                   aria-expanded={menuOpen}
//                   onClick={toggleMenu}
//                 >
//                   <i
//                     className={`elementor-menu-toggle__icon--open eicon-menu-bar ${menuOpen ? "hidden" : "block"}`}
//                   ></i>
//                   <i
//                     className={`elementor-menu-toggle__icon--close eicon-close ${menuOpen ? "block" : "hidden"}`}
//                   ></i>
//                   <span className="sr-only">Menu</span>
//                 </div>

//                 {/* Mobile Dropdown Menu */}
//                 {menuOpen && (
//                   <nav
//                     className="elementor-nav-menu--dropdown flex flex-col gap-4 transition-all duration-300"
//                     role="navigation"
//                     aria-hidden={!menuOpen}
//                   >
//                     {blog_categories.map((category, index) => (
//                       <li key={index} className="menu-item">
//                         <button
//                           className="elementor-item text-gray-500 font-medium text-md py-3 px-5 hover:bg-gray-200 rounded-md"
//                           onClick={() => handleCategoryId(category.category_id)}
//                         >
//                           {category.category}
//                         </button>
//                       </li>
//                     ))}
//                   </nav>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;



import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaFolder, FaStar, FaChartLine, FaLightbulb, FaNewspaper, FaGlobe } from "react-icons/fa";
import { BlogCategoryId } from "../../../../api";
import { BlogContext } from "../../../../context/BlogContext";

// Function to get icon based on category name
const getCategoryIcon = (category) => {
  const categoryIcons = {
    "News": <FaNewspaper className="text-blue-500" />,
    "Trending": <FaChartLine className="text-purple-500" />,
    "Tips": <FaLightbulb className="text-yellow-500" />,
    "Featured": <FaStar className="text-amber-500" />,
    "Global": <FaGlobe className="text-green-500" />,
  };
  
  // Try to find a matching icon
  for (const [key, icon] of Object.entries(categoryIcons)) {
    if (category.toLowerCase().includes(key.toLowerCase())) {
      return icon;
    }
  }
  
  // Default icon if no match found
  return <FaFolder className="text-indigo-500" />;
};

const CategoriesSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blog_categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const { setBlog,setCategory } = useContext(BlogContext);

  // API call here
  const blogCategoryId = async () => {
    try {
      const res = await BlogCategoryId();
      setCategories(res.data.response);
    } catch (error) {
      console.error("Error fetching blog category:", error);
    }
  };

  useEffect(() => {
    blogCategoryId();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle category selection
  const handleCategoryId = (id, categoryName) => {
    setCategory(categoryName);
    setActiveCategory(id);
    setBlog((pre) => {
      return { ...pre, blog_category_id: id };
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-red-600 to-red-600 px-6 py-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <FaFolder className="mr-3" />
          Categories
        </h2>
      </div>
      
      {/* Desktop Categories */}
      <div className="hidden md:block">
        <ul className="divide-y divide-gray-100">
          {blog_categories.length > 0 && blog_categories.map((category, index) => (
            <li 
              key={index + 1} 
              className={`px-5 py-3.5 transition-colors duration-200 cursor-pointer hover:bg-indigo-50 group ${
                activeCategory === category.category_id ? 'bg-indigo-50' : ''
              }`}
              onClick={() => handleCategoryId(category.category_id, category.category)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-100 ${
                    activeCategory === category.category_id ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    {getCategoryIcon(category.category)}
                  </div>
                  <span className={`font-medium group-hover:text-indigo-700 ${
                    activeCategory === category.category_id ? 'text-indigo-700' : 'text-gray-700'
                  }`}>
                    {category.category}
                  </span>
                </div>
                {/* <div className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  activeCategory === category.category_id 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-gray-100 text-gray-700 group-hover:bg-indigo-500 group-hover:text-white'
                }`}>
                  {Math.floor(Math.random() * 20) + 5}
                </div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile Categories */}
      <div className="md:hidden">
        {/* Mobile Toggle Button */}
        <div 
          className="flex items-center justify-between px-5 py-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="flex items-center">
            <FaFolder className="text-indigo-500 mr-3" />
            <span className="font-medium text-gray-700">Browse Categories</span>
          </div>
          {menuOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>
        
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="px-5 pb-4">
            <ul className="space-y-2">
              {blog_categories.map((category, index) => (
                <li 
                  key={index} 
                  className={`px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-indigo-50 group ${
                    activeCategory === category.category_id ? 'bg-indigo-50' : ''
                  }`}
                  onClick={() => handleCategoryId(category.category_id, category.category)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-100 ${
                        activeCategory === category.category_id ? 'bg-indigo-100' : 'bg-gray-100'
                      }`}>
                        {getCategoryIcon(category.category)}
                      </div>
                      <span className={`font-medium group-hover:text-indigo-700 ${
                        activeCategory === category.category_id ? 'text-indigo-700' : 'text-gray-700'
                      }`}>
                        {category.category}
                      </span>
                    </div>
                    {/* <div className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      activeCategory === category.category_id 
                        ? 'bg-indigo-500 text-white' 
                        : 'bg-gray-100 text-gray-700 group-hover:bg-indigo-500 group-hover:text-white'
                    }`}>
                      {Math.floor(Math.random() * 20) + 5}
                    </div> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* View All Button */}
      <div className="lg:hidden block border-t border-gray-100 px-5 py-4">
        <button className="w-full flex items-center justify-center text-indigo-600 hover:text-indigo-800 font-medium py-2 rounded-lg hover:bg-indigo-50 transition-colors"
        onClick={toggleMenu}
        >
          View All Categories
          <FaChevronDown className="ml-2 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default CategoriesSection;