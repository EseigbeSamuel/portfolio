"use client";
import Image from "next/image";
interface props {
  image: string;
  title: string;
}

export default function TechStack({ image, title }: props) {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <div>
        <Image src={image} width={50} height={50} alt={title} unoptimized />
      </div>
      <p className="capitalize"> {title} </p>
    </div>
  );
}
