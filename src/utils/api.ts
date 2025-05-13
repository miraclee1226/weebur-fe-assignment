import { axiosRequester } from "@/lib/axios";
import { ProductsResponse } from "./api.types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (limit = 20, skip = 0) => {
  const params = new URLSearchParams();

  params.append("limit", limit.toString());
  params.append("skip", skip.toString());

  const response = await axiosRequester<ProductsResponse>({
    options: {
      url: `${BASE_URL}/products?${params.toString()}`,
      method: "GET",
    },
  });

  return response.data;
};
