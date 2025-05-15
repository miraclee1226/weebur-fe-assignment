"use client";

import {
  InfiniteData,
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
} from "@tanstack/react-query";
import { LIMIT } from "@/constant/common";
import { ProductsResponse } from "@/api/products.types";
import { getProducts } from "@/api/products";

interface ProductsQueryParams {
  limit?: number;
  q?: string;
  sortBy?: string;
  order?: string;
}

export default function useProductsSuspenseInfiniteQuery(
  params: ProductsQueryParams
): UseSuspenseInfiniteQueryResult<InfiniteData<ProductsResponse>> {
  const { limit = LIMIT, q, sortBy, order } = params;
  const options = infiniteQueryOptions({
    queryKey: ["products", { limit, q, sortBy, order }],
    queryFn: ({ pageParam = 0 }) =>
      getProducts({
        skip: pageParam,
        limit,
        q,
        sortBy,
        order,
      }),
    getNextPageParam: (lastPage) => {
      const { skip, limit, total } = lastPage;
      const nextSkip = skip + limit;
      return nextSkip < total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });

  return useSuspenseInfiniteQuery(options);
}
