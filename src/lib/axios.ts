import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface AxiosRequesterParams<T> {
  options: AxiosRequestConfig<T>;
}

export default function axiosRequester<K, T = unknown>({
  options,
}: AxiosRequesterParams<T>): Promise<AxiosResponse<K>> {
  const client = axiosInstance({ ...options });
  return client;
}
