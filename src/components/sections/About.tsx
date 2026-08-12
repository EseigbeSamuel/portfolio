"use client";

import Button from "@/components/Button";
import { edu, Exp, Skills } from "@/data/data";
import { Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

const CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Samuel Eseigbe - Software Engineer - Resume.pdf";
  link.download = "Samuel_Eseigbe_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function About() {
  return (
    <motion.div
      id="about"
      className="space-y-16 max-w-[1440px] px-4 md:px-6 lg:px-8 py-[60px] w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={CONTAINER}
    >
      <motion.div className="text-center space-y-4" variants={FADE_UP}>
        <motion.h1 className="text-4xl lg:text-6xl font-bold font-heading">
          Behind the Code
        </motion.h1>
        <motion.p className="text-base lg:text-xl text-gray-400 max-w-2xl mx-auto">
          A passionate software engineer specializing in full-stack development,
          mobile applications, and automation solutions.
        </motion.p>
      </motion.div>

      {/* BENTO GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
        variants={CONTAINER}
      >
        {/* WHO I AM */}
        <motion.div
          variants={FADE_UP}
          className="md:col-span-2 lg:col-span-2 h-full"
        >
          <SpotlightCard className="p-8 h-full flex flex-col justify-center">
            <h2 className="font-semibold text-2xl mb-4 font-heading text-white">
              The Philosophy
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I'm a software engineer who prioritizes maintainable, scalable
              systems and clean code principles. I focus on building
              user-centered applications that solve real-world problems while
              ensuring long-term code stability.
            </p>
          </SpotlightCard>
        </motion.div>

        {/* STATS / NUMBERS */}
        <motion.div
          variants={FADE_UP}
          className="md:col-span-1 lg:col-span-1 grid gap-6"
        >
          {edu.map((item, i) => (
            <SpotlightCard
              key={i}
              className="p-6 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-brand-orange font-bold text-4xl font-mono mb-2">
                {item.number}+
              </h3>
              <p className="text-gray-300 text-sm uppercase tracking-widest">
                {item.label}
              </p>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* SKILLS HIGHLIGHT */}
        <motion.div
          variants={FADE_UP}
          className="md:col-span-3 lg:col-span-1 h-full"
        >
          <SpotlightCard className="p-8 h-full">
            <h2 className="font-semibold text-xl mb-6 text-white font-heading">
              Core Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {Skills.flatMap((s) => s.tech)

                .map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs hover:bg-brand-red/20 hover:border-brand-red/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              <span className="px-3 py-1.5 text-brand-orange text-xs font-semibold">
                And more...
              </span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={FADE_UP}
          className="md:col-span-3 lg:col-span-2 h-full"
        >
          <SpotlightCard className="p-8 h-full flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-2xl mb-6 text-white font-heading">
                Education
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-200">
                    Software Development
                  </h3>
                  <p className="text-brand-red text-sm mt-1">
                    BAFUTO Institute of Information and Technology
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-200">
                    B.A. English Language
                  </h3>
                  <p className="text-brand-red text-sm mt-1">
                    Lagos State University (CGPA: 4.40/5)
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* RESUME CTA */}
        <motion.div
          variants={FADE_UP}
          className="md:col-span-3 lg:col-span-2 h-full"
        >
          <SpotlightCard className="p-8 h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-dark to-brand-red/10">
            <h2 className="font-semibold text-2xl mb-4 text-white font-heading">
              Want the full story?
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Download my comprehensive resume to see all my experience, skills,
              and educational background.
            </p>
            <Button
              label="Download Resume"
              iconPosition="left"
              icon={<Download className="w-4 h-4" />}
              onClick={handleDownloadResume}
            />
          </SpotlightCard>
        </motion.div>
      </motion.div>

      {/* EXPERIENCE LIST */}
      <motion.div className="space-y-8 pt-10" variants={CONTAINER}>
        <motion.h2
          className="text-3xl font-bold font-heading text-center"
          variants={FADE_UP}
        >
          Professional Experience
        </motion.h2>

        <div className="grid gap-6">
          {Exp.map((exp, i) => (
            <motion.div key={i} variants={FADE_UP}>
              <SpotlightCard className="p-5 md:p-8">
                <header className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4 mb-5 md:mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold capitalize text-white">
                      {exp.title}
                    </h3>
                    <p className="text-brand-orange text-sm md:text-base font-medium mt-1">
                      {exp.place}
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-gray-500 py-1 px-3 bg-white/5 rounded-full self-start border border-white/10">
                    {exp.date}
                  </span>
                </header>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {exp.desc}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white text-xs tracking-widest uppercase">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-gray-300 text-sm md:text-base items-start"
                      >
                        <span className="text-brand-red mt-1 text-[10px]">
                          ■
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
