import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageMenu from "./PageMenu";

type Props = {
  position: "fixed" | "relative";
};

export default function Header({ position }: Props) {
  return (
    <div className={`${position} w-full z-30 left-0`}>
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
          className="flex flex-row items-center px-2 py-1 rounded-md text-[#ff7777] 
          border-[1.5px] border-opacity-0 border-[#33272a]
          hover:bg-[#ff7777] hover:border-opacity-100 hover:text-[#fffffe]"
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
