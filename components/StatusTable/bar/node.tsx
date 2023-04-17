import React from "react";

type Props = {
  barType: "relationship" | "himesama" | "oodball";
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
  return (
    <li
      className="flex w-full h-9 my-auto ml-[5.5px] sm:ml-[3.5px] 
      last-of-type:ml-0 bg-green-600"
    >
      <div className="status-node">
        <div className="status-node-tooltip">
          <h4 className="font-semibold text-sm mb-2">{formattedDate}</h4>
          <h4 className="font-normal text-sm">Active</h4>
        </div>
      </div>
    </li>
  );
}
