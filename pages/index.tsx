import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { fetchPageInfo } from "../lib/fetchData/fetchPageInfo";
import HomePage from "../components/HomePage";

type Props = {
  pageInfo: PageInfo;
};

const Home = ({ pageInfo }: Props) => {
  return (
    <div>
      <Head>
        <title>himetsai</title>
        <meta
          name="description"
          content="Ray Tsai's personal website"
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="himetsai" />
        <meta property="og:site_name" content="himetsai" />
        <meta property="og:type" content="home" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/preview.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>

      <HomePage
        pageTitle={pageInfo.pageTitle}
        pageDescription={pageInfo.pageDescription}
        name={pageInfo.name}
        description={pageInfo.description}
        image={pageInfo.image}
        achievements={pageInfo.achievements}
        socials={pageInfo.socials}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
    },
    revalidate: 10,
  };
};

export default Home;
