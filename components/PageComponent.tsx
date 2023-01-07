import React, { Dispatch, SetStateAction, useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";
import { useIsPresent } from "framer-motion";
import router from "next/router";
import { useIsMedium, useIsLarge } from "../lib/useMediaQuery";

type Props = {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
  setFixedHeader: Dispatch<SetStateAction<"fixed" | "relative">>;
};

export default function PageComponent({
  Component,
  pageProps,
  setFixedHeader,
}: Props) {
  /**
   * Page change check
   */
  const isPresent = useIsPresent();

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
        (router.pathname === "/shitpost" && isMedium) ||
          (router.pathname.startsWith("/shitpost") && isLarge) ||
          (router.pathname === "/")
          ? "fixed"
          : "relative"
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent, isMedium, isLarge]);

  return <Component {...pageProps} />;
}
