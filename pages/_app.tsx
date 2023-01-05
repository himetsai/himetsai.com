import "../styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Router, { useRouter } from "next/router";
import { montserrat } from "../lib/loadFonts";
import { motion, AnimatePresence } from "framer-motion";
import PageComponent from "../components/PageComponent";
import Loader from "../components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  /**
   * lets you know wya
   */
  const router = useRouter();

  /**
   * hide header on the sanity backend page
   */
  const showHeader: boolean = router.pathname.startsWith("/studio")
    ? false
    : true;

  /**
   * header position state
   */
  const [fixedHeader, setFixedHeader] = useState<"fixed" | "relative">(
    "relative"
  );

  return (
    <main
      id="root"
      className={`absolute top-0 bottom-0 left-0 right-0
      ${montserrat.variable} font-montserrat h-screen bg-[#faeee7]`}
    >
      {showHeader && <Header position={fixedHeader} />}
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader />
        ) : (
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.75 }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
          >
            <PageComponent
              Component={Component}
              pageProps={pageProps}
              setFixedHeader={setFixedHeader}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
