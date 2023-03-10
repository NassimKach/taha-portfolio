import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Projects from "../components/Projects";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taha's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Projects />
      {/* <Project /> */}
    </>
  );
}
