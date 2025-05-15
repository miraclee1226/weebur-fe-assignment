import { Product } from "@/types/product";

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
