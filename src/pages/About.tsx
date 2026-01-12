"use client";

import Button from "@/components/Button";
import { edu, Exp, Skills } from "@/data/data";
import { Download } from "lucide-react";
import { motion, Variants } from "framer-motion";

const CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const FADE_LEFT: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const FADE_RIGHT: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const SCALE_UP: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const STAT_CARD: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Eseigbe-Samuel-Osezele-Resume.pdf";
    link.download = "Samuel_Eseigbe_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export default function About() {
  return (
    <motion.div
      id="about"
      className="space-y-12 max-w-[1440px] px-4 md:px-6 lg:px-8 py-[50px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={CONTAINER}
    >
      {/* HEADER */}
      <motion.div className="text-center space-y-4" variants={FADE_UP}>
        <motion.h1
          className="text-3xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="lg:text-xl text-gray-300 xl:px-[300px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A passionate software engineer specializing in full-stack development,
          mobile applications, and automation solutions.
        </motion.p>
      </motion.div>

      {/* GRID WRAPPER */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={CONTAINER}
        >
          {/* WHO I AM */}
          <motion.div className="space-y-5" variants={FADE_LEFT}>
            <h2 className="font-semibold text-2xl">Who I Am</h2>
            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={FADE_UP}
            >
              I'm a software engineer who prioritizes maintainable, scalable
              systems and clean code principles. I focus on building
              user-centered applications that solve real-world problems while
              ensuring long-term code stability.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={FADE_UP}
            >
              I follow a modular approach, ensuring codebases remain scalable
              and easy for future contributors. My experience includes
              full-stack web development, mobile development, and DevOps tools
              like Docker and Kubernetes.
            </motion.p>
          </motion.div>

          {/* EDUCATION */}
          <motion.div className="space-y-6" variants={FADE_LEFT}>
            <h2 className="font-semibold text-2xl">Education</h2>

            <motion.div
              className="p-5 rounded-xl bg-brand-dark space-y-2"
              variants={SCALE_UP}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-semibold text-xl">
                Bachelor of Engineering (B.E.) in Computer Science
              </h3>
              <p className="text-brand-red text-lg capitalize">
                Lagos State University, Lagos, Nigeria
              </p>
              <p className="flex items-center gap-2">
                CGPA:
                <span className="text-brand-red text-xl font-semibold">
                  4.40/5
                </span>
              </p>
            </motion.div>

            <motion.div className="flex justify-center" variants={FADE_UP}>
              <Button
                label="Download Resume"
                iconPosition="left"
                icon={<Download />}
                onClick={handleDownloadResume}
              />
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-5" variants={CONTAINER}>
              {edu.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center py-5 bg-brand-dark rounded-xl cursor-pointer"
                  variants={STAT_CARD}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.h3
                    className="text-brand-red font-bold text-2xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2 + i * 0.1,
                    }}
                  >
                    {item.number}+
                  </motion.h3>
                  <p className="capitalize text-lg">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={CONTAINER}
        >
          <motion.h2 className="font-semibold text-2xl" variants={FADE_RIGHT}>
            Skills & Expertise
          </motion.h2>

          {Skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="p-5 rounded-2xl bg-brand-dark shadow-xl space-y-4"
              variants={FADE_RIGHT}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${skill.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold">{skill.title}</h3>
              </div>

              <motion.div className="flex flex-wrap gap-3" variants={CONTAINER}>
                {skill.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm capitalize"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#374151",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* EXPERIENCE */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={CONTAINER}
      >
        <motion.h2
          className="text-2xl font-semibold text-center"
          variants={FADE_UP}
        >
          Experience
        </motion.h2>

        {Exp.map((exp, i) => (
          <motion.div
            key={i}
            className="rounded-xl bg-brand-red p-[2px]"
            variants={FADE_UP}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-brand-dark p-5 rounded-xl space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.header
                className="flex flex-col sm:flex-row sm:justify-between gap-2"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div>
                  <h3 className="text-xl font-semibold capitalize">
                    {exp.title}
                  </h3>
                  <p className="text-brand-red capitalize">{exp.place}</p>
                </div>
                <span>{exp.date}</span>
              </motion.header>

              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {exp.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="font-medium text-lg mb-1">Key Features</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.features.map((f, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                    >
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
