import Image from "next/image";

interface RatingProps {
  rating: number;
  className?: string;
}

const Rating = ({ rating, className = "", ...props }: RatingProps) => {
  return (
    <div className={`flex items-center gap-[2px] ${className}`} {...props}>
      <Image
        src="/assets/icons/star.svg"
        width={20}
        height={20}
        alt="별 아이콘"
      />
      <span>별점 {rating.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
