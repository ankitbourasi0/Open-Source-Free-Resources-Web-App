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
      label: 'Categories',
      href: "/category"
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
      name:"Category",
      href:'/category',
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

          <button
            className="flex items-center justify-center text-gray-400 md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-white"
            onClick={toggleMenu}
          >
            <TbMenu size={30} />

          </button>
          : (
            <ul className="flex space-x-6 text-sm items-center justify-center font-brightmelody tracking-widest">
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

      <div
        className={
          isOpen
            ? "fixed inset-0  md:hidden bg-white z-50  transition-opacity duration-300 ease-in-out opacity-100"
            : "fixed inset-0  md:hidden  z-50 bg-white transition-opacity duration-300 ease-in-out opacity-0"
        }
      >
        <div className="relative w-full h-full bg-white pt-8 px-4 pb-4 md:flex md:items-center md:justify-end md:flex-grow-1">
          <ul className="text-lg font-medium md:flex md:items-center md:space-x-8">
            {mobileNavLinks.map((linkObject,index)=>
             <li key={index}>
             <Link
               href={linkObject.href}
               className={linkObject.className}
               onClick={toggleMenu}
             >
               {linkObject.name}
             </Link>
           </li>
              )}
           
            
        
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
