"use client";

import Button from "@/components/Button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { techStack } from "@/data/data";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById("project");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Samuel-Osezele-Eseigbe-Resume.pdf"; // Update with actual path to resume
    link.download = "Samuel_Eseigbe_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] lg:min-h-screen w-full overflow-hidden  ">
      <BackgroundBeams className="opacity-90" />

      <motion.section
        className="text-center space-y-5 p-4 max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-2">
          <motion.h2
            className="text-sm md:text-lg font-mono tracking-widest text-brand-orange uppercase"
            variants={itemVariants}
          >
            Creative Software Engineer
          </motion.h2>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold font-sans tracking-tight text-white leading-tight"
            variants={itemVariants}
          >
            Samuel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">
              Eseigbe
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-base lg:text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed pt-2"
          variants={itemVariants}
        >
          Specializing in Next.js, React Native, and full-stack solutions. 
          Crafting digital experiences that merge high-end design with robust engineering.
        </motion.p>
      </motion.section>

      <motion.section
        className="relative z-10 w-full overflow-hidden mt-12 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-3 md:gap-4 justify-center items-center flex-wrap px-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange/40 hover:bg-brand-orange/10 transition-all duration-300 group cursor-default"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {tech.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col justify-center items-center md:flex-row gap-5 z-10 mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Button
            label="Explore Projects"
            size="large"
            onClick={handleViewProjects}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button
            label="Download CV"
            size="large"
            variant="secondary"
            onClick={handleDownloadResume}
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
