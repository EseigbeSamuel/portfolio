import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface ProjectDescriptionProps {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
  link?: string;
}

export default function ProjectDescription({
  image,
  title,
  desc,
  tech,
  link,
}: ProjectDescriptionProps) {
  return (
    <div className="text-white flex flex-col h-full max-h-[85vh]">
      <div className="relative w-full h-64 xl:h-[300px] shrink-0 rounded-t-xl overflow-hidden">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
      </div>

      <section className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">{desc}</p>
        <div className="space-y-4 pt-2">
          <h3 className="text-lg font-semibold text-gray-200">Technologies used</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-gray-800/80 border border-gray-700 text-gray-200 rounded-full text-xs font-mono capitalize shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {link ? (
          <div className="pt-6 mt-6 border-t border-gray-800">
            <Button
              label="Live Demo"
              fullWidth={true}
              onClick={() => window.open(link, "_blank")}
              variant="secondary"
              icon={<ExternalLink className="w-4 h-4" />}
            />
          </div>
        ) : null}
      </section>
    </div>
  );
}
