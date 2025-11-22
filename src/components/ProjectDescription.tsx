import Image, { StaticImageData } from "next/image";

interface ProjectDescriptionProps {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
}

export default function ProjectDescription({
  image,
  title,
  desc,
  tech,
}: ProjectDescriptionProps) {
  return (
    <div className=" text-white">
      <div className="relative w-full h-64 xl:h-[300px] rounded-t-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <section className="p-5 space-y-6 overflow-y-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="">{desc}</p>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Technologies used</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm capitalize"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
