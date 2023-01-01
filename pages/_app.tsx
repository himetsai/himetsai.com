import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { montserrat, glowSans } from "../lib/loadFonts";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader = router.pathname.startsWith("/studio") ? false : true;

  return (
    <div>
      <main
        className={`${glowSans.variable} ${montserrat.variable} font-montserrat h-screen bg-zinc-50`}
      >
        {/* {showHeader && <Header />} */}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
