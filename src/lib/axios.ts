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

type AxiosRequester = <K, T = unknown>(
  params: AxiosRequesterParams<T>
) => Promise<AxiosResponse<K>>;

export const axiosRequester: AxiosRequester = ({ options }) => {
  const client = axiosInstance({ ...options });
  return client;
};
