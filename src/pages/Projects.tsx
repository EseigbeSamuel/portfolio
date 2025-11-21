// import ProjectCard from "@/components/ProjectCard";
// import { projectData } from "@/data/data";

// export default function Projects() {
//   return (
//     <div id="project" className=" gap-10 flex flex-col max-w-[1440px] ">
//       <section className="text-center flex flex-col items-center gap-3">
//         <h1 className="font-bold text-3xl lg:text-5xl ">Featured Projects</h1>
//         <p className="lg:text-xl text-center xl:px-[300px]">
//           A showcase of my diverse development projects spanning web
//           applications and mobile apps.
//         </p>
//       </section>
//       <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
//         {projectData.map((p, i) => (
//           <ProjectCard key={i} {...p} />
//         ))}
//       </section>
//     </div>
//   );
// }
"use client";

import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/data/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      id="project"
      className="gap-10 flex flex-col max-w-[1440px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {/* Header Animation */}
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

      {/* Grid Animation with Stagger */}
      <motion.section
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
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
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
}
