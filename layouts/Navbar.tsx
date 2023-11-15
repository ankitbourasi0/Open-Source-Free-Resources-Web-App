import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import {usePathname} from "next/navigation";

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
      href: "/categoriesPage"
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

  return (
    <div className="flex justify-between py-6 items-center w-full">
      {/* title */}
      <Link href="/">
        <h1 className="text-xl font-bold">Next IS Free</h1>
      </Link>


      <ul className="flex space-x-6 items-center justify-center">
        {navlinks.map(link =>
          <Link href={link.href} key={link.href} className={classNames({
            "text-zinc-800 dark:text-white" : link.href === currentPath,
            "text-zinc-500 dark:text-gray-400" : link.href !== currentPath,
            "hover:text-zinc-900 dark:hover:text-gray-200 transition-colors" : true,
            

          })}>{link.label}</Link>)}
      </ul>

      <button
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
      </button>
    </div>
  );
};

export default Navbar;
