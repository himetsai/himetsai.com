import React from "react";
import StatusNode from "./node";
import { useIsSmall, useIsLarge } from "../../../hooks/useMediaQuery";

type Props = {
  barType: "relationship" | "himesama" | "oodball";
  endDate: Date;
};

export default function StatusBar({ endDate, barType }: Props) {
  const isSmall = useIsSmall();
  const isLarge = useIsLarge();
  const nodeNum = isLarge ? 90 : isSmall ? 60 : 30;

  return (
    <ul className="flex flex-row-reverse list-none w-full">
      {[...Array(nodeNum)].map((x, i) => (
        <StatusNode key={i} endDate={endDate} day={i} barType={barType} />
      ))}
    </ul>
  );
}
