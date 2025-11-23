"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full  bg-black text-white ">
      {/* <BackgroundBeams className="opacity-90 " /> */}
      <Navbar />
      <div className="z-10 w-full py-[50px] px-[15px] lg:py-[50px] lg:px-[50px] 2xl:px-[100px] 2xl:items-center 2xl:flex 2xl:flex-col  ">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
