import Head from "next/head";
import React from "react";
import Summarize from "../components/Summarize";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KandaPort</title>
      </Head>
      <div className="px-2  mb-10 max-w-7xl mx-auto sm:px-6 lg:px-20">
        <Summarize />
      </div>
    </div>
  );
}
