"use client";

import { navitems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const screensize = () => setIsMobile(window.innerWidth <= 769);
    screensize();
    window.addEventListener("resize", screensize);
    return () => window.removeEventListener("resize", screensize);
  }, []);

  return (
    <div className="w-full ">
      {isMobile ? (
        <div>this is mobile</div>
      ) : (
        <div className="flex fixed left-0 top-0 px-[100px] items-center justify-between w-full h-[70px]  shadow-sm backdrop-blur ">
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
              <FaLinkedin className="w-6 h-6 stroke-current" />
              <FaTwitter className="w-6 h-6 stroke-current" />
              <FaGithub className="w-6 h-6 stroke-current" />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
