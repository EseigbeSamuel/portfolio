"use client";
interface props {
  image: string;
  title: string;
}

export default function TechStack({ image, title }: props) {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <div>
        <img 
          src={image} 
          width={50} 
          height={50} 
          alt={title} 
          loading="lazy" 
          decoding="async" 
        />
      </div>
      <p className="capitalize"> {title} </p>
    </div>
  );
}
