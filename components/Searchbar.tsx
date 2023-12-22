"use client"
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
type Props = {}

const Searchbar = () => {

    const [openModel, setOpenModel] = useState(false)
    const [Query, setQuery] = useState("")
    // console.log(openModel)
    return (
        <div>
            <button onClick={() => setOpenModel(prev => !prev)} className='w-9 h-9 bg-zinc-200 rounded-lg dark:bg-zinc-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all'>
                <IoIosSearch size={28} />
            </button>
            {openModel && <React.Fragment>
                <div className='z-50 backdrop-blur-sm top-0 left-0 fixed bg-black/30 dark:bg-white/20 w-full min-h-full flex justify-center items-start p-8'>

                 
                    <div className='max-w-[580px] fixed w-full'>
                    <div className='  w-full flex space-x-4'>
                        <input type='text' placeholder='Search' onChange={(e)=>setQuery(e.target.value)} className='px-4 py-3 w-full  bg-zinc-200 rounded-lg dark:bg-zinc-300 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all' />
                        <button onClick={() => setOpenModel(prev => !prev)} className=''>
                            <MdClose size={28} />
                        </button>
                    </div>
                    <p>{Query}</p>
                    </div>

                </div>
            </React.Fragment>

            }
        </div>
    )
}
export default Searchbar