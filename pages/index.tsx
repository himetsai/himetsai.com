import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div
      className="bg-zinc-50 text-zinc-900 h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 scrollbar-none"
    >
      <Head>
        <title>himetsai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
