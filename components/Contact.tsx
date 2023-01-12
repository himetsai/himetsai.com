import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useIsLarge } from "../lib/useMediaQuery";

type Props = {
  socials: Social[];
};

export default function Contact({ socials }: Props) {
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
      <h4 className="font-semibold text-2xl text-center py-5">Find Me Here</h4>
      <div className="grid grid-cols-4 gap-4 text-[#33272a]">
        {socials.map((social) => (
          <Link
            key={social.title}
            href={social.url}
            className="flex flex-row min-w-fit items-center justify-center
          lg:justify-start lg:pr-4 rounded-lg border-[1.5px]
          border-[#33272a] group hover:bg-[#ff7777] 
          hover:text-[#fffffe]"
          >
            <SocialIcon
              fgColor="currentColor"
              bgColor="transparent"
              url={social.url}
              className="text-[#33272a] group-hover:text-[#fffffe]"
            />
            {isLarge && <h4 className="font-medium">{social.username}</h4>}
          </Link>
        ))}
      </div>
    </div>
  );
}
