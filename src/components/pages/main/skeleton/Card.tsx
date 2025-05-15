"use client";

import Card from "@/components/common/Card";

interface CardSkeletonProps {
  viewMode?: "grid" | "list";
}

export default function CardSkeleton({ viewMode = "grid" }: CardSkeletonProps) {
  return (
    <Card.Skeleton>
      <Card.Skeleton.Image />
      <div className="mt-2">
        <Card.Skeleton.Rating className="mb-1" />
        <Card.Skeleton.Title className="mb-2" />
        <Card.Skeleton.Content
          lines={viewMode === "list" ? 4 : 2}
          className={viewMode === "grid" ? "line-clamp-2" : ""}
        />
        <Card.Skeleton.Review className="mt-2" />
      </div>
    </Card.Skeleton>
  );
}
