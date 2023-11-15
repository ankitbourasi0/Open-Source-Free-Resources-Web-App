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
    <Container meta={{ title: "Blogs" }}>
      <BlogsBox blogs={blogs} />
    </Container>
  );
}

export default Blogs;


