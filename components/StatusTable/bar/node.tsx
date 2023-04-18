import React, { useRef, useLayoutEffect } from "react";
import { useIntersectionRect } from "../../../hooks/useIntersectionRect";

type Props = {
  barType: "Relationship" | "Himesama" | "Oodball";
  endDate: Date;
  day: number;
  bar?: HTMLUListElement;
};

export default function StatusNode({ barType, endDate, day, bar }: Props) {
  const tooltip = useRef<HTMLDivElement | null>(null);
  const rect = tooltip.current?.getBoundingClientRect();
  const date = new Date(endDate.getTime() - day * 24 * 60 * 60 * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const intersectRect = useIntersectionRect(tooltip);

  // get a random color by hashing date
  const randColor = (): string => {
    const seedrandom = require("seedrandom");
    const rng = seedrandom(formattedDate);
    return "#" + Math.floor(rng() * Math.pow(16, 6)).toString(16);
  };

  const green = "#3ba55c";
  const yellow = "#fde047";
  const red = "#ed4245";
  const gray = "#b3bac5";

  let nodeColor = green;
  let message = "Active";

  // 3/29/2022
  const oodballConfess = new Date(2022, 2, 29);
  // 4/22/2022
  const anniversary = new Date(2022, 3, 22);

  switch (barType) {
    case "Relationship":
      if (date < anniversary) {
        nodeColor = yellow;
        message = "Semi-active: Pending response from Oodball with hope";
      }
      if (date < oodballConfess) {
        nodeColor = gray;
        message = "Inactive: Pending response from Oodball";
      }
      break;
    case "Himesama":
      nodeColor = red;
      message = "Error 422: don't know why she likes me";
      if (date < oodballConfess) {
        message = "Error 404: Answer not found";
      }
      break;
    default:
      nodeColor = randColor();
      message = "idk bro.";
  }

  useLayoutEffect(() => {
    if (rect && intersectRect) {
      if (rect.left < 0) {
        tooltip.current?.style.setProperty("--offset", `${rect.left}px`);
      }
      if (rect.right > intersectRect.right) {
        const offset = rect.right - intersectRect.right;
        tooltip.current?.style.setProperty("--offset", `${offset}px`);
      }
    }
  }, [intersectRect]);

  // if (day === 0) console.log(intersectRect);

  return (
    <li
      className="flex w-full h-9 my-auto ml-[3.5px] last-of-type:ml-0"
      style={{ backgroundColor: nodeColor }}
    >
      <div className="status-node">
        <div ref={tooltip} className="status-node-tooltip">
          <h4 className="font-semibold text-sm mb-2">{formattedDate}</h4>
          <h4 className="font-normal text-sm">{message}</h4>
        </div>
      </div>
    </li>
  );
}
