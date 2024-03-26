"use client";
import { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { usePathname } from "next/navigation";
import { montserrat } from "../../lib/loadFonts";
import { useIsPresent } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Header from "../Header";
import { useIsLarge, useIsMedium } from "../../hooks/useMediaQuery";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  /**
   * hide header on the sanity backend page
   */
  const showHeader = pathname.startsWith("/studio") ? false : true;

  /**
   * header position state
   */
  const [fixedHeader, setFixedHeader] = useState<"fixed" | "relative">(
    "relative"
  );
  
  /**
   * Screen size checks
   */
  const isLarge = useIsLarge();
  const isMedium = useIsMedium();

  /**
   * Decide header position when page or screen size changes
   */
  useEffect(() => {
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
  }, [pathname, isMedium, isLarge]);

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
    >
      <main
        id="root"
        className={`absolute top-0 bottom-0 left-0 right-0
            ${montserrat.variable} font-montserrat h-screen bg-[#faeee7]`}
      >
        {showHeader && <Header position={fixedHeader} />}
        {children}
        <Analytics />
      </main>
    </Auth0Provider>
  );
}
