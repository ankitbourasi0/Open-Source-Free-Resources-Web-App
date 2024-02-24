"use client"
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import services from "@/services/index";
import Container from "../layouts/Container";
import LatestBlog from "components/blogs/LatestBlog";
import Blogs from "./blogspage";
import Link from "next/link";
import Contribution from "./contribution";
import Navbar from "layouts/Navbar";
import React, { Suspense, useState } from "react";
import WebImage from "components/WebImage";
import { MdAllInclusive } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { RiCoupon3Fill } from "react-icons/ri";
import { SiFreedesktopdotorg } from "react-icons/si";
import { RiArticleFill } from "react-icons/ri";
import { SiPaloaltosoftware } from "react-icons/si";
import { CgTranscript } from "react-icons/cg";
import { GrResources } from "react-icons/gr";
import { SiSololearn } from "react-icons/si";

/*

List
5. Sharer
3. Deployment
4. On Demand Revalidation

*/

type Props = {
  blogs: Blog[];
};





const Home = ({ blogs }: Props) => {
// console.log("helelooooooooooooo",blogs,"")

  const sideBar = [
    {
      buttonName: "All",
      value: "All",
      buttonIcon: <MdAllInclusive fontSize={24} color={"blue"} />
    },
    {
      buttonName: "Course",
      value: "Course",
      buttonIcon: <SiCoursera fontSize={24} color={"green"} />
    },
    {
      buttonName: "Coupons",
      value: "Coupons",
      buttonIcon: <RiCoupon3Fill fontSize={24} color={"red"} />
    },
    {
      buttonName: "Freebies",
      value: "Freebies",
      buttonIcon: <SiFreedesktopdotorg fontSize={24} color={"blue"} />
    },
    {
      buttonName: "Guide",
      value: "Guide",
      buttonIcon: <RiArticleFill fontSize={24} color={"green"} />
    },
    {
      buttonName: "Software",
      value: "Software",
      buttonIcon: <SiPaloaltosoftware fontSize={24} color={"blue"} />
    },
    {
      buttonName: "Tools & Scripts",
      value: "Scripts",
      buttonIcon: <CgTranscript fontSize={24} color="black" />
    },
    {
      buttonName: "Tutorial",
      value: "Tutorial",
      buttonIcon: <SiSololearn fontSize={24} color="orange" />
    },
    {
      buttonName: "Resources",
      value: "Resources",
      buttonIcon: <GrResources fontSize={24} color="blue" />
    },
  ]

  const [sidebarValues, setsidebarValues] = useState("All")
  // console.log(sidebarValues)
  // console.log("All blogs:",blogs)
  const data = blogs.filter(e => e.contentType.contentName === sidebarValues)
  // console.log(data.length == 0)
  return (
    <div id="bg" className="bg-white w-full  min-h-screen pt-1 pb-6 ">

      <Container meta={{ title: "SamosaBytes" }} maxWidth="6xl"  >
        {/* <h2 className="text-lg font-semibold mb-2">Latest Blog</h2> */}

        <div className="w-full flex max-w-7xl mx-auto bg-white ">
          <div className="w-full    pt-20 grid gap-4 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3  no-scrollbar  md:max-h-[80vh]  lg:max-h-[90vh]  overflow-y-scroll ">

            {/* latest blog */}

            {sidebarValues !== "All" ? (data.length === 0 ?
              <div className="w-full justify-center items-center mx-auto ">
                <Image src={"/BG/empty.svg"} className=" md:min-w-[600px] min-w-[130px] mx-auto  " fill={false} width={420} height={360} alt="No Blogs" />
              </div> :
              data.map(item => 
           
              <LatestBlog blog={item} key={item.id} />
                
           
              )
              )
              :
              (blogs.map(item =>
                <Suspense key={item.id} fallback={<div id="loader"></div>}>
                <LatestBlog blog={item} key={item.id} />

                </Suspense>
                
                ))
            }

          </div>
          <div className="w-full max-w-[250px] mx-4 mt-20 h-full min-h-[70vh] max-h-[75vh] hidden md:block   sm:p-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-100 shadow-2xl shadow-gray-600/10 backdrop-blur-sm  ">
            <h2 className="my-2 text-black">Categories</h2>
            <div className="w-full flex flex-col ">
              {sideBar.map(btn => <button key={btn.buttonName} onClick={() => setsidebarValues(btn.value)} className="flex py-2 border-b mb-2 border-zinc-100 items-center space-x-2 text-left dark:text-white text-sm  w-full text-gray-800 ">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> */}
                {btn.buttonIcon}
                <p> {btn.buttonName}</p>

              </button>)}

            </div>
          </div>
       
        </div>
        

      </Container>

      
      {/* <img src="./BG/9.jpg" className="w-full min-h-screen" /> */}



      {/* All Blogs  */}
      {/* <div className="max-w-3xl grid  grid-cols-3 mx-auto w-full">
          <Blogs blogs={blogs} />
    </div> */}


    </div>
  );
};

export default Home;



export const getStaticProps: GetStaticProps = async () => {
  const blogs = await services.queryBlogs();

  return {
    props: {
      blogs,

    },
  };
};
