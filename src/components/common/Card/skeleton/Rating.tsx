interface RatingProps {
  className?: string;
}

export default function Rating({ className = "", ...props }: RatingProps) {
  return (
    <div className={`flex items-center gap-[2px] ${className}`} {...props}>
      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
      <div className="w-16 h-4 bg-gray-200 rounded"></div>
    </div>
  );
}
