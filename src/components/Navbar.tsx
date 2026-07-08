"use client";

import { navitems } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // IntersectionObserver to watch scroll sections
  useEffect(() => {
    const sections = ["#home", "#project", "#about", "#testimonials", "#contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger when the section is in the middle viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          if (sections.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.querySelector(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.querySelector(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Handle locking body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      {/* MOBILE HEADER BAR */}
      <section className="fixed top-0 left-0 w-full flex md:hidden justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md border-b border-brand-orange/20 z-50">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-brand-red to-brand-orange text-white font-bold text-sm shadow-md">
            SE
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Samuel Eseigbe
          </h1>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:text-brand-red transition-colors focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </section>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 w-screen h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-between p-10 md:hidden"
          >
            {/* Spacer for mobile header bar height */}
            <div className="h-[80px]" />

            <nav className="flex flex-col gap-8 items-center my-auto">
              {navitems.map((n) => (
                <motion.div key={n.path} variants={itemVariants}>
                  <Link
                    href={n.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-bold tracking-wider hover:text-brand-orange duration-300 font-heading relative py-2 block ${
                      activeSection === n.path ? "text-brand-orange" : "text-white"
                    }`}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Icons & Copyright at Bottom */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-6 border-t border-brand-orange/20 pt-6"
            >
              <div className="flex space-x-6">
                <Link
                  href="https://www.linkedin.com/in/samuel-eseigbe-ba6891333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-brand-red transition-colors duration-300"
                >
                  <FaLinkedin className="w-8 h-8" />
                </Link>
                <Link
                  href="https://x.com/osezelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-brand-red transition-colors duration-300"
                >
                  <FaTwitter className="w-8 h-8" />
                </Link>
                <Link
                  href="https://github.com/EseigbeSamuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-brand-red transition-colors duration-300"
                >
                  <FaGithub className="w-8 h-8" />
                </Link>
              </div>
              <p className="text-xs text-gray-500 font-mono">
                &copy; {new Date().getFullYear()} Samuel Eseigbe. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex fixed left-0 top-0 px-8 xl:px-16 items-center justify-between w-full h-[70px] shadow-sm backdrop-blur bg-black/40 border-b border-brand-orange/10 z-50">
        <section className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-red to-brand-orange text-white font-bold text-base shadow-md">
            SE
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Samuel Eseigbe
          </h1>
        </section>

        <nav className="flex gap-8">
          {navitems.map((n) => (
            <Link
              key={n.path}
              href={n.path}
              className={`text-sm font-medium duration-300 relative py-1 transition-all ${
                activeSection === n.path
                  ? "text-brand-orange after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-orange"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        
        <section>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/samuel-eseigbe-ba6891333/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>

            <Link
              href="https://x.com/osezelle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>

            <Link
              href="https://github.com/EseigbeSamuel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-orange transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
