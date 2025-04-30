import { useCallback } from "react";

export function useThousandSeparator(p0: number) {
  return useCallback((num: number | string) => {
    if (typeof num === "number") num = num.toString();
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }, []);
}