interface ReviewProps {
  className?: string;
}

export default function Review({ className = "", ...props }: ReviewProps) {
  return (
    <div className={`flex items-center gap-[2px] ${className}`} {...props}>
      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
      <div className="w-20 h-4 bg-gray-200 rounded"></div>
    </div>
  );
}
