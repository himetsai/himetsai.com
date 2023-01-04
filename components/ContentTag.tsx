import React, { useState, useEffect } from "react";
import { slugify } from "../lib/slugify";

type Props = {
  title: string;
  active: boolean;
};

export default function ContentTag({ title, active }: Props) {
  const [anchorTarget, setAnchorTarget] = useState<null | HTMLElement>(null);
  const style = active
    ? "underline"
    : "opacity-60 transition ease-in-out duration-200 hover:opacity-100 hover:underline";

  useEffect(() => {
    setAnchorTarget(document.getElementById(slugify(title)));
  }, [title]);

  const handleClick = () => {
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full h-full">
      <p
        className={`relative text-sm font-medium cursor-pointer decoration-2 
        decoration-[#ff7777] ${style}`}
        onClick={handleClick}
      >
        {title}
      </p>
    </div>
  );
}
