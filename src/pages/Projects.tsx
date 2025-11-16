import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/data/data";

export default function Projects() {
  return (
    <div id="project" className=" gap-10 flex flex-col ">
      <section className="text-center flex flex-col items-center gap-3">
        <h1 className="font-bold text-5xl ">Featured Projects</h1>
        <p className="text-xl text-center px-[400px]">
          A showcase of my diverse development projects spanning web
          applications and mobile apps.
        </p>
      </section>
      <section className="grid grid-cols-3 gap-10 ">
        {projectData.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </section>
    </div>
  );
}
