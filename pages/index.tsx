import Head from "next/head";
import React from "react";
import About from "../components/About";
import Skill from "../components/Skill";
import Works from "../components/Works";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KandaPort</title>
      </Head>
      <div className="px-2  mb-10 max-w-7xl mx-auto sm:px-6 lg:px-20">
        <Works />
        <Skill />
        <About />
      </div>
    </div>
  );
}
