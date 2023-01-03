import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { montserrat } from "../lib/loadFonts";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader: boolean = router.pathname.startsWith("/studio")
    ? false
    : true;
  const fixedHeader: "fixed" | "relative" = router.pathname.startsWith("/blog")
    ? "fixed"
    : "relative";

  return (
    <main
      className={`absolute top-0 bottom-0 left-0 right-0 ${montserrat.variable}
        font-montserrat h-screen bg-[#faeee7]`}
    >
      {showHeader && <Header position={fixedHeader} />}
      <Component {...pageProps} />
    </main>
  );
}
