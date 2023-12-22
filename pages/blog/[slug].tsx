import WebImage from "components/WebImage";
import Container from "layouts/Container";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import services from "services";
import parse, { Element } from "html-react-parser";
import moment from "moment";
import readingTime from "reading-time";
import CategoryBox from "components/CategoryBox";
import Sharer from "components/Sharer";

type Props = {
  blog: Blog;
};
type Category = {
  name: string
}

function Blog({ blog }: Props) {
  const timeToRead = readingTime(blog.content.html);

  return (
    <div className="w-full lg:px-12 px-6">
      <div className="w-full min-h-screen h-full container grid content-center lg:grid-cols-2 grid-cols-1 lg:gap-x-12">
        <div className=" w-full">
          <WebImage
            alt={blog.title}
            src={blog.thumbnail.url}
            height={1080}
            width={1920}
          />
        </div>

        <div className=" w-full space-y-3">
          <p className="text-indigo-600 font-bold">Back</p>
          <h1 className="lg:text-5xl text-[48px] font-bold leading-[1.3]">{blog.title}</h1>
          {/* sharer */}
          <Sharer blog={blog} />
        </div>
      </div>

      <Container
        meta={{
          title: blog.title,
          date: blog.publishedAt,
          description: blog.description,
          image: blog.thumbnail.url,
        }}
      >
        <div className="space-y-4">

          {/* description */}
          <p>{blog.description}</p>

          {/* content */}
          <div className="min-w-full prose prose-zinc dark:prose-invert p-0 prose-h1:my-4 prose-h2:my-2 hover:prose-a:text-sky-500 transition-all duration-150 ">
            {parse(blog.content.html, {
              replace: (domNode) => {
                if (domNode instanceof Element && domNode.name === "img") {
                  return (
                    <WebImage
                      alt={blog.title}
                      src={domNode.attribs.src}
                      height={
                        domNode.attribs.height
                          ? parseInt(domNode.attribs.height)
                          : 1080
                      }
                      width={
                        domNode.attribs.width
                          ? parseInt(domNode.attribs.width)
                          : 1920
                      }
                    />
                  );
                }
              },
            })}
          </div>

          {/* date */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold"># Details</h1>
            <p>
              Published on <span>{moment(blog.publishedAt).format("LL")}</span> •{" "}
              {timeToRead.text}
            </p>
          </div>

          {/* categories */}
          <div className="flex space-x-2">
            {blog?.categories?.map((category, index) => (
              <CategoryBox category={category} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Blog;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const blogs = await services.queryBlogs();

  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    return { notFound: true };
  }

  const blog = await services.queryBlog(slug);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
    },
  };
};
