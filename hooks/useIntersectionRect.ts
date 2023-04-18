import { useEffect, useState } from "react";

export function useIntersectionRect(
  ref: React.RefObject<HTMLDivElement | HTMLUListElement | null>
) {
  const [intersectRect, setIntersectRect] = useState<DOMRect | null>(null);
  let observerRefValue: HTMLDivElement | HTMLUListElement | null = null;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersectRect(entry.intersectionRect);
    });

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [ref]);

  return intersectRect;
}
