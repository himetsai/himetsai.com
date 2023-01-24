import React from "react";
import SocialButton from "./button";

type Props = {
  socials: Social[];
};

export default function Contact({ socials }: Props) {
  return (
    <div
      className="flex flex-col max-w-7xl bg-[#fffffe] rounded-xl
      border-2 border-[#33272a] relative items-center
      text-center lg:text-left justify-evenly mx-auto px-10 py-5 pb-10"
    >
      <h4 className="font-semibold text-2xl text-center py-5">Find Me Here</h4>
      <div className="grid grid-cols-4 gap-4 text-[#33272a]">
        {socials.map((social) => (
          <SocialButton key={social.slug.current} social={social} />
        ))}
      </div>
    </div>
  );
}
