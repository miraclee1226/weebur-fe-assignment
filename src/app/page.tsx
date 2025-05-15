"use client";

import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { Suspense } from "react";
import { ProductList } from "@/components/pages/main/ProductList";
import { useViewMode } from "@/hooks/useViewMode";
import { SearchForm } from "@/components/pages/main";
import ProductListSkeleton from "@/components/pages/main/skeleton/ProductList";
import ErrorResetBoundary from "@/components/common/ErrorResetBoundary";
import ErrorFallback from "@/components/common/Fallback/ErrorFallback";

export default function Home() {
  const { searchParams, setSearchParams } = useCustomSearchParams();
  const viewMode = useViewMode();

  return (
    <main className="m-auto w-[1200px]">
      <SearchForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <ErrorResetBoundary fallbackComponent={ErrorFallback}>
        <Suspense fallback={<ProductListSkeleton viewMode={viewMode} />}>
          <ProductList />
        </Suspense>
      </ErrorResetBoundary>
    </main>
  );
}
