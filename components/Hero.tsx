import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center 
    gap-5 md:gap-10 px-10 text-center"
    >
      <h1
        className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#fffffe] bg-[#ff7777]
      p-5 rounded-md border-2 border-[#33272a]"
      >
        Ray Tsai's personal website
      </h1>
      <h2 className="font-medium text-lg md:text-2xl text-[#33272a]">
        I spam unsolicited content here.
      </h2>
    </div>
  );
}
