"use client";

import ProjectCard from "@/components/ProjectCard";
import { useModal } from "@/contexts/ModalContext";
import { projectData } from "@/data/data";
import { motion, Variants } from "framer-motion";
import ProjectDescription from "@/components/ProjectDescription";
import { StaticImageData } from "next/image";

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

export default function Projects() {
  const { openModal } = useModal();

  return (
    <motion.section 
      id="project" 
      className="max-w-[1440px] px-4 md:px-6 lg:px-8 py-[60px] w-full mx-auto space-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={CONTAINER}
    >
      <motion.div className="text-center space-y-4" variants={FADE_UP}>
        <motion.h1 className="text-4xl lg:text-6xl font-bold font-heading">
          Selected Works
        </motion.h1>
        <motion.p className="text-base lg:text-xl text-gray-400 max-w-2xl mx-auto">
          A curated selection of my recent full-stack applications and mobile experiences.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        variants={CONTAINER}
      >
        {projectData.map((p, i) => (
          <motion.div key={i} variants={FADE_UP} className="h-full">
            <ProjectCard
              priority={i < 3}
              onClick={() =>
                openModal(
                  <ProjectDescription
                    image={p.image}
                    title={p.title}
                    desc={p.desc}
                    tech={p.tech}
                    link={p.link}
                  />
                )
              }
              {...p}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
