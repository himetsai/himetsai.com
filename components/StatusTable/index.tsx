import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import StatusNode from "./node";

type Props = {};

export default function StatusTable({}: Props) {
  const topBar = useRef<null | HTMLUListElement>(null);
  const midBar = useRef<null | HTMLUListElement>(null);
  const botBar = useRef<null | HTMLUListElement>(null);
  const { scrollX } = useScroll({ container: botBar });

  useEffect(() => {
    scrollX.onChange(() => {
      topBar.current?.scrollTo(scrollX.get(), 0);
      midBar.current?.scrollTo(scrollX.get(), 0);
    });
  }, [scrollX]);

  return (
    <div className="flex flex-col mx-10">
      {/* rel */}
      <div className="flex w-full justify-center">
        <motion.ul
          ref={topBar}
          // style={{ x: scrollX }}
          className={`flex flex-row-reverse h-24 md:max-w-[855px] items-center overflow-x-hidden`}
        >
          {[...Array(365)].map((x, i) => (
            <StatusNode key={i} />
          ))}
        </motion.ul>
      </div>

      {/* himesama */}
      <div className="flex w-full justify-center">
        <motion.ul
          ref={midBar}
          className={`flex flex-row-reverse h-24 md:max-w-[855px] items-center overflow-x-hidden`}
        >
          {[...Array(365)].map((x, i) => (
            <StatusNode key={i} />
          ))}
        </motion.ul>
      </div>

      {/* oodball */}
      <div className="flex w-full justify-center">
        <ul
          ref={botBar}
          className={`flex flex-row-reverse h-24 md:max-w-[855px] items-center overflow-x-auto`}
        >
          {[...Array(365)].map((x, i) => (
            <StatusNode key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
