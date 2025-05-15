"use client";

import { StringRecord } from "@/types/common";

interface SortButtonsProps {
  searchParams: StringRecord;
  setSearchParams: (params: StringRecord) => void;
  total?: number;
}

const SortButtons = ({
  searchParams,
  setSearchParams,
  total,
}: SortButtonsProps) => {
  const handleSort = (sortBy: string, order: string) => {
    const newParams = { ...searchParams, sortBy, order };
    setSearchParams(newParams);
  };

  return (
    <div className="flex justify-between items-center mb-5">
      <span>총 {total}개</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleSort("price", "asc")}
          className={`${
            searchParams.sortBy === "price" && searchParams.order === "asc"
              ? "text-blue-500 font-bold"
              : ""
          } cursor-pointer`}
        >
          가격 낮은순
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => handleSort("rating", "desc")}
          className={`${
            searchParams.sortBy === "rating" && searchParams.order === "desc"
              ? "text-blue-500 font-bold"
              : ""
          } cursor-pointer`}
        >
          별점 높은순
        </button>
      </div>
    </div>
  );
};

export default SortButtons;
