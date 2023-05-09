import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity.client";

type Props = {
  name: string;
  description: string;
  image: Image;
};

export default function About({ name, description, image }: Props) {
  return (
    <div
      className="flex flex-col max-w-7xl bg-[#fffffe] rounded-xl
      border-2 border-[#33272a] md:flex-row relative items-center
      text-center md:text-left justify-evenly mx-auto p-7 sm:p-10"
    >
      <div
        className="relative mb-10 md:mb-0 mt-5 md:mt-0 h-48 w-48
        md:w-96 md:h-80 xl:w-[33vw] xl:h-[27.5vw] shrink-0"
      >
        <Image
          className="rounded-full object-cover md:rounded-lg z-0 
          border-[1.5px] border-[#33272a]"
          src={urlFor(image).url()}
          alt=""
          fill
        />
      </div>

      <div className="space-y-7 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">{name}</h4>

        <p className="text-base text-[#594a4e] leading-8">{description}</p>
      </div>
    </div>
  );
}
