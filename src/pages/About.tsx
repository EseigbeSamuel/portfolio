"use client";
import Button from "@/components/Button";
import { edu, Skills } from "@/data/data";
import { Download } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className="space-y-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold"> About Me </h1>
        <p className="text-xl text-center px-[350px]">
          A passionate software engineer specializing in full-stack development,
          mobile applications, and automation solutions. I build scalable, user
          centric applications that solve real world problems.
        </p>
      </div>
      <section className="w-full flex gap-10">
        <div className="w-full space-y-5 ">
          <section className="flex-col flex gap-5">
            <h2 className="font-semibold text-2xl">Who I Am</h2>
            <p className="">
              I'm a software engineer who prioritizes user-centric development
              and long-term maintainability. I approach development with a focus
              on anticipating potential issues early and building solutions that
              are optimized, efficient, and easy to work with. My code
              emphasizes clarity through meaningful variable names and logical
              structure, making it readable without excessive comments.
            </p>
            <span>
              I follow a modular and reusable approach, ensuring codebases
              remain scalable and straightforward for future contributors. My
              experience spans full-stack web development, mobile applications,
              and developer tools including Docker and Kubernetes.
            </span>
          </section>
          <section className="space-y-5">
            <h2 className="font-semibold text-2xl">Education</h2>
            <div className="p-5 rounded-xl bg-brand-dark">
              <div className="space-y-2">
                <h1 className=" font-semibold text-xl">
                  Bachelor of Engineering (B.E.) in Computer Science
                </h1>
                <h2 className="text-brand-red capitalize text-lg">
                  Lagos state university, lagos, Nigeria
                </h2>
                <p className="flex items-center gap-2 ">
                  CGPA:
                  <span className="text-brand-red text-xl font-semibold">
                    4.40/5
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full items-center justify-center flex">
              <Button
                label="Download Resume"
                iconPosition="left"
                icon={<Download />}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {edu.map((e, i) => (
                <div
                  key={i}
                  className="flex-col flex items-center py-5 text-center rounded-xl  bg-brand-dark "
                >
                  <h1 className="text-brand-red font-bold text-2xl">
                    {e.number}{" "}
                  </h1>
                  <p className="capitalize text-lg ">{e.label} </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="w-full">
          <h2 className="font-semibold text-2xl text-white mb-5">
            Skills & Expertise
          </h2>

          <section className="space-y-6">
            {Skills.map((skill, idx) => (
              <div
                key={idx}
                className="shadow-xl rounded-2xl bg-brand-dark space-y-5 p-5 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${skill.color} text-white text-2xl`}
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skill.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm shadow-sm capitalize"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
