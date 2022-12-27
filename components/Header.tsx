import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="sticky top-0 md:top-4 flex items-start justify-between max-w-7xl 
    mx-auto p-4"
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
        <h3 className="font-bold text-rose-400 text-xl md:text-2xl">
          himetsai
        </h3>
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
        className="flex flex-row space-x-7 items-center mt-1 mr-0 md:mr-10"
      >
        <h4 className="font-medium">home</h4>
        <h4 className="font-medium">blog</h4>
      </motion.div>
    </header>
  );
}
