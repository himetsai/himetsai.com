import React, { Dispatch, SetStateAction, use, useEffect } from "react";
import { useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useIsMedium, useIsLarge } from "../hooks/useMediaQuery";

type Props = {
  children: React.ReactNode;
  setFixedHeader: Dispatch<SetStateAction<"fixed" | "relative">>;
};

export default function PageComponent({ children, setFixedHeader }: Props) {
  /**
   * Page change check
   */
  const isPresent = useIsPresent();

  const pathname = usePathname();

  /**
   * Screen size checks
   */
  const isLarge = useIsLarge();
  const isMedium = useIsMedium();

  /**
   * Decide header position when page or screen size changes
   */
  useEffect(() => {
    isPresent &&
      setFixedHeader(
        (pathname === "/shitpost" && isMedium) ||
          (pathname === "/status" && isLarge) ||
          (pathname.startsWith("/shitpost") && isLarge) ||
          pathname === "/" ||
          pathname.startsWith("/422")
          ? "fixed"
          : "relative"
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent, isMedium, isLarge]);

  return <>{children}</>;
}
