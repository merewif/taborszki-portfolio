import styles from '../styles/Header.module.scss';
import { useRouter } from 'next/router';
import react, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

interface HeaderProps {
  setCurrentPortfolio: React.Dispatch<React.SetStateAction<string>>;
  setPreanimationState: React.Dispatch<React.SetStateAction<boolean | string>>;
}

const Header = ({ setCurrentPortfolio, setPreanimationState }: HeaderProps) => {
  const router = useRouter();

  const shallowRouting = (url: string) => {
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
        onClick={(e) => shallowRouting('hello-there.')}
      >
        <div>Bálint</div>
        <div>Táborszki</div>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.portfolios}>
          {/* {<div className={styles.portfolios}>Portfolios: </div>} */}
          <div
            id='frontend-development'
            onClick={() => shallowRouting('frontend-development')}
          >
            Frontend Development
          </div>
          <div
            id='graphic-design'
            onClick={() => shallowRouting('graphic-design')}
          >
            Graphic Design
          </div>
          <div
            id='translation-and-publishing'
            onClick={() => shallowRouting('translation-and-publishing')}
          >
            Translation & Publishing
          </div>

          <div>
            <Button
              variant='contained'
              onClick={() => shallowRouting('hello-there.')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
