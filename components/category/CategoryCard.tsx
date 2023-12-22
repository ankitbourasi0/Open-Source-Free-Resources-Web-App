import React from 'react'
import Image from 'next/image';
import CategoryBox from 'components/CategoryBox';
import Link from 'next/link';
type Props = {
    blog: Blog;
  };

const CategoryCard = ({ blog }: Props) => {
  return (
    <Link href={`/blog/${blog.slug}` } >
    <div className="card max-w-[20rem] min-h-[24rem] h-full bg-base-100 shadow-xl hover:scale-105 transition-all  duration-300">
    <figure><Image   height={1080}
              width={1920}
              alt={blog.title}  src={blog?.thumbnail?.url}  /></figure>
    <div className="card-body">
      <h2 className="card-title">
      {blog.title}
        
      </h2>
      <p className="text-[16px] hidden sm:mb-0  sm:block font-serif text-zinc-600 line-clamp-3 sm:line-clamp-3">{blog.description}</p>
      <div className="card-actions justify-end">
      {blog.categories.map((category, index) => (
           
           <CategoryBox category={category} key={index} />
          ))}
      
      </div>
    </div>
  </div>
</Link>
  )
}

export default CategoryCard