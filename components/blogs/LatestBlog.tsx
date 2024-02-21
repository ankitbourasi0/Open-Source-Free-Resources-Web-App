import CategoryBox from "components/CategoryBox";
import WebImage from "components/WebImage";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
type Props = {
  blog: Blog;
};

const LatestBlog = ({ blog }: Props) => {
  const timeToRead = readingTime(blog.content.html);
  // console.log(timeToRead)

  return (
    <div className="">

      {/* Blog */}
      <Link href={`/blog/${blog.slug}`}>

        <div className="group p-3 min-h-[320px] sm:p-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-100 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl bg-black ">
            {/* image */}

            <WebImage

              src={blog?.thumbnail?.url}
              width={1920}
              height={1080}
              alt={"image"}
              className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </div>
          <div className="group mt-2 grid grid-cols-1  w-full">
            <div className=" min-h-[120px]">
              {/* heading */}
              <div className="  ">
                <h4 className="text-[18px] font-semibold text-gray-800 dark:text-white line-clamp-2 ">
                  {blog.title}
                </h4>
              </div>

              {/* description */}
              <div className=" ">
                <p className=" text-[14px]   text-gray-500 dark:text-gray-300 line-clamp-3">
                  {blog.description}
                </p>
              </div>
            </div>



            <div className="flex justify-between items-center text-[12px] mt-2">
              <span className=" ">Read more</span>
              <span className=" ">  {timeToRead.text}</span>
            </div>
          </div>
          {/* categories */}
          {/* <div className="flex space-x-2">
              {blog.categories.map((category, index) => (
                <CategoryBox category={category} key={category.name} />
              ))}
            </div> */}
        </div>







      </Link>












    </div>
  );
};

export default LatestBlog;
