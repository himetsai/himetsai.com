import Head from "next/head";
import StatusTable from "../../components/StatusTable";
import RelInfo from "../../components/RelInfo";
import PastIncidents from "../../components/PastIncidents";
import { fetchIncidents } from "../../lib/fetchData/fetchIncidents";

export const revalidate = 10;

export default async function Status() {
  const incidents: Incident[] = await fetchIncidents();

  return (
    <>
      <Head>
        <title>Status</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Status" />
        <meta property="og:site_name" content="himetsai" />
        <meta property="og:type" content="status page" />
        <meta property="og:image" content="/preview.png" />
        <meta name="description" content="Status page" key="desc" />
      </Head>

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
    </>
  );
}