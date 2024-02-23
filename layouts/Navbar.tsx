import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Searchbar from "components/Searchbar";
import useMediaQuery from "components/utils/useCustomScreenSize";
import { TbMenu } from "react-icons/tb";
import WebImage from "components/WebImage";
import Image from "next/image";
type Props = {};


const Navbar = (props: Props) => {
  // states
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();
  
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  // Customize these placeholder values for your branding
  const logo = 'Samosa Bytes';
  const brandColor = 'blue';
  const textColor = 'gray-600';

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };


  //   instances
  const router = useRouter();

  // hooks
  useEffect(() => {
    setMounted(true);
  }, []);

  //currentPath 
  const currentPath = usePathname()

  // nav link 
  const navlinks = [
    {
      label: 'Home',
      href: "/"
    },
    {
      label: 'Search',
      href: "/search"
    },
    {
      label: 'About',
      href: "/about"
    },
    // {
    //   label: 'Contribute',
    //   href: "/contribution"
    // },
  ]
  const mobileNavLinks = [
    {
      name:"Home",
      href:'/',
      className: `${textColor} block py-2 px-4 hover:text-${brandColor}`,
      fn: toggleMenu
    },
    {
      name:"Search",
      href:'/search',
      className: `${textColor} block py-2 px-4 hover:text-${brandColor}`,
      fn: toggleMenu
    },
      {
        name:"About",
        href:'/about',
        className: `${textColor} block py-2 px-4 hover:text-${brandColor}`,
        fn: toggleMenu
      }
  ]

  const isBreakPoint = useMediaQuery(768)
  return (
    <div id="navbarbg" className="flex fixed border-b  top-0 left-0   z-50 bg-opacity-50 backdrop-blur-lg bg-white  justify-between  py-2 items-center w-full px-6 lg:px-12">

      <div className='flex w-full sm:max-w-[100px]  sm:ml-12 '>
        <div className='w-full max-w-[42px] sm:max-w-[70px] mr-1'> <WebImage src={"/SAMOSAIMAGES/PNGS/search11.png"} width={64} height={64} alt='samosa' /></div>
        {/* <div className='w-full max-w-[70px] ml-1'> <WebImage src={"/SAMOSAIMAGES/PNGS/search22.png"} width={64} height={64} alt='samosa'/></div> */}
      </div>
      <Link href={"/"} className={`mr-auto sm:block hidden font-bold text-2xl md:text-3xl  text-${brandColor} text-black  `}>{logo}</Link>

      {/* title */}
      {/* <Link href="/" className="flex-1 ">

      <h1 className="md:block hidden lg:text-xl font-brightmelody text-black ">Samosa bytes</h1>
      </Link> */}


      <div className="">
        {isBreakPoint ?

<div>
<div className="block lg:hidden">
<button
  onClick={() => setIsOpen(!isOpen)}
  className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
>
  <svg
    className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
  <svg
    className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
  </svg>
</button>
</div>

</div>
          : (
            <ul className="flex space-x-6 text-lg font-medium items-center justify-center  tracking-widest">
              {navlinks.map(link =>
                <Link href={link.href} key={link.href} className={classNames({
                  "text-zinc-700 dark:text-white": link.href === currentPath,
                  "text-zinc-400 dark:text-gray-500": link.href !== currentPath,
                  "hover:text-zinc-500 dark:hover:text-gray-200 transition-colors": true,

                })}>{link.label}</Link>)}
              {/* <Searchbar /> */}
            </ul>)
        }
      </div>

      {/* <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto 
     >
       <div className="text-sm lg:flex-grow">
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           First Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Second Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Third Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Fourth Link
         </a>
       </div>
  </div> */}
      <div
        className={
`${isOpen ? "block" : "hidden"}`}
      >
        <div className=" w-full h-full  pt-8 px-4 pb-4 md:flex md:items-center md:justify-end md:flex-grow-1">
          <ul className="text-lg font-medium md:flex md:items-center md:space-x-8">
            {mobileNavLinks.map((linkObject,index)=>
             <li key={index}> <Link href={linkObject.href} className={linkObject.className} onClick={toggleMenu}>{linkObject.name}</Link></li>)}
          </ul>
        </div>
      </div>
      

      {/* <button
        aria-label="Toogle Dark Mode"
        type="button"
        className="w-9 h-9 bg-zinc-200 rounded-lg dark:bg-zinc-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <>
                <MoonIcon className="w-5 h-5" />
              </>
            ) : (
              <>
                <SunIcon className="w-5 h-5" />
              </>
            )}
          </>
        )}
      </button> */}
    </div>
  );
};

export default Navbar;
