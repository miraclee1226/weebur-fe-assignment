interface ImageProps {
  className?: string;
}

export default function Image({ className = "", ...props }: ImageProps) {
  return (
    <div className={`relative w-[280px] h-[200px] ${className}`} {...props}>
      <div className="w-full h-full bg-gray-200 rounded-xl"></div>
    </div>
  );
}
