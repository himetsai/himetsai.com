import React, { useState, useEffect } from "react";
import { slugify } from "../lib/slugify";

type Props = {
  title: string;
  active: boolean;
};

export default function ContentTag({ title, active }: Props) {
  const [anchorTarget, setAnchorTarget] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(slugify(title)));
  }, [title]);

  const handleClick = () => {
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <p className="cursor-pointer" onClick={handleClick}>
        {title}
      </p>
    </div>
  );
}
