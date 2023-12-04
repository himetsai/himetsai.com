import "../styles/globals.css";
import { Metadata } from "next";
import AppWrapper from "../components/AppWrapper";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
      </Head>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

// const metadata: Metadata = {
//   icons: [
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "32x32",
//       url: "/favicon-32x32.png",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "16x16",
//       url: "/favicon-16x16.png",
//     },
//     {
//       rel: "apple-touch-icon",
//       sizes: "180x180",
//       url: "/apple-touch-icon.png",
//     },
//   ],
// };

// export { metadata };
