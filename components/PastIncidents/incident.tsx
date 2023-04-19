import React from "react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";

type Props = {
  incident: Incident;
};

export default function Incident({ incident }: Props) {
  const date = new Date(incident.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Europe/London",
  });

  return (
    <div className="flex flex-col w-full">
      <h4 className="font-medium p-2">{formattedDate}</h4>

      <rect className="flex h-[1px] w-full mx-2 bg-gray-400" />

      <div className="flex md:flex-row flex-col w-full items-center justify-between mb-2">
        <div className="flex flex-col p-2">
          <h4 className="font-medium text-lg">{incident.title}</h4>
          <p className="font-normal text-[#594a4e] leading-7 tracking-wider mt-2 md:max-w-[90%]">
            {incident.description}
          </p>
        </div>

        {incident.image && (
          <div className="relative shrink-0 float-right w-full md:w-80 aspect-[4/5] md:my-5 my-1">
            <Image
              className="object-cover object-center mx-auto border-[1.5px]
          border-[#33272a] rounded-lg"
              src={urlFor(incident.image).url()}
              alt=""
              fill
            />
          </div>
        )}
      </div>
    </div>
  );
}
