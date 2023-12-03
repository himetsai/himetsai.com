"use client";
import React from "react";
import Incident from "./incident";

type Props = {
  incidents: Incident[];
};

export default function index({ incidents }: Props) {
  return (
    <div className="flex flex-col w-full max-w-[850px] md:my-10 my-5 text-[#33272a]">
      <h4 className="font-medium p-2">Past Incidents</h4>

      {incidents.map((incident) => (
        <Incident key={incident.date} incident={incident} />
      ))}
    </div>
  );
}
