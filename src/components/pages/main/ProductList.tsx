"use client";

import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import GridView from "./GridView";
import ListView from "./ListView";
import SortButtons from "./SortButtons";
import useProductsSuspenseInfiniteQuery from "./hooks/useProductsSuspenseInfiniteQuery";
import useViewMode from "@/hooks/useViewMode";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function ProductList() {
  const viewMode = useViewMode();
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProductsSuspenseInfiniteQuery({
      q: searchParams.search,
      sortBy: searchParams.sortBy,
      order: searchParams.order,
    });

  const products = data?.pages.flatMap((page) => page.products) ?? [];
  const total = data?.pages[0]?.total;

  const loadMoreRef = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  if (products.length === 0) {
    return (
      <div className="my-10">
        <p className="text-center py-10">일치하는 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <main className="m-auto w-[1200px] mt-6">
      <SortButtons
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        total={total}
      />

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
    </main>
  );
}
