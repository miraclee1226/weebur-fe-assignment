import {
  ONE_DAY_MS,
  VIEW_MODE_KEY,
  VIEW_MODE_TIMESTAMP_KEY,
} from "@/constant/common";
import { ViewMode } from "@/types/common";

const isViewMode = (value: string | null) => {
  return value === "grid" || value === "list";
};

export const saveViewMode = (mode: ViewMode): void => {
  localStorage.setItem(VIEW_MODE_KEY, mode);
  localStorage.setItem(VIEW_MODE_TIMESTAMP_KEY, Date.now().toString());
};

export const getViewMode = (): ViewMode | null => {
  const savedMode = localStorage.getItem(VIEW_MODE_KEY);
  const timestamp = localStorage.getItem(VIEW_MODE_TIMESTAMP_KEY);

  if (!savedMode || !timestamp) return null;

  const savedTime = parseInt(timestamp);
  const currentTime = Date.now();

  if (currentTime - savedTime > ONE_DAY_MS) {
    localStorage.removeItem(VIEW_MODE_KEY);
    localStorage.removeItem(VIEW_MODE_TIMESTAMP_KEY);

    return null;
  }

  return isViewMode(savedMode) ? savedMode : null;
};
