import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Loader({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed top-0 left-0 z-0 flex flex-col w-full h-full items-center justify-center
      text-center font-bold text-3xl text-[#ff7777] leading-10"
    >
      <Image src="/loading.gif" alt="" width="250" height="250" />
      <h4 className="p-5 animate-pulse">loading...</h4>
    </motion.div>
  );
}
