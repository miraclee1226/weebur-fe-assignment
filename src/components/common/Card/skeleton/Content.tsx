interface ContentProps {
  lines?: number;
  className?: string;
}

export default function Content({
  lines = 2,
  className = "",
  ...props
}: ContentProps) {
  return (
    <div className={className} {...props}>
      <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-1"></div>
      {lines > 2 && (
        <>
          <div className="h-4 bg-gray-200 rounded w-4/5 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
        </>
      )}
    </div>
  );
}
