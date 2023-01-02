import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { montserrat } from "../lib/loadFonts";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader: boolean =
    router.pathname.startsWith("/studio") || router.pathname.startsWith("/blog")
      ? false
      : true;

  return (
    <div>
      <main
        className={`${montserrat.variable} font-montserrat h-screen bg-[#faeee7]`}
      >
        {showHeader && <Header />}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
