import CategoryCard from 'components/category/CategoryCard';
import { GetStaticProps } from 'next';
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import services from 'services';
type Props = {
  blogs: Blog[];
};


const Categories = ({ blogs }: Props) => {
  const [query, setQuery] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const multipleSearch = (array: Blog[]) => {
    return array.filter(
      (el) =>
        Object.keys(el).some((parameter) =>
          (el as { [key: string]: any })[parameter].toString().includes(query)
        )
    )
  }
  const filtered = multipleSearch(blogs)
  return (
    
    <div className='w-full bg-[#CCE8CC]/50 min-h-screen py-12'>
      <div className='w-full my-12 text-center text-3xl lg:text-5xl font-semibold'>
        <h1 className=' '>Search Simple,
        </h1>
        <p className='font-beloved '>as  <span className='font-poppins'>Never Before!!</span></p>

      </div>
      <div className='w-full mx-auto mb-6 max-w-6xl flex flex-col items-center'>
        <input type="text" onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-[18rem] lg:max-w-lg" />
        <button className="btn my-4 btn-sm">Categories<FaArrowRight /> </button>
      </div>

      <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4  px-6 lg:max-w-5xl mx-auto'>
        {filtered.map((blog, index) => (
          <div key={index}>
            <CategoryCard blog={blog} />
          </div>
        ))
        }

      </div>

    </div>
  )
}

export default Categories

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await services.queryBlogs();

  return {
    props: {
      blogs,
    },
  };
};
