import Container from "layouts/Container";
import { GetStaticProps } from "next";
import React from "react";
import services from "services";
import BlogsBox from "../components/blogs/Blogs";

type Props = {
  blogs: Blog[];
};

function Blogs({ blogs }: Props) {
  return (

    <div className="flex flex-col items-center sm:px-8 px-6">
      <div className="max-w-3xl w-full">
        <BlogsBox blogs={blogs} />
      </div>
    </div>

  );
}

export default Blogs;

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await services.queryBlogs();

  return {
    props: {
      blogs,
    },
  };
};

