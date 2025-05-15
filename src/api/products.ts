import axiosRequester from "@/lib/axios";
import { ProductsResponse } from "./products.types";

interface GetProductsParams {
  limit?: number;
  skip?: number;
  q?: string;
  sortBy?: string;
  order?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (params: GetProductsParams) => {
  const { limit = 20, skip = 0, q, sortBy, order } = params;
  const endpoint = q ? `${BASE_URL}/products/search` : `${BASE_URL}/products`;
  const queryParams = new URLSearchParams();

  queryParams.append("limit", limit.toString());
  queryParams.append("skip", skip.toString());

  if (q) {
    queryParams.append("q", q);
  }

  if (sortBy) {
    queryParams.append("sortBy", sortBy);
  }

  if (order) {
    queryParams.append("order", order);
  }

  const response = await axiosRequester<ProductsResponse>({
    options: {
      url: `${endpoint}?${queryParams.toString()}`,
      method: "GET",
    },
  });

  return response.data;
};
