import StatusTable from "../../components/StatusTable";
import RelInfo from "../../components/RelInfo";
import PastIncidents from "../../components/PastIncidents";
import { fetchIncidents } from "../../lib/fetchData/fetchIncidents";
import { Metadata } from "next";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Hime-Oodball Status",
  description: "Relationship status of Hime and Oodball",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Status",
    siteName: "himetsai",
    images: [
      { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
  twitter: {
    title: "hime's shitpost",
    description: "Ray Tsai's shitposts",
    card: "summary_large_image",
    images: [
      { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
};

export default async function Status() {
  const incidents: Incident[] = await fetchIncidents();

  return (
    <div
      id="status-container"
      className="flex flex-col w-full h-full mt-0 lg:mt-20 md:p-10 p-5 items-center"
    >
      <div
        className="flex flex-col w-full max-w-[800px] items-center
        bg-white sm:p-10 p-3 border-2 border-[#33272a] rounded-lg"
      >
        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-bold tracking-wider 
          md:mb-5 my-3 text-[#33272a]"
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