import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="z-0 top-0 w-full h-full fixed flex flex-col items-center justify-center
        text-center p-5"
    >
      <div className="relative w-64 h-64 my-5 mx-auto">
        <Image
          src="/404.gif"
          alt=""
          fill
          className="rounded-3xl object-cover object-center mx-auto border-[1.5px] 
          border-[#33272a]"
        />
      </div>
      <div className="flex md:w-[420px] w-full md:px-0 px-10 flex-col justify-center text-center">
        <h2 className="p-1 font-extrabold text-5xl text-[#ff7777] leading-none">
          Error 404
        </h2>
        <h2 className="pt-2 font-normal text-[#594a4e] leading-7 tracking-wider mb-5">
          Page not found. Click{" "}
          <Link
            href={"/"}
            rel={"noreferrer noopener"}
            className="hover:underline decoration-[#ff7777] text-[#ff7777]
          font-normal tracking-wider"
          >
            here
          </Link>{" "}
          to go back home.
        </h2>
      </div>
    </div>
  );
}
