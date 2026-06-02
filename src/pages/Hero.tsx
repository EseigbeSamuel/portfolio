"use client";
import Button from "@/components/Button";
import TechStack from "@/components/TechStack";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { techStack } from "@/data/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const techStackVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screensize = () => setIsMobile(window.innerWidth < 765);
    screensize();
    window.addEventListener("resize", screensize);
    return () => window.removeEventListener("resize", screensize);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Samuel-Osezele-Eseigbe-Resume.pdf";
    link.download = "Samuel_Eseigbe_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className=" min-h-[calc(100dvh-100px)] w-full max-w-[1440px] flex flex-col items-center justify-center gap-10"
    >
      {isMobile ? "" : <BackgroundBeams className="opacity-90 " />}

      <motion.section
        className="text-center space-y-3 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className=" text-3xl lg:text-6xl lg:h-[70px] font-bold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Samuel Eseigbe
        </motion.h1>
        <motion.h1
          className=" text-4xl lg:text-7xl font-bold "
          variants={itemVariants}
        >
          Full-Stack Developer
        </motion.h1>
        <motion.h2
          className="capitalize text-xl lg:text-3xl font-semibold"
          variants={itemVariants}
        >
          Building{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Innovative solutions
          </span>{" "}
          across platforms
        </motion.h2>
        <motion.p className=" lg:text-xl font-mono" variants={itemVariants}>
          Specializing in Next.js, React native, Webflow, Node.js and ASP.NET.
          Creating seamless experience from web to mobile
        </motion.p>
      </motion.section>

      <motion.section
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {techStack.map((t, i) => (
            <motion.div
              key={i}
              variants={techStackVariants} // Use the specialized variant
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <TechStack {...t} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col justify-center items-center md:flex-row gap-5 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Button
            label="View My Projects"
            size="large"
            onClick={handleViewProjects}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button
            label="Download Resume"
            size="large"
            variant="secondary"
            onClick={handleDownloadResume}
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
