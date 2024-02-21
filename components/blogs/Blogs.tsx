import React from "react";
import Blog from "./Blog";

type Props = {
  blogs: Blog[];
};

const Blogs = ({ blogs }: Props) => {
  return (
    <div className="space-y-4 ">
      {blogs.map((blog, index) => (
        <div key={index} className="grid grid-cols-3">
          <Blog blog={blog} />
        </div>
      ))
      }
    </div>
  );
};

export default Blogs;
