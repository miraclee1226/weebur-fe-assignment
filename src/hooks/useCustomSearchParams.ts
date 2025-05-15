"use client";

import { StringRecord } from "@/types/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * URL 검색 파라미터를 관리하는 커스텀 훅
 *
 * @returns {Object} searchParams - 현재 URL의 검색 파라미터 객체
 * @returns {Function} setSearchParams - 새 파라미터로 URL을 업데이트하는 함수
 *
 * @example
 * const { searchParams, setSearchParams } = useCustomSearchParams();
 *
 * // 현재 URL 파라미터 읽기
 * console.log(searchParams.search); // 'phone'
 *
 * // 새로운 검색어로 URL 업데이트
 * setSearchParams({ ...searchParams, search: 'laptop' });
 *
 * // 정렬 옵션 추가
 * setSearchParams({ ...searchParams, sortBy: 'price', order: 'asc' });
 */
export const useCustomSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const _searchParams = useSearchParams();
  const searchParams = new URLSearchParams(_searchParams.toString());

  const setNewParams = (newParams: StringRecord) => {
    for (const [key, value] of Object.entries(newParams)) {
      if (value) searchParams.set(key, value);
      else searchParams.delete(key);
    }
    return searchParams.toString();
  };

  const setSearchParams = (newParams: StringRecord) => {
    return router.push(`${pathname}?${setNewParams(newParams)}`);
  };

  return { searchParams: Object.fromEntries(searchParams), setSearchParams };
};
