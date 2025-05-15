"use client";

import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { Suspense } from "react";
import ProductListSkeleton from "@/components/pages/main/skeleton/ProductList";
import ErrorResetBoundary from "@/components/common/ErrorResetBoundary";
import ErrorFallback from "@/components/common/Fallback/ErrorFallback";
import ProductList from "@/components/pages/main/ProductList";
import useViewMode from "@/hooks/useViewMode";
import Gnb from "@/components/pages/main/Gnb";

export default function Home() {
  const { searchParams, setSearchParams } = useCustomSearchParams();
  const viewMode = useViewMode();

  return (
    <>
      <Gnb searchParams={searchParams} setSearchParams={setSearchParams} />

      <ErrorResetBoundary fallbackComponent={ErrorFallback}>
        <Suspense fallback={<ProductListSkeleton viewMode={viewMode} />}>
          <ProductList />
        </Suspense>
      </ErrorResetBoundary>
    </>
  );
}
