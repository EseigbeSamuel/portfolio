"use client";

import Button from "@/components/Button";
import { edu, Exp, Skills } from "@/data/data";
import { Download } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="space-y-10 max-w-[1440px] py-[60px] "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      {/* HEADER */}
      <motion.div
        className="text-center"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.15 },
          },
        }}
      >
        <h1 className="text-3xl lg:text-5xl font-bold"> About Me </h1>
        <p className="lg:text-xl text-center xl:px-[300px]">
          A passionate software engineer specializing in full-stack development,
          mobile applications, and automation solutions. I build scalable,
          user-centric applications that solve real world problems.
        </p>
      </motion.div>

      {/* MAIN GRID */}
      <section className="w-full grid lg:flex gap-10">
        {/* LEFT SIDE */}
        <motion.div
          id="who i am"
          className="w-full space-y-5"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
        >
          {/* Who I Am */}
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

          {/* Education */}
          <section className="space-y-5">
            <h2 className="font-semibold text-2xl">Education</h2>

            <motion.div
              className="p-5 rounded-xl bg-brand-dark"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <div className="space-y-2">
                <h1 className="font-semibold text-xl">
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
            </motion.div>

            <div className="w-full flex justify-center">
              <Button
                label="Download Resume"
                iconPosition="left"
                icon={<Download />}
              />
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-5"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {edu.map((e, i) => (
                <motion.div
                  key={i}
                  className="flex-col flex items-center py-5 text-center rounded-xl bg-brand-dark"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                >
                  <h1 className="text-brand-red font-bold text-2xl">
                    {e.number}
                  </h1>
                  <p className="capitalize text-lg">{e.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          id="skills"
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.25 },
            },
          }}
        >
          <h2 className="font-semibold text-2xl text-white mb-5">
            Skills & Expertise
          </h2>

          <motion.section
            className="space-y-6"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {Skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="shadow-xl rounded-2xl bg-brand-dark space-y-5 p-5 hover:scale-105 transition-transform duration-300"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45 },
                  },
                }}
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
              </motion.div>
            ))}
          </motion.section>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="font-semibold text-2xl text-white mb-5 text-center">
          Experience
        </h2>

        <motion.div
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {Exp.map((e, i) => (
            <motion.section
              key={i}
              className="w-full flex flex-col items-end rounded-xl bg-brand-red"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45 },
                },
              }}
            >
              <div className="w-[99.5%] bg-brand-dark p-5 space-y-3 rounded-xl">
                <section className="w-full flex items-center justify-between capitalize ">
                  <div>
                    <h2 className="text-xl font-semibold">{e.title}</h2>
                    <p className="text-brand-red">{e.place}</p>
                  </div>
                  <p>{e.date}</p>
                </section>

                <p>{e.desc}</p>

                <section>
                  <h3 className="text-lg font-medium">Key Features</h3>
                  <ul className="list-disc accent-brand-red px-5">
                    {e.features.map((features, i) => (
                      <li key={i}>{features}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </motion.section>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
