"use client";

import { useEffect, useRef } from "react";

/**
 * 타겟 요소가 뷰포트에 들어왔을 때 특정 동작을 실행하는 훅
 *
 * @param onIntersect 뷰포트 진입 시 실행할 함수
 * @param threshold 교차 영역 비율 0~1 (기본값: 0)
 * @param rootMargin 루트 요소 마진 (기본값: 300px)
 *
 * @example
 * const loadMoreRef = useIntersectionObserver({
 *   onIntersect: () => fetchNextPage(),
 * });
 */

interface UseIntersectionObserverParams {
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
}

export default function useIntersectionObserver({
  onIntersect,
  threshold = 0,
  rootMargin = "300px",
}: UseIntersectionObserverParams) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = targetRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [onIntersect, threshold, rootMargin]);

  return targetRef;
}
