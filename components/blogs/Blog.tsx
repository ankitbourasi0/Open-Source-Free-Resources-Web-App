import CategoryBox from "components/CategoryBox";
import WebImage from "components/WebImage";
import moment from "moment";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";

type Props = {
  blog: Blog;
};

const Blog = ({ blog }: Props) => {
  const timeToRead = readingTime(blog.content.html);
  return (
    <Link href={`/blog/${blog.slug}` } >


      <div className="w-full  bg-white border-b-2 pt-4 pb-6  " >

        <div className="flex justify-between   items-star sm:mb-0  mb-2">
          <div className="w-[75%] sm:w-[60%] ">

            <h1 className="uppercase sm:text-[20px] text-[16px] font-bold line-clamp-2  ">{blog.title}</h1>
            <p className="text-[16px] hidden sm:mb-0  sm:block font-serif text-zinc-600 line-clamp-3">{blog.description}</p>

          </div>

          <div className="w-[30%] object-cover sm:block  ">
            <WebImage
              src={blog?.thumbnail?.url}
              height={1080}
              width={1920}
              alt={blog.title}
              className="aspect-square h-full w-full object-cover"
            />

          </div>
        </div>

        <div className="flex text-[14px] space-x-2 items-center ">
          {blog.categories.map((category, index) => (
            <CategoryBox category={category} key={index} />
          ))}
          <span className="">{timeToRead.text}</span>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
