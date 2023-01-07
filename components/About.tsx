import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col max-w-7xl bg-[#fffffe] rounded-xl
      border-2 border-[#33272a] md:flex-row relative items-center
      text-center md:text-left justify-evenly mx-auto px-10 py-5"
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
        className="mb-10 md:mb-0 mt-5 md:mt-0 h-48 w-48 rounded-full object-cover
        md:w-96 md:h-80 xl:w-[33vw] xl:h-[27.5vw] md:rounded-lg z-0 border-[1.5px] 
        border-[#33272a]"
        src="https://cdn.discordapp.com/attachments/668720947036946442/1055393249537302578/IMG_1315.jpg"
        alt=""
      />

      <div className="space-y-7 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">Ray Tsai</h4>

        <p className="text-base text-[#594a4e] leading-8">
          Some people also call me "himesama." After 19 years of living in
          Taipei, I decided to come to San Diego to enjoy the weather. I have
          strong urges to shitpost occasionally, but I'm scared to post on
          social media. Hence, I built this website for me to shitpost.
          I write in Traditional Chinese because I think it's cool, so please
          learn it if you want to read my posts.
        </p>
      </div>
    </motion.div>
  );
}
