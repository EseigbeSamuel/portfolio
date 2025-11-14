"use client";

import { navitems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
        <div className="flex fixed left-0 top-0 px-5 items-center justify-between w-full h-[70px] bg-white shadow-sm ">
          <section className="flex items-center gap-3">
            <Image src="/vercel.svg" alt="logo" width={30} height={30} />
            <h1 className="text-2xl font-semibold bg-gradient-to-l from-[#6D4AFF] to-[#4D7CFF] bg-clip-text text-transparent">
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
                    ? "text-[#3558DC]"
                    : " hover:text-[#3558DC]"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <section> icons icons icons </section>
        </div>
      )}
    </div>
  );
}
