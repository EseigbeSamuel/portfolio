"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden  bg-black text-white ">
      {/* <BackgroundBeams className="opacity-90 " /> */}
      <Navbar />
      <div className="z-10 w-full py-[50px] px-[15px] lg:py-[50px] lg:px-[50px] 2xl:px-[100px] 2xl:items-center 2xl:flex 2xl:flex-col  ">
        <Hero />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

