"use client";

import { useState, useEffect } from "react";
import { getViewMode, saveViewMode } from "@/utils/storage/viewMode";
import { ViewMode } from "@/types/common";

/**
 * 그리드/리스트 뷰 모드를 관리하는 커스텀 훅
 *
 * @returns {ViewMode | null} 현재 선택된 뷰 모드 ('grid' 또는 'list')
 *
 * @description
 * - 페이지 최초 진입 시 로컬 스토리지에서 저장된 뷰 모드를 확인합니다.
 * - 저장된 모드가 있으면 해당 모드를 사용합니다.
 * - 저장된 모드가 없으면 50% 확률로 랜덤하게 뷰 모드를 결정합니다.
 * - 결정된 모드는 로컬 스토리지에 저장되어 24시간 동안 유지됩니다.
 *
 * @example
 * const viewMode = useViewMode();
 *
 * if (viewMode === 'grid') {
 *   // 그리드 형태로 표시
 * } else if (viewMode === 'list') {
 *   // 리스트 형태로 표시
 * }
 */
export default function useViewMode(): ViewMode | null {
  const [viewMode, setViewMode] = useState<ViewMode | null>(null);

  useEffect(() => {
    const savedMode = getViewMode();
    const randomMode = Math.random() < 0.5 ? "grid" : "list";

    if (savedMode) {
      setViewMode(savedMode);
    } else {
      setViewMode(randomMode);
      saveViewMode(randomMode);
    }
  }, []);

  return viewMode;
}
