import React, { useState, useLayoutEffect } from "react";
import StatusBar from "./bar";
import { useIsLarge, useIsSmall } from "../../hooks/useMediaQuery";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

type Props = {};

export default function StatusTable({}: Props) {
  const isSmall = useIsSmall();
  const isLarge = useIsLarge();
  const dateRange = isLarge ? 90 : isSmall ? 60 : 30;
  const initialDate = new Date("2022-03-13T00:00:00.000-08:00");
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date>(new Date());

  const onClickLeft = () => {
    const newStartDate = new Date(
      startDate.getTime() - dateRange * 24 * 60 * 60 * 1000
    );
    if (newStartDate >= initialDate) {
      setEndDate(new Date(endDate.getTime() - dateRange * 24 * 60 * 60 * 1000));
    } else {
      setEndDate(
        new Date(initialDate.getTime() + (dateRange - 1) * 24 * 60 * 60 * 1000)
      );
    }
  };

  const onClickRight = () => {
    const newEndDate = new Date(
      endDate.getTime() + dateRange * 24 * 60 * 60 * 1000
    );
    if (newEndDate <= new Date()) {
      setEndDate(newEndDate);
    } else {
      setEndDate(new Date());
    }
  };

  // update start time
  useLayoutEffect(() => {
    setStartDate(
      new Date(endDate.getTime() - (dateRange - 1) * 24 * 60 * 60 * 1000)
    );
  }, [endDate, dateRange]);

  return (
    <div className="flex sm:flex-row flex-col w-full h-full items-center justify-center">
      {isSmall && (
        <button title="left" className="flex mr-2" onClick={onClickLeft}>
          <ChevronLeftIcon className="h-12 w-12 text-gray-400/80 hover:text-gray-400" />
        </button>
      )}

      <div
        className="flex flex-col w-full max-w-[850px] items-center
       border-gray-400 border-[1px] rounded-md"
      >
        {/* relationship */}
        <StatusBar
          barType="Relationship"
          startDate={startDate}
          endDate={endDate}
        />

        <rect className="h-[1px] w-full bg-gray-400" />

        {/* himesama */}
        <StatusBar barType="Himesama" startDate={startDate} endDate={endDate} />

        <rect className="h-[1px] w-full bg-gray-400" />

        {/* oodball */}
        <StatusBar barType="Oodball" startDate={startDate} endDate={endDate} />
      </div>

      {isSmall && (
        <button title="right" className="flex ml-2" onClick={onClickRight}>
          <ChevronRightIcon className="h-12 w-12 text-gray-400/80 hover:text-gray-400" />
        </button>
      )}

      {!isSmall && (
        <div className="flex flex-row justify-between w-full pt-2 px-1">
          <button title="left" className="flex mr-2" onClick={onClickLeft}>
            <ArrowLeftIcon className="h-8 w-8 text-gray-400/80 hover:text-gray-400" />
          </button>
          <button title="right" className="flex ml-2" onClick={onClickRight}>
            <ArrowRightIcon className="h-8 w-8 text-gray-400/80 hover:text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
}
