interface TitleProps {
  className?: string;
}

export default function Title({ className = "", ...props }: TitleProps) {
  return (
    <div
      className={`h-6 bg-gray-200 rounded w-3/4 ${className}`}
      {...props}
    ></div>
  );
}
