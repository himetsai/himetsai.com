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
      className="flex flex-col relative max-w-[800px] bg-[#fffffe] rounded-xl
      border-2 border-[#33272a] items-center text-left justify-evenly mx-auto p-7 sm:p-10"
    >
      <div
        className="relative w-full h-60 sm:h-auto aspect-[3/2] mb-5 mx-auto mt-2"
        id="about-image"
      >
        <Image
          className="object-cover object-center mx-auto 
            border-[1.5px] border-[#33272a] rounded-lg"
          src={urlFor(image).url()}
          alt=""
          fill
        />
      </div>

      <div className="w-full relative px-1">
        <h4 className="text-2xl sm:text-3xl font-bold tracking-wider sm:my-5 my-3 text-[#33272a]">
          {name}
        </h4>

        <p className="font-normal text-[#594a4e] leading-8 tracking-wider mb-2">
          {description}
        </p>
      </div>
    </div>
  );
}
