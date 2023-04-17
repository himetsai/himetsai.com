import { motion, useScroll } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import StatusBar from "./bar";
import { useIsLarge, useIsSmall } from "../../hooks/useMediaQuery";

type Props = {};

export default function StatusTable({}: Props) {
  const isSmall = useIsSmall();
  const isLarge = useIsLarge();
  const dateRange = isLarge ? 90 : isSmall ? 60 : 30;
  const [endDate, setEndDate] = useState<Date>(
    new Date(Date.now())
  );

  return (
    <div
      className="flex flex-col w-full max-w-[850px] items-center
       border-gray-400/20 border-[1px] rounded-md"
    >
      {/* relationship */}
      <div className="flex flex-col w-full p-3 justify-center">
        <h4 className="font-medium py-2 text-[#33272a]">Relationship</h4>
        <StatusBar barType="relationship" endDate={endDate} />
      </div>

      <rect className="h-[1px] w-full bg-gray-400/20" />

      {/* himesama */}
      <div className="flex flex-col w-full p-3 justify-center">
        <h4 className="font-medium py-2 text-[#33272a]">Himesama</h4>
        <StatusBar barType="himesama" endDate={endDate} />
      </div>

      <rect className="h-[1px] w-full bg-gray-400/20" />

      {/* oodball */}
      <div className="flex flex-col w-full p-3 justify-center">
        <h4 className="font-medium py-2 text-[#33272a]">Oodball</h4>
        <StatusBar barType="oodball" endDate={endDate} />
      </div>
    </div>
  );
}
