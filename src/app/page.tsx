"use client";

import { Suspense, useEffect, useState } from "react";
import ProductListSkeleton from "@/components/pages/main/skeleton/ProductList";
import ErrorResetBoundary from "@/components/common/ErrorResetBoundary";
import ErrorFallback from "@/components/common/Fallback/ErrorFallback";
import ProductList from "@/components/pages/main/ProductList";
import useViewMode from "@/hooks/useViewMode";
import Gnb from "@/components/pages/main/Gnb";
import GnbSkeleton from "@/components/pages/main/skeleton/GnbSkeleton";

export default function Home() {
  const [viewModeLoaded, setViewModeLoaded] = useState(false);
  const viewMode = useViewMode();

  useEffect(() => {
    if (viewMode !== null) {
      setViewModeLoaded(true);
    }
  }, [viewMode]);

  if (!viewModeLoaded) {
    return (
      <Suspense fallback={<GnbSkeleton />}>
        <Gnb />
      </Suspense>
    );
  }

  return (
    <>
      <Suspense fallback={<GnbSkeleton />}>
        <Gnb />
      </Suspense>

      <ErrorResetBoundary fallbackComponent={ErrorFallback}>
        <Suspense fallback={<ProductListSkeleton viewMode={viewMode} />}>
          <ProductList />
        </Suspense>
      </ErrorResetBoundary>
    </>
  );
}
