import {
  InfiniteData,
  infiniteQueryOptions,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { getProducts } from "@/utils/api";
import { ProductsResponse } from "@/utils/api.types";

export const useProductsInfiniteQuery = (
  limit = 20
): UseInfiniteQueryResult<InfiniteData<ProductsResponse>> => {
  const options = infiniteQueryOptions({
    queryKey: ["products", { limit }],
    queryFn: ({ pageParam = 0 }) => getProducts(limit, pageParam),
    getNextPageParam: (lastPage) => {
      const { skip, limit, total } = lastPage;
      const nextSkip = skip + limit;
      return nextSkip < total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });

  return useInfiniteQuery(options);
};
