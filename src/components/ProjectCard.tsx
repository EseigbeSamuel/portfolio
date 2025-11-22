import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface SubProps {
  title: string;
}

interface Props {
  image: StaticImageData;
  title: string;
  desc: string;
  tech: string[];
  link?: string;
  onClick: () => void;
}

export default function ProjectCard({
  image,
  title,
  desc,
  tech,
  link,
  onClick,
}: Props) {
  return (
    <div
      className=" rounded-xl shadow-lg w-full 2xl:w-[400px] bg-brand-dark"
      onClick={onClick}
    >
      <div>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-t-lg bg-brand-orange w-full object-contain"
        />
      </div>

      <section className="p-4">
        <div className="mt-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-500 line-clamp-3">{desc}</p>
        </div>

        <section>
          <div className="flex gap-2 mt-3 flex-wrap">
            {tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm shadow-sm capitalize"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </section>
      <section className="p-4">
        {link ? (
          <Button
            label="View"
            fullWidth={true}
            onClick={() => window.open(link, "_blank")}
          />
        ) : onClick ? (
          <Button label="View" fullWidth={true} onClick={onClick} />
        ) : null}
      </section>
    </div>
  );
}
