import React from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./RichTextComponents";

type Props = {
  achivements: Block[];
};

export default function Achievements({ achivements }: Props) {
  return (
    <div
      className="flex flex-col max-w-7xl bg-[#fffffe] rounded-xl
      border-2 border-[#33272a] relative items-center
      text-left justify-evenly mx-auto px-10 py-5"
    >
      <h4 className="font-semibold text-2xl text-center py-5">Achievements</h4>

      <PortableText value={achivements} components={RichTextComponent} />
    </div>
  );
}
