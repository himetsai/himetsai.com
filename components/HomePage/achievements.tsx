import React from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../RichTextComponents";

type Props = {
  achivements: Block[];
};

export default function Achievements({ achivements }: Props) {
  return (
    <div
      className="flex flex-col relative max-w-[768px] bg-[#fffffe] rounded-xl border-2
      border-[#33272a] items-center text-left justify-evenly mx-auto p-7 sm:p-10"
    >
      <h4 className="text-2xl font-bold tracking-wider sm:my-5 my-3 text-[#33272a]">
        Achievements
      </h4>
      <PortableText value={achivements} components={RichTextComponent} />
    </div>
  );
}
