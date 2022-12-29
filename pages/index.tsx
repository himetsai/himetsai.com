import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";

const Home = () => {
  // const posts = await client.fetch(query);
  // console.log(posts);

  return (
    <div
      className="bg-zinc-50 text-zinc-900 h-screenoverflow-y-scroll
    overflow-x-hidden z-0 scrollbar-none"
    >
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
