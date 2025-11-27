"use client";

import ProjectCard from "@/components/ProjectCard";
import { useModal } from "@/contexts/ModalContext";
import { projectData } from "@/data/data";
import { motion } from "framer-motion";
import ProjectDescription from "../components/ProjectDescription";
import { StaticImageData } from "next/image";

interface ProjectProps {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
  link?: string;
}

export default function Projects() {
  const { openModal } = useModal();

  return (
    <motion.div
      id="project"
      className="gap-10 flex flex-col py-[60px] max-w-[1440px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <motion.section
        className="text-center flex flex-col items-center gap-3"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
      >
        <h1 className="font-bold text-3xl lg:text-5xl">Featured Projects</h1>
        <p className="lg:text-xl text-center xl:px-[300px]">
          A showcase of my diverse development projects spanning web
          applications and mobile apps.
        </p>
      </motion.section>

      <motion.section
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-10"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projectData.map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <ProjectCard
              onClick={() =>
                openModal(
                  <ProjectDescription
                    image={p.image}
                    title={p.title}
                    desc={p.desc}
                    tech={p.tech}
                  />
                )
              }
              {...p}
            />
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
}
