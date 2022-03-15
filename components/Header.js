import styles from "../styles/Header.module.scss";
import { useRouter } from "next/router";
import react, { useState, useEffect } from "react";

const Header = ({ setCurrentPortfolio }) => {
  const router = useRouter();

  const shallowRouting = (url) => {
    router.push(`?${url}`, undefined, { shallow: true });
    setCurrentPortfolio(url);
    //router.push('/?counter=10', undefined, { shallow: true })
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.name}
        onClick={(e) => shallowRouting("landing-page")}
      >
        <div>Bálint</div>
        <div>Táborszki</div>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.portfolios}>
          {/* {<div className={styles.portfolios}>Portfolios: </div>} */}
          <div
            id="frontend-development"
            onClick={(e) => shallowRouting(e.target.id)}
          >
            Frontend Development
          </div>
          <div id="graphic-design" onClick={(e) => shallowRouting(e.target.id)}>
            Graphic Design
          </div>
          <div
            id="book-publishing"
            onClick={(e) => shallowRouting(e.target.id)}
          >
            Book Publishing
          </div>
          <div id="translation" onClick={(e) => shallowRouting(e.target.id)}>
            Translation
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
