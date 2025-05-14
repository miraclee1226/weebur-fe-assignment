import {
  InfiniteData,
  infiniteQueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { getProducts } from "@/utils/api";
import { ProductsResponse } from "@/utils/api.types";

interface ProductsQueryParams {
  limit?: number;
  q?: string;
  sortBy?: string;
  order?: string;
}

const LIMIT = 20;

export const useProductsInfiniteQuery = (
  params: ProductsQueryParams
): UseInfiniteQueryResult<InfiniteData<ProductsResponse>> => {
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

  return useInfiniteQuery(options);
};
