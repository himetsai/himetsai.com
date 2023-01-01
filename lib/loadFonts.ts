import { Montserrat } from "@next/font/google";
import localFont from "@next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const glowSans = localFont({
  src: [
    {
      path: "../fonts/GlowSans/GlowSans-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/GlowSans/GlowSans-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/GlowSans/GlowSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/GlowSans/GlowSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GlowSans/GlowSans-Book.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GlowSans/GlowSans-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/GlowSans/GlowSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glowSans",
});