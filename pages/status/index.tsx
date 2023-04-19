import React from "react";
import StatusTable from "../../components/StatusTable";
import RelInfo from "../../components/RelInfo";
import PastIncidents from "../../components/PastIncidents";
import { GetStaticProps } from "next";
import { fetchIncidents } from "../../lib/fetchData/fetchIncidents";
import { fetchStatusImage } from "../../lib/fetchData/fetchStatusImage";
import Image from "next/image";
import urlFor from "../../lib/urlFor";

type Props = {
  statusImage: StatusImage;
  incidents: Incident[];
};

export default function index({ statusImage, incidents }: Props) {
  // console.log(statusImage);
  return (
    <div
      id="status-container"
      className="flex flex-col w-full h-full md:p-10 p-5 items-center"
    >
      <div
        className="flex flex-col w-full max-w-[1200px] items-center
        bg-white sm:p-10 p-3 border-2 border-[#33272a] rounded-lg"
      >
        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-bold tracking-wider 
          md:mb-5 my-3 text-[#33272a]"
        >
          Hime-Oodball Status
        </h1>

        {/* <div className="relative shrink-0 float-right w-full aspect-[3/2] md:m-5 my-1">
          <Image
            className="object-cover object-center mx-auto border-[1.5px]
          border-[#33272a] rounded-lg"
            src={urlFor(statusImage.image).url()}
            alt=""
            fill
          />
        </div> */}

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
  const statusImage: StatusImage = await fetchStatusImage();

  return {
    props: {
      statusImage,
      incidents,
    },
    revalidate: 10,
  };
};
