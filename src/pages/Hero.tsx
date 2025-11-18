"use client";
import Button from "@/components/Button";
import TechStack from "@/components/TechStack";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { techStack } from "@/data/data";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screensize = () => setIsMobile(window.innerWidth < 765);
    screensize();
    window.addEventListener("resize", screensize);
    return () => window.removeEventListener("resize", screensize);
  }, []);
  return (
    <div
      id="hero"
      className=" min-h-[calc(100dvh-100px)] w-full max-w-[1440px] flex flex-col items-center justify-center gap-10"
    >
      {isMobile ? "" : <BackgroundBeams className="opacity-90 " />}

      <section className="text-center space-y-3 p-4">
        <h1 className="text-3xl lg:text-6xl lg:h-[70px] font-bold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
          Eseigbe Samuel
        </h1>
        <h1 className=" text-4xl lg:text-7xl font-bold ">
          Full-Stack Developer
        </h1>
        <h2 className="capitalize text-xl lg:text-3xl font-semibold">
          Building{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Innovative solutions
          </span>{" "}
          across platforms
        </h2>
        <p className=" lg:text-xl">
          Specializing in React, React native, Node.js and Angular. Creating
          seamless experience from web to mobile
        </p>
      </section>
      <section className="w-full">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {techStack.map((t, i) => (
            <TechStack key={i} {...t} />
          ))}
        </div>
      </section>
      <section className="grid md:flex gap-5 ">
        <Button
          label="View My Projects"
          size="large"
          //   iconPosition="left"
          //   icon={<User />}
          //   onClick={() => {
          //     route("/auth");
          //   }}
        />
        <Button
          label="Download Resume"
          size="large"
          variant="secondary"
          //   iconPosition="left"
          //   icon={<User />}
          //   onClick={() => {
          //     route("/auth");
          //   }}
        />
      </section>
    </div>
  );
}
