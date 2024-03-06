import WebImage from 'components/WebImage';
import CategoryCard from 'components/category/CategoryCard';
import useMediaQuery from 'components/utils/useCustomScreenSize';
import { GetStaticProps } from 'next';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';
import Script from 'next/script';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import services from 'services';
type Props = {
  blogs: Blog[];
};


const Categories = ({ blogs }: Props) => {
  const [query, setQuery] = useState('');
  const [isCategoryButtonClicked, setisCategoryButtonClicked] = useState(true)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    <Script type='text/javascript' src='//pl22573999.profitablegatecpm.com/0b/70/41/0b7041be3c65bda5fb81457794288a43.js'></Script>

    console.log(blogs)
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
  const [AllCategories, setAllCategories] = useState<string[][]>([])

  useEffect(() => {

    let temp = blogs.map(blog => blog.categories.map(e => e.name).filter(
      (value, index, current_value) => current_value.indexOf(value) === index
    ))
    setAllCategories(temp)

  }, [isCategoryButtonClicked])


  const filtered = multipleSearch(blogs)
  const isBreakPoint = useMediaQuery(768)
  return (

    <div id='categoriesbg' className='w-full bg-[#CCE8CC]/50 min-h-screen py-12'>

      {isCategoryButtonClicked ? (<React.Fragment>
        <div className='w-full my-12 text-gray-800 text-center text-3xl lg:text-5xl font-semibold'>
          <h1 className=' '>Search Simple,
          </h1>
          <p className='font-beloved '>as  <span className='font-poppins'>Never Before!!</span></p>

        </div>
        <div className='w-full mx-auto mb-6 max-w-6xl flex flex-col items-center'>
          <div className='flex w-full max-w-xl mx-auto '>
            {isBreakPoint ? "" : (
              <div className='w-full hidden sm:block sm:max-w-[70px] mr-1'> <WebImage src={"/SAMOSAIMAGES/PNGS/search11.png"} width={64} height={64} alt='samosa' /></div>
            )}
            <input type="text" onChange={handleChange} placeholder="Type here" className="input input-bordered w-full mx-2" />
            {isBreakPoint ? "" : (
              <div className='w-full hidden sm:block sm:max-w-[70px]  ml-1'> <WebImage src={"/SAMOSAIMAGES/PNGS/search22.png"} width={64} height={64} alt='samosa' /></div>
            )}

          </div>
          {/* <button className="btn my-4 btn-sm" onClick={() => setisCategoryButtonClicked(prev => !prev)}>Categories<FaArrowRight /> </button> */}
        </div>
      </React.Fragment>) : <div className='w-full my-12 text-center text-3xl lg:text-5xl font-semibold'>
        
        <h1 className=' '>Search Simple,</h1>
        <p className='font-beloved '>as  <span className='font-poppins'>Never Before!!</span></p>
        <p className='text-sm mb-2'>Choose categories</p>
        <div className='grid lg:grid-cols-4 gap-2 max-w-2xl mx-auto'>
          {AllCategories.map(e => e.map(e => <p className='text-sm px-1 py-1 bg-gray-100 rounded-2xl ' >{e}</p>))}
        </div>
        <button className="btn my-4 btn-sm" onClick={() => setisCategoryButtonClicked(prev => !prev)}><FaArrowLeft />Search </button>

      </div>}

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
      revalidate: 3600
     
    },
  };
};
