import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col max-w-7xl md:flex-row relative items-center text-center md:text-left justify-evenly mx-auto px-10 py-5"
    >
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        className="mb-10 md:mb-0 mt-5 md:mt-0 h-48 w-48 rounded-full object-cover md:w-96 md:h-80 xl:w-[33vw] xl:h-[27.5vw] md:rounded-lg z-0"
        src="https://cdn.discordapp.com/attachments/668720947036946442/1055393249537302578/IMG_1315.jpg"
        alt=""
      />

      <div className="space-y-7 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Himesama
        </h4>

        {/* <p className="text-base">
          My friends also call me{" "}
          <span className="decoration-red-400 underline">Himesama</span>. I'm
          from Taipei, and I'm a heterosexual Asian cisgender man pursuing a
          bachelor's degree in computer science related fields at UCSD. I like
          stinky tofu, combinatorics, and{" "}
          <span className="decoration-purple-400 underline">Oodball</span>, a
          heterosexual Asian cisgender woman pursuing a bachelor's degree in
          computer science related fields at UCSD, A.K.A Hime's hime. I'm not a
          teenager anymore, and this makes me aware of the imminence of my
          demise. However, simply disintegrating is too boring and sad. I want
          leave some marks in this world as a proof of my existence before I
          leave. Therefore, I made this website to record random things in my
          fleeting life, and I hope the URL would be craved on my grave.
        </p> */}
      </div>
    </motion.div>
  );
}
