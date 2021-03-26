import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Summarize from "../components/Summarize";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KandaPort</title>
      </Head>
      <Header />
      <div className="px-2  mb-10 max-w-7xl mx-auto sm:px-6 lg:px-20">
        <Summarize />
      </div>
      <Footer />
    </div>
  );
}
