import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export const useIsSmall = (): boolean => useMediaQuery("(min-width: 480px)");
export const useIsMedium = (): boolean => useMediaQuery("(min-width: 768px)");
export const useIsLarge = (): boolean => useMediaQuery("(min-width: 1024px)");
export const useIsExtraLarge = (): boolean => useMediaQuery("(min-width: 1080px)");
