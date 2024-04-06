import React from "react";
import UseFetch from "../Hooks/UseFetch";
import { URL } from "../assets/helper";
import BlogCard from "./BlogCard";
import Loading from "./Loading";

const BlogList = () => {
  const { data, loading } = UseFetch(URL);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid max-w-md md:max-w-2xl  lg:max-w-6xl grid-cols-1 my-8 gap-4 lg:grid-cols-3 lg:gap-8 mx-auto">
      {data && data.map((blogs) => <BlogCard key={blogs.id} {...blogs} />)}
    </div>
  );
};

export default BlogList;
