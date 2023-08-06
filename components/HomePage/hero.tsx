import React, { useState, useEffect } from "react";

type Props = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: Props) {
  const [anchorTarget, setAnchorTarget] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById("about-image"));
  }, [title]);

  const handleClick = () => {
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center 
    gap-5 md:gap-10 px-10 text-center"
    >
      <h1
        className="btn font-bold text-4xl md:text-5xl text-[#fffffe] 
        bg-[#ff7777] p-5 rounded-md border-2 border-[#33272a] cursor-pointer"
        onClick={handleClick}
      >
        {title}
      </h1>
      <h2 className="font-medium text-lg md:text-2xl text-[#33272a]">
        {description}
      </h2>
    </div>
  );
}
