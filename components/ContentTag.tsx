import React, { useState, useEffect } from "react";
import { slugify } from "../lib/slugify";

type Props = {
  title: string;
  active: boolean;
};

export default function ContentTag({ title, active }: Props) {
  const [anchorTarget, setAnchorTarget] = useState<null | HTMLElement>(null);
  const style = active
    ? ""
    : "opacity-60 transition ease-in-out duration-200 hover:opacity-100";

  useEffect(() => {
    setAnchorTarget(document.getElementById(slugify(title)));
  }, [title]);

  const handleClick = () => {
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <p
        className={`relative text-sm font-medium cursor-pointer leading-6 ${style}`}
        onClick={handleClick}
      >
        {title}
      </p>
    </div>
  );
}
