import React, { useState, useEffect } from "react";
import { slugify } from "../lib/slugify";

type Props = {
  title: string;
  active: boolean;
};

export default function ContentTag({ title, active }: Props) {
  const [anchorTarget, setAnchorTarget] = useState<null | HTMLElement>(null);
  const style = active
    ? "translate-x-1"
    : "opacity-60 hover:opacity-100 hover:translate-x-1";

  useEffect(() => {
    setAnchorTarget(document.getElementById(slugify(title)));
  }, [title]);

  const handleClick = () => {
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full h-full">
      <p
        className={`relative text-sm leading-7 font-medium cursor-pointer transition 
        ease-in-out duration-400 ${style}`}
        onClick={handleClick}
      >
        {title}
      </p>
    </div>
  );
}
