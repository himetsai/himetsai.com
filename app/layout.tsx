import "../styles/globals.css";
import { Metadata } from "next";
import AppWrapper from "../components/AppWrapper";

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}