import React from "react";
import StatusTable from "../../components/StatusTable";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="flex flex-col w-full h-full p-10 items-center">
      <StatusTable />
    </div>
  );
}
