import Image from "next/image";

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className = "", ...props }: CardImageProps) => {
  return (
    <div className={`relative w-[280px] h-[200px] ${className}`} {...props}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="200px"
        className="rounded-xl object-cover"
      />
    </div>
  );
};

export default CardImage;
