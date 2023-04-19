import React from "react";
import StatusTable from "../../components/StatusTable";
import RelInfo from "../../components/RelInfo";
import PastIncidents from "../../components/PastIncidents";
import { GetStaticProps } from "next";
import { fetchIncidents } from "../../lib/fetchData/fetchIncidents";

type Props = {
  incidents: Incident[];
};

export default function index({ incidents }: Props) {
  return (
    <div
      id="status-container"
      className="flex flex-col w-full h-full md:p-10 p-5 items-center"
    >
      <div
        className="flex flex-col w-full max-w-[1200px] items-center
        bg-white sm:p-5 p-3 border-2 border-[#33272a] rounded-lg"
      >
        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-bold tracking-wider 
          md:mb-5 mb-2 text-[#33272a]"
        >
          Hime-Oodball Status
        </h1>

        {/* Info */}
        <RelInfo />

        {/* Status Table */}
        <StatusTable />

        {/* Past Incidents */}
        <PastIncidents incidents={incidents} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const incidents: Incident[] = await fetchIncidents();

  return {
    props: {
      incidents,
    },
    revalidate: 10,
  };
};
