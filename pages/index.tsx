import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";

const Home = () => {
  // const posts = await client.fetch(query);
  // console.log(posts);

  return (
    <div className="bg-[#faeee7] text-[#33272a] h-screen">
      <Head>
        <title>himetsai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
