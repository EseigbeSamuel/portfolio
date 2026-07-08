import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import { ExternalLink } from "lucide-react";

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
  const handleLiveDemo = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleViewDetails = () => {
    onClick();
  };

  return (
    <div
      className="group rounded-xl border border-white/5 bg-brand-dark hover:border-brand-red/40 hover:shadow-[0_0_30px_rgba(223,35,38,0.1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full overflow-hidden"
      onClick={onClick}
    >
      <div className="relative w-full h-48 overflow-hidden bg-zinc-950 border-b border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <section className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="space-y-4">
          {/* Tech Stack Badges */}
          <div className="flex gap-1.5 flex-wrap">
            {tech.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded text-xs font-mono capitalize"
              >
                {t}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2 py-0.5 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded text-xs font-mono">
                +{tech.length - 4} more
              </span>
            )}
          </div>

          <div className="pt-2 flex w-full items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {link ? (
              <>
                <Button
                  label="Live Demo"
                  fullWidth={true}
                  onClick={handleLiveDemo}
                  variant="secondary"
                  size="small"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                />
                <Button 
                  label="Details" 
                  fullWidth={true} 
                  onClick={handleViewDetails} 
                  size="small"
                />
              </>
            ) : (
              <Button 
                label="View Details" 
                fullWidth={true} 
                onClick={handleViewDetails}
                size="small"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
