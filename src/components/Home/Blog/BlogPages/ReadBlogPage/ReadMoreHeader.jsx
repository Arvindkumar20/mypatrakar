import React, { useContext } from "react";
import { BlogContext } from "../../../../../context/BlogContext";

const ReadMoreHeader = () => {
  const { blog } = useContext(BlogContext);
  // console.log(blog.title)

  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-7xl font-bold text-gray-800 mb-4"><span>My</span>Patrakar</h2>
          <p className="text-gray-600 text-lg mb-6">{blog.blog_category}</p>
          <hr className="w-1/4 border-t border-gray-300 mb-6" />
        </div>
      </div>
    </section>
  );
};
export default ReadMoreHeader;
