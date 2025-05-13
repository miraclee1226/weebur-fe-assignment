import { queryOptions, useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/api";

export const useProductsQuery = (limit = 20, skip = 0) => {
  const options = queryOptions({
    queryKey: ["products", { limit, skip }],
    queryFn: () => getProducts(limit, skip),
  });

  return useQuery(options);
};
