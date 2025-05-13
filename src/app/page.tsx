"use client";

import Image from "next/image";
import { useViewMode } from "@/hooks/useViewMode";
import { GridView, ListView } from "@/components/pages/main";
import { useProductsQuery } from "@/hooks/useProductsQuery";

export default function Home() {
  const viewMode = useViewMode();
  const { data } = useProductsQuery(50, 0);

  return (
    <main className="m-auto w-[1200px]">
      {/* TODO: 검색 필터 구현 */}
      <form className="flex px-4 py-2 items-center w-[1080px] h-16 bg-white rounded-full  border-2 border-gray-200 m-auto mb-5">
        <label htmlFor="searchInput">
          <Image
            src="/assets/icons/search.svg"
            width={20}
            height={20}
            alt="검색 아이콘"
          />
        </label>
        <input
          id="searchInput"
          type="text"
          placeholder="찾고 싶은 상품을 검색해보세요"
          className="w-full px-3 py-3 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full w-[95px] h-full bg-blue-500 text-white text-center hover:bg-blue-600"
        >
          검색
        </button>
      </form>
      {/* TODO: 별점 내림차순 구현 */}
      <div className="flex justify-between items-center mb-5">
        <span>총 97개</span>
        <div className="flex gap-2">
          <span>후기순</span>
          <span>|</span>
          <span>추천순</span>
        </div>
      </div>

      {viewMode === "grid" ? (
        <GridView products={data?.products} />
      ) : (
        <ListView products={data?.products} />
      )}
    </main>
  );
}
