import { navitems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="lg:flex w-full space-y-5 justify-between lg:px-[100px] px-5 py-10 bg-brand-dark ">
      <section className="space-y-3 lg:space-y-5">
        <div className="flex gap-3 items-center">
          <Image src="/vercel.svg" alt="logo" width={30} height={30} />
          <h2 className="font-semibold text-2xl">Samuel Eseigbe</h2>
        </div>
        <div>
          <p>
            Full-stack developer passionate about creating innovative solutions{" "}
            <br />
            across web, mobile, and automation platforms. Let's build something{" "}
            <br />
            amazing together!
          </p>
        </div>
        <div className="flex space-x-4">
          <FaLinkedin className="w-6 h-6 stroke-current" />
          <FaTwitter className="w-6 h-6 stroke-current" />
          <FaGithub className="w-6 h-6 stroke-current" />
        </div>
      </section>
      <section className="space-y-3 lg:space-y-5">
        <h2 className="font-semibold text-2xl">Quick Links</h2>
        <nav className="grid gap-4 lg:text-center">
          {navitems.map((n) => (
            <Link
              key={n.path}
              href={n.path}
              className={`text-lg font-semibold duration-300 ${
                pathname === n.path ? "text-brand-red" : " hover:text-brand-red"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </section>
      <section className="space-y-3 lg:space-y-5">
        <h2 className="font-semibold text-2xl lg:text-center">Services</h2>
        <ul className="text-lg space-y-4 font-semibold lg:text-center">
          <li>Web Development</li>
          <li>Mobile Apps</li>
        </ul>
      </section>
    </div>
  );
}
