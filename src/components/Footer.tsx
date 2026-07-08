import { navitems } from "@/data/data";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark border-t border-white/5 py-12 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Bio */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex gap-3 items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-red to-brand-orange text-white font-bold text-base shadow-md">
              SE
            </div>
            <h2 className="font-bold text-xl text-white tracking-tight">Samuel Eseigbe</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Full-stack developer passionate about creating innovative solutions 
            across web, mobile, and automation platforms. Let's build something 
            amazing together!
          </p>
          <div className="flex space-x-3 pt-2">
            <Link
              href="https://www.linkedin.com/in/samuel-eseigbe-ba6891333/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
            >
              <FaLinkedin className="w-4.5 h-4.5" />
            </Link>
            <Link
              href="https://x.com/osezelle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
            >
              <FaTwitter className="w-4.5 h-4.5" />
            </Link>
            <Link
              href="https://github.com/EseigbeSamuel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
            >
              <FaGithub className="w-4.5 h-4.5" />
            </Link>
          </div>
        </div>

        {/* Center Column: Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="font-semibold text-white uppercase text-xs tracking-wider">Quick Links</h3>
          <nav className="flex flex-col gap-2.5">
            {navitems.map((n) => (
              <Link
                key={n.path}
                href={n.path}
                className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-200"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Column: Services */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="font-semibold text-white uppercase text-xs tracking-wider">Services</h3>
          <ul className="flex flex-col gap-2.5 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>API Integrations</li>
            <li>UI/UX Design Implementation</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Samuel Eseigbe. All rights reserved.</p>
        <p className="font-mono">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
