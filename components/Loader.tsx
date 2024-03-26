"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Loader({}: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="z-0 fixed flex flex-col w-full h-full items-center justify-center
        text-center font-bold text-3xl text-[#ff7777] leading-10"
      >
        <div>
          <Image
            src="/loading.gif"
            alt=""
            width="250"
            height="250"
            className="rounded-3xl object-cover border-[1.5px] border-[#33272a]"
          />
        </div>
        <h4 className="p-5 animate-pulse">loading...</h4>
      </motion.div>

      {/* Putting this to prevent page transitino glitch */}
      <div className="h-[101vh]" />
    </>
  );
}
