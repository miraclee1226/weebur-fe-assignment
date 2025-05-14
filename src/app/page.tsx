"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useViewMode } from "@/hooks/useViewMode";
import { GridView, ListView } from "@/components/pages/main";
import { useProductsInfiniteQuery } from "@/hooks/useProductsInfiniteQuery";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { InputSchema, InputType } from "@/schemas/Form.schema";

export default function Home() {
  const viewMode = useViewMode();
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useProductsInfiniteQuery({ q: searchParams.search });
  const products = data?.pages.flatMap((page) => page.products) ?? [];
  const total = data?.pages[0]?.total;

  const loadMoreRef = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  const { register, setValue, watch, handleSubmit } = useForm<InputType>({
    defaultValues: {
      search: searchParams.search,
    },
    resolver: zodResolver(InputSchema),
  });

  const searchValue = watch("search");
  const isSearchEmpty = !searchValue || searchValue.trim().length === 0;

  const onSubmit = async (data: InputType): Promise<void> => {
    if (isSearchEmpty) return;

    const newParams = { ...searchParams, search: data.search.trim() };
    setSearchParams(newParams);

    await new Promise((resolve) => setTimeout(resolve, 300));
  };

  useEffect(() => {
    setValue("search", searchParams.search);
  }, [searchParams.search, setValue]);

  return (
    <main className="m-auto w-[1200px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex px-4 py-2 items-center w-[1080px] h-16 bg-white rounded-full  border-2 border-gray-200 m-auto mb-5"
      >
        <label htmlFor="searchInput">
          <Image
            src="/assets/icons/search.svg"
            width={20}
            height={20}
            alt="검색 아이콘"
          />
        </label>
        <input
          {...register("search")}
          id="searchInput"
          type="text"
          placeholder="찾고 싶은 상품을 검색해보세요"
          className="w-full px-3 py-3 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSearchEmpty}
          className={`rounded-full w-[95px] h-full text-white text-center ${
            isSearchEmpty
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          검색
        </button>
      </form>

      {/* TODO: 별점 내림차순 구현 */}
      <div className="flex justify-between items-center mb-5">
        <span>총 {total}개</span>
        <div className="flex gap-2">
          <span>후기순</span>
          <span>|</span>
          <span>추천순</span>
        </div>
      </div>

      {isLoading && (
        <div className="my-10">
          <p className="text-center py-10">로딩중...</p>
        </div>
      )}

      {!isLoading && products.length === 0 && (
        <div className="my-10">
          <p className="text-center py-10">일치하는 결과가 없습니다.</p>
        </div>
      )}

      {!isLoading && products.length > 0 && (
        <>
          {viewMode === "grid" ? (
            <GridView products={products} />
          ) : (
            <ListView products={products} />
          )}

          {isFetchingNextPage ? (
            <p className="text-center py-4">로딩중...</p>
          ) : (
            <div ref={loadMoreRef} />
          )}

          {!hasNextPage && (
            <div className="my-10">
              <p className="text-center text-gray-500">
                더 이상 불러올 데이터가 없습니다.
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}
