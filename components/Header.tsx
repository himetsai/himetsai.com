import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageMenu from "./HeaderMenu";

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
          className="flex flex-row items-center py-1 rounded-md text-[#ff7777]"
        >
          <Link href="/" className="font-bold text-2xl cursor-pointer">
            himetsai
          </Link>
        </motion.div>

        <PageMenu />
      </header>
    </div>
  );
}
