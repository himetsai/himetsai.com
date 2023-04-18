import { useEffect, useState } from "react";

export function useIntersectionRect(
  ref: React.RefObject<HTMLDivElement | null>
) {
  const [intersectRect, setIntersectRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersectRect(entry.intersectionRect)
    );

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return intersectRect;
}
