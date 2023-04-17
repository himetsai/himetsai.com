import React from "react";
import StatusTable from "../../components/StatusTable";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="flex flex-col w-full h-full md:p-10 p-5 items-center">
      <div
        className="flex flex-col w-full max-w-[1000px] items-center 
        bg-white sm:p-5 p-3 border-2 border-[#33272a] rounded-lg"
      >
        <StatusTable />
      </div>
    </div>
  );
}
