import React from "react";
import SocialButton from "./button";

type Props = {
  socials: Social[];
};

export default function Contact({ socials }: Props) {
  return (
    <div
      className="flex flex-col relative max-w-[800px] bg-[#fffffe] rounded-xl border-2
      border-[#33272a] items-center text-left justify-evenly mx-auto p-7 sm:p-10"
    >
      <h4 className="text-2xl font-bold tracking-wider sm:mb-5 mb-3 text-[#33272a]">
        Find Me Here
      </h4>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-4 text-[#33272a]">
        {socials.map((social) => (
          <SocialButton key={social.slug.current} social={social} />
        ))}
      </div>
    </div>
  );
}
