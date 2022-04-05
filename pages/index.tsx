import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import react, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PortfolioViewer from '../components/portfolios/PortfolioViewer';

export default function Home() {
  const [currentPortfolio, setCurrentPortfolio] = useState('hello-there.');
  const [preanimationState, setPreanimationState] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.push(`?landing-page`, undefined, { shallow: true });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bálint Táborszki</title>
        <meta name='description' content='The Portfolio of Bálint Táborszki' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        setCurrentPortfolio={setCurrentPortfolio}
        setPreanimationState={setPreanimationState}
      />
      <main className={styles.main}>
        <PortfolioViewer
          preanimationState={preanimationState}
          currentPortfolio={currentPortfolio}
        />
      </main>
    </div>
  );
}
