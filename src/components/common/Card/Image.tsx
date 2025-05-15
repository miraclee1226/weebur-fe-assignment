import Image from "next/image";
import { useState } from "react";

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CardImage({
  src,
  alt,
  className = "",
  ...props
}: CardImageProps) {
  const [imgError, setImgError] = useState(false);
  const fallbackImageSrc = "/assets/images/error-fallback.png";

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className={`relative w-[280px] h-[200px] ${className}`} {...props}>
      <Image
        src={imgError ? fallbackImageSrc : src}
        alt={alt}
        fill
        sizes="200px"
        className="rounded-xl object-cover"
        onError={handleImageError}
      />
    </div>
  );
}
