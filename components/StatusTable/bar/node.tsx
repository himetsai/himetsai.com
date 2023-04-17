import React from "react";

type Props = {
  barType: "Relationship" | "Himesama" | "Oodball";
  endDate: Date;
  day: number;
};

export default function StatusNode({ barType, endDate, day }: Props) {
  const date = new Date(endDate.getTime() - day * 24 * 60 * 60 * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

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

  switch (barType) {
    case "Relationship":
      if (date < new Date("2022-4-22")) {
        nodeColor = yellow;
        message = "Semi-active: Pending response from Oodball with hope";
      }
      if (date < new Date("2022-3-29")) {
        nodeColor = gray;
        message = "Inactive: Pending response from Oodball";
      }
      break;
    case "Himesama":
      nodeColor = red;
      message = "Error 422: don't know why she likes me";
      if (date < new Date("2022-3-29")) {
        message = "Error 404: Answer not found";
      }
      break;
    default:
      nodeColor = randColor();
      message = "idk bro.";
  }

  return (
    <li
      className="flex w-full h-9 my-auto ml-[3.5px] last-of-type:ml-0"
      style={{ backgroundColor: nodeColor }}
    >
      <div className="status-node">
        <div className="status-node-tooltip">
          <h4 className="font-semibold text-sm mb-2">{formattedDate}</h4>
          <h4 className="font-normal text-sm">{message}</h4>
        </div>
      </div>
    </li>
  );
}
