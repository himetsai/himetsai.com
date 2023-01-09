import React from "react";
import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Head from "next/head";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import { fetchPageInfo } from "../lib/fetchPageInfo";

type Props = {
  pageTitle: string;
  pageDescription: string;
  name: string;
  description: string;
  image: Image;
  achievements: Block[];
  socials: Social[];
};

const Home = ({
  pageTitle,
  pageDescription,
  name,
  description,
  image,
  achievements,
  socials,
}: Props) => {
  return (
    <div className="text-[#33272a] pb-[80px]">
      <Head>
        <title>himetsai</title>
        <meta
          name="description"
          content="Ray Tsai's personal website"
          key="desc"
        />
        <meta property="og:title" content="himetsai" />
        <meta property="og:image" content="/preview.png" />
      </Head>

      {/* Hero */}
      <section
        className="fixed -z-10 w-full h-screen
      top-0 left-0"
      >
        <Hero title={pageTitle} description={pageDescription} />
      </section>

      <div className="h-screen" />

      <div className="bg-[#faeee7] space-y-10 px-10">
        {/* About */}
        <section id="about">
          <About name={name} description={description} image={image} />
        </section>

        {/* Achievements */}
        <section id="achievements">
          <Achievements achivements={achievements} />
        </section>

        <section id="contact">
          <Contact socials={socials} />
        </section>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageTitle: pageInfo.pageTitle,
      pageDescription: pageInfo.pageDescription,
      name: pageInfo.name,
      description: pageInfo.description,
      image: pageInfo.image,
      achievements: pageInfo.achievements,
      socials: pageInfo.socials,
    },
    revalidate: 10,
  };
};

export default Home;
