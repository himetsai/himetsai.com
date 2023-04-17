import React from "react";
import StatusNode from "./node";
import { useIsSmall, useIsLarge } from "../../../hooks/useMediaQuery";
import { uptime } from "process";

type Props = {
  barType: "Relationship" | "Himesama" | "Oodball";
  startDate: Date;
  endDate: Date;
};

export default function StatusBar({ startDate, endDate, barType }: Props) {
  const isSmall = useIsSmall();
  const isLarge = useIsLarge();
  const nodeNum = isLarge ? 90 : isSmall ? 60 : 30;

  const formatDate = (date: Date): string =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const anniversary = new Date("2022-4-22");
  const timeDiff =
    endDate.getTime() - Math.max(startDate.getTime(), anniversary.getTime());
  const uptime = Math.ceil(
    (100 * Math.max(timeDiff, 0)) / (endDate.getTime() - startDate.getTime())
  );

  let uptimeMsg = "? % uptime";

  switch (barType) {
    case "Relationship":
      uptimeMsg = `${uptime} % uptime`;
      break;
    case "Himesama":
      uptimeMsg = `0 % uptime`;
      break;
    default:
  }

  return (
    <div className="flex flex-col w-full p-5 justify-center">
      <h4 className="font-medium py-2 text-[#33272a]">{barType}</h4>
      <ul className="flex flex-row-reverse list-none w-full">
        {[...Array(nodeNum)].map((x, i) => (
          <StatusNode key={i} endDate={endDate} day={i} barType={barType} />
        ))}
      </ul>

      <div
        className="flex flex-row w-full items-center justify-center pt-2
          text-gray-400 text-xs"
      >
        <h4 className="flex shrink-0">{formatDate(startDate)}</h4>
        <rect className="h-[1px] w-full bg-gray-400 mx-2" />
        <h4 className="flex shrink-0 text-gray-500">{uptimeMsg}</h4>
        <rect className="h-[1px] w-full bg-gray-400 mx-2" />
        <h4 className="flex shrink-0">{formatDate(endDate)}</h4>
      </div>
    </div>
  );
}
