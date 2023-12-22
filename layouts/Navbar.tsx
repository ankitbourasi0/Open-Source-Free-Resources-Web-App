import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import {usePathname} from "next/navigation";
import Searchbar from "components/Searchbar";
import useMediaQuery from "components/utils/useCustomScreenSize";
import { TbMenu } from "react-icons/tb";
type Props = {};


const Navbar = (props: Props) => {
  // states
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

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
      href: "/aboutus"
    },
    {
      label: 'Contribute',
      href: "/contribution"
    },
  ]
  
 const isBreakPoint = useMediaQuery(768)
  return (
    <div className="flex fixed bg-[#CCE8CC]  z-50  justify-between lg:py-4 py-3 items-center w-full px-6 lg:px-12">
      {/* title */}
      <Link href="/">
        <h1 className="lg:text-3xl font-bluespirit ">Samosa-bytes</h1>
      </Link>

    {isBreakPoint ? 
    <button onClick={()=>console.log("hekko")}><TbMenu size={30}/></button>
     :(
      <ul className="flex space-x-6 text-sm items-center justify-center">
        {navlinks.map(link =>
          <Link href={link.href} key={link.href} className={classNames({
            "text-zinc-800 dark:text-white" : link.href === currentPath,
            "text-zinc-500 dark:text-gray-400" : link.href !== currentPath,
            "hover:text-zinc-900 dark:hover:text-gray-200 transition-colors" : true,
            

          })}>{link.label}</Link>)}
          {/* <Searchbar /> */}
      </ul>)
      }

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
