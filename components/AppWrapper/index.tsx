"use client";
import "../../styles/globals.css";
import { Suspense, useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useRouter, usePathname } from "next/navigation";
import { montserrat } from "../../lib/loadFonts";
import { motion, AnimatePresence } from "framer-motion";
import PageComponent from "../../components/PageComponent";
import Loader from "../../components/Loader";
import { Analytics } from "@vercel/analytics/react";
import Header from "../Header";

export const metadata = {
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  /**
   * hide header on the sanity backend page
   */
  const showHeader: boolean = pathname.startsWith("/studio") ? false : true;

  /**
   * header position state
   */
  const [fixedHeader, setFixedHeader] = useState<"fixed" | "relative">(
    "relative"
  );

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
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.1 }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            <PageComponent setFixedHeader={setFixedHeader}>
              {children}
            </PageComponent>
          </motion.div>
          <Analytics />
        </AnimatePresence>
      </main>
    </Auth0Provider>
  );
}
