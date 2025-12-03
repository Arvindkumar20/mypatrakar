import HtmlToPlainText from "../HtmlToPlainText";
import React, { useContext } from "react";

import AuthorBox from "./AuthorBox";
import BlogNavigation from "./BlogNavigation";
import CommentSection from "./CommentSection";
import LikeWidget from "./LikeWidget ";
import SocialIcons from "./SocialIcons";
import SocialSharing from "./SocialSharing";
import { PaymentContext } from "../../../../../context/PaymentContext";
import { BlogContext } from "../../../../../context/BlogContext";

const BlogContentsection = () => {
  const { blog } = useContext(BlogContext);
  console.log(blog)
  return (
    <section className="mb-10 xs:mx-2 xl:mx-12 lg:mx-12 md:mx-10 sm:mx-5  ">
      <div className=" mx-auto ">
        <img src={blog.blog_image} alt={blog.blog_category} className="w-full h-full rounded-lg" loading="lazy" />
        <div className="my-3">
          <HtmlToPlainText htmlContent={blog.blog_content} className=" mb-5" />
        </div>

        {/* Social Sharing */}
        {/* <SocialSharing />
        <LikeWidget />
        <SocialIcons />
        <AuthorBox />
        <BlogNavigation />
        <CommentSection /> */}
      </div>
    </section>
  );
};
export default BlogContentsection;
