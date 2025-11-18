"use client";

import { navitems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FloatingNav } from "./ui/floating-navbar";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const screensize = () => setIsMobile(window.innerWidth < 765);
    screensize();
    window.addEventListener("resize", screensize);
    return () => window.removeEventListener("resize", screensize);
  }, []);

  return (
    <div className="w-full ">
      {isMobile ? (
        // <section className="p-5 flex items-center justify-center w-full">
        //   <div className="flex fixed p-5 top-2  items-center justify-between w-full h-[70px] border-brand-orange border rounded-xl shadow-sm backdrop-blur ">
        //     <nav className="flex w-full justify-between">
        //       {navitems.map((n) => (
        //         <Link
        //           key={n.path}
        //           href={n.path}
        //           className={`text-lg font-semibold duration-300 ${
        //             pathname === n.path
        //               ? "text-brand-red"
        //               : " hover:text-brand-red"
        //           }`}
        //         >
        //           {n.label}
        //         </Link>
        //       ))}
        //     </nav>
        //   </div>
        // </section>
        <section className="w-full flex justify-center px-5 py-3">
          <div
            className="
      fixed top-4 w-[90%] max-w-4xl
      flex items-center justify-between
      px-6 py-3
      border border-brand-orange
      rounded-2xl shadow-lg
      backdrop-blur-md bg-black/40
      z-50
    "
          >
            <nav className="flex gap-8">
              {navitems.map((n) => (
                <Link
                  key={n.path}
                  href={n.path}
                  className={`
            text-lg font-semibold transition-colors
            ${pathname === n.path ? "text-brand-red" : " hover:text-brand-red"}
          `}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      ) : (
        <div className="flex fixed left-0 top-0 px-[50px] lg:px-[100px] items-center justify-between w-full h-[70px]  shadow-sm backdrop-blur ">
          <section className="flex items-center gap-3">
            <Image src="/vercel.svg" alt="logo" width={30} height={30} />
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
              Samuel Eseigbe
            </h1>
          </section>

          <nav className="flex gap-6">
            {navitems.map((n) => (
              <Link
                key={n.path}
                href={n.path}
                className={`text-lg font-semibold duration-300 ${
                  pathname === n.path
                    ? "text-brand-red"
                    : " hover:text-brand-red"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <section>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/eseigbe-samuel-ba6891333/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 stroke-current" />
              </Link>

              <Link
                href="https://x.com/muel_se"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6 stroke-current" />
              </Link>

              <Link
                href="https://github.com/EseigbeSamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 stroke-current" />
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
