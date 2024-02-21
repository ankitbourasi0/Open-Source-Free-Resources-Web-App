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
    <div className="w-full px-8 md:px-12 pt-20 text-black bg-white ">
      {/* <div id="bg2" className="w-full min-h-screen px-12 h-full grid md:grid-flow-col md:grid-cols-2  container">
        <div className="w-full  md:w-1/2">
          <WebImage
            alt={blog.title}
            src={blog.thumbnail.url}
            height={1080}
            width={1920}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-3">
          <p className="text-indigo-600 font-bold">Back</p>
          <h1 className="lg:text-5xl text-[48px] font-bold  leading-[1.3]">{blog.title}</h1>
         
        </div>
      </div> */}

      <div className="py-16 ">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <WebImage
                alt={blog.title}
                src={blog.thumbnail.url}
                height={1080}
                width={1920}
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                {blog.title}
              </h2>
              <p className="my-8 text-gray-600 dark:text-gray-300">
                {blog.description}
              </p>
              {/* description */}
              <p className="text-black dark:text-gray-100"></p>
              <Sharer blog={blog} />


            </div>
          </div>
        </div>
      </div>


      <Container
        meta={{
          title: blog.title,
          date: blog.publishedAt,
          description: blog.description,
          image: blog.thumbnail.url,
        }}
        maxWidth={"4xl"}
      >
        <div className="space-y-4 md:px-12 w-full md:max-w-5xl mx-auto">



          {/* content */}
          <div className="min-w-full prose  text-neutral-800  dark:text-gray-100 prose-zinc dark:prose-invert p-0 prose-h1:my-4 prose-h2:my-2 hover:prose-a:text-sky-500 transition-all duration-150 ">
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
            <h1 className="text-lg font-bold text-neutral-800 dark:text-gray-100"># Details</h1>
            <p className="dark:text-gray-100">
              Published on <span>{moment(blog.publishedAt).format("LL")}</span> •{" "}
              {timeToRead.text}
            </p>
          </div>

          {/* categories */}
          <div className="flex space-x-2 dark:text-gray-100">
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
