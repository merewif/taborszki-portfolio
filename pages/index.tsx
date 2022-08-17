import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/header/Header";
import React from "react";
import AboutMe from "../components/about-me/AboutMe";
import FrontendPortfolio from "../components/portfolios/frontend-development/FrontendPortfolio";
import GraphicDesignPortfolio from "../components/portfolios/graphic-design/GraphicDesignPortfolio";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bálint Táborszki</title>
        <meta name="description" content="The Portfolio of Bálint Táborszki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <AboutMe />
        <FrontendPortfolio/>
        <GraphicDesignPortfolio/>
      </main>
      <Footer />
    </div>
  );
}
