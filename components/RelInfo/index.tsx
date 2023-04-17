import React from "react";

type Props = {};

export default function RelInfo({}: Props) {
  // 4/22/2022
  const anniversary = new Date("2022-04-22T02:00:00.000-08:00");
  const dateDays = Math.floor(
    (Date.now() - anniversary.getTime()) / (24 * 60 * 60 * 1000)
  );
  const formattedDate = anniversary.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col w-full max-w-[850px] my-10">
      <h4 className="font-medium text-[#33272a] p-2">Relationship Info</h4>
      <div
        className="flex flex-row relative w-full h-fit border-gray-400 
      border-[1px] rounded-md md:p-5 p-3 text-[#33272a] 
      items-center justify-between mx-auto"
      >
        {/* Activation Date */}
        <div className="flex flex-col w-full pl-2">
          <h4 className="text-xs text-gray-500">Activation Date</h4>
          <h4 className="font-medium">{formattedDate}</h4>
        </div>

        <rect className="absolute w-[1px] top-0 bottom-0 right-1/2 bg-gray-500" />

        {/* Uptime */}
        <div className="flex flex-col w-full md:pl-8 pl-6">
          <h4 className="text-xs text-gray-500">Uptime</h4>
          <h4 className="font-medium">{`${dateDays} days`}</h4>
        </div>
      </div>
    </div>
  );
}
