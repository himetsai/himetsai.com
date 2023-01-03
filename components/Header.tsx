import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  position: "fixed" | "relative";
};

export default function Header({ position }: Props) {
  return (
    <div className={`${position} w-full z-30`}>
      <header
        className="top-0 md:top-4 flex items-start justify-between max-w-7xl 
    mx-auto px-10 py-5"
      >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <Link
            href="/"
            className="font-bold text-[#ff7777] text-xl md:text-2xl cursor-pointer hover:animate-pulse"
          >
            himetsai
          </Link>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row space-x-7 items-center mt-1 mr-0 text-[#33272a] md:mr-10"
        >
          <Link href="/" className="font-medium cursor-point">
            home
          </Link>
          <Link href="/blog" className="font-medium cursor-point">
            blog
          </Link>
        </motion.div>
      </header>
    </div>
  );
}
