//#region Imports
// React
import React from "react";

// NextJS
import Head from "next/head";

// Custom components

// Interfaces

// Constants

// Content
import { HomePage as Content } from "@/content";

// Others

// Styles
import "@/styles/common.scss";
import "@/styles/utilities.scss";
import "@/styles/typography.scss";
import "@/styles/layout-breakpoints.scss";
import "@/styles/theme-colors.scss";
import styles from "./home.module.scss";
//#endregion

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={"Waleed Iqbal | Home"} />
        <title>
          {`${
            process.env.NEXT_PUBLIC_ENV_NAME === "development" ? "Test -" : ""
          } Home`}
        </title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="home-container horizontal-padding">
        <section className="home-hero">
          <br />
          <h1 className="hero-heading">Home page</h1>
        </section>
      </div>
    </>
  );
}
