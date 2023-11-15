import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import services from "@/services/index";
import Container from "../layouts/Container";
import LatestBlog from "components/blogs/LatestBlog";
import Blogs from "./blogspage";
import Link from "next/link";
import Contribution from "./contribution";

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

  console.log("All blogs:",blogs)
  return (
   <div>
     <Container meta={{ title: "Next Dev" }}>
      <h2 className="text-lg font-semibold mb-2">Latest Blog</h2>

      <div className="w-full max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">

   
      
        {/* latest blog */}
        {blogs.slice(-3).map(item=>
          
          <LatestBlog blog={item} key={item.id} />
    
          )}
    
  
        {/* blogs */}
        {/* <Blogs blogs={blogs.slice(3, 10)} /> */}
      </div>

      

      
    </Container>
          <div className="max-w-3xl mx-auto w-full">
          <Blogs blogs={blogs} />
          </div>
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