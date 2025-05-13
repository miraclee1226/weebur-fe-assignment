import Image from "next/image";

interface ReviewProps {
  count?: number;
  className?: string;
}

const Review = ({ count, className = "", ...props }: ReviewProps) => {
  return (
    <div className={`flex items-center gap-[2px] ${className}`} {...props}>
      <Image
        src="/assets/icons/chat.svg"
        width={16}
        height={16}
        alt="말풍선 아이콘"
      />
      <span>후기 {count !== undefined ? `${count}개` : ""}</span>
    </div>
  );
};

export default Review;
