import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: Props) {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center 
    gap-5 md:gap-10 px-10 text-center"
    >
      <h1
        className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#fffffe] bg-[#ff7777]
      p-5 rounded-md border-2 border-[#33272a]"
      >
        {title}
      </h1>
      <h2 className="font-medium text-lg md:text-2xl text-[#33272a]">
        {description}
      </h2>
    </div>
  );
}
