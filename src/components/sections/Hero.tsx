"use client";
import Button from "@/components/Button";
import TechStack from "@/components/TechStack";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { techStack } from "@/data/data";
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
      <BackgroundBeams className="hidden md:block opacity-90" />

      <motion.section
        className="text-center space-y-4 p-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent pb-1"
          variants={itemVariants}
        >
          Samuel Eseigbe
        </motion.h1>
        <motion.h2
          className="text-4xl lg:text-7xl font-bold tracking-tight text-white"
          variants={itemVariants}
        >
          Full-Stack Developer
        </motion.h2>
        <motion.h3
          className="capitalize text-xl lg:text-3xl font-semibold text-gray-200"
          variants={itemVariants}
        >
          Building{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Innovative solutions
          </span>{" "}
          across platforms
        </motion.h3>
        <motion.p className="text-base lg:text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
          Specializing in Next.js, React Native, Expo, Svelte, Webflow, Node.js,
          and ASP.NET. Creating seamless experiences from web to mobile.
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
