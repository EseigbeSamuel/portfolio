"use client";
import Button from "@/components/Button";
import TechStack from "@/components/TechStack";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { techStack } from "@/data/data";

export default function Hero() {
  return (
    <div
      id="hero"
      className=" min-h-[calc(100dvh-100px)] w-full flex flex-col items-center justify-center gap-10"
    >
      <BackgroundBeams className="opacity-90 " />

      <section className="text-center space-y-3 p-4">
        <h1 className="text-6xl h-[70px] font-bold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
          Samuel Eseigbe
        </h1>
        <h1 className="text-7xl font-bold text-white">Full-Stack Developer</h1>
        <h2 className="capitalize text-3xl font-semibold">
          Building{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Innovative solutions
          </span>{" "}
          across platforms
        </h2>
        <p className="text-xl">
          Specializing in React, React native, Node.js and Angular. Creating
          seamless experience from web to mobile
        </p>
      </section>
      <section className="flex items-center w-full ">
        <div className="flex items-center justify-evenly w-full">
          {techStack.map((t, i) => (
            <TechStack key={i} {...t} />
          ))}
        </div>
      </section>
      <section className="flex gap-5 ">
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
