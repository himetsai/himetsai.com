import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function HeaderMenu({}: Props) {
  const menu = useRef<null | HTMLDivElement>(null);

  return (
    <motion.div
      ref={menu}
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
      className="dropdown dropdown-hover dropdown-end -mt-1 group"
    >
      <label
        tabIndex={0}
        className="btn min-h-min h-10 px-2 m-1 transition ease-in-out duration-200 bg-[#fffffe] 
            border-[1.5px] border-[#33272a] rounded-md 
           group-hover:bg-[#ff7777] group-hover:text-[#fffffe] hover:border-[1.5px] hover:border-[#33272a]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content space-y-1 menu p-2 shadow bg-[#fffffe] border-[1.5px] border-[#33272a]
            rounded-box w-52"
      >
        <li>
          <Link
            href="/"
            className="font-medium cursor-point transition ease-in-out duration-200 
            hover:bg-[#ff7777] hover:text-[#fffffe] border-[1.5px] border-[#33272a]
            border-opacity-0 hover:border-opacity-100"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/shitpost"
            className="font-medium cursor-point transition ease-in-out duration-200 
            hover:bg-[#ff7777] hover:text-[#fffffe] border-[1.5px] border-[#33272a]
            border-opacity-0 hover:border-opacity-100"
          >
            shitpost
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
