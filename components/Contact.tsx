import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useIsLarge } from "../lib/useMediaQuery";

type Props = {};

export default function Contact({}: Props) {
  /**
   * dynamically loads the SocialIcon on the client side
   * to prevent hydration failed bug.
   */
  const SocialIcon = dynamic(
    () => import("react-social-icons").then((mod) => mod.SocialIcon),
    {
      ssr: false,
    }
  );

  const isLarge = useIsLarge();

  return (
    <div
      className="flex flex-col max-w-7xl bg-[#fffffe] rounded-xl
      border-2 border-[#33272a] relative items-center
      text-center md:text-left justify-evenly mx-auto px-10 py-5 pb-10"
    >
      <h4 className="font-semibold text-2xl text-center py-5">Contact Me</h4>
      <div className="grid grid-cols-4 gap-4 text-[#33272a]">
        <Link
          href="https://github.com/boogerman919"
          className="flex flex-row items-center justify-center
          lg:justify-start lg:pr-4 rounded-lg border-[1.5px]
          border-[#33272a] group hover:bg-[#ff7777] 
          hover:text-[#fffffe]"
        >
          <SocialIcon
            fgColor="currentColor"
            bgColor="transparent"
            url="https://github.com/boogerman919"
            className="text-[#33272a] group-hover:text-[#fffffe]"
          />
          <h4 className="font-medium hidden lg:flex">@boogerman919</h4>
        </Link>

        <Link
          href="https://open.spotify.com/user/21zostcuujfnnxaq5msx27xji?si=65911bfd6911477d"
          className="flex flex-row items-center justify-center
          lg:justify-start lg:pr-4 rounded-lg border-[1.5px]
          border-[#33272a] group hover:bg-[#ff7777] 
          hover:text-[#fffffe]"
        >
          <SocialIcon
            fgColor="currentColor"
            bgColor="transparent"
            url="https://open.spotify.com/user/21zostcuujfnnxaq5msx27xji?si=65911bfd6911477d"
            className="text-[#33272a] group-hover:text-[#fffffe]"
          />
          <h4 className="font-medium hidden lg:flex">Ray Tsai</h4>
        </Link>

        <Link
          href="https://www.youtube.com/@boogerman919"
          className="flex flex-row items-center justify-center
          lg:justify-start lg:pr-4 rounded-lg border-[1.5px]
          border-[#33272a] group hover:bg-[#ff7777] 
          hover:text-[#fffffe]"
        >
          <SocialIcon
            fgColor="currentColor"
            bgColor="transparent"
            url="https://www.youtube.com/@boogerman919"
            className="text-[#33272a] group-hover:text-[#fffffe]"
          />
          <h4 className="font-medium hidden lg:flex">Bumblebee Tsai</h4>
        </Link>

        <Link
          href="https://www.instagram.com/rtsai919/"
          className="flex flex-row items-center justify-center
          lg:justify-start lg:pr-4 rounded-lg border-[1.5px]
          border-[#33272a] group hover:bg-[#ff7777] 
          hover:text-[#fffffe]"
        >
          <SocialIcon
            fgColor="currentColor"
            bgColor="transparent"
            url="https://www.instagram.com/rtsai919/"
            className="text-[#33272a] group-hover:text-[#fffffe]"
          />
          <h4 className="font-medium hidden lg:flex">@rtsai919</h4>
        </Link>

        <Link
          href="https://twitter.com/himetsai"
          className="flex flex-row items-center justify-center
          lg:justify-start lg:pr-4 rounded-lg border-[1.5px]
          border-[#33272a] group hover:bg-[#ff7777] 
          hover:text-[#fffffe]"
        >
          <SocialIcon
            fgColor="currentColor"
            bgColor="transparent"
            url="https://twitter.com/himetsai"
            className="text-[#33272a] group-hover:text-[#fffffe]"
          />
          <h4 className="font-medium hidden lg:flex">@himetsai</h4>
        </Link>
      </div>
    </div>
  );
}
