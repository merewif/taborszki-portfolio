import styles from "../styles/Header.module.scss";
import { useRouter } from "next/router";
import react, { useState, useEffect } from "react";

const Header = ({ setCurrentPortfolio, setPreanimationState }) => {
  const router = useRouter();

  const shallowRouting = (url) => {
    setPreanimationState(url);
    router.push(`?${url}`, undefined, { shallow: true });
    setTimeout(() => {
      setCurrentPortfolio(url);
    }, 500);
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
            id="translation-and-publishing"
            onClick={(e) => shallowRouting(e.target.id)}
          >
            Translation & Publishing
          </div>

          <div
            id="about-me"
            className={styles.aboutMeBtn}
            onClick={(e) => shallowRouting("landing-page")}
          >
            Contact
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
