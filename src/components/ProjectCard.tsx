import Image from "next/image";

interface SubProps {
  title: string;
}

interface Props {
  image: string;
  title: string;
  desc: string;
  tech: SubProps[];
}

export default function ProjectCard({ image, title, desc, tech }: Props) {
  return (
    <div className=" rounded-xl shadow-lg w-[400px] bg-brand-dark">
      <div>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="rounded-t-lg bg-yellow-400"
        />
      </div>

      <section className="p-4">
        <div className="mt-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-500">{desc}</p>
        </div>

        <div className="flex gap-2 mt-3 flex-wrap">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-md bg-gray-200 dark:bg-gray-700"
            >
              {t.title}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
