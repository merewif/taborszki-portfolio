import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PortfolioCategoryViewer from "../components/portfolios/PortfolioCategoryViewer";
import PortfolioElementViewer from "../components/portfolios/PortfolioElementViewer";

export default function Home() {
  const [currentElement, setCurrentElement] = useState();
  const [currentPortfolio, setCurrentPortfolio] = useState("");
  const [portfolioElements, setPortfolioElements] = useState([]);
  const router = useRouter();

  useEffect(() => {
    router.push(`?landing-page`, undefined, { shallow: true });
  }, []);

  useEffect(() => {
    // console.log(router.query);
  }, [router.query]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bálint Táborszki</title>
        <meta name="description" content="The Portfolio of Bálint Táborszki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setCurrentPortfolio={setCurrentPortfolio} />
      <main className={styles.main}>
        {currentElement ? (
          <PortfolioElementViewer
            currentElement={currentElement}
            setCurrentElement={setCurrentElement}
          />
        ) : (
          <PortfolioCategoryViewer
            currentPortfolio={currentPortfolio}
            setCurrentElement={setCurrentElement}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
