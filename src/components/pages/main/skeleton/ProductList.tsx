import { ViewMode } from "@/types/common";
import CardSkeleton from "./Card";

interface SkeletonItemProps {
  viewMode: ViewMode | null;
}

export default function ProductListSkeleton({ viewMode }: SkeletonItemProps) {
  const itemCount = viewMode === "grid" ? 20 : 10;

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="h-6 bg-gray-200 rounded w-20"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded w-24"></div>
          <div className="h-6 bg-gray-200 rounded w-1"></div>
          <div className="h-6 bg-gray-200 rounded w-24"></div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-4 gap-x-8 gap-y-20">
          {Array.from({ length: itemCount }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-10 mb-20">
          {Array.from({ length: itemCount }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
