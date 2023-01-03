import Link from "next/link";
import React, { useState, useEffect } from "react";
import { slugify } from "./RichTextComponents";

type Props = {
  heading: Heading;
};

export const getChildrenText = (heading: Heading): string =>
  heading.children.map((node) => node.text).join("");

export default function ContentTag({ heading }: Props) {
  const [anchorTarget, setAnchorTarget] = useState<null | HTMLElement>(null);
  const title: string = getChildrenText(heading);

  useEffect(() => {
    setAnchorTarget(document.getElementById(slugify(title)));
  }, [title]);

  const handleClick = () => {
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <p className="cursor-pointer" onClick={handleClick}>{title}</p>
    </div>
  );
}
